var firebaseConfig = {
    apiKey: "AIzaSyCfHhDIruMTlKCGEOhdicKTIFyTaT_LPp8",
    authDomain: "login-2cfe0.firebaseapp.com",
    databaseURL: "https://login-2cfe0-default-rtdb.firebaseio.com",
    projectId: "login-2cfe0",
    storageBucket: "login-2cfe0.appspot.com",
    messagingSenderId: "747205814858",
    appId: "1:747205814858:web:20ef2197d3994ddddf54b3",
    measurementId: "G-3FR4L214M6"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

// let's code 
var datab  = firebase.database().ref('data');
function UserRegister(){
var email = document.getElementById('eemail').value;
var phonenumb = document.getElementById('phone').value;
var date = document.getElementById('call').value;
alert("scheduled");
firebase.auth().createUserWithEmailAndPassword(email,phonenumb,date).then(function(){
    
}).catch(function (error){
    var errorcode = error.code;
    var errormsg = error.message;
});
}
const auth = firebase.auth();
function SignIn(){
    var email = document.getElementById('eemail').value;
    var password = document.getElementById('lpassword').value;
    const promise = auth.signInWithEmailAndPassword(email,password);
    promise.catch( e => alert(e.msg));
    window.open("https://www.google.com","_self");
}
document.getElementById('form').addEventListener('submit', (e) => {
    e.preventDefault();
    var userInfo = datab.push();
    userInfo.set({
        name: getId('fname'),
        email : getId('eemail'),
        password : getId('lpassword')
    });
    alert("Successfully Signed Up");
    console.log("sent");
    document.getElementById('form').reset();
});
function  getId(id){
    return document.getElementById(id).value;
}