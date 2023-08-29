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