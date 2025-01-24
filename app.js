const products = [
    {
        variantImage: "https://drinkwildwonder.com/cdn/shop/files/Banana_1_540x.png?v=1721349284",
        title: "Banana Queen",
        description: "Our fab collab with Nymphia Wind features sweet banana puree, decadent vanilla bean, and fresh brewed marigold flowers. Banana cream for the Banana Queen is a toast to Asian heritage and a celebration of this iconic yellow fruit.",
        bundlePrice: 42,
        pack: 12,
        type: "PREBIOTIC + PROBIOTIC SPARKLING DRINK",
        extraImages: {
            imageFirst: "https://drinkwildwonder.com/cdn/shop/files/Banana_5_540x.png?v=1721406234",
            imageSecond: "https://drinkwildwonder.com/cdn/shop/files/Banana_6_540x.png?v=1721406235",
            imageThird: "https://drinkwildwonder.com/cdn/shop/files/Banana_7_540x.png?v=1721410792"
        },
    },
    {
        variantImage: "https://drinkwildwonder.com/cdn/shop/files/Raspberry_1_360x.png?v=1714540347",
        title: "Raspberry Lychee",
        description: "Jammy raspberry puree, juicy lychees, and fresh brewed honeysuckle flowers reminiscent of your favorite gummy treats.",
        bundlePrice: 42,
        pack: 12,
        type: "PREBIOTIC + PROBIOTIC SPARKLING DRINK",
        extraImages: {
            imageFirst: "https://drinkwildwonder.com/cdn/shop/files/Raspberry_3_360x.png?v=1714540350",
            imageSecond: "https://drinkwildwonder.com/cdn/shop/files/Raspberry_4_540x.png?v=1714540350",
            imageThird: "https://drinkwildwonder.com/cdn/shop/files/Raspberry_1_540x.png?v=1714540347"
        },
    },


    {
        variantImage: " https://drinkwildwonder.com/cdn/shop/files/Strawberry_1_540x.png?v=1714540479",
        title: "Strawberry Passion",
        description: "Ripe strawberries and tart passion fruit meet freshly brewed hibiscus flowers for a sweet and tropical refresher.",
        bundlePrice: 42,
        pack: 12,
        type: "PREBIOTIC + PROBIOTIC SPARKLING DRINK",
        extraImages: {
            imageFirst: "https://drinkwildwonder.com/cdn/shop/files/Strawberry_1_360x.png?v=1714540479",
            imageSecond: "https://drinkwildwonder.com/cdn/shop/files/Strawberry_4_540x.png?v=1714540660",
            imageThird: "https://drinkwildwonder.com/cdn/shop/files/Strawberry_3_360x.png?v=1714540660"
        },
    },
    {
        variantImage: "https://drinkwildwonder.com/cdn/shop/files/Variety_Pack_-_Shark_Tank_2_540x.png?v=1724416169",
        title: "Shark Tank Bundle",
        description: "Try our Shark-Tank featured flavors that had all the Sharks raving... and landed us a deal! Includes 4 cans of each: Raspberry Lychee, Pineapple Paradise, Strawberry Passion, Mango Gold, Guava Rose and Peach Ginger Discount applied at check out.One promo per order.",
        bundlePrice: 74,
        pack: 24,
        type: "PREBIOTIC + PROBIOTIC SPARKLING DRINK",
        extraImages: {
            imageFirst: "https://drinkwildwonder.com/cdn/shop/files/Variety_Pack_-_Shark_Tank_2_540x.png?v=1724416169",
            imageSecond: "https://drinkwildwonder.com/cdn/shop/products/RosaLiSharkTank_540x.png?v=1724416177",
            imageThird: "https://drinkwildwonder.com/cdn/shop/files/Variety_Pack_-_6_Flavors_12_Cans___3_540x.png?v=1724415944"
        },
    },
    {
        variantImage: "https://drinkwildwonder.com/cdn/shop/files/Variety_Pack_-_6_Flavors_12_Cans_2_540x.png?v=1724415930",
        title: "Variety Pack",
        description: "Can't decide on just one flavor? Experience all 6 prebiotic + probiotics flavors and all their gut friendly benefits! Includes 2 cans of each: Raspberry Lychee, Pineapple Paradise, Strawberry Passion, Mango Gold, Guava Rose and Peach Ginger.",
        bundlePrice: 44,
        pack: 12,
        type: "BEST SELLER PACK",
        extraImages: {
            imageFirst: "https://drinkwildwonder.com/cdn/shop/files/Variety_Pack_-_6_Flavors_12_Cans_2_540x.png?v=1724415930",
            imageSecond: "https://drinkwildwonder.com/cdn/shop/files/Variety_Pack_-_6_Flavors_12_Cans___2_540x.png?v=1724415944",
            imageThird: "https://drinkwildwonder.com/cdn/shop/files/Variety_Pack_-_6_Flavors_12_Cans___3_540x.png?v=1724415944"
        },
    },
    {
        variantImage: " https://drinkwildwonder.com/cdn/shop/files/VarietyPack-BotanicalBundle_540x.png?v=1714541381",
        title: "Botanical Bouquet",
        description: "A delightful dozen featuring our bestselling floral and fruity favorites.Includes 4 cans of each: Raspberry Lychee, Guava Rose, Strawberry Passion",
        bundlePrice: 44,
        type: "VARIETY PACK",
        pack: 12,
        extraImages: {
            imageFirst: "https://drinkwildwonder.com/cdn/shop/files/Variety_Pack_-_6_Flavors_12_Cans_2_540x.png?v=1724415930",
            imageSecond: "https://drinkwildwonder.com/cdn/shop/files/Variety_Pack_-_6_Flavors_12_Cans___2_540x.png?v=1724415944",
            imageThird: "https://drinkwildwonder.com/cdn/shop/files/Variety_Pack_-_6_Flavors_12_Cans___3_540x.png?v=1724415944"
        },
    },


];

