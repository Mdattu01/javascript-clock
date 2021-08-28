// var  String = "Mohammad Atif khan siswan fathullah";
// console.log(String.length)
// console.log(String.indexOf("Atif"))
// console.log(String.slice(0,4))

 myDate = new Date();
// console.log(myDate);
// console.log(myDate.getTime());
// console.log(myDate.getDay());
// console.log(myDate.getFullYear());
// console.log(myDate.getMinutes());

// Dom manipulation 
// let elem = document.getElementById('click');
// console.log(elem);

// let elemClass = document.getElementsByClassName
// console.log(elem);
tn = document.getElementsByTagName('div')
console.log(tn)
createdElement = document.createElement('p');
createdElement.innerText = 'This is created paragraon';
tn[0].appendChild(createdElement);
createdElement2 = document.createElement('b');
createdElement2.innerText = 'This is created bold';
tn[0].replaceChild(createdElement2, createdElement);