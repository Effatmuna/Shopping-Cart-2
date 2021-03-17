const data = [
  {
    id: 0,
    img: "shoe-5.jpg",
    price: 2150,
    size: 35,
    delivery: "In 3-4 days",
    itemInCart: false,
  },
  {
    id: 1,
    img: "shoe-3.jpg",
    price: 2250,
    size: 37,
    delivery: "In 3-4 days",
    itemInCart: false,
  },
  {
    id: 2,
    img: "shoe-4.jpg",
    price: 2000,
    size: 37,
    delivery: "In 3-4 days",
    itemInCart: false,
  },
  {
    id: 3,
    img: "shoe-1.jpg",
    price: 950,
    size: 38,
    delivery: "In 3-4 days",
    itemInCart: false,
  },

  {
    id: 4,
    img: "shoe-5.jpg",
    price: 2150,
    size: 38,
    delivery: "In 3-4 days",
    itemInCart: false,
  },
  {
    id: 5,
    img: "shoe-5.jpg",
    price: 2250,
    size: 38,
    delivery: "In 3-4 days",
    itemInCart: false,
  },
  {
    id: 6,
    img: "shoe-5.jpg",
    price: 2000,
    size: 39,
    delivery: "In 3-4 days",
    itemInCart: false,
  },

  {
    id: 7,
    img: "shoe-5.jpg",
    price: 950,
    size: 39,
    delivery: "In 3-4 days",
    itemInCart: false,
  },
  {
    id: 8,
    img: "shoe-5.jpg",
    price: 2150,
    size: 39,
    delivery: "In 3-4 days",
    itemInCart: false,
  },

  {
    id: 9,
    img: "shoe-5.jpg",
    price: 2250,
    size: 35,
    delivery: "In 3-4 days",
    itemInCart: false,
  },
  {
    id: 10,
    img: "shoe-5.jpg",
    price: 2000,
    size: 37,
    delivery: "In 3-4 days",
    itemInCart: false,
  },
  {
    id: 11,
    img: "shoe-5.jpg",
    price: 950,
    size: 35,
    delivery: "In 3-4 days",
    itemInCart: false,
  },
];
let cartList = [];
var i;
var detail = document.querySelectorAll(".card-item");
//var detailCard = document.getElementByClassName("details-card");
var detailPrice = document.getElementById("price");
var detailSize = document.querySelector("size");
var detailcolor = document.getElementById("color");
var detailId = document.getElementById("details-id");
var buttonBack = document.getElementById("back");
var buttonCart = document.querySelector("#cart");
var carts = document.getElementById("carts");
var cardD = document.querySelector(".details");
var cardImg = document.querySelector("#card-img");

buttonBack.addEventListener("click", refreshPage);

//cardImg.addEventListener("click", function () {
//cardD.style.display = "block";
//});
var Add = document.querySelector("#add-to-cart");
carts.addEventListener("click", displayCart);

buttonCart.addEventListener("click", () => Add2(getId)); //for adding items to cart from detail-page

var getId;

var home = document.querySelector("#logo");
//Home
home.addEventListener("click", hideCart); // for hide cart and return to home page

cardImg.addEventListener("click", function () {
  cardD.style.display = "block";
});

document.addEventListener("click", function (e) {
  if (e.target.id == "remove") {
    var itemId = e.target.parentNode.id;
    removeFromCart(itemId);
  }
});
//click event for display details page
for (i = 0; i < data.length; i++) {
  detail[i].addEventListener("click", handleDetail);
}
//click event to add items to cart from home page Add button
//Add.forEach(
//(val) => val.addEventListener("click"), () => Add2(val.parentNode.id);
//);

//detail function
function handleDetail() {
  cardD.style.display = "block";
  getId = this.parentNode.id;
  detailPrice.innerHTML = "Price: $" + data[getId].price;
  detailSize.innerHTML = "Size: " + data[getId].size;
}

//add item to cart
function Add2(id) {
  if (!data[id].itemInCart) {
    cartList = [...cartList, data[id]];
    addItem();
    alert("Item added to your cart");
  } else {
    alert("Your item is already there!!");
  }
  data[id].itemInCart = true;
}

var totalAmount;
var totalItem;

//add item to the cart
function addItem() {
  totalAmount = 0;
  totalItems = 0;
  var clrNode = document.getElementById("item-body");

  clrNode.innerHTML = " ";
  cartList.map((cart) => {
    var cartContent = clrNode;
    totalAmount = totalAmount + cart.price;
    totalItems = totalItems + 1;
    var tempCart = document.createElement("div");
    tempCart.setAttribute("class", "cart-list");
    tempCart.setAttribute("id", cart.id);

    var listPay = document.createElement("h3");
    listPay.setAttribute("class", "pay");
    listPay.innerHTML = cart.price;
    tempCart.appendChild(listPay);

    var listSize = document.createElement("h3");
    listSize.setAttribute("id", cart.size);
    listSize.innerHTML = cart.size;
    tempCart.appendChild(listSize);

    var listItems = document.createElement("h3");
    listItems.setAttribute("class", "items");
    listItems.innerHTML = "1";
    tempCart.appendChild(listItems);
    // var listImg = document.createElement("img");
    //  listImg.setAttribute();

    var listTrash = document.createElement("i");
    listTrash.setAttribute("class", "fa fa-trash");
    listTrash.innerHTML = "i";
    listTrash.setAttribute("id", "remove");
    tempCart.appendChild(listTrash);

    cartContent.appendChild(tempCart);
  });

  document.getElementById(
    "total-amount"
  ).innerHTML = `Total Amount: ${totalAmount}`;
  document.getElementById(
    "total-items"
  ).innerHTML = `Total Items: ${totalItems}`;

  document.getElementById("total").style.display = "block";
}

//function to display cart page
function displayCart() {
  document.getElementById("main").style.display = "none";
  cardD.style.display = "none";
  document.getElementById("cart-container").style.display = "block";
  if (cartList.length == 0) {
    document.getElementById("cart-with-items").style.display = "none";
    document.getElementById("empty-cart").style.display = "inline";
  } else {
    document.getElementById("cart-with-items").style.display = "block";
    document.getElementById("empty-cart").style.display = "none";
  }
}

//Hide your cart page
function hideCart() {
  document.getElementById("main").style.display = "block";
  document.getElementById("cart-container").style.display = "none";
}

//back to home page from details page
function refreshPage() {
  cardD.style.display = "none";
}
function removeFromCart(itemId) {
  data[itemId].itemInCart = false;
  cartList = cartList.filter((list) => list.id != itemId);

  addItem();

  if (cartList.length == 0) {
    document.getElementById("cart-with-items").style.display = "none";
    document.getElementById("empty-cart").style.display = "block";
  }
}
