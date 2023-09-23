const container = document.getElementById("container");

const h3 = document.createElement("h3");
h3.innerText = "Our Team";
h3.style.marginTop = "30px";
container.append(h3);

const p = document.createElement("p");
p.innerText = "lorem ipsum, dolor sit amet consectetur adipisicing.";
p.style.marginBottom = "10px";
container.append(p);

const cardContainer = document.createElement("div");
cardContainer.className = "d-flex justify-content-between align-items-center";
cardContainer.style.height = "70vh";

const card1 = document.createElement("div");
card1.className = "card";
card1.style.width = "18rem";
card1.style.height = "21rem";
const card1Img = document.createElement("img");
card1Img.src =
  "https://images.unsplash.com/photo-1568923623474-d47736bac386?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTIxfHxhZXN0aGV0aWN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60";

card1Img.className = "p-3 h-75";
card1.append(card1Img);

const card1Body = document.createElement("div");
card1Body.class = "card-body";

const card1h5 = document.createElement("h5");
card1h5.className = "card-title";
card1h5.innerText = "Content 1";
card1h5.classList = "text-center";

const card1P = document.createElement("p");
card1P.className = "card-text";
card1P.innerText = "lorem ipsum, dolor consectetur ";
card1P.classList = "text-center";

const card1Anc = document.createElement("a");
card1Anc.className = "btn btn-primary mb-2";
card1Anc.innerText = "Go Somewhere";
card1Anc.style.marginLeft = "70px";

card1Body.append(card1h5);
card1Body.append(card1P);
card1Body.append(card1Anc);
card1.append(card1Body);
cardContainer.append(card1);

const card2 = document.createElement("div");
card2.className = "card";
card2.style.width = "18rem";
card2.style.height = "21rem";

const card2Img = document.createElement("img");
card2Img.src =
  "https://images.pexels.com/photos/6046318/pexels-photo-6046318.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
card2Img.className = "p-3 h-75";
card2.append(card2Img);

const card2Body = document.createElement("div");
card1Body.class = "card-body";

const card2h5 = document.createElement("h5");
card2h5.className = "card-title";
card2h5.innerText = "Content 2";
card2h5.classList = "text-center";

const card2P = document.createElement("p");
card2P.className = "card-text";
card2P.innerText = "lorem ipsum, dolor consectetur ";
card2P.classList = "text-center";

const card2Anc = document.createElement("a");
card2Anc.className = "btn btn-primary mb-2";
card2Anc.innerText = "Go Somewhere";
card2Anc.style.marginLeft = "70px";

card2Body.append(card2h5);
card2Body.append(card2P);
card2Body.append(card2Anc);
card2.append(card2Body);
cardContainer.append(card2);

container.append(cardContainer);

const card3 = document.createElement("div");
card3.className = "card";
card3.style.width = "18rem";
card3.style.height = "21rem";
const card3Img = document.createElement("img");
card3Img.src =
  "https://images.unsplash.com/photo-1477313372947-d68a7d410e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTIyfHxhZXN0aGV0aWN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60";
card3Img.className = "p-3 h-75";
card3.append(card3Img);

const card3Body = document.createElement("div");
card3Body.class = "card-body";

const card3h5 = document.createElement("h5");
card3h5.className = "card-title";
card3h5.innerText = "Content 3";
card3h5.classList = "text-center";

const card3P = document.createElement("p");
card3P.className = "card-text";
card3P.innerText = "lorem ipsum, dolor consectetur ";
card3P.classList = "text-center";

const card3Anc = document.createElement("a");
card3Anc.className = "btn btn-primary mb-2";
card3Anc.innerText = "Go Somewhere";
card3Anc.style.marginLeft = "70px";

card3Body.append(card3h5);
card3Body.append(card3P);
card3Body.append(card3Anc);
card3.append(card3Body);
cardContainer.append(card3);

const card4 = document.createElement("div");
card4.className = "card";
card4.style.width = "18rem";
card4.style.height = "21rem";
const card4Img = document.createElement("img");
card4Img.src =
  "https://images.unsplash.com/photo-1530172888244-f3520bbeaa55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDAxfHxhZXN0aGV0aWN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60";
card4Img.className = "p-3 h-75";
card4.append(card4Img);

const card4Body = document.createElement("div");
card4Body.class = "card-body";

const card4h5 = document.createElement("h5");
card4h5.className = "card-title";
card4h5.innerText = "Content 4";
card4h5.classList = "text-center";

const card4P = document.createElement("p");
card4P.className = "card-text";
card4P.innerText = "lorem ipsum, dolor consectetur ";
card4P.classList = "text-center";

const card4Anc = document.createElement("a");
card4Anc.className = "btn btn-primary mb-2";
card4Anc.innerText = "Go Somewhere";
card4Anc.style.marginLeft = "70px";

card4Body.append(card4h5);
card4Body.append(card4P);
card4Body.append(card4Anc);
card4.append(card4Body);
cardContainer.append(card4);
