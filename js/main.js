// ajax methods

// new XMLHttpRequest()
// abort()
// getResponseHeader()
// getAllResponseHeaders()
// open(method, url, async, user, password)
// send()
// send(String)
// sendRequestHeader()

const getAllData = document.getElementById('get-all');
const getClothes = document.getElementById('get-clothes');
const content = document.querySelector('.main-content main .container');

// get all data
const allData = function data() {

    // create the request 
    const myRequest = new XMLHttpRequest();

    // open the request
    myRequest.open('get', 'https://api.escuelajs.co/api/v1/products/', true);

    // send the request
    myRequest.send();

    //load the request
    myRequest.onload = function() {
        products = JSON.parse(this.responseText);
        console.log(products);
        for (let product of products) {
            const result = document.createElement('section');
            result.className = 'card-container' ;
            result.innerHTML = `
                <section class="card">
                        <section class="brand-image">
                            <img src="${product.category.image}" alt="img">
                        </section>
                        <section class="about">
                            <article class="category-name">
                                <span>${product.category.name}</span>
                            </article>
                            <article class="price">
                                <span>price: ${product.price}</span>
                            </article>
                            <article class="discrip">
                                <p>${product.description}</p>
                            </article>
                        </section>
                    </section>
            `;
            content.appendChild(result)
        };
    };
};

getAllData.addEventListener('click', (e) => {
    e.preventDefault;
    allData();
});


// get clothes
const clothes = function data() {

    // create the request 
    const myRequest = new XMLHttpRequest();

    // open the request
    myRequest.open('get', 'https://api.escuelajs.co/api/v1/categories/1', true);

    // send the request
    myRequest.send();

    //load the request
    myRequest.onload = function() {
        products = JSON.parse(this.responseText);
        console.log(products);
        const result = document.createElement('section');
        result.className = 'card-container' ;
        result.innerHTML = `
            <section class="card">
                    <section class="brand-image">
                        <img src="${products.image}" alt="img">
                    </section>
                    <section class="about">
                        <article class="category-name">
                            <span>${products.name}</span>
                        </article>
                    </section>
                </section>
        `;
        content.appendChild(result)
    };
};

getClothes.addEventListener('click', (e) => {
    e.preventDefault;
    clothes();
});