document.addEventListener("DOMContentLoaded", () => {
    const wrapper = document.querySelector('.variant_details_wrapper');

    products.forEach((product, index) => {
        const variantItem = document.createElement('div');
        variantItem.classList.add('variant-item');

        // Set data attributes
        variantItem.setAttribute('data-title', product.title);
        variantItem.setAttribute('data-description', product.description);
        variantItem.setAttribute('data-bundle-price', product.bundlePrice);
        variantItem.setAttribute('data-pack', product.pack);
        variantItem.setAttribute('data-type', product.type);
        variantItem.setAttribute('data-variant-image', product.variantImage);

        // Add the active class to the first item
        if (index === 0) {
            variantItem.classList.add('variant-item-active');
        }

        // Add content
        variantItem.innerHTML = `
        <img src="${product.variantImage}" alt="${product.title}" class="swatches-product">
      `;

        wrapper.appendChild(variantItem);
    });


    // Add click event listener
    wrapper.addEventListener('click', (e) => {
        const clickedItem = e.target.closest('.variant-item');

        if (clickedItem) {
            // Remove the active class from all items
            document.querySelectorAll('.variant-item').forEach(item => {
                item.classList.remove('variant-item-active');
            });

            // Add the active class to the clicked item
            clickedItem.classList.add('variant-item-active');
            // Access all data attributes
            const data = clickedItem.dataset;

            // Log data attributes
            console.log({
                title: data.title,
                description: data.description,
                bundlePrice: data.bundlePrice,
                pack: data.pack,
                type: data.type,
                variantImage: data.variantImage
            });

            // Set data attributes to the HTML elements
            document.querySelector('.product-radio-price').textContent = `$${data.bundlePrice}`;
            document.querySelector('.product-radio-price-sub').textContent = `$${data.bundlePrice}`;
            document.querySelector('.product-single__title-1').textContent = data.title;
            document.querySelector('.product-single__title').textContent = data.title;
            document.querySelector('.product-description').textContent = data.description;
            document.querySelector('.product-slogan').textContent = data.type;
            document.querySelector('.product-can-quantity').textContent = data.pack;
            document.querySelector('.product-radio-pack').textContent = data.pack;


            // Set the variant image
            const thumbnailImage = document.querySelector('.thumbnail-main-img img');
            if (thumbnailImage) {
                thumbnailImage.src = data.variantImage;
                thumbnailImage.alt = data.title; // Set the alt text for accessibility
            }


        }
    });




    // Select all small thumbnail images
    // const thumbnails = document.querySelectorAll(".thumbnail-small-img img");
    // // Select the main image container
    // const mainImage = document.querySelector(".thumbnail-main-img img");

    // // Add click event listener to each thumbnail
    // thumbnails.forEach((thumbnail) => {
    //     thumbnail.addEventListener("click", () => {
    //         // Get the source of the clicked thumbnail image
    //         const newSrc = thumbnail.getAttribute("src");

    //         // Update the main image's src with the thumbnail's src
    //         mainImage.setAttribute("src", newSrc);
    //     });
    // });



    const decrementBtn = document.querySelector(".decrement");
    const incrementBtn = document.querySelector(".increment");
    const quantityInput = document.querySelector(".quantity input");
    const shippingBar = document.querySelector(".free_shipping_bar");

    // Set initial value
    let quantity = 1;

    // Update input value and handle visibility of shipping-bar
    const updateQuantity = (newValue) => {
        quantity = newValue;
        quantityInput.value = quantity;

        // Hide the shipping-baar div if quantity is 2
        if (quantity >= 2) {
            shippingBar.style.display = "none";
        } else {
            shippingBar.style.display = "flex";
        }
    };

    // Increment button functionality
    incrementBtn.addEventListener("click", () => {
        if (quantity < 20) {
            updateQuantity(quantity + 1);
        }
    });

    // Decrement button functionality
    decrementBtn.addEventListener("click", () => {
        if (quantity > 1) {
            updateQuantity(quantity - 1);
        }
    });

    // Prevent manual input and ensure valid values
    quantityInput.addEventListener("input", () => {
        const inputValue = parseInt(quantityInput.value, 10);

        if (!isNaN(inputValue) && inputValue >= 1 && inputValue <= 20) {
            updateQuantity(inputValue);
        } else {
            // Reset to last valid quantity
            quantityInput.value = quantity;
        }
    });


    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 4,
        spaceBetween: 20,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            dynamicBullets: true,
            clickable: true,
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 10,
            },
            375: {
                slidesPerView: 1,
                spaceBetween: 10,
            },
            640: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            1024: {
                slidesPerView: 4,
                spaceBetween: 20,
            },
        },
    });

    var swiper = new Swiper(".lychee-peek", {
        slidesPerView: 5,
        spaceBetween: 40,

        pagination: {
            el: ".swiper-pagination",
            dynamicBullets: true,
            clickable: true,
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 10,
            },
            375: {
                slidesPerView: 1,
                spaceBetween: 10,
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            1024: {
                slidesPerView: 5,
                spaceBetween: 20,
            },
        },
    });

    var swiper = new Swiper(".instafeed", {
        slidesPerView: 6,
        spaceBetween: 10,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 10,
            },
            375: {
                slidesPerView: 1,
                spaceBetween: 10,
            },
            640: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            1024: {
                slidesPerView: 6,
                spaceBetween: 20,
            },
        },
    });
    var swiper = new Swiper(".thumbnai-slider", {
        slidesPerView: 3,
        spaceBetween: 10,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 10,
            },
            375: {
                slidesPerView: 1,
                spaceBetween: 10,
            },
            640: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
        },
    });



    document.getElementById("defaultOpen").click();


});
function openCity(evt, cityName) {
    var i, tabcontent, tablinks;

    // Hide all tabcontent elements
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Remove "active" class from all tablinks
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the selected tab content
    document.getElementById(cityName).style.display = "block";

    // Add "active" class to the clicked tab
    evt.currentTarget.className += " active";
}
