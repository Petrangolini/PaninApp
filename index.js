const express = require('express');
const push=require('web-push');
const bodyParser=require('body-parser');
const path=require('path');
const keepalive = require('express-glitch-keepalive');

var Datastore = require('nedb');




var db = {};


db.prodotti=new Datastore('./dbProdotti.db');
db.clienti=new Datastore('./dbClienti.db');
db.ordini=new Datastore('./dbOrdini.db');
db.collegati=new Datastore('./dbCollegati.db');


//{barid, prezzo, nome, disponibilita, venduti}
db.prodotti.loadDatabase();
//{google, subscription, sezione, classe}
db.clienti.loadDatabase();
//{barid, prodottoid, timestamp, stato ordine}
db.ordini.loadDatabase();

//{timestrat, clienti, otp}
db.collegati.loadDatabase();


azzeravenduti("Da Vinci");
azzeravenduti("Belluzzi");




const app=express();



app.use(express.static(path.join(__dirname,"Bar")));
app.use(bodyParser.json());
app.use(keepalive);


let vapidkeys={
  publicKey: 'BMnRdtnv8UXLTmD6jUQMCpszwCYc0JaqU1lAxo2zpYxh99u7HrXA03PM9dSyI50mSNROfo8W7F9TfV6iPnj939E',
  privateKey: 'cb1s9LLmqaRr_khxXgFeBoOP7icbxsMh0bSpKSGPTnM'
};

push.setVapidDetails('mailto:petrangolini.paolo@gmail.com',vapidkeys.publicKey,vapidkeys.privateKey)



app.post('/login1',(req, res)=>{
      const cliente=req.body;
      //migliorare il login
      console.log(cliente);

      db.clienti.find({ "google.tu": cliente.tu }, function (err, docs) {
                        
                        //dati di ritorno docs un array
                        if (docs.length==1)
                            res.status(201).json({access:"Success"});
                        else
                            res.status(201).json({access:"Denied"});

                        

              });


      //cerchiamo in
    /*
    Struttura

    {
  NT: '103015210789462584194',
  Ad: 'prof. Paolo Petrangolini',
  rV: 'prof. Paolo',
  uT: 'Petrangolini',
  hK: 'https://lh4.googleusercontent.com/-5rg5O-AIVjY/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuckuJIonDDUnBiK1s_BG4wjyB4Cdcg/s96-c/photo.jpg',
  cu: 'paolo.petrangolini@ittsrimini.edu.it'
}

    Nuova forma

      '$U': '103015210789462584194',
  Ed: 'prof. Paolo Petrangolini',
  DW: 'prof. Paolo',
  HU: 'Petrangolini',
  eL: 'https://lh4.googleusercontent.com/-5rg5O-AIVjY/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuckuJIonDDUnBiK1s_BG4wjyB4Cdcg/s96-c/photo.jpg',
  tu: 'paolo.petrangolini@ittsrimini.edu.it'
*/
});


app.post('/login2',(req, res)=>{
      const fulldata=req.body;
      //controlliamo la mail
      console.log(fulldata);

      if (fulldata.google==null || fulldata.subscription==null || fulldata.classe==null 
      || fulldata.sezione==null || !checkGoogle(fulldata.google)){

            res.status(201).json({access:"Error"});
            return;  
                
            
      }

      

    
     //else 

     db.clienti.insert(fulldata,function (err, newDoc) {  
                     res.status(201).json({access:"Successo"});
 
            });


});



app.post('/dammiprodotti',(req,res)=>{

  const bar=req.body.bar;
  console.log(bar);

  db.prodotti.find({ bar: bar }, function (err, docs) {
                res.status(201).json(docs);
          });
  });

app.post('/ordina',(req,res)=>{
    //non validi sono quelli che sono stati modificati

    //mi arrivano {ordine, utente}
   //ho controllato che ordine abbia almeno 1 elemento 
  const ordine=req.body.ordine;

  let validi=[];
  let nonvalidi=[];  
  let daaggiornare=[]

  let dbmenu;

  db.prodotti.find({ bar: ordine[0].bar }, function (err, docs) {
            
            //prendo tutti i prodotti del bar
                dbmenu=docs;
                for (let ord of ordine ){
                    let index=-1;
                    dbmenu.map((val,ind)=>{
                        if(val._id==ord._id)
                            index=ind;
                    });

                    if (ord.quantita <=(dbmenu[index].disponibilita-dbmenu[index].venduti) ){
                        validi.push(ord); 
                    }else{
                        ord.quantita=dbmenu[index].disponibilita-dbmenu[index].venduti;
                        nonvalidi.push(ord);
                    }
                    //pusho nell'array da aggiornare
                    dbmenu[index].venduti+=ord.quantita;
                    daaggiornare.push(dbmenu[index]);
                }


                 //aggiorno il db per i prodotti
                for (let prod of daaggiornare){
                
                // Set an existing field's value
                db.prodotti.update({ _id: prod._id }, { $set: { venduti: prod.venduti } }, {  }, function (err, numReplaced) {
                    console.log("Aggiornati "+numReplaced)
                        });
                }
                //salvare in db
                let datoOrdine={
                    ordine:validi.concat(nonvalidi),
                    timestamp:Date.now(),
                    bar:ordine[0].bar,
                    utente:req.body.utente,
                    stato:"nonevaso"
                    }
                db.ordini.insert(datoOrdine,function (err, newDocs) {
                    // Two documents were inserted in the database
                    // newDocs is an array with these documents, augmented with their _id
                    console.log("inseritooooooooo", newDocs);
                });


                //ricerco i prodotti e torno indietro
                db.prodotti.find({ bar: ordine[0].bar }, function (err, docs) {
                            
                            res.status(201).json({
                                        newmenu:docs,
                                        validi:validi,
                                        nonvalidi:nonvalidi
                                    });
                });

    



          });

   

  });


app.post('/salvamenu',(req,res)=>{
      const menu=req.body;
      const giorno=Date.now();

      for (let p of menu){
        db.prodotti.update({ _id: p._id }, { $set: { disponibilita: p.disponibilita, giorno: giorno } }, {  }, function (err, numReplaced) {
                        });

      }
    db.prodotti.find({ bar: menu[0].bar }, function (err, docs) {
                            
                            res.status(201).json(docs);
                });
});

app.post('/dammiordini',(req,res)=>{
      const bar=req.body.bar;

    db.ordini.find({$and:[{ bar: bar },{stato:"nonevaso"}]}, function (err, docs) {
                            
                            res.status(201).json(docs);
                });


});

app.post('/completaordine',(req,res)=>{
   //  classe:classe, sezione:sezione, listid:listid
          const dati=req.body;
          
          for (let ord of dati.listid){
                db.ordini.update({ _id: ord._id }, { $set: { stato: "completato" } },{},function (err, numReplaced){
                    }                            
                );

          }
        res.status(201).json({risultatoOP:"ok"});


})


app.get("/wakeup", function(request, response) {
  //console.log("i'm awake");
  response.send("i'm awake")
});



//const port=process.env.PORT;
const port=5000;
app.listen(port,()=> console.log("Server started on port "+port));



function checkGoogle(google) {
    let arr=google.tu.split('@');

    return arr[1]=="ittsrimini.edu.it" || arr[1]=="studenti.ittsrimini.edu.it"

}

function azzeravenduti(nome){
    db.prodotti.update({ bar: nome }, { $set: { venduti: 0 } }, { multi: true }, function (err, numReplaced) {
  
});

}

//sudo lsof -i :5000
//sudo lsof -Pnl +M -i | grep LISTEN
// sudo kill PID
