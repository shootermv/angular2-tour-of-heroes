import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <div class="header-bar"></div>
    <nav>
      <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
      <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';

  constructor() {
   // this.storeInDB();
  }

  storeInDB() {
     console.log('TRYING tO STROE TO DB')
     let _this = this;
    // Open (or create) the database
 

      const config = {
        /*  apiKey: "AIzaSyA-HlcV4jtbhB0sL2D74SK9RVH9oZIQgVU",
          authDomain: "js-fuseday-2016-stream.firebaseapp.com",
          databaseURL: "https://js-fuseday-2016-stream.firebaseio.com",
          storageBucket: "js-fuseday-2016-stream.appspot.com",
          messagingSenderId: "533084422648"*/
          apiKey: "AIzaSyCSKLUpuinUy1jm5uUyx9M_gYGDcv-0orE",
          authDomain: "fuse-2420e.firebaseapp.com",
          databaseURL: "https://fuse-2420e.firebaseio.com",
          storageBucket: "fuse-2420e.appspot.com",
          messagingSenderId: "578254983095"        
      };

      firebase.initializeApp(config);

      // Get a reference to the database service
      var database = firebase.database();
      var articles:any[] =[];
      function getOnce() {
        firebase.database().ref('/stream').once('value')
          .then(function(snapshot) {
            articles = snapshot.val();
            console.log('got articles!!!!')
            _this.storeThis(articles)
          });
      }
      
      function getOn() {
        var count = 0;
        firebase.database().ref('/stream')
          .on('child_added', function(snapshot) {
            console.log(++count,snapshot.val());
          // alert('once')
          });
      }
      getOnce() 
      getOn()

  }

  storeThis(articles:any[]){

        //creating / connect to indexedDB:
          var indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB || window.shimIndexedDB; 
          var open = indexedDB.open("MyDB", 1);

      // Create the schema
          open.onupgradeneeded = function() {
          
              var db = open.result;
              var store = db.createObjectStore("NewsStore", {keyPath: "id"});
              var index = store.createIndex("NameIndex", ["title"]);
          };

          open.onsuccess = function() {
              // Start a new transaction
              var db = open.result;
              var tx = db.transaction("NewsStore", "readwrite");
              var store = tx.objectStore("NewsStore");
              var index = store.index("NameIndex");

              // Add some data
              articles.slice(0,10).forEach(article=>{
                 console.log(article.title)
                 // store.put({id: article.$key, title: article.title, text: article.text});
              })
              


              /*store.put({id: 67890, name: {first: "Bob", last: "Smith"}, age: 35});
              
              // Query the data
              var getJohn = store.get(12345);
              var getBob = index.get(["Smith", "Bob"]);

              getJohn.onsuccess = function() {
                  console.log(getJohn.result.name.first);  // => "John"
              };

              getBob.onsuccess = function() {
                  console.log(getBob.result.name.first);   // => "Bob"
              };*/

              // Close the db when the transaction is done
              tx.oncomplete = function() {
                  db.close();
              };
          }
   } 

}
