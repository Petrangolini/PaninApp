const staticChacheName="site-static-v1";
const dynamicCache="dynamic-chace";

const filesToCache = [
    '/',
   '/css/*',
   '/js/*',
   '/pages/*',
   'https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js'
  
];



self.addEventListener('install',evt=>{
    console.log('Attempting to install service worker and cache static assets');
    

});

self.addEventListener('activate',evt=>{
    //console.log("service worker has been activated");
   
});

self.addEventListener('fetch',evt=>{

        caches.match(evt.request).then(cacheRes =>{
        }).catch(()=> caches.match('/pages/offline.html'))
    
});

self.addEventListener('push',(e)=>{

        const data=e.data.json();
        console.log("Push-Recived");
        self.registration.showNotification(
            data.title,
            {
                body:"My Notttification",
                icon: "./img/Panin.png"
            }
        );
});