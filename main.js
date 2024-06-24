var productTiles = [];

getClothing();

function createProductTile(product) {
    console.log("create new tile");

    // Create product tile and attach it to the Content of the page
    var productTile= document.createElement("div");
    productTile.className = "product";
    productTile.id = "productId-" + product.id;
    document.getElementsByClassName("content")[0].appendChild(productTile);

    // Create the inner elements of the product tile
     var productTileImage=document.createElement("img");
     productTileImage.src= product.imageUrl;
     productTile.appendChild(productTileImage);

     var productTileTitle=document.createElement("div");
     productTileTitle.className="product-title";
     productTileTitle.innerHTML = product.name;    
     productTile.appendChild(productTileTitle);

     var productTilePrice=document.createElement("div");
     productTilePrice.className=productTilePrice;
     productTilePrice.innerHTML=`&euro;${product.price}`;
     productTile.appendChild(productTilePrice);

    productTiles.push(productTile);

    return productTile;
}



function removeAll() {
   console.log("remove old tiles");

   productTiles.forEach(removeElement)
}

function removeElement(element) {
    element.remove();
}

//function involving ajax calling
function getClothing(filter, sort) {
    console.log('calling API');
    
    const apiUrl = 'https://localhost:7004';
    const controllerRoute = 'api/clothing';
    const endpointRoute = '';

    let query = '';

    if (filter) {
        query = `?filter=${filter}`;
    }

    if (sort) {
        if (filter) {
            query += `&sortingOption=${sort}`;
        } else {
            query = `?sortingOption=${sort}`;
        }
    }

    let fullUrl = `${apiUrl}/${controllerRoute}/${endpointRoute}${query}`;
    $.get(fullUrl, getClothingCallBack);
}

//function call back
function getClothingCallBack(data){
    console.log('API responded');
    console.log(data);
    removeAll();
    data.forEach(createProductTile);
}

function searchProducts() {
    const filter = document.getElementById('search').value;
    var sort = document.getElementById("sorting").value;

    console.log(`Searching by filter '${filter}'`);
    console.log(sort);

    getClothing(filter, sort);

}




