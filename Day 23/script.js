//DOM traverse

//5 methods to fetch elements in DOM
// get element by id
//get element by class name
//get element by tag name
//query selector
//query selector all

//1. BY Id
const text1 = document.getElementById("text-1");
text1.className = "text-center";
text1.innerText = "<h1> hey how are you doing </h1>";
text1.innerHTML = "<h1>Hi</h1>";

const text3 = document.getElementById("text-3");
text3.style.backgroundColor = "red";
text3.style.color = "white";

//By ClassName
const texts = document.getElementsByClassName("text2");
console.log(texts);
texts[0].style.color = "primary";
texts[1].style.color = "blue";

//By TagName
const tags = document.getElementsByTagName("h2");
console.log(tags);

for (let i = 0; i < tags.length; i++) {
  tags[i].style.backgroundColor = "blue";
  tags[i].style.color = "white";
}

//Query Selector and QuerySelectorAll --->  You have to write either # or . for defining id and class
const qe = document.querySelector("#text-1");
const qe2 = document.querySelectorAll(".text2");
const qeAll = document.querySelectorAll("h2");
console.log(qe);
console.log(qe2);
console.log(qeAll);

const input = document.querySelector("input");
const input1 = document.querySelector("#input");
const input2 = document.getElementById("input");
console.log(input);
console.log(input.value);

//Create Element
const button = document.createElement("button");
button.innerText = "Submit";

const container = document.getElementById("container");
container.append(button);
button.className = "btn btn-outline-primary";
button.id = "unique-btn";

const cancelButton = document.createElement("button");
cancelButton.innerText = "Cancel";
cancelButton.className = "btn btn-danger";
container.append(cancelButton);

const breakTag = document.createElement("br");
container.append(breakTag);

const h3 = document.createElement("h3");
h3.innerText = "Hello";
h3.style.color = "blue";
h3.style.marginTop = "35px";
h3.style.margin = "20px";
container.append(h3);

const ul = document.createElement("ul");
ul.className = "list-group";

const li = document.createElement("li");
li.className = "list-group-item";
li.innerText = "An item";

const list2 = document.createElement("li");
list2.className = "list-group-item";
list2.innerText = "A Second item";

const list3 = document.createElement("li");
list3.className = "list-group-item";
list3.innerText = "A third item";

const list4 = document.createElement("li");
list4.className = "list-group-item";
list4.innerText = "A Fourth item";

const list5 = document.createElement("li");
list5.className = "list-group-item";
list5.innerText = "And a fifth one";

ul.append(li);
ul.append(list2);
ul.append(list3);
ul.append(list4);
ul.append(list5);
container.append(ul);

const mainDiv = document.createElement("div");
mainDiv.className = "card";
mainDiv.style.width = "18rem";
mainDiv.style.margin = "40px";

const img = document.createElement("img");
img.className = "card-img-top";
img.src =
  "https://images.unsplash.com/photo-1530103043960-ef38714abb15?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80";

const cardBody = document.createElement("div");
cardBody.className = "card-body";

const h5 = document.createElement("h5");
h5.className = "card-title";
h5.innerText = "Card title";
const p = document.createElement("p");
p.className = "card-text";
p.innerText = "loremloremelorem";

const anchorTag = document.createElement("a");

const button1 = document.createElement("button");
button1.innerText = "Submit";
button1.className = "btn btn-primary";

mainDiv.append(img);
mainDiv.append(cardBody);
cardBody.append(h5);
cardBody.append(p);
cardBody.append(button1);

container.append(mainDiv);
