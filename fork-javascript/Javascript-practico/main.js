//JAVASCRIPT PRACTICO
const Menu_Email = document.querySelector(".navbar-email");
const Menu_Desktop = document.querySelector(".desktop-menu");
const Menu_Burger_Icon = document.querySelector(".menu");
const Menu_Mobile = document.querySelector(".mobile-menu");
const Menu_car_icon = document.querySelector(".navbar-shopping-cart");
const Menu_Order_Shop = document.querySelector(".product-detail");
const Cards_Container=document.querySelector(".cards-container")

Menu_Email.addEventListener("click", Toggle_BY_Email);
Menu_Burger_Icon.addEventListener("click", Toggle_BY_Burger);
Menu_car_icon.addEventListener("click", Toggle_By_Shop_Car);

function Toggle_BY_Email() {
    const Is_Shop_Car_Icon_Closed = Menu_Order_Shop.classList.contains("Inactive");
    if (!Is_Shop_Car_Icon_Closed) {
        Menu_Order_Shop.classList.add("Inactive");
    }
    Menu_Desktop.classList.toggle("Inactive");
}

function Toggle_BY_Burger() {
    const Is_Shop_Car_Icon_Closed = Menu_Order_Shop.classList.contains("Inactive");
    if (!Is_Shop_Car_Icon_Closed) {
        Menu_Order_Shop.classList.add("Inactive");
    }
    Menu_Mobile.classList.toggle("Inactive");
}

function Toggle_By_Shop_Car() {
    const Is_Menu_Mobile_Closed = Menu_Mobile.classList.contains("Inactive");
    const Is_Menu_Desktop_Closed = Menu_Desktop.classList.contains("Inactive");

    if (!Is_Menu_Mobile_Closed) {
        Menu_Mobile.classList.add("Inactive");
    }
    else if (!Is_Menu_Desktop_Closed) {
        Menu_Desktop.classList.add("Inactive");
    }

    Menu_Order_Shop.classList.toggle("Inactive");
}

const Product_List = [];
Product_List.push({
    name: "Bicicleta",
    price: 220,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

Product_List.push({
    name: "Televisor-32",
    price: 500,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm_XWT3RcZlmTrJ2wbVKPfNWtbgGXdlw2JRg&usqp=CAU",
});

Product_List.push({
    name: "Laptop",
    price: 800,
    image: "https://i.ytimg.com/vi/LykS0TRSHLY/maxresdefault.jpg",
});

function Products_Items(arr){
    for (product of Product_List) {
    
        const Product_Card= document.createElement("div");
        Product_Card.classList.add("product-card");
    
        const Product_Img_1=document.createElement("img");
        Product_Img_1.setAttribute("src",product.image);
    
        const Product_Info = document.createElement("div");
        Product_Info.classList.add("product-info");
    
        const Product_Div_Empty = document.createElement("div");
    
        const Product_Price=document.createElement("p");
        Product_Price.innerText= "$"+ product.price;
    
        const Product_Name=document.createElement("p");
        Product_Name.innerText=product.name;
    
        const Product_Figure=document.createElement("figure");
        const Product_Img_2=document.createElement("img");
        Product_Img_2.setAttribute("src","Imagenes/icons/bt_add_to_cart.svg");
    
        Product_Figure.appendChild(Product_Img_2);
        Product_Div_Empty.append(Product_Price,Product_Name);
        Product_Info.append(Product_Div_Empty,Product_Figure);
        Product_Card.append(Product_Img_1,Product_Info);
    
        Cards_Container.appendChild(Product_Card);
    }
}

Products_Items(Product_List);


