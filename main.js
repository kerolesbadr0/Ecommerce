const shoppingCart = document.querySelector("#shopping-cart")
const btnBrowsecategory = document.querySelector("#btn-broswe-category");
const browseCategorylist = document.querySelector("#browse-category-list");
const rightSide = document.querySelector("#right-side")
btnBrowsecategory.addEventListener("click", () => {
    browseCategorylist.classList.toggle("active");
    document.querySelector("#arrow-bottom").classList.toggle("active")
});
shoppingCart.addEventListener("click" , ()=> {
    rightSide.classList.add("active");
    document.querySelector("#close-right-side").addEventListener("click", () => {
        rightSide.classList.remove("active");
    })
})
fetch("./product.json").then(response => response.json())
.then(data => {
    const swiperWrapper = document.querySelector("#swiperWrapper")
    const swiperElectronics = document.querySelector("#swiper-electronics")
    const swiperAppliances = document.querySelector("#swiper-appliances")
    const swiperMobiles = document.querySelector("#swiper-mobiles")
    data.forEach(product => {
        if(product.old_price) {
            const discount = Math.floor((product.old_price - product.price) / product.old_price * 100)
            swiperWrapper.innerHTML += `
            <div class="swiper-slide py-2 px-4 rounded-3xl border-2 border-[#07020228] border-solid group h-[380px] max-sm:w-fit max-sm:">
            <span class="bg-red-700 p-1 rounded-md absolute top-2 right-0 flex items-center justify-center text-white ">${parseInt(discount)}%</span>
            <img src="${product.img}" alt="PC" class="my-2 mx-auto group-hover:scale-110 duration-300 cursor-pointer w-32 h-32 object-contain" loading="lazy">
            <div class="flex items-center gap-2">
            <svg width="20" height="20" fill="#ff8716" stroke="#ff8716" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="cursor-pointer">
            <path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
                                <svg width="20" height="20" fill="#ff8716" stroke="#ff8716" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="cursor-pointer">
                                    <path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                </svg>
                                <svg width="20" height="20" fill="#ff8716" stroke="#ff8716" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="cursor-pointer">
                                    <path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                </svg>
                                <svg width="20" height="20" fill="#ff8716" stroke="#ff8716" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="cursor-pointer">
                                    <path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                    </svg>
                                    <svg width="20" height="20" fill="#ff8716" stroke="#ff8716" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="cursor-pointer">
                                    <path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                </svg>
                            </div>
                            <p class="mt-6 max-w-56">${product.name}</p>
                            <div>
                                <span class="text-[#FF8716] font-bold text-xl mr-1">${product.price}</span>
                                </div>
                                <div class="flex gap-2 items-center mt-2">
                                <button data-id="${product.id}" class="add-cart font-semibold bg-[#FF8716] text-white px-5 py-4 rounded-md flex items-center capitalize [&.active]:bg-transparent [&.active]:border-2 [&.active]:border-[#FF8716] [&.active]:text-black group ">
                                add to cart
                                <svg class="group-[&.active]:stroke-[#FF8716]" width="30" height="30" fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="group-[&.active]:stroke-[#FF8716]">
                                        <path d="M9 20a1 1 0 1 0 0 2 1 1 0 1 0 0-2z"></path>
                                        <path d="M20 20a1 1 0 1 0 0 2 1 1 0 1 0 0-2z"></path>
                                        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                                        </svg>
                                </button>
                                        <svg id="favourite" class="cursor-pointer [&.active]:fill-[#FF8716] [&.active]:stroke-[#FF8716] " width="30" height="30" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                                </svg>
                            </div>
                        </div>
            `
        }
        if(product.catetory == "electronics") {
            const oldPrice = product.old_price ? `<p>${product.old_price}</p>` : "";
            swiperElectronics.innerHTML += `
            <div class="swiper-slide relative p-4 rounded-3xl shadow-2xl border-2 border-[#07020228] border-solid group h-[380px]" id="swiper-slide">
            <img src="${product.img}" alt="PC" class="my-2 mx-auto group-hover:scale-110 duration-300 cursor-pointer w-36 h-36 object-contain" loading="lazy">
            <div class="flex gap-2">
            <svg width="20" height="20" fill="#ff8716" stroke="#ff8716" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="cursor-pointer">
            <path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg width="20" height="20" fill="#ff8716" stroke="#ff8716" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="cursor-pointer">
            <path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg width="20" height="20" fill="#ff8716" stroke="#ff8716" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="cursor-pointer">
            <path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                </svg>
                                <svg width="20" height="20" fill="#ff8716" stroke="#ff8716" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="cursor-pointer">
                                <path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                </svg>
                                <svg width="20" height="20" fill="#ff8716" stroke="#ff8716" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="cursor-pointer">
                                    <path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                </svg>
                                </div>
                                <p class="my-2 h-10">${product.name}</p>
                                <div class="flex items-center gap-4">
                                <span class="text-[#FF8716] font-bold text-xl mr-1">${product.price}</span>
                                </div>
                                <div class="flex gap-2 items-center mt-2">
                            <button data-id="${product.id}" class="add-cart font-semibold bg-[#FF8716] text-white px-5 py-4 rounded-md flex items-center capitalize [&.active]:bg-transparent [&.active]:border-2 [&.active]:border-[#FF8716] [&.active]:text-black group ">
                                add to cart
                                <svg class="group-[&.active]:stroke-[#FF8716]" width="30" height="30" fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="group-[&.active]:stroke-[#FF8716]">
                                        <path d="M9 20a1 1 0 1 0 0 2 1 1 0 1 0 0-2z"></path>
                                        <path d="M20 20a1 1 0 1 0 0 2 1 1 0 1 0 0-2z"></path>
                                        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                                        </svg>
                                </button>
                                        <svg id="favourite" class="cursor-pointer [&.active]:fill-[#FF8716] [&.active]:stroke-[#FF8716] " width="30" height="30" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                                        </svg>
                                        </div>
                                        </div>
                                        `
                                    }
        if(product.catetory == "appliances") {
            const oldPrice = product.old_price ? `<p>${product.old_price}</p>` : "";
            swiperAppliances.innerHTML += `
            <div class="swiper-slide relative p-4 rounded-3xl shadow-2xl border-2 border-[#07020228] border-solid group h-[380px] " id="swiper-slide">
            <img src="${product.img}" alt="PC" class="my-2 mx-auto group-hover:scale-110 duration-300 cursor-pointer w-32 h-32 object-contain" loading="lazy">
            <div class="flex gap-2">
                                <svg width="20" height="20" fill="#ff8716" stroke="#ff8716" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="cursor-pointer">
                                <path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                </svg>
                                <svg width="20" height="20" fill="#ff8716" stroke="#ff8716" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="cursor-pointer">
                                <path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                </svg>
                                <svg width="20" height="20" fill="#ff8716" stroke="#ff8716" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="cursor-pointer">
                                <path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                </svg>
                                <svg width="20" height="20" fill="#ff8716" stroke="#ff8716" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="cursor-pointer">
                                <path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                </svg>
                                <svg width="20" height="20" fill="#ff8716" stroke="#ff8716" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="cursor-pointer">
                                    <path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                    </svg>
                                    </div>
                                    <p class="my-2 h-16">${product.name}</p>
                                    <div class="flex gap-2 items-center">
                                    <span class="text-[#FF8716] font-bold text-xl mr-1">${product.price}</span>
                                    </div>
                                    <div class="flex gap-2 items-center mt-2">
                                <button data-id="${product.id}" class="add-cart font-semibold bg-[#FF8716] text-white px-5 py-4 rounded-md flex items-center capitalize [&.active]:bg-transparent [&.active]:border-2 [&.active]:border-[#FF8716] [&.active]:text-black group ">
                                add to cart
                                <svg class="group-[&.active]:stroke-[#FF8716]" width="30" height="30" fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="group-[&.active]:stroke-[#FF8716]">
                                        <path d="M9 20a1 1 0 1 0 0 2 1 1 0 1 0 0-2z"></path>
                                        <path d="M20 20a1 1 0 1 0 0 2 1 1 0 1 0 0-2z"></path>
                                        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                                        </svg>
                                </button>
                                <svg id="favourite" class="cursor-pointer [&.active]:fill-[#FF8716] [&.active]:stroke-[#FF8716] " width="30" height="30" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                                </svg>
                                </div>
                                </div>
                                `
        }
        if(product.catetory == "mobiles") {
            const oldPrice = product.old_price ? `<p>${product.old_price}</p>` : "";
            swiperMobiles.innerHTML += `
            <div class="swiper-slide relative p-4 rounded-3xl shadow-2xl border-2 border-[#07020228] border-solid group h-[380px]" id="swiper-slide">
            <img src="${product.img}" alt="PC" class="my-2 mx-auto group-hover:scale-110 duration-300 cursor-pointer w-32 h-32 object-contain" loading="lazy">
            <div class="flex gap-2">
            <svg width="20" height="20" fill="#ff8716" stroke="#ff8716" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="cursor-pointer">
            <path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg width="20" height="20" fill="#ff8716" stroke="#ff8716" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="cursor-pointer">
            <path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg width="20" height="20" fill="#ff8716" stroke="#ff8716" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="cursor-pointer">
            <path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg width="20" height="20" fill="#ff8716" stroke="#ff8716" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="cursor-pointer">
                                    <path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                    </svg>
                                    <svg width="20" height="20" fill="#ff8716" stroke="#ff8716" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="cursor-pointer">
                                    <path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                </svg>
                            </div>
                            <p class="h-16">${product.name}</p>
                            <div class="flex gap-2 items-center">
                                <span class="text-[#FF8716] font-bold text-xl mr-1">${product.price}</span>
                                </div>
                            <div class="flex gap-2 items-center mt-2">
            <button data-id="${product.id}" class="add-cart font-semibold bg-[#FF8716] text-white px-5 py-4 rounded-md flex items-center capitalize [&.active]:bg-transparent [&.active]:border-2 [&.active]:border-[#FF8716] [&.active]:text-black group ">
                                add to cart
                                <svg class="group-[&.active]:stroke-[#FF8716]" width="30" height="30" fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="group-[&.active]:stroke-[#FF8716]">
                                        <path d="M9 20a1 1 0 1 0 0 2 1 1 0 1 0 0-2z"></path>
                                        <path d="M20 20a1 1 0 1 0 0 2 1 1 0 1 0 0-2z"></path>
                                        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                                        </svg>
                                </button>
                                <svg id="favourite" class="cursor-pointer [&.active]:fill-[#FF8716] [&.active]:stroke-[#FF8716] " width="30" height="30" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                                </svg>
                                </div>
                                </div>
                                `
        }
    })  
})
fetch("./product.json")
.then(res => res.json())
.then(data => {
    const addCartBtns = document.querySelectorAll(".add-cart") 
    
    addCartBtns.forEach(btn => {
        btn.addEventListener("click",(e) => {
            const productID = e.target.getAttribute("data-id")
            const selectedProduct = data.find(product => product.id == productID)
            addToCart(selectedProduct)
            const allBtns = document.querySelectorAll(`.add-cart[data-id="${productID}"]`) 
            allBtns.forEach(btn => {
                btn.classList.add("active")
                btn.style.pointerEvents = "none"
            })
        })
    })
    const favouriteBtn = document.querySelectorAll("#favourite")
    let numberLove = document.querySelector("#icon-love")
    favouriteBtn.forEach(btn => {
        btn.addEventListener("click", ()=> {
            btn.classList.toggle("active")
            if(btn.classList.contains("active")){
                numberLove.innerHTML++
            } else {
                numberLove.innerHTML--
            }
        })
    })
})
function addToCart(product) {
    let cart = JSON.parse(localStorage.getItem("cart")) || []
    cart.push({...product , quantity:1  })
    localStorage.setItem('cart', JSON.stringify(cart))
    updateCart()
}
function updateCart() {
    const cartsItemsContainer = document.querySelector("#cart-items-container")
    let total_price = 0
    let total_count = 0
    let cart = JSON.parse(localStorage.getItem("cart")) || []
    cartsItemsContainer.innerHTML = ""
    cart.forEach((item , index ) =>{
        const totalPrice = item.price * item.quantity
        total_price +=  totalPrice  
        total_count +=  item.quantity

        cartsItemsContainer.innerHTML += `
        <div class="my-2 ml-2 flex gap-2 border-b-2 border-gray-300 rounded-lg p-2" id="cart-item" >
                            <div>
                                <img src="${item.img}" alt="Product" loading="lazy" class="">
                            </div>
                            <div>
                                <p class="text-sm text-ellipsis ">${item.name}</p>
                                <span id="price" class="block opacity-50 font-bold mb-2">$${totalPrice}</span>
                                <button aria-label="decrement" data-index="${index}" id="decrement" class="cursor-pointer text-lg mr-8 w-5 h-5 bg-gray-300 leading-5">-</button>	
                                <span class="text-[#FF8716]" id="quantity">${item.quantity}</span>
                                <button aria-label="increment" data-index="${index}" id="increment" class="cursor-pointer text-lg ml-8 w-5 h-5 bg-gray-300 leading-5">+</button>
                            </div>
                            <svg data-index="${index}" class="cursor-pointer hover:stroke-[red] hover:scale-110 duration-300 trash" width="50" height="30" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3 6h18"></path>
                                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                            </svg>
                        </div>
        `
    })
    const iconTrash = document.querySelectorAll(".trash");
        iconTrash.forEach( e => {
            e.addEventListener("click" , (event) => {
                const dataIndex = event.target.closest(".trash").getAttribute("data-index")
                removeFromCart(dataIndex)
            })
        })

        const increment = document.querySelectorAll("#increment")
        const decrement = document.querySelectorAll("#decrement")
        increment.forEach(e => {
            e.addEventListener("click" , (event)=> {
                const dataIndex = event.target.getAttribute("data-index")
                incrementItem(dataIndex)
            })
        })
        decrement.forEach(e => {
            e.addEventListener("click" , (event)=> {
                const dataIndex = event.target.getAttribute("data-index")
                decrementItem(dataIndex)
            })
        })
        let numberShop = document.querySelector("#icon-shop")
        let numbetItem  = document.querySelector("#number-item")
        let totalPrice  = document.querySelector(".total_price")
        numbetItem.innerHTML = total_count
        numberShop.innerHTML = total_count
        totalPrice.innerHTML = total_price
}
function incrementItem(e){
    let cart = JSON.parse(localStorage.getItem("cart")) || [] 
    cart[e].quantity +=1
    localStorage.setItem("cart", JSON.stringify(cart))
    updateCart()
}
function decrementItem(e){
    let cart = JSON.parse(localStorage.getItem("cart")) || []
    cart[e].quantity -=1
    localStorage.setItem("cart", JSON.stringify(cart))
if(cart[e].quantity == 0){
        removeFromCart(e)
    }
    updateCart()
}
function removeFromCart(item) {
    let cart = JSON.parse(localStorage.getItem("cart")) || []
    const removePro = cart.splice(item , 1)
    localStorage.setItem("cart", JSON.stringify(cart))
    updateCart()
}
updateCart()