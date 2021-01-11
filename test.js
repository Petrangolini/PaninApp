/*
const webpush = require('web-push');
 
// VAPID keys should only be generated only once.
const vapidKeys = webpush.generateVAPIDKeys();
console.log(vapidKeys);
*/

var Datastore = require('nedb');




var db = {};


db.prodotti=new Datastore('./dbProdotti.db');



//{barid, prezzo, nome, disponibilita, venduti}
db.prodotti.loadDatabase();

let prodotti=[
    {
    bar:"Da Vinci",
    nome:"Panino Cotoletta",
    tipo:"cibo",
    prezzo:2,
    disponibilita:3,
    venduti:0,
    giorno:0
    },
    {
    bar:"Da Vinci",
    nome:"Hot-Dog",
    tipo:"cibo",
    prezzo:1.70,
    disponibilita:3,
    venduti:0,
    giorno:0
    },
    {
    bar:"Da Vinci",
    nome:"Focaccia",
    tipo:"cibo",
    prezzo:1,
    disponibilita:3,
    venduti:0,
    giorno:0
    },
    {
    bar:"Da Vinci",
    nome:"Focaccia Salame",
    tipo:"cibo",
    prezzo:1.70,
    disponibilita:3,
    venduti:0,
    giorno:0
    },
    {
    bar:"Da Vinci",
    nome:"Focaccia Mortadella",
    tipo:"cibo",
    prezzo:1.70,
    disponibilita:3,
    venduti:0,
    giorno:0
    },
    {
    bar:"Da Vinci",
    nome:"Focaccia Cotto",
    tipo:"cibo",
    prezzo:1.70,
    disponibilita:3,
    venduti:0,
    giorno:0
    },
    {
    bar:"Da Vinci",
    nome:"Focaccia Crudo",
    tipo:"cibo",
    prezzo:2,
    disponibilita:3,
    venduti:0,
    giorno:0
    },
    {
    bar:"Da Vinci",
    nome:"Focaccia Crudo e Formaggio",
    tipo:"cibo",
    prezzo:2,
    disponibilita:3,
    venduti:0,
    giorno:0
    },
    {
    bar:"Da Vinci",
    nome:"Focaccia Salame e Formaggio",
    tipo:"cibo",
    prezzo:2,
    disponibilita:3,
    venduti:0,
    giorno:0
    },
    {
    bar:"Da Vinci",
    nome:"Panino Salame",
    tipo:"cibo",
    prezzo:1.4,
    disponibilita:3,
    venduti:0,
    giorno:0
    },
    {
    bar:"Da Vinci",
    nome:"Panino Cotto",
    tipo:"cibo",
    prezzo:1.4,
    disponibilita:3,
    venduti:0,
    giorno:0
    },
    {
    bar:"Da Vinci",
    nome:"Panino Mortadella",
    tipo:"cibo",
    prezzo:1.4,
    disponibilita:3,
    venduti:0,
    giorno:0
    },
    {
    bar:"Da Vinci",
    nome:"Panino Crudo",
    tipo:"cibo",
    prezzo:1.6,
    disponibilita:3,
    venduti:0,
    giorno:0
    },
    {
    bar:"Da Vinci",
    nome:"Tostone Cotto e Formaggio",
    tipo:"cibo",
    prezzo:2,
    disponibilita:3,
    venduti:0,
    giorno:0
    },
    {
    bar:"Da Vinci",
    nome:"Toast",
    tipo:"cibo",
    prezzo:1.1,
    disponibilita:3,
    venduti:0,
    giorno:0
    },
    {
    bar:"Da Vinci",
    nome:"Ciabatta Crudo e Mozzarella",
    tipo:"cibo",
    prezzo:2,
    disponibilita:3,
    venduti:0,
    giorno:0
    },
    {
    bar:"Da Vinci",
    nome:"Pizza Marherita",
    tipo:"cibo",
    prezzo:1.3,
    disponibilita:3,
    venduti:0,
    giorno:0
    },
    {
    bar:"Da Vinci",
    nome:"Rotolo Wurstel",
    tipo:"cibo",
    prezzo:2,
    disponibilita:3,
    venduti:0,
    giorno:0
    },
    {
    bar:"Da Vinci",
    nome:"Rotolo Salsiccia",
    tipo:"cibo",
    prezzo:2,
    disponibilita:3,
    venduti:0,
    giorno:0
    },
    {
    bar:"Da Vinci",
    nome:"Lemon Soda",
    tipo:"bevanda",
    prezzo:1.1,
    disponibilita:3,
    venduti:0,
    giorno:0
    },
    {
    bar:"Da Vinci",
    nome:"Coca Cola",
    tipo:"bevanda",
    prezzo:1.1,
    disponibilita:3,
    venduti:0,
    giorno:0
    },
    {
    bar:"Da Vinci",
    nome:"Aranciata",
    tipo:"bevanda",
    prezzo:1.1,
    disponibilita:3,
    venduti:0,
    giorno:0
    },
    {
    bar:"Da Vinci",
    nome:"Tè Limone",
    tipo:"bevanda",
    prezzo:1.1,
    disponibilita:3,
    venduti:0,
    giorno:0
    },
    {
    bar:"Da Vinci",
    nome:"Tè Pesca",
    tipo:"bevanda",
    prezzo:1.1,
    disponibilita:3,
    venduti:0,
    giorno:0
    },
    {
    bar:"Da Vinci",
    nome:"Chinotto",
    tipo:"bevanda",
    prezzo:1.1,
    disponibilita:3,
    venduti:0,
    giorno:0
    },
    {
    bar:"Da Vinci",
    nome:"Coca Cola 0,5l",
    tipo:"bevanda",
    prezzo:1.80,
    disponibilita:3,
    venduti:0,
    giorno:0
    },
    {
    bar:"Da Vinci",
    nome:"Acqua Naturale 0,5l",
    tipo:"bevanda",
    prezzo:0.45,
    disponibilita:3,
    venduti:0,
    giorno:0
    },
    {
    bar:"Da Vinci",
    nome:"Acqua Frizzante 0,5l",
    tipo:"bevanda",
    prezzo:0.45,
    disponibilita:3,
    venduti:0,
    giorno:0
    },
    {
    bar:"Belluzzi",
    nome:"Panino Cotoletta",
    tipo:"cibo",
    prezzo:2,
    disponibilita:3,
    venduti:0,
    giorno:0
    },
    {
    bar:"Belluzzi",
    nome:"Hot-Dog",
    tipo:"cibo",
    prezzo:1.70,
    disponibilita:3,
    venduti:0,
    giorno:0
    },
    {
    bar:"Belluzzi",
    nome:"Focaccia",
    tipo:"cibo",
    prezzo:1,
    disponibilita:3,
    venduti:0,
    giorno:0

    },
    {
    bar:"Belluzzi",
    nome:"Focaccia Salame",
    tipo:"cibo",
    prezzo:1.70,
    disponibilita:3,
    venduti:0,
    giorno:0
    },
    {
    bar:"Belluzzi",
    nome:"Focaccia Mortadella",
    tipo:"cibo",
    prezzo:1.70,
    disponibilita:3,
    venduti:0,
    giorno:0
    },
    {
    bar:"Belluzzi",
    nome:"Focaccia Cotto",
    tipo:"cibo",
    prezzo:1.70,
    disponibilita:3,
    venduti:0,
    giorno:0
    },
    {
    bar:"Belluzzi",
    nome:"Focaccia Crudo",
    tipo:"cibo",
    prezzo:2,
    disponibilita:3,
    venduti:0,
    giorno:0
    },
    {
    bar:"Belluzzi",
    nome:"Focaccia Crudo e Formaggio",
    tipo:"cibo",
    prezzo:2,
    disponibilita:3,
    venduti:0,
    giorno:0
    },
    {
    bar:"Belluzzi",
    nome:"Focaccia Salame e Formaggio",
    tipo:"cibo",
    prezzo:2,
    disponibilita:3,
    venduti:0,
    giorno:0
    },
    {
    bar:"Belluzzi",
    nome:"Panino Salame",
    tipo:"cibo",
    prezzo:1.4,
    disponibilita:3,
    venduti:0,
    giorno:0
    },
    {
    bar:"Belluzzi",
    nome:"Panino Cotto",
    tipo:"cibo",
    prezzo:1.4,
    disponibilita:3,
    venduti:0,
    giorno:0
    },
    {
    bar:"Belluzzi",
    nome:"Panino Mortadella",
    tipo:"cibo",
    prezzo:1.4,
    disponibilita:3,
    venduti:0,
    giorno:0
    },
    {
    bar:"Belluzzi",
    nome:"Panino Crudo",
    tipo:"cibo",
    prezzo:1.6,
    disponibilita:3,
    venduti:0,
    giorno:0
    },
    {
    bar:"Belluzzi",
    nome:"Tostone Cotto e Formaggio",
    tipo:"cibo",
    prezzo:2,
    disponibilita:3,
    venduti:0,
    giorno:0
    },
    {
    bar:"Belluzzi",
    nome:"Toast",
    tipo:"cibo",
    prezzo:1.1,
    disponibilita:3,
    venduti:0,
    giorno:0
    },
    {
    bar:"Belluzzi",
    nome:"Ciabatta Crudo e Mozzarella",
    tipo:"cibo",
    prezzo:2,
    disponibilita:3,
    venduti:0,
    giorno:0
    },
    {
    bar:"Belluzzi",
    nome:"Pizza Marherita",
    tipo:"cibo",
    prezzo:1.3,
    disponibilita:3,
    venduti:0,
    giorno:0
    },
    {
    bar:"Belluzzi",
    nome:"Rotolo Wurstel",
    tipo:"cibo",
    prezzo:2,
    disponibilita:3,
    venduti:0,
    giorno:0
    },
    {
    bar:"Belluzzi",
    nome:"Rotolo Salsiccia",
    tipo:"cibo",
    prezzo:2,
    disponibilita:3,
    venduti:0,
    giorno:0
    },
    {
    bar:"Belluzzi",
    nome:"Lemon Soda",
    tipo:"bevanda",
    prezzo:1.1,
    disponibilita:3,
    venduti:0,
    giorno:0
    },
    {
    bar:"Belluzzi",
    nome:"Coca Cola",
    tipo:"bevanda",
    prezzo:1.1,
    disponibilita:3,
    venduti:0,
    giorno:0
    },
    {
    bar:"Belluzzi",
    nome:"Aranciata",
    tipo:"bevanda",
    prezzo:1.1,
    disponibilita:3,
    venduti:0,
    giorno:0
    },
    {
    bar:"Belluzzi",
    nome:"Tè Limone",
    tipo:"bevanda",
    prezzo:1.1,
    disponibilita:3,
    venduti:0,
    giorno:0
    },
    {
    bar:"Belluzzi",
    nome:"Tè Pesca",
    tipo:"bevanda",
    prezzo:1.1,
    disponibilita:3,
    venduti:0,
    giorno:0
    },
    {
    bar:"Belluzzi",
    nome:"Chinotto",
    tipo:"bevanda",
    prezzo:1.1,
    disponibilita:3,
    venduti:0,
    giorno:0
    },
    {
    bar:"Belluzzi",
    nome:"Coca Cola 0,5l",
    tipo:"bevanda",
    prezzo:1.80,
    disponibilita:3,
    venduti:0,
    giorno:0
    },
    {
    bar:"Belluzzi",
    nome:"Acqua Naturale 0,5l",
    tipo:"bevanda",
    prezzo:0.45,
    disponibilita:3,
    venduti:0,
    giorno:0
    },
    {
    bar:"Belluzzi",
    nome:"Acqua Frizzante 0,5l",
    tipo:"bevanda",
    prezzo:0.45,
    disponibilita:3,
    venduti:0,
    giorno:0
    }

];

db.prodotti.insert(prodotti);



