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
  var database  = firebase.database();
  
  roomName = localStorage.getItem("roomName");
  userName = localStorage.getItem("userName");
  
  function enviar(){
      var msg = document.getElementById("msg").value;
      database.ref('/').child(roomName).push({
          nome: userName,
          mensagem: msg,
          like:0
      })
      document.getElementById("msg").value = '';
  }
  
  function logout(){
      localStorage.removeItem("roomName");
      localStorage.removeItem("userName");
      window.location = 'index.html';
  }
  
  function mostrarMsgm() { 
  database.ref(roomName).on("value", (data)=>{
  document.getElementById("output").innerHTML = "";
  data.forEach((data)=>{
      id = data.key;
      valores = data.val();
  if(id!="proposito"){
      msgId = id;
      msgValores = valores;
      msg = msgValores["mensagem"];
      like1 = valores;
  like = like1["like"]
  nome1 = valores;
  nome = nome1["nome"];
  console.log(nome)
  nomehtml = "<h4>"+nome+"</h4>"
  msghtml = "<h4>"+msg+"</h4><hr>"
  nomehtml2 = "nome:"+nomehtml;
  msghtml2 = "mensagem"+msghtml;
  document.getElementById("output").innerHTML += nomehtml2+msghtml2;
  }
  })
  })
  }
  
  mostrarMsgm();