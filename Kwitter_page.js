user_name = localStorage.getItem("User_name");
document.getElementById("username").innerHTML = "Welcome "+user_name+"!";

var firebaseConfig = {
    apiKey: "AIzaSyCCcUpSClM08WwFRLKDgueVk3nMW0tGpEE",
    authDomain: "kwitter-remake-8012f.firebaseapp.com",
    projectId: "kwitter-remake-8012f",
    storageBucket: "kwitter-remake-8012f.appspot.com",
    messagingSenderId: "965435919229",
    appId: "1:965435919229:web:f05a35cfc27f6d629c1a14"
  };

  firebase.initializeApp(firebaseConfig);