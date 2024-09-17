

const myData = function data() {

    // create the request 
    const myRequest = new XMLHttpRequest();

    // open the request
    myRequest.open('get', 'https://api.escuelajs.co/api/v1/products', true);

    // send the request
    myRequest.send();

    //load the request
    myRequest.onload = function() {
        products = JSON.parse(this.responseText);
        console.log(products);
        let count = 0;
        for (let product of products)   {
            if(count=>3){
             document.getElementsByClassName(".all-paragraph").innerHTML= `
                
                <div class="first-para">
                 <div class="image-first-para">
                 <img src="${product.category.image}" alt="img">
                 </div><br>
                 <div class="line" style="height: 1px; border: 0.3px solid black;border-color: #e5e7eb";></div>
                      <div class="text-first-para">
                <span>${product.price}</span><br>
                <span>${product.description}</span>
                </div> `;
                            count++;}
            
        }
    }
}

myData();