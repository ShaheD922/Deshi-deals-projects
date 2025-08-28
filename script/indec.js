function getElement(id) {
  return document.getElementById(id);
}

// traverse technique

function getElement(id) {
  return document.getElementById(id);
}

// traverse technique
const cartBtns = document.getElementsByClassName("cart-btn");

for (let cartButton of cartBtns) {
  cartButton.addEventListener("click", function () {
    const productImg = cartButton.parentNode.parentNode.children[0].children[0].src;

    const productTitle = cartButton.parentNode.parentNode.children[1].children[0].innerText;

    // price text → convert to number
    const productPrice = parseInt(
      cartButton.parentNode.parentNode.children[1].children[2].innerText
    );

   


// get total price (as number)
    const totalPrice = parseFloat(getElement("total-price").innerText);

    // calculate new total
    const currentTotal = totalPrice + productPrice;

    // update total price in UI
    getElement("total-price").innerText = currentTotal.toFixed(2);

    // ✅ also append product to cart
    const cartContainer = document.querySelector(".cart-container");
    const newCart = document.createElement("div");

    newCart.innerHTML = `
      <div class="bg-gray-200 rounded-xl flex justify-between p-4 my-2">
        <img src="${productImg}" alt="${productTitle}" class="w-10" />
        <div>
          <h2 class="font-bold">${productTitle}</h2>
          <h2>${productPrice.toFixed(2)} TK</h2>
        </div>
      </div>
    `;

    cartContainer.append(newCart);


// update total quantity
const totalQuantityElem = getElement("total-quantity");
let totalQuantity = parseInt(totalQuantityElem.innerText);
totalQuantity += 1;
totalQuantityElem.innerText = totalQuantity;

// grab the clear button
const clearBtn = document.getElementById("clear-cart");

clearBtn.addEventListener("click", function() {
  // reset total price
  getElement("total-price").innerText = "0";

  // reset total quantity
  getElement("total-quantity").innerText = "0";

  // clear all cart items
  const cartContainer = document.querySelector(".cart-container");
  cartContainer.innerHTML = ""; 
});

    
  });
}




// traditional way

// document.getElementById("card-btn-1").addEventListener("click", function () {
//   const title = getElement("card-title-1").innerText;
//   const price = parseFloat(getElement("card-price-1").innerText);

//   const totalPrice = parseFloat(getElement("total-price").innerText);

//   const currentTotal = price + totalPrice;

//   getElement("total-price").innerText = currentTotal.toFixed(2);

//   const cartContainer = document.querySelector(".cart-container"); // ✅ fixed

//   // ekta div banao
//   const newCart = document.createElement("div");

//   newCart.innerHTML = `
//    <div class="bg-gray-200 rounded-xl flex justify-between p-4">
//                     <img src="./assets/kitchen-1.png" alt="" class="w-10" />

//                     <div class="">
//                       <h2 class="font-bold">${title}</h2>
//                       <h2 class=""> ${price}Tk</h2>
//                     </div>
//                   </div>
//   `;

//   // added in cart container
//   cartContainer.append(newCart);
// });
