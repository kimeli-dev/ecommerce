// Wait for the DOM to load before executing JavaScript code
document.addEventListener("DOMContentLoaded", () => {
    // Get the product list container
    const productList = document.getElementById("product-list");

    // Fetch products from the XML file
    fetch("products.xml")
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.text();
        })
        .then(data => {
            // Parse the XML data
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(data, "application/xml");
            const products = xmlDoc.getElementsByTagName("product");

            // Loop through each product and create a card dynamically
            Array.from(products).forEach(product => {
                const name = product.getElementsByTagName("name")[0].textContent;
                const price = product.getElementsByTagName("price")[0].textContent;
                const image = product.getElementsByTagName("image")[0].textContent;
                const description = product.getElementsByTagName("description")[0].textContent;

                // Create a product card
                const productCard = document.createElement("div");
                productCard.classList.add("product-card");

                // Add content to the card
                productCard.innerHTML = `
                    <img src="${image}" alt="${name}">
                    <h3>${name}</h3>
                    <p>${description}</p>
                    <p><strong>Price: $${price}</strong></p>
                    <button class="add-to-cart-button">Add to Cart</button>
                `;

                // Append the card to the product list
                productList.appendChild(productCard);
            });

            // Add event listeners for "Add to Cart" buttons
            document.querySelectorAll(".add-to-cart-button").forEach(button => {
                button.addEventListener("click", () => {
                    // Change button text and color when clicked
                    button.classList.add("added");
                    button.textContent = "Added!";
                    button.style.backgroundColor = "#17a2b8"; // Change color after adding

                    // Revert button text and color after a delay
                    setTimeout(() => {
                        button.classList.remove("added");
                        button.textContent = "Add to Cart";
                        button.style.backgroundColor = "#28a745"; // Revert color
                    }, 2000); // Revert after delay
                    console.log("Item added to cart!");
                });
            });
        })
        .catch(error => console.error("Error loading XML:", error));

    // Opposite scrolling effect for background image
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;
        const backgroundElement = document.querySelector('.opposite-scroll-background');

        if (backgroundElement) {
            // Reverse the scroll direction by subtracting scroll position
            backgroundElement.style.backgroundPosition = 'center ' + (-scrollPosition * 0.5) + 'px';
        }
    });
});
