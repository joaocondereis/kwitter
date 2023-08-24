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

document.getElementById("user_name").innerHTML = "Bem-vindo(a), " + user_name + "!";

function addRoom() {
    Room_name = document.getElementById("room_name").value;

    firebase.databaseURL().ref("/").child(Room_name).update({
        purpose: "adicionando nome da sala"
    });

    localStorage.setItem("room_name", Room_name);

    window.location = "kwitter_page.html";
}

function getData() {
    firebase.database().ref("/").on("value", function (snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function (childSnapshot) {
            childkey = childSnapshot.key;
            Room_names = childkey;
            console.log("nome da sala: " + Room_names);
            row =
                "<div class='Room_name' id=" +
                Room_names +
                "onclick='redirectToRoomName(this.id)' >#" +
                Room_names +
                "</div><hr>";
            document.getElementById("output").innerHTML += row;
        })
    })
}

getData();

function redirectToRoomName(name) {
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

