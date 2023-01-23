

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
  
firebase.initializeApp(firebaseConfig);
var database = firebase.database();

  function addSala(){
    var sala = document.getElementById("roomName").value;
    localStorage.setItem("sala", sala);
    database.ref("/").child(sala).update({
      proposito:"adicionar sala"
    })
  }

  function lerDados(){
    database.ref("/").on("value",(data)=>{
      campo ='';
      data.forEach((subpasta)=>{
        sala = subpasta.key;
        linha = "<div class='sala' id="+sala+" onclick='irSala(this.id)' >"+sala+"</div> <hr>";
        campo +=linha;
      })
      document.getElementById("output").innerHTML = campo;
    })
  }
  lerDados()

function irSala(sala){
  localStorage.setItem("roomName", sala);
  window.location = 'kwitterPage.html'
}

function carregar(){
  var nome = localStorage.getItem("keyName");
 document.getElementById("userName").innerHTML = " Seja bem vindo(a) "  +  nome;
}

function logout() { 
  localStorage.removeItem("keyName");
  localStorage.removeItem("roomName");
  window.location = "index.html";
}
