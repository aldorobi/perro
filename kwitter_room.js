// listo :)
    const firebaseConfig = {
      apiKey: "AIzaSyAZ_kwD_cB51QYJ6NZyzpOYnBfq8zk0DgU",
      authDomain: "twitter-in-a-nutshell.firebaseapp.com",
      databaseURL: "https://twitter-in-a-nutshell-default-rtdb.firebaseio.com",
      projectId: "twitter-in-a-nutshell",
      storageBucket: "twitter-in-a-nutshell.appspot.com",
      messagingSenderId: "881411635246",
      appId: "1:881411635246:web:c5aec76302024fcef547bf"
    };
    // listo :)
     firebase.initializeApp(firebaseConfig);

     user_name = localStorage.getItem("user_name");
     document.getElementById("user_name").innerHTML = "bienvenido/a " + user_name + "!";
     function addRoom(){
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
        purpose: "agregar nombre de sala"
      });
      localStorage.setItem("room_name",room_name);
      window.location = "kwitter_page.html";
     }
     //あるど　あまてらつ
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("nombres de salas!!" + Room_names);
       row = "<div class = 'room_name' id = "+ Room_names + "onclick = 'redirectToRoomName(this.id)'>#"+ Room_names + " </div> <hr>";
       document.getElementById("output").innerHTML += row;
      });});}
getData();

function redirectToRoomName(name){
  console.log(name);
  localStorage.setItem("room_name",name)
  window.location = "kwitter_page.html";
}

function logOut(){
  localStorage.removeItem("room_name")
  localStorage.removeItem("user_name")
  window.location = "index.html";
}