"use strict"
//business logic
function Details (jobType, duration, amount, phoneNumber, email, idNumber,location,peopleNumber, description ){
  console.log(jobType, duration, amount, phoneNumber, email, phoneNumber, description, location)
  this.jobType= jobType;
  this.duration= duration;
  this.amount= amount;
  this.phoneNumber= phoneNumber;
  this.email= email;
  this.idNumber= idNumber;
  this.location= location;
  this.peopleNumber= peopleNumber;
  this.description= description;


}

//user interface logic
$(document).ready(function(){
  $("form#new-details").submit(function(event){
    event.preventDefault();

    var inputtedJobType = document.getElementById("jobType").value;
    var inputtedDuration=document.getElementById("duration").value;
    var inputtedAmount=document.getElementById("amount").value;
    var inputtedPhoneNumber=document.getElementById("phoneNumber").value;
    var inputtedEmail=document.getElementById("email").value;
    var inputtedIdNumber=document.getElementById("tel").value;
    var inputtedDescription=document.getElementById("description").value;
    var inputtedLocation=document.getElementById("location").value;
    var inputtedPeopleNumber=document.getElementById("peopleNumber").value;


    var newDetails = new Details(inputtedJobType, inputtedDuration, inputtedAmount, inputtedPhoneNumber, inputtedEmail, inputtedIdNumber, inputtedLocation, inputtedPeopleNumber,inputtedDescription );

    $("p#A").append("<p>Job Type:<span class='detail'>" + newDetails.jobType +"</span></p>");
    $("p#B").append("<p><span class='detail'>" +"Job Type:"+  newDetails.duration + "</span></p>");
    $("p#C").append("<p><span class='detail'>" +"Amount:"+ newDetails.amount +"</span></p>");
    $("p#D").append("<p><span class='detail'>" +"Phone Number:"+newDetails.phoneNumber +"</span></p>");
    $("p#E").append("<p><span class='detail'>" +"Email Adress:"+newDetails.email +"</span></p>");
    $("p#F").append("<p><span class='detail'>" +"Id Number:"+newDetails.idNumber + "</span></p>");
    $("p#G").append("<p><span class='detail'>" +"Location:"+newDetails.location +"</span></p>");
    $("p#H").append("<p><span class='detail'>" +"Number of Employees Needed:"+newDetails.peopleNumber +"</span></p>");
    $("p#I").append("<p><span class='detail'>" +"Description:"+newDetails.description+"</span></p>");












    // $("input#jobType").val("");
    // $("input#duration").val("");
    // $("input#amount").val("");
    // $("input#phoneNumber").val("");
    // $("input#email").val("");
    // $("input#description").val("");
    // $("input#location").val("");
    //

  });
});
