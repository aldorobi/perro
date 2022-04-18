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
   room_name = localStorage.getItem("room_name");

   function send(){
     msg = document.getElementById("msg").value;
     firebase.database().ref(room_name).push({
       name:user_name,
       message:msg,
       like:0
     });
     document.getElementById("msg").value = "";

   }
   
   
   function getData(){ firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key; childData = childSnapshot.val(); 
    if(childKey != "purpose") { 
      firebase_message_id = childKey;
       message_data = childData;
     //Inicia código MAIN
     console.log(firebase_message_id);
     console.log(message_data);
     name = message_data["name"];
     message = message_data["message"];
     like = message_data["like"];
     name_with_tag = " <h4> " + name + "<img class = 'user_tick' src='tick.png'></h4>";
     message_with_tag = " <h4 class = 'message_h4'> " + message + "</h4>";
     like_button = "<button class = 'btn btn-warning' id = " + firebase_message_id + "value =" + like +" onclick ='updateLike(this.id)'>";
     span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>"; row = name_with_tag + message_with_tag +like_button + span_with_tag; document.getElementById("output").innerHTML += row;
     //Termina código SECONDARY *no tan secondary pero bueno*
     row = name_with_tag + message_with_tag + like_button + span_with_tag;
     document.getElementById("output").innerHTML += row
     } }); }); } 
     getData();
function logOut(){
  localStorage.removeItem("room_name")
  localStorage.removeItem("user_name")
  window.location.replace("index.html");
}
function updateLike(message_id){
  console.log("button i like it pushed - " + message_id);
  button_id = message_id;
  likes = document.getElementById(button_id).value; 
  updated_likes = Number(likes) + 1; 
  console.log(updated_likes); 
  firebase.database().ref(room_name).child(message_id).update(
    { like : updated_likes });
}
//あるど　あまてらつ//あるど　あまてらつ//あるど　あまてらつ//あるど　あまてらつ//あるど　あまてらつ//あるど　あまてらつ//あるど　あまてらつ//あるど　あまてらつ//あるど　あまてらつ//あるど　あまてらつ//あるど　あまてらつ//あるど　あまてらつ//あるど　あまてらつ//あるど　あまてらつ//あるど　あまてらつ//あるど　あまてらつ//あるど　あまてらつ//あるど　あまてらつ//あるど　あまてらつ//あるど　あまてらつ//あるど　あまてらつ//あるど　あまてらつ//あるど　あまてらつ//あるど　あまてらつ
