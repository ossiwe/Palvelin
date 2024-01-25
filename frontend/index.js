

// let pvm = Date()
// let pvmString = "<p>"+pvm+"</p>"
// document.getElementById("footer").innerHTML = pvmString




// let pvm = new Date();
// let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', 
// minute: 'numeric', second: 'numeric', timeZoneName: 'short' };

// let pvmString = "<p>" + pvm.toLocaleString('fi-FI', options) + "</p>";

// document.getElementById("footer").innerHTML = pvmString;



var pvm1 = new Date()
var pvm2 = pvm1.toLocaleDateString('fi-FI')
let pvmString = "<p>(C) Kabanossi - "+pvm2+"</p>"
document.getElementById("footer").innerHTML = pvmString