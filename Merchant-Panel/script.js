const update = (() => {
  // Utility functions
  const getText = (selector) =>
    document.querySelector(selector)?.textContent.trim() || null;
  const getAttribute = (selector, attribute) =>
    document.querySelector(selector)?.getAttribute(attribute) || null;


  // Extract details
  const sellerName = getText("#sellerProfileTriggerId");
  if (sellerName != null) {
    sellerLink = getAttribute("#sellerProfileTriggerId", "href");
    sellerId = sellerLink?.match(/seller=([A-Z0-9]+)/)?.[1] || null;
  }
  else {
    sellerId = getAttribute("#merchantID", "value");
  }

  const productId = getAttribute("#ASIN", "value");
  const productName = getText("#productTitle");

  const priceWhole = getText(".a-price-whole");
  const priceFraction = getText(".a-price-fraction");
  const price = priceWhole && priceFraction ? `${priceWhole}.${priceFraction}` : priceWhole || null;

  const imageLink = getAttribute("#landingImage", "src");

  // Display the results
  const result = {
    Seller_Name: sellerName,
    Seller_ID: sellerId,
    Product_ID: productId,
    Product_Name: productName,
    Price: price,
    Image_Link: imageLink,
  };

  console.table(result);

  return result;
})

const result = update();

const productImage = document.getElementById('image-link');
result.Image_Link = "./Bottle.webp"
productImage.innerHTML = `<img id="image-link" src="${result.Image_Link}" alt="" class="product-image">`

result.Product_Name = "Apple iPhone 13 (128GB) - Midnight";
const truncatedTitle = result.Product_Name.length > 20
  ? result.Product_Name.slice(0, 30) + '...'
  : result.Product_Name;
const productTitle = document.getElementById('product-title');
productTitle.innerHTML = `<span class="tooltip" title="${result.Product_Name}">${truncatedTitle}</span>`;


const originalPrice = document.getElementById('original-price');
result.Price = 100;
originalPrice.innerText = result.Price;

const discountPercentage = document.getElementById('price-amount');
let percent = 13;
discountPercentage.innerHTML = `${percent}%`;

const priceAmount = document.getElementById('discount-percentage');
priceAmount.innerText =
  "₹" + parseInt(result.Price - (result.Price * percent) / 100);


const closeBtn = document.getElementById('close-btn').addEventListener('click', () => {
  if (window.confirm("Are you sure you want to close this Pop-up?")) {
    window.close();
  }
});

// Rating 
  // Star Rating Functionality
  const starsDisplay = document.querySelector('.stars-display');
  const starInputs = document.querySelectorAll('.star-input');
  const ratingValue = document.querySelector('.rating-value');
  const starWidth = 28; // Width of each star including padding

  // Set initial rating
  function setInitialRating(rating) {
    const width = (rating / 5) * 100;
    starsDisplay.style.width = `${width}%`;
    ratingValue.textContent = `${rating} out of 5`;
  }

  // Initialize with 4.8 rating
  setInitialRating(4.8);

  // Handle star hover and click
  starInputs.forEach((input, index) => {
    const starPosition = index + 1;

    input.addEventListener('mouseover', () => {
      const width = (starPosition / 5) * 100;
      starsDisplay.style.width = `${width}%`;
    });

    input.addEventListener('mouseout', () => {
      // Restore to selected rating or initial rating
      const selectedInput = document.querySelector('input[name="rating"]:checked');
      const rating = selectedInput ? selectedInput.value : 4.8;
      setInitialRating(rating);
    });

    input.addEventListener('click', () => {
      const width = (starPosition / 5) * 100;
      starsDisplay.style.width = `${width}%`;
      ratingValue.textContent = `${starPosition} out of 5`;
    });
  });

  // Handle hover on entire rating component
  const starsInput = document.querySelector('.stars-input');
  starsInput.addEventListener('mousemove', (e) => {
    const rect = starsInput.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const starCount = Math.ceil(x / starWidth);
    const width = (starCount / 5) * 100;

    if (starCount > 0 && starCount <= 5) {
      starsDisplay.style.width = `${width}%`;
    }
  });




