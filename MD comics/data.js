var firebaseConfig = {
    apiKey: "AIzaSyB-dfNQFRxmHVv6ase9BgGF9xyxvRakb7M",
    authDomain: "mdcomics-2f81c.firebaseapp.com",
    databaseURL: "https://mdcomics-2f81c-default-rtdb.firebaseio.com",
    projectId: "mdcomics-2f81c",
    storageBucket: "mdcomics-2f81c.appspot.com",
    messagingSenderId: "331251176133",
    appId: "1:331251176133:web:294e3dcf00c32334dd16ac"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

// let's code 
var datab  = firebase.database().ref('data');
function UserRegister(){
var email = document.getElementById('eemail').value;
var password = document.getElementById('lpassword').value;
firebase.auth().createUserWithEmailAndPassword(email,password).then(function(){
    
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
    window.open("index.html","_self");
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