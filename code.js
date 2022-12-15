const menu = [
  {
    category: "brekfast",
    name: "World Art Dining - Cook house",
    img : "./images/tim-chow-MhpxHv0FKtE-unsplash.jpg",
    food_types: ["North Indian", "Chinese", "Italian", "Desserts", "Beverages"],
    ratings: "",
    isExlusive: false,
    delivery_time: "58 mins",
    price_for_two: 1000
  },
  {
    category: "brekfast",
    name: "Maestro A Restro Cafe",
    img : "./images/shanice-garcia-TO69trRWlrI-unsplash.jpg",
    food_types: ["North Indian", "Chinese", "Beverages"],
    ratings: "4.2",
    isExlusive: false,
    delivery_time: "47 mins",
    price_for_two: 1200
  },
  {
    category: "brekfast",
    name: "Cocoberry",
    img : "./images/ralph-ravi-kayden-J5eOPeFqcuY-unsplash.jpg",
    food_types: ["Desserts"],
    ratings: "4.2",
    isExlusive: true,
    delivery_time: "52 mins",
    price_for_two: 200
  },
  {
    category: "brekfast",
    name: "Haiyan",
    img : "./images/premium_photo-1669557208969-737d6ab1c9fd.jpg",
    food_types: ["North Indian", "Chinese"],
    ratings: "",
    isExlusive: false,
    delivery_time: "31 mins",
    price_for_two: 400
  },
  {
    category: "brekfast",
    name: "Lotus Leaf",
    img : "./images/pixzolo-photography-ZB8NK8cB4EE-unsplash.jpg",
    food_types: ["North Indian", "Chinese", "Desserts"],
    ratings: "4.1",
    isExlusive: false,
    delivery_time: "35 mins",
    price_for_two: 700
  },
  {
    category: "brekfast",
    name: "The Big Bun",
    img : "./images/mariana-medvedeva-fk6IiypMWss-unsplash.jpg",
    food_types: ["Fast Food"],
    ratings: "4.3",
    isExlusive: false,
    delivery_time: "42 mins",
    price_for_two: 300
  },
  {
    category: "brekfast",
    name: "Moti Mahal Delux",
    img : "./images/louis-hansel-mVZ_gjm_TOk-unsplash.jpg",
    food_types: [
      "North Indian",
      "Muglai",
      "Continental",
      "Desserts",
      "Beverages"
    ],
    ratings: "4.7",
    isExlusive: true,
    delivery_time: "78 mins",
    price_for_two: 1100
  },
  {
    category: "brekfast",
    name: "Hot Spot Mini Shop",
    img : "./images/lacey-williams-V9LP6-y8e5w-unsplash.jpg",
    food_types: [
      "Fast Food",
      "Snacks",
      "North Indian",
      "Chinese",
      "Italian",
      "Desserts",
      "Beverages"
    ],
    ratings: "4.0",
    isExlusive: true,
    delivery_time: "108 mins",
    price_for_two: 1300
  },
  {
    category: "brekfast",
    name: "KAKE DA HOTEL",
    img : "./images/brandy-s-mENa6dWQIKo-unsplash.jpg",
    food_types: ["North Indian", "Desserts", "Beverages"],
    ratings: "4.8",
    isExlusive: false,
    delivery_time: "58 mins",
    price_for_two: 350
  },
  {
    category: "brekfast",
    name: "Creme N Crisp",
    img : "https://unsplash.com/photos/pqZbNwCJ-dA",
    food_types: ["Bakery"],
    ratings: "3.7",
    isExlusive: true,
    delivery_time: "25 mins",
    price_for_two: 400
  },
  
  {
    category: "lunch",
    name: "Hot Spot Mini Shop",
    img : "./images/emile-mbunzama-x4Rh_hHK3Ao-unsplash.jpg",
    food_types: [
      "Fast Food",
      "Snacks",
      "North Indian",
      "Chinese",
      "Italian",
      "Desserts",
      "Beverages"
    ],
    ratings: "4.0",
    isExlusive: true,
    delivery_time: "108 mins",
    price_for_two: 1300
  },
  {
    category: "lunch",
    name: "Maestro A Restro Cafe",
    img : "./images/elena-leya-KPDh-ELUHDw-unsplash.jpg",
    food_types: ["North Indian", "Chinese", "Beverages"],
    ratings: "4.2",
    isExlusive: false,
    delivery_time: "47 mins",
    price_for_two: 1200
  },
  {
    category: "lunch",
    name: "Cocoberry",
    img: "./images/elena-leya-CNk74-V1BG8-unsplash.jpg",
    food_types: ["Desserts"],
    ratings: "4.2",
    isExlusive: true,
    delivery_time: "52 mins",
    price_for_two: 200
  },
  {
    category: "lunch",
    name: "World Art Dining - Cook house",
    img : "./images/eaters-collective-Gg5-K-mJwuQ-unsplash.jpg",
    food_types: ["North Indian", "Chinese", "Italian", "Desserts", "Beverages"],
    ratings: "",
    isExlusive: false,
    delivery_time: "58 mins",
    price_for_two: 1000
  },
  {
    category: "lunch",
    name: "Haiyan",
    img : "./images/eaters-collective-Gg5-K-mJwuQ-unsplash.jpg",
    food_types: ["North Indian", "Chinese"],
    ratings: "",
    isExlusive: false,
    delivery_time: "31 mins",
    price_for_two: 400
  },
  {
    category: "lunch",
    name: "KAKE DA HOTEL",
    img : "./images/brooke-lark-R18ecx07b3c-unsplash.jpg",
    food_types: ["North Indian", "Desserts", "Beverages"],
    ratings: "4.8",
    isExlusive: false,
    delivery_time: "58 mins",
    price_for_two: 350
  },
  {
    category: "dinner",
    img : "./images/ferks-guare-zxPLJJz2o_c-unsplash.jpg",
    name: "Hot Spot Mini Shop",
    food_types: [
      "Fast Food",
      "Snacks",
      "North Indian",
      "Chinese",
      "Italian",
      "Desserts",
      "Beverages"
    ],
    ratings: "4.0",
    isExlusive: false,
    delivery_time: "108 mins",
    price_for_two: 1300
  },
  {
    category: "dinner",
    name: "Maestro A Restro Cafe",
    img : "./images/brooke-lark-R18ecx07b3c-unsplash.jpg",
    food_types: ["North Indian", "Chinese", "Beverages"],
    ratings: "4.2",
    isExlusive: true,
    delivery_time: "47 mins",
    price_for_two: 1200
  },
  {
    category: "dinner",
    name: "Cocoberry",
    img : "./images/dinner_4.jpg",
    food_types: ["Desserts"],
    ratings: "4.2",
    isExlusive: false,
    delivery_time: "52 mins",
    price_for_two: 200
  },
  {
    category: "dinner",
    name: "KAKE DA HOTEL",
    img : "./images/dinner_3.jpg",
    food_types: ["North Indian", "Desserts", "Beverages"],
    ratings: "4.8",
    isExlusive: false,
    delivery_time: "58 mins",
    price_for_two: 350
  },
  {
    category: "dinner",
    name: "Maestro A Restro Cafe",
    img : "./images/dinner_1.jpg",
    food_types: ["North Indian", "Chinese", "Beverages"],
    ratings: "4.2",
    isExlusive: false,
    delivery_time: "47 mins",
    price_for_two: 1200
  },
  {
    category: "dinner",
    name: "Lotus Leaf",
    img : "./images/dinner_2.jpg",
    food_types: ["North Indian", "Chinese", "Desserts"],
    ratings: "3.1",
    isExlusive: true,
    delivery_time: "135 mins",
    price_for_two: 1700
  }
];



let filterBtns = document.querySelectorAll('.btn');
filterBtns.forEach(function(btn){
  btn.addEventListener("click", function(e){
     let category = e.target.dataset.id;
     let categories = menu.filter(item => {
      return item.category == category;
     })

     if(category == 'all'){
      displayMenuItems(menu);
     }else{
      displayMenuItems(categories);
     }
  })
})


const menuContainer = document.querySelector('.card-grid')
window.addEventListener('DOMContentLoaded',function(){
  displayMenuItems(menu);
})


function displayMenuItems(menuItem){
    let display = menuItem.map(function(item){
      return `<div class="card">
      <div class="card-header card-image">
        <img src=${item.img} alt=${item.name}>
      </div>
      <div class="card-body">
      ${item.name}
      <h6>RS : ${item.price_for_two}</h6> 
      <h5> Delivery Time : ${item.delivery_time}</h5>
      <h5>Rating : ${item.ratings}</h5>
      </div>
      <div class="card-footer">
        <button class="btn">Order</button>
        <button class="btn btn-outline">Add WishList</button>
      </div> 
    </div>`
  });

  display = display.join("");
  menuContainer.innerHTML = display;
}
  


