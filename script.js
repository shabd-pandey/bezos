let usdamount= document.getElementById("usdamount");
let symbol= document.getElementById("symbol");
const select= document.getElementById("money_change");
select.addEventListener("change",updatecurrency);
function updatecurrency(){
    if(select.value==="india"){
         usdamount.innerText=Number(usdamount.innerText)*95;
        symbol.innerText="₹";
    }
    else if(select.value==="china")
    {
        usdamount.innerText=Number(usdamount.innerText)*2;
         symbol.innerText="*";
    }
    else{
        usdamount.innerText=Number(251700000000);
        symbol.innerText="$";
    }
};

 const products =[
    {
        name: "Koru superyacht",
        image: "images/koru1.jpg",
        price: 485000000
    },
       {
        name: "Abeona",
        image: "images/abeona support yatch bezos.jpg",
        price: 485000000
    },
       {
        name: "GulfstreamG700",
        image: "images/Gulfstream-G700-1090x500.jpg",
        price: 80000000
    },
       {
        name: "GulfstreamG650E",
        image: "images/Gulfstream-G650E-1090x500.jpg",
        price: 65000000
    },
       


];

products.forEach(function(products,index){
    document.getElementById("products").innerHTML +=`

    <div class="card" id="cards" onclick="card_info()">
        <img src="${products.image}"class="img_product">
        <h1 class="product_name">${products.name}</h1>
        <div class="price_style">
        <p>$</p>
        <p id="product_price_${index}">${products.price}</p>
        </div>
            <div class="buttons_2">
            <button id="sell" onclick="sell(${index})">sell</button>
            <input type = "number" id="product_count_${index}" value="0" min="0" readonly class="product_count">   
            <button id="buy" onclick="buy(${index})">buy</button>
            </div>
            </div>
    `;
});

function sell(index)
{
    let product_count=document.getElementById(`product_count_${index}`);
    if(product_count.value > 0)
        {
    let usdamount= document.getElementById("usdamount");
    usdamount.innerText=Number(usdamount.innerText)+products[index].price;
    product_count.value--;}
   

};
function buy(index)
{
    let usdamount= document.getElementById("usdamount");
    usdamount.innerText=Number(usdamount.innerText)-products[index].price;
    let product_count=document.getElementById(`product_count_${index}`);
    product_count.value++;

};

function card_info()
{
    
}

 

