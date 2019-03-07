"use strict"
//business logic
function Details (jobType, duration, amount, phoneNumber, email, idNumber, description){
  this.jobType= jobType;
  this.duration= duration;
  this.amount= amount;
  this.phoneNumber= phoneNumber;
  this.email= email;
  this.idNumber= phone;
  this.description= description;
  this.peopleNumber= people;
}

//user interface logic
$(document).ready(function(){
  $("form#new-details").submit(function(event){
    event.preventDefault();

    var inputtedJobType = document.getElementById("#jobType").value;
    var inputtedDuration=document.getElementById("#duration").value;
    var inputtedAmount=document.getElementById("#amount").value;
    var inputtedPhoneNumber=document.getElementById("#phoneNumber").value;
    var inputtedEmail=document.getElementById("#email").value;
    var inputtedIdNumber=document.getElementById("#phone").value;
    var inputtedDescription=document.getElementById("#description").value;
    var inputtedLocation=document.getElementById("#location").value;
    var inputtedPeopleNumber=document.getElementById("#peopleNumber").value;


    var newDetails = new Details(inputtedEmail, inputtedAmount, inputtedJobType, inputtedDuration, inputtedIdNumber, inputtedLocation, inputtedDescription, inputtedPhoneNumber);

    $("ul#detail").append("<li><span class='detail'>" + newDetails.jobType + newDetails.duration + newDetails.idNumber + newDetails.amount+ newDetails.phoneNumber + newDetails.digits + newDetails.location +"</span></li>");
    // $("#one").text(inputtedJobType);
    // $("#two").text(inputtedDuration);
    // $("#three").text(inputtedAmount);
    // $("#four").text(inputtedPhoneNumber);
    // $("#five").text(inputtedEmail);
    // $("#six").text(inputtedIdNumber);
    // $("#seven").text(inputtedDescription);
    // $("#eight").text(inputtedLocation);
    // $("#nine").text(inputtedPeopleNumber);




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
