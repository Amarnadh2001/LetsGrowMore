function validate(form){
var u_name=document.getElementById("name").value;
var u_email=document.getElementById("email").value;
var u_phone=document.getElementById("phone").value;
var u_dob=document.getElementById("dob").value;
var SL=document.getElementById("s1").value;
var SDI=document.getElementById("s2").value;
var p1=/[A-Z][a-zA-z]{5,15}$/;
var p2=/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;
var p3=/[6|7|8|9]{1}[0-9]{9}$/;
if(u_name=="")
{
  alert("Name should not be empty");
  return false;
}
else if(p1.test(u_name)==false)
{
     alert("should start with Capital letters");
     return false;
}
else if(u_email=="")
{
   alert("Email should not be empty");
   return false;
}
else if(p2.test(u_email)==false)
{
    alert("should start with alphabets and numbers");
    return false;
}
else if(u_phone=="")
{
 alert("Phone_No should not be empty");
 return false;
}
else if(p3.test(u_phone)==false)
{
    alert("should start with 6|7|8|9 and length should be 10");
    return false;
}
else if(u_phone.length>10)
{
 alert("Phone_No should not be Greaterthan the length 10");
 return false;
}
else if(u_dob=="")
{
 alert("DateOfBirth should not be empty");
 return false;
}
else if ( ( form.gender[0].checked == false ) && ( form.gender[1].checked == false ) ) 
{
alert ( "Please choose your Gender: Male or Female" ); 
return false;
}
else if(SL=="")
{
 alert("Language should not be empty");
 return false;
}
else if(SDI=="")
{
 alert("Domain Interest should not be empty");
 return false;
}
}
function AddData(e)
{
    e.preventDefault();
    var rows="";
    var name=document.getElementById("name").value;
    var email=document.getElementById("email").value;
    var phone=document.getElementById("phone").value;
    var dob=document.getElementById("dob").value;
    var gender=f1.gender.value;
    //var gender=document.getElementById("radio1").value;
    //var gender=document.getElementById("radio2").value;
    var SL=document.getElementById("s1").value;
    var DI=document.getElementById("s2").value;
rows+="<tr><td>"+name+"</td><td>"+email+"</td><td>"+phone+"</td><td>"+dob+"</td><td>"+gender+"</td><td>"+SL+"</td><td>"+DI+"</td></tr>";
$(rows).appendTo("#list tbody");
}