

function length() {
    var val1=document.getElementById("getdata").value;
console.log(val1);
 result=(val1.length);
 document.getElementById("result").value=result;
 console.log("length of ",val1,result);
}
function upperCase() {
    var val1=document.getElementById("getdata").value;
console.log(val1);
 result=val1.toUpperCase();
 document.getElementById("result").value=result;
 console.log("uppercase of ",val1,result);
}
function lowerCase() {
    var val1=document.getElementById("getdata").value;
console.log(val1);
 result=val1.toLowerCase();
 document.getElementById("result").value=result;
 console.log("Lowercase of ",val1,result);
}
function repeat() {
    var val1=document.getElementById("getdata").value;
console.log(val1);
var count=prompt("enter no of count to repeat")
 result=val1.repeat(count);
 document.getElementById("result").value=result;
 console.log("repeat  ",val1,result);
}

function replace()
{    var val1=document.getElementById("getdata").value;
console.log(val1);
var search=prompt("enter the search value");
var replace=prompt("enter the replace word");
 result=val1.replace(search,replace);
 document.getElementById("result").value=result;
 console.log(result);

}

function indexOf()
{    var val1=document.getElementById("getdata").value;
console.log(val1);
var search=prompt("enter the search value");
var start=prompt("enter the start word");
 result=val1.indexOf(search,start);
 document.getElementById("result").value=result;
 console.log(result);

}

function lastIndexOf()
{    var val1=document.getElementById("getdata").value;
console.log(val1);
var search=prompt("enter the search value");
var start=prompt("enter the start word");
 result=val1.lastIndexOf(search,start);
 document.getElementById("result").value=result;
 console.log(result);

}

function concat()
{    var val1=document.getElementById("getdata").value;
console.log(val1);
var str1=prompt("enter the string1 value");
var str2=prompt("enter the string2  word");
var str3=prompt("enter the string3  word");
 result=val1.concat(str1,str2,str3);
 document.getElementById("result").value=result;
 console.log(result);

}
function split()
{    var val1=document.getElementById("getdata").value;
console.log(val1);
// var seperator=prompt("enter the seperator ");
// var limit=prompt("enter the limit");

 result=val1.split(" ");
 document.getElementById("result").value=result;
 console.log(result);

}

function trim()
{    var val1=document.getElementById("getdata").value;
console.log(val1);
 result=val1.trim();
 document.getElementById("result").value=result;
 console.log(result);

}
function slice()
{    var val1=document.getElementById("getdata").value;
console.log(val1);
var start=prompt("enter the start position");
var end=prompt("enter the stringlength");

 result=val1.slice(start,end);
 document.getElementById("result").value=result;
 console.log(result);

}
function endsWith()
{    var val1=document.getElementById("getdata").value;
console.log(val1);
var searchvalue=prompt("enter the searchvalue ");
var length=prompt("enter the length");

 result=val1.endsWith(searchvalue,length);
 document.getElementById("result").value=result;
 console.log(result);

}