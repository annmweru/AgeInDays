
   
  function ageInDays () {
    var birthYear =prompt('what year were you born?');
     var ageInDayss=(2020 - birthYear) * 365;
var h1=document.createElement('h1');
   var textAnswer=document.createTextNode('you are' + ageInDayss +'days old.');
   h1.setAttribute('id','ageInDays');
  h1.appendChild(textAnswer);
  document.getElementById('flex-box.result').appendChild(hi);
  }


