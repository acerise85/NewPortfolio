$(document).ready(function (){

    // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCppdm_QHNWKwtumoe5OGCxW4ykv9bCdME",
    authDomain: "myprojects-9e249.firebaseapp.com",
    databaseURL: "https://myprojects-9e249.firebaseio.com",
    projectId: "myprojects-9e249",
    storageBucket: "",
    messagingSenderId: "365998923166"
  };
  firebase.initializeApp(config);

    let projects = {
       projectURL: "https://acerise85.github.io/unit-4-game/",
       projectName: "",
       porjectImage: ,
        
      
    };

    //Logging the trains in the databse and taking a snapshot for persistance of data
    database.ref('/projects').on("child_added", function (childSnapshot) {

    // Log everything that's coming out of snapshot
    var projects = childSnapshot.val().format;
   
    //Displaying train information to DOM
    

  })











})