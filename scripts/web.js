//Index page js scripts Starts here

// js for active nav bar
var selector = '#nav li';
$(selector).on('click', function(){
    $(selector).removeClass('active');
    $(this).addClass('active');
});

//jquery of direct index load for home page 
$(document).ready(function(){
    $('#home').click(function(){
    $("#demo").load("home.html #home");
    });
});

//jquery load for about us page 
$(document).ready(function(){
    $('#about').click(function(){
        $("#demo").load("aboutus.html #para");
    });
});

//jquery load for career page
$(document).ready(function(){
    $('#career').click(function(){
        $("#demo").load("career.html");
    });
});

//jquery load for contact page
$(document).ready(function(){
    $('#contact').click(function(){
        $("#demo").load("contact.html #data");
    });
});

// Contact form validation scripts Starts here
//On Blur function for fname validation
function myfunction(){
        var fname = document.getElementById("fname").value;
       var message = "* Text must be filled in";
       var data = /^\s*$/;
      if(data.test(fname)) {
        document.getElementById("err1").innerHTML = message;
       }else{
        document.getElementById('err1').innerHTML="";
       }
    }

 
//On Blur function for lname validation
    function myfunction1(){
               var lname = document.getElementById("lname").value;
       message = "* Text must be filled in";
       var data = /^\s*$/;
       if(data.test(lname)) {
           document.getElementById("err2").innerHTML = message;
           return false;
       }else{
           document.getElementById('err2').innerHTML="";
       }
    }

//On Blur function for designation validation
    function myfunction2(){
        var designation = document.getElementById("designation").value;
       var message = "* Text must be filled in";
       var data = /^\s*$/;
       if(data.test(designation)) {
           document.getElementById("err3").innerHTML = message;
           return false;
        }else{
            document.getElementById('err3').innerHTML="";
        }
    }

//On Blur function for email validation
    function myfunction3(){
        var email = document.getElementById("email").value;
        var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        message = "* Text must be filled in";
        e_msg = "* Please Enter a vaild email address";
        var data = /^\s*$/;
        if(data.test(email)) {
           document.getElementById("err4").innerHTML = message;
           return false;
       }else if(reg.test(email)==false){
        document.getElementById("err4").innerHTML = e_msg;
           return false;
       }else{
            document.getElementById('err4').innerHTML="";
       }

    
    }

//On Blur function for Mobile validation
function myfunction4(){
        var mobile = document.getElementById("mobile").value;
       message = "* Please Enter a Mobile";
       mbl = "* Please Enter a valid Mobile No";
       var data = /^\s*$/;
       if(data.test(mobile)) {
           document.getElementById("err5").innerHTML = message;
           return false;
       }else if(mobile.length != 10){
           document.getElementById("err5").innerHTML = mbl;
           return false;
       }else{
           document.getElementById('err5').innerHTML="";
       }
    }

//On Blur function for message validation
    function myfunction5(){
        var msg = document.getElementById("message").value;
       message = "* Text must be filled in";
       var data = /^\s*$/;
       if(data.test(msg)) {
           document.getElementById("err6").innerHTML = message;
           return false;
       }else{
           document.getElementById('err6').innerHTML="";
       }
    }
     
//Onclick button function for form validation  
function validatefunction(){
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    var data = /^\s*$/;

    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var desig = document.getElementById("designation").value;
    var email = document.getElementById("email").value;
    var mobile = document.getElementById("mobile").value;
    var msg = document.getElementById("message").value;
    var data = /^\s*$/;
    
    message = "* Text must be filled in";
    mbl = "* Please Enter a valid mobile no";
    e_msg = "* Please Enter a vaild email address";

    if(data.test(fname)){
        document.getElementById("err1").innerHTML = message;
    }else{
        document.getElementById('err1').innerHTML="";
       }

    if(data.test(lname)){
        document.getElementById("err2").innerHTML = message;
    }else{
        document.getElementById('err2').innerHTML="";
       }

    if(data.test(desig)){
        document.getElementById("err3").innerHTML = message;
    }else{
        document.getElementById('err3').innerHTML="";
       }

    if(data.test(msg)){
        document.getElementById("err6").innerHTML = message;
    }else{
        document.getElementById('err6').innerHTML="";
       }

    if(data.test(mobile)){
           document.getElementById("err5").innerHTML = message;
    }else if(mobile.length != 10){
            document.getElementById("err5").innerHTML = mbl;
       }else{
            document.getElementById('err5').innerHTML="";
       }

    if(data.test(email)){
        document.getElementById("err4").innerHTML = message;
    }else if(reg.test(email)==false){
           document.getElementById("err4").innerHTML = e_msg;
       }else{
           document.getElementById('err4').innerHTML = "";
       }
    
}
    