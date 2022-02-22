let element;
//document returns all html
element = document;
console.log(element);
//document.all returns all tages used in document
element = document.all;
console.log(element);
//all[1] command is written in console
element = document.all[9];
console.log(element);
//head returns all head elements
element = document.head;
console.log(element);
element = document.title;
console.log(element);
//body command is written in console
element = document.body;
console.log(element);
element = document.links;
console.log(element);
//links[1] is written in links
element = document.links[0];
element = document.images;
console.log(element);
element = document.forms;
console.log(element);
element = document.doctype;
console.log(element);
element = document.URL;
console.log(element);
element = document.domain;
console.log(element);
element = document.baseURI;
console.log(element);
element = document.getElementById("myid");
console.log(element);
element = document.getElementsByClassName(`buttons`);
console.log(element);
element = document.getElementsByTagName(`h1`);
console.log(element);
element = document.getElementsByClassName("active").innerText;
console.log(element);
element = document.getElementsByClassName(`navbar`).innerHTML;
console.log(element);
element = document.getElementById("myid").getAttribute("class");
console.log(element);
element = document.getElementById("myid").getAttributeNode("id");
console.log(element);
document.getElementById("btn3").innerHTML = "<h1>Element with</h1>";
element = document.getElementById("myid").getAttributeNode("id").value;
console.log(element);
element = document.getElementsByClassName("navbar").attributes;
console.log(element);
element = document.getElementsByClassName("navbar").attributes.name;
console.log(element);
element = document.getElementById("btn3").innerHTML;
console.log(element);