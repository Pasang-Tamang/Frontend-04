const body = document.body;

const mainDiv = document.createElement("div");
mainDiv.id = "container";
mainDiv.className = "container d-flex flex-wrap gap-4 justify-content-between";

//Header create and append
const headerTag = document.createElement("h3");
headerTag.innerText = "Our Team";
headerTag.className = "text-center";

body.append(headerTag);

//paragraph create and append
const paraTag = document.createElement("p");
paraTag.innerText = "lorem ipsum denovani ";
paraTag.className = "text-center";
body.append(paraTag);

// for (let i = 1; i <= 8; i++) {
//   //Create card and append
//   const card = document.createElement("div");
//   card.className = "card";
//   card.style.width = "22%";

//   //Card Header Start
//   const cardHeader = document.createElement("div");
//   cardHeader.className = "card-header";

//   const image = document.createElement("img");
//   image.className = "card-img-top";
//   image.src =
//     "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVjaG5vbG9neXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60";

//   cardHeader.appendChild(image);
//   card.appendChild(cardHeader);
//   //Card Header End

//   //CardBody start
//   const cardBody = document.createElement("div");
//   cardBody.className = "card-body";
//   cardBody.style.textAlign = "center";

//   const h4 = document.createElement("h4");
//   h4.innerText = "Content 1";
//   h4.className = "card-title ";

//   const p = document.createElement("p");
//   p.innerText = "loremok then";
//   p.className = "card-text ";

//   const button = document.createElement("button");
//   button.className = "btn btn-outline-primary";
//   button.innerText = "Read More";

//   cardBody.appendChild(h4);
//   cardBody.appendChild(p);
//   cardBody.appendChild(button);
//   card.appendChild(cardBody);
//   mainDiv.appendChild(card);
// }

// fetch("https://dummyjson.com/products")
//   .then((resp) => {
//     return resp.json();
//   })
//   .then((val) => {
//     val.products.forEach((product) => {
//       console.log(product);
//       //Create card and append
//       const card = document.createElement("div");
//       card.className = "card";
//       card.style.width = "22%";
//       card.style.height = "450px";

//       //Card Header Start
//       const cardHeader = document.createElement("div");
//       cardHeader.className = "card-header h-75";

//       const image = document.createElement("img");
//       image.className = "card-img-top h-100";
//       image.src = product.thumbnail;
//       cardHeader.appendChild(image);
//       card.appendChild(cardHeader);
//       //Card Header End

//       //CardBody start
//       const cardBody = document.createElement("div");
//       cardBody.className = "card-body";
//       cardBody.style.textAlign = "center";

//       const h4 = document.createElement("h4");
//       h4.innerText = product.title;
//       h4.className = "card-title ";

//       const p = document.createElement("p");
//       p.innerText = product.brand;
//       p.className = "card-text ";

//       const button = document.createElement("button");
//       button.className = "btn btn-outline-primary";
//       button.innerText = "Read More";

//       cardBody.appendChild(h4);
//       cardBody.appendChild(p);
//       cardBody.appendChild(button);
//       card.appendChild(cardBody);
//       mainDiv.appendChild(card);
//     });
//   });

async function abc() {
  const resp = await fetch("https://dummyjson.com/products");
  const valo = resp.json();
  console.log(valo);
}

const getProducts = async () => {
  const response = await fetch("https://dummyjson.com/products");
  const value = await response.json();
  value.products.forEach((product) => {
    console.log(product);
    //Create card and append
    const card = document.createElement("div");
    card.className = "card";
    card.style.width = "22%";
    card.style.height = "450px";

    //Card Header Start
    const cardHeader = document.createElement("div");
    cardHeader.className = "card-header h-75";

    const image = document.createElement("img");
    image.className = "card-img-top h-100";
    image.src = product.thumbnail;
    cardHeader.appendChild(image);
    card.appendChild(cardHeader);
    //Card Header End

    //CardBody start
    const cardBody = document.createElement("div");
    cardBody.className = "card-body";
    cardBody.style.textAlign = "center";

    const h4 = document.createElement("h4");
    h4.innerText = product.title;
    h4.className = "card-title ";

    const p = document.createElement("p");
    p.innerText = product.brand;
    p.className = "card-text ";

    const button = document.createElement("button");
    button.className = "btn btn-outline-primary";
    button.innerText = "Read More";

    cardBody.appendChild(h4);
    cardBody.appendChild(p);
    cardBody.appendChild(button);
    card.appendChild(cardBody);
    mainDiv.appendChild(card);
  });
};

getProducts();
body.append(mainDiv);
