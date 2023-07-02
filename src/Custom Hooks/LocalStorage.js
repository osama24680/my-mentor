export const LocalStorageSave = ()=>{
  var title = document.getElementById("title").value;
  var Description = document.getElementById("Description").value;
  var location = document.getElementById("location").value;
  var duration = document.getElementById("duration").value;
  var experince = document.getElementById("experince").value;
  var Paid_value = document.getElementById("Paid").checked;
  var Paid = Paid_value ? "Paid" : "Not Paid";  
  var Amount = document.getElementById("Amount").value;
  var currency = document.getElementById("currency").value;
  var last_input_1 = document.getElementById("last_input_1").value;
  var last_input_2 = document.getElementById("last_input_2").value;
  var last_input_3 = document.getElementById("last_input_3").value;

  var myobj = {
    "title" : title,
    "Description" : Description,
    "location" : location,
    "duration" : duration,
    "experince" :experince,
    "Paid" :{
      "Paid": Paid,
      "Amount" :Amount,
      "currency" :currency,  
    },
    "last_input_1" :last_input_1,
    "last_input_2" :last_input_2,
    "last_input_3" :last_input_3
  }
  var arr = [];
  if(localStorage.length){
    arr = [...JSON.parse(localStorage.getItem("Mentoring Request"))];
    arr.push(myobj);
    localStorage.setItem("Mentoring Request",JSON.stringify(arr))
  }else{
    arr.push(myobj);
    localStorage.setItem("Mentoring Request",JSON.stringify(arr))
  }
}