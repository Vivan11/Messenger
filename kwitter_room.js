
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyCRo4Ehe2p8n1L1mM9ONMpr3EjtyUDHVng",
      authDomain: "kwitter-af3e1.firebaseapp.com",
      databaseURL: "https://kwitter-af3e1-default-rtdb.firebaseio.com",
      projectId: "kwitter-af3e1",
      storageBucket: "kwitter-af3e1.appspot.com",
      messagingSenderId: "201097938896",
      appId: "1:201097938896:web:ace308f0fdaa968e81dbd5"
    };
    
    // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  user_name = localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML="Welcome "+ user_name+ "!";
  
  function addRoom()
  {
        room_name = document.getElementById("room_name").value;

        firebase.database().ref("/").child(room_name).update({
              purpose : "adding room name"
        })
        
        localStorage.setItem("room_name", room_name);

        window.location = "kwitter_page.html";
  }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}
