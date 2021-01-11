const publikKey='BL4vHCuYFTwZ0GJicFlY4d3lNAf4__GD7JH7y1vmTAK4LTdNXSUM43PNbwuscavArzfzqBEqLHl2uR4Z3InkDjs';


let dati={
  google:null,
  subscription:null,
  sezione:null,
  classe:null};

function premi(){
  fetch('/prova')
  .then(data => data.json())
  .then(jsondata=>{
    
  });
}




if ('serviceWorker' in navigator) {

  navigator.serviceWorker.register('/sw.js')
  .then((serviceWorkerRegistration)=> {
    console.log('Registration successful, scope is:', serviceWorkerRegistration.scope);

    var options = {
      userVisibleOnly: true,
      applicationServerKey: urlBase64ToUint8Array(publikKey)
    };
    serviceWorkerRegistration.pushManager.subscribe(options).then(
      function(pushSubscription) {
        console.log(pushSubscription.endpoint);

        dati.subscription=pushSubscription;
  })
  .catch(function(error) {
    console.log('Service worker registration failed, error:', error);
  });
});



}



function urlBase64ToUint8Array(base64String) {
  const padding = '='.repeat((4 - base64String.length % 4) % 4);
  const base64 = (base64String + padding)
    .replace(/-/g, '+')
    .replace(/_/g, '/');

  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}