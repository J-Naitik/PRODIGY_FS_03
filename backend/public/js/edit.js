// Function to update the total amount in the cart
function updateCartTotal() {
  let total = 0;

  const cart = JSON.parse(localStorage.getItem('cart') || '[]');
  cart.forEach(item => {
    total += item.price * item.quantity;
  });

  const cartTotalElement = document.getElementById('cart-total-amount');
  if (cartTotalElement) {
    cartTotalElement.innerText = `Total Amount: ₹${total.toFixed(2)}`;
  }
}

// Add product to cart or update the quantity
function addToCart(productId, productName, productPrice, quantity, productImage, productAbout) {
  let cart = JSON.parse(localStorage.getItem('cart') || '[]');

  const existingItem = cart.find(item => item.productId === productId);
  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    cart.push({ productId, name: productName, price: productPrice, quantity, image: productImage, about: productAbout });
  }

  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartTotal();  // Update cart total on the page
}

// Initialize all quantity buttons
document.querySelectorAll('.qty-btn').forEach(button => {
  button.addEventListener('click', function () {
    const productId = this.getAttribute('data-id');
    const quantityElement = document.getElementById(`qty-${productId}`);
    const totalAmountElement = document.getElementById(`total-${productId}`);
    let currentQuantity = parseInt(quantityElement.innerText);
    const productPrice = parseFloat(
      this.closest('.card-header').querySelector('.stars').innerText.replace('₹', '').trim()
    );
    const productName = this.closest('.testimonial-card').querySelector('h2').innerText;
    const productImage = this.closest('.testimonial-card').querySelector('img').getAttribute('src');
    const productAbout = this.closest('.testimonial-card').querySelector('.about-text').innerText;

    if (this.classList.contains('plus')) {
      currentQuantity++;
    } else if (this.classList.contains('minus') && currentQuantity > 0) {
      currentQuantity--;
    }

    quantityElement.innerText = currentQuantity;

    if (currentQuantity > 0) {
      totalAmountElement.innerText = `₹${(productPrice * currentQuantity).toFixed(2)}`;
    } else {
      totalAmountElement.innerText = '';
    }

    addToCart(productId, productName, productPrice, currentQuantity, productImage, productAbout);
  });
});
