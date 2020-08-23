const menu = [
  {
    id: 1,
    title: "Grits & Bacon",
    category: "breakfast",
    price: 7.99,
    img: "IMG/grits.jpg",
    desc: "abcdefg"
  },
  {
    id: 2,
    title: "Cheeseburger & Fries",
    category: "lunch",
    price: 9.99,
    img: "IMG/cheeseburger.jpg",
    desc: "abcdefg"
  },
  {
    id: 3,
    title: "Vegetarian Lasagna",
    category: "dinner",
    price: "13.99",
    img: "IMG/lasagna.jpg",
    desc: "abcdefg"
  },
  {
    id: 4,
    title: "Pepperoni Pizza",
    category: "lunch",
    price: 10.99,
    img: "IMG/pizza.jpeg",
    desc: "abcdefg"
  },
  {
    id: 5,
    title: "Cheesy Omelette",
    category: "breakfast",
    price: 5.99,
    img: "IMG/omelette.jpeg",
    desc: "abcdefg"
  },
  {
    id: 6,
    title: "Belgian Waffles",
    category: "breakfast",
    price: 7.99,
    img: "IMG/waffles.jpg",
    desc: ""
  },
  {
    id: 7,
    title: "Chicken Salad",
    category: "lunch",
    price: 7.99,
    img: "IMG/chicken-salad.jpg",
    desc: "abcdefg"
  },
  {
    id: 8,
    title: "Ribeye Steak",
    category: "dinner",
    price: 14.99,
    img: "IMG/steak.jpg",
    desc: "xxx"
  },
  {
    id: 9,
    title: "Chicken Fried Rice",
    category: "dinner",
    price: 10.99,
    img: "IMG/fried-rice.jpg",
    desc: "xxx"
  },
  {
    id: 10,
    title: "Chicken Alfredo",
    category: "dinner",
    price: 11.99,
    img: "IMG/alfredo.jpg",
    desc: "xxx"
  }
]

const sectionCenter = document.querySelector('.section-center');
const container = document.querySelector('.btn-container');

//load items
window.addEventListener('DOMContentLoaded', () => {
  displayMenuItems(menu);
  displayMenuButtons();
});

//display menu items
function displayMenuItems(menuItems) {

  let displayMenu = menuItems.map(item => {

    return `<article class="menu-item">
              <img src=${item.img} class="photo" alt=${item.title} />
              <div class="item-info">
                <header>
                  <h4>${item.title}</h4>
                  <h4 class="price">$${item.price}</h4>
                </header>
                <p class="item-text">
                  ${item.desc}
                </p>
              </div>
          </article>`
  });

  displayMenu = displayMenu.join("")
  sectionCenter.innerHTML = displayMenu;
}

//display menu buttons
function displayMenuButtons() {

  /*must revisit this code*/
  const categories = menu.reduce((values, item) => {
    if (!values.includes(item.category)) {
      values.push(item.category);
    }
    return values;
  },
    ["all"]
  );
  /*must revisit this code*/

  const categoryBtns = categories.map(category => {
    return `<button class="filter-btn" type="button" data-id=${category}>
      ${category}
      </button>`;
  }).join("");

  container.innerHTML = categoryBtns;

  const filterBtns = container.querySelectorAll(".filter-btn");
  // filter items
  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter(function (menuItem) {
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      if (category === "all") {
        displayMenuItems(menu);
      } else {
        displayMenuItems(menuCategory);
      }
    });
  });
}