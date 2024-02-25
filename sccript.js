
   // Place holder items names,description,prices and images
   
listshop = [
    {
        "name": "Logitech G pro x lightspeed",
        "price": 225 ,
        "quantity": 11,
        "description":`
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
        Aliquam corporis pariatur autem blanditiis obcaecati fugiat
        `,
        "image": "./images/Log g pro x.jpg",
    },
    {
        "name": "Razer Basilisk Ultimate",
        "price": 215,
        "quantity": 21,
        "description":`
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
        Aliquam corporis pariatur autem blanditiis obcaecati fugiat
        `,
        "image": "./images/basilisk Ult.jpg",
    },
    {
        "name": "Glorious Model O Wireless",
        "price": 215,
        "quantity": 21,
        "description":`
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
        Aliquam corporis pariatur autem blanditiis obcaecati fugiat
        `,
        "image": "./images/Glorious O wrls.jpg",
    },
    {
        "name": "Logitech G502 LightSpeed",
        "price": 215,
        "quantity": 21,
        "description":`
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
        Aliquam corporis pariatur autem blanditiis obcaecati fugiat
        `,
        "image": "./images/log 502 litspd.png",
    },
    {
        "name": "ROG Strix G713",
        "price": 245,
        "quantity": 21,
        "description":`
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
        Aliquam corporis pariatur autem blanditiis obcaecati fugiat`,
        "image": "./images/rog g713.jpg",
    },
    {
        "name": "Razer Blade 16",
        "price": 255,
        "quantity": 31,
        "description":`
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
        Aliquam corporis pariatur autem blanditiis obcaecati fugiat
        `,
        "image": "./images/blade16.png",
    },
    {
        "name" : "Lenovo Ideapad Gaming 3",
        "price" : 160 , 
        "quantity" : 5,
        "description":`
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
        Aliquam corporis pariatur autem blanditiis obcaecati fugiat
          `,
        "image" : "./images/ideapad 3.jpg"
    },
    {
        "name": "Legion Pro 7i",
        "price": 215,
        "quantity": 21,
        "description":`
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
        Aliquam corporis pariatur autem blanditiis obcaecati fugiat
        `,
        "image": "./images/legion Pro7i.jpg",
    },
    {
        "name" : "Razer Kraken V3 Pro",
        "price" : 135 , 
        "quantity" : 8,
        "description":`
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
        Aliquam corporis pariatur autem blanditiis obcaecati fugiat
          `,
        "image" : "./images/razer Kraken.jpg"
    },
    {
        "name": "Redragon Zeus X RGB",
        "price": 215,
        "quantity": 21,
        "description":`
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
        Aliquam corporis pariatur autem blanditiis obcaecati fugiat
        `,
        "image": "./images/redragon zeus x.jpg",
    }, 
    {
        "name": "ROG Strix GO Core",
        "price": 215,
        "quantity": 21,
        "description":`
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
        Aliquam corporis pariatur autem blanditiis obcaecati fugiat
        `,
        "image": "./images/strix go core.jpg",
    },
    {
        "name": "HyperX Cloud 2",
        "price": 215,
        "quantity": 21,
        "description":`
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
        Aliquam corporis pariatur autem blanditiis obcaecati fugiat
        `,
        "image": "./images/cloud 2.png",
    }
]

