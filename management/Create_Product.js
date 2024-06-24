//   "https://localhost:7004/api/clothing"

$('document').ready(docReady);

function docReady() {
    console.log('document ready')

    document
        .forms["newProductForm"]
        .addEventListener("submit", e => {
            console.log('submitting form');

            e.preventDefault();
            const form = document.forms["newProductForm"];
            
            const url = 'https://localhost:7004/api/clothing';

            let data = new Object();
            data.name = form["name"].value;
            data.price = form["price"].value;
            data.imageUrl = form["imageUrl"].value;

            console.log(data);

            $.post(url, data);
        }); 
}