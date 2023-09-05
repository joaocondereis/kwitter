const firebaseConfig = {

    apiKey: "AIzaSyARp_R2Xu14-5Cwqq7YRdh9K2ZdcIhQBN4",

    authDomain: "projeto101-d0da9.firebaseapp.com",

    databaseURL: "https://projeto101-d0da9-default-rtdb.firebaseio.com",

    projectId: "projeto101-d0da9",

    storageBucket: "projeto101-d0da9.appspot.com",

    messagingSenderId: "281130845331",

    appId: "1:281130845331:web:a72ceb77fc6c6b41b67966"

};

firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function send() {
    msg = document.getElementById("msg").value;
   firebase.database().ref(room_name).push({
    name:user_name,
    message:msg,
    like:0
   });

   document.getElementById("msg").value = "";
}

function getData() {
  firebase
    .database()
    .ref("/" + room_name)
    .on("value", function (snapshot)  {
      document.getElementById("output").innerHTML = ""; 
      snapshot.forEach(function (childSnapshot) {
        childKey = childsnapshot.key;
        childData = childSnapshot.val();
        if (childKey != "purpose") {
          firebase_message_id = childKey;
          message_data = childData;
          console.log(firebase_message_id);
          console.log(message_data);
          name = message_data["name"];
          message = message_data["message"];
          like = message_data["like"];
          name_with_tag =
            "<h4> " + name + "<img class= 'user_tick' src='tick.png'></h4>";
          message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
          like_button =
            "<button class='btn btn-warning' id=" +
            firebase_message_id +
            " value=" +
            like +
            " onclick='updateLike(this.id)'>";
          span_with_tag =
            "<span class='glyphicon glyphicon-thumbs-up'>Curtidas: " +
            like +
            "</span></button><hr>";
          row = name_with_tag + message_with_tag + like_button + span_with_tag;
          document.getElementById("output").innerHTML += row;
        }
      });
    });
}

 getData();
  function updateLike(message_id) {
  console.log("clicou no botão curtir - " + message_id);
  button_id = message_id;
  likes = document.getElementById(button_id).value;
  updated_likes = Number(likes) + 1;
  console.log(updated_likes);
  firebase.database().ref(room_name).child(message_id).update({
    like: updated_likes,
  });
}

function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location.replace("index.html");
}