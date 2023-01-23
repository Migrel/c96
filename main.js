const firebaseConfig = {
  apiKey: "AIzaSyDcUkvWdblgqFAZOm6xLhdPsaO3s8A16aw",
  authDomain: "kiwitter-bfce8.firebaseapp.com",
  databaseURL: "https://kiwitter-bfce8-default-rtdb.firebaseio.com",
  projectId: "kiwitter-bfce8",
  storageBucket: "kiwitter-bfce8.appspot.com",
  messagingSenderId: "895400476335",
  appId: "1:895400476335:web:192da2512d3ccc30685e5a",
  measurementId: "G-MM8ZGRS9ZD"
};




var SeuNome = ""

function addUser(){
    SeuNome = document.getElementById("userName").value;
    localStorage.setItem("keyName", SeuNome);
    window.location = "kwitterRoom.html";
}

