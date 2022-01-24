var firebaseConfig = {
      apiKey: "AIzaSyD8g1cJFTr4SjtdAKmD7PPFRNlCXJ_Zbjw",
      authDomain: "kwitter-app-978c4.firebaseapp.com",
      databaseURL: "https://kwitter-app-978c4-default-rtdb.firebaseio.com",
      projectId: "kwitter-app-978c4",
      storageBucket: "kwitter-app-978c4.appspot.com",
      messagingSenderId: "850945102564",
      appId: "1:850945102564:web:3d89ab49babbc2b3b952f1"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem(user_name);
    document.getElementById("user_name").innerHTML = " Welcome " + user_name + "!";

    function addroom()
    {
          room_name = document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({
                purpose : "Adding Room Name"
          });
          localStorage.setItem("room_name" , room_name);
          window.location = "kwitter_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      row = "<div class='room_name' id=" + Room_names + "onclick = 'redirecttoroomname(this.id)'>#" + Room_names + "</div><hr>"
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirecttoroomname(name)
{
      localStorage.setItem("room_name" , name);
      window.location = "kwitter_page.html";
}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";

}