window.onload = function dom(){
    let itemsContainer = document.getElementsByClassName("indx")[0]
    let shopcontainer = document.getElementsByClassName("cartt")[0]
    let buyContainer = document.getElementsByClassName("cart-buy")[0]
    let bought = document.createElement("div")
    var OVRprice=0;
    bought.setAttribute("class","ty")

    for (let listItem of listshop){
        let newArticle = document.createElement("div")
        newArticle.setAttribute("class", "item")
        newArticle.innerHTML = `
        <div  class="col">
        <div id="${listItem.name}" class="card" style="width: 18rem;">
          <img src="${listItem.image}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${listItem.name}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${listItem.description}</h6>
            <p class="card-text">${listItem.price}$</p>
            <button type="button" class="btn btn-light carter">Add To Cart</button>
          </div>
        </div>
        </div>

        `
       itemsContainer.append(newArticle)

       newArticle.getElementsByClassName("carter")[0].addEventListener("click",()=>{
       let cartcontainer = document.createElement("div")
        cartcontainer.setAttribute("class", "itmm")
        cartcontainer.innerHTML = `
        <div  class="col">
        <div id="${listItem.name}" class="card" style="width: 18rem;">
          <img src="${listItem.image}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${listItem.name}</h5>
            <div class="rapper">
                <div class="stocker">
                     <span class="minuus">-</span>
                     <span class="numm">01</span>
                     <span class="pluss">+</span>
                </div>
              </div>
            <p class="card-textt">${listItem.price}$</p>
            <button type="button" class="btn btn-danger">Remove</button>
          </div>
        </div>
        </div>

        `
        shopcontainer.append(cartcontainer)
        
        let plus=cartcontainer.querySelector(".pluss"),
        minus=cartcontainer.querySelector(".minuus"),
        num=cartcontainer.querySelector(".numm");
        OVRprice+=listItem.price
        updateTotal(OVRprice)


        let a =1;
        let p=listItem.price,
        t=cartcontainer.querySelector(".card-textt");

        plus.addEventListener("click",()=>{

            if(a<listItem.quantity)
            {
                a++;
                a=(a<10)?"0"+a:a;
                num.innerText=a;
                updateTotal(OVRprice);
                p=listItem.price*a;
                let pr=p+"$";
                t.innerText=pr;
                OVRprice+=listItem.price;
                updateTotal(OVRprice)

            }
        })
        minus.addEventListener("click",()=>{
            if (a>1)
            {
                a--;
                a=(a<10)?"0"+a:a;
                num.innerText=a;
                p=listItem.price*a;
                let pr=p+"$";
                t.innerText=pr;
                OVRprice-=listItem.price;
                updateTotal(OVRprice)
            }
        })
        cartcontainer.getElementsByClassName("btn-danger")[0].addEventListener("click",()=>{
            cartcontainer.remove();
            let prix = parseFloat(cartcontainer.getElementsByClassName("card-textt")[0].innerText.replace("$",""));
            OVRprice -= prix;
            updateTotal(OVRprice)
            if (OVRprice==0){
                shopcontainer.remove();
                butbuy.remove();
                bought.innerHTML= `<h3> Cart is empty </h3>`
                document.getElementsByClassName("cart-buy")[0].append(bought)
                let prix = parseFloat(cartcontainer.getElementsByClassName("card-textt")[0].innerText.replace("$",""));
                OVRprice -= prix;
                updateTotal(OVRprice)
            } 
            
        })
       })
       
       
}
let butbuy = document.createElement("div")
        
butbuy.innerHTML=`
        <h3 class="total" style="margin-top:1em";> </h3>
        <button type="button" class="btn btn-light buyer">Buy</button>
        `
    buyContainer.append(butbuy)
    
    
    updateTotal(OVRprice)

    
        butbuy.getElementsByClassName("buyer")[0].addEventListener("click",()=>{
        shopcontainer.remove();
        butbuy.remove();
            if(OVRprice==0)
            {
                bought.innerHTML= `<a style="text-decoration: none; color: rgb(152, 152, 152);" href="#shop"><h3> Cart is Empty,</h3>
                <h5>Click >here< to Add items</h5></a>`
                document.getElementsByClassName("cart-buy")[0].append(bought)
            }
            else{
                bought.innerHTML= `<h3> Thank You For Your Purchase!</h3>`
                document.getElementsByClassName("cart-buy")[0].append(bought)
            }
        

    })

}

function updateTotal(newTotal){
    document.getElementsByClassName("total")[0].innerHTML = `Price = ${newTotal}$`;
    
}