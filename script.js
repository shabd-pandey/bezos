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
        price: 485000000,
        type: "yatch"
    },
       {
        name: "Abeona",
        image: "images/abeona support yatch bezos.jpg",
        price: 485000000,
        type: "yatch"
    },
       {
        name: "GulfstreamG700",
        image: "images/Gulfstream-G700-1090x500.jpg",
        price: 80000000,
        type: "jet" 
    },
       {
        name: "GulfstreamG650Er (2019)",
        image: "images/gulfsteam 2019.jpg",
        price: 65000000,
        type: "jet" 
    },
    {
        name:"GulfstreamG650ER (2015)",
        image: "images/gulfsteam g650er.jpg",
        price:39000000,
        type: "jet" 
            },

    {
        name:"Pilatus PC-24",
        image: "images/pilatus pc24.webp",
        price: 12000000,
        type: "jet"
            },
    {
        name:"Dassault Falcon 900EX",
        image: "images/dassault falcon 900ex.jpg",
        price:41000000,
        type: "jet"
            },
    {
        name:"Koenigsegg CCXR Trevita",
        image: "images/koenigsegg ccxr trevita.avif",
        price:4800000,
        type: "car"
            },
    {
        name:"Lamborghini Veneno Roadster",
        image: "images/lamborghini veneno.webp",
        price: 4500000,
        type: "car"
            },
     {
        name:"W Motors Lykan HyperSport",
        image: "images/W Motors Lykan HyperSport.jpg",
        price: 3400000,
        type: "car"
            },
      {
        name:"Bugatti Veyron Mansory",
        image: "images/Bugatti Veyron Mansory.webp",
        price: 800000,
        type: "car"
            },
                           
        {
        name:"Ferrari Pininfarina Sergio",
        image: "images/Ferrari Pininfarina Sergio.webp",
        price: 3000000,
        type: "car"
            },
            
        {
        name:"Cadillac Escalade",
        image: "images/Cadillac Escalade black.jpg",
        price: 80000,
        type: "car"
            },
        {
        name:"Lincoln MKT Stretch Limousine",
        image: "images/Lincoln MKT stretch limousine.jpg",
        price: 150000,
        type: "car",
            }, 
        
      
         {
        name:"Mercedes-Benz S450",
        image: "images/mercedes benz s450.jpg",
        price: 95000,
        type: "car"
            }, 
         {
        name:"Honda Accord (1996/1997coupe)",
        image: "images/1997 Honda Accord coupe.jpg",
        price: 150000,
        type: "car"
            }, 
         
                    


];
function renderproduct(filtered)
{
filtered.forEach(function(product,index){
    document.getElementById("products").innerHTML += `
   

    <div class="card"><a href="product_info.html" >
        <img src="${product.image}"class="img_product">
        <h1 class="product_name">${product.name}</h1>
        <div class="price_style">
        <p>$</p>
        <p id="product_price_${index}">${product.price}</p>
        </div>
            <div class="buttons_2">
            <button id="sell" onclick="sell(${index})">sell</button>
            <input type = "number" id="product_count_${index}" value="0" min="0" readonly class="product_count">   
            <button id="buy" onclick="buy(${index})">buy</button>
            </div>
            </div></a>
    `;
});}
 

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

function showProducts(type)
{


    const filtered = products.filter(product => product.type === type);
    console.log(filtered)
    renderproduct(filtered);
    
};







 

