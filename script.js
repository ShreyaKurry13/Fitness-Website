const login = document.querySelector(".login");
const register = document.querySelector(".register");
const form = document.querySelector("#form");
// const form = document.getElementById("#form");
const switchs = document.querySelector(".switch");

// var button = document.getElementById("#btnMain")

function rightClick(){
  document.getElementById('form').style.marginLeft='-100%';
  // form.style.marginLeft = "-100%";
  // login.style.background = "none";
  // register.style.background = "orangered"; 
  document.getElementById("btnMain").style.left = "110px";
}
function leftClick(){
  document.getElementById('form').style.marginLeft='0';
  // register.style.background = "none";
  // login.style.background = "orangered"; 
  document.getElementById("btnMain").style.left = "0";
}



// // var btn = document.getElementById("btn");

// // function leftClick() {
// //   btn.style.left = "1";
// // }
// // function rightClick() {
// //   btn.style.left = "110px";
// // }


// //    var modal = document.getElementById('login-form') ;
// //    window.onclick = function ( event )
// //    {
// //        if ( event.target == modal )
// //        {
// //            modal.style.display = " none " ;
// //        }
// //    }