fetch("./data.json")
    .then(response => response.json())
    .then(data => dataToHTML(data));

function dataToHTML(data){
    let mainContainer = document.getElementById("ul1");
    for (let i = 0; i < data.Clothing.length; i++) {
        let productId = data.Clothing[i].productId;
        let productName = data.Clothing[i].productName;
        let brand = data.Clothing[i].brand;
        let desc = data.Clothing[i].desc;
        let price = data.Clothing[i].price;
        let url = data.Clothing[i].url;
        let myli = document.createElement("li");
        myli.innerHTML = `
        <li>
            <img src=${url}>
            <h3>${productName}</h3>
            <p>By ${brand}</p>
            <p>${desc}</p>
            <button>Add to Cart $${price}</button>
        </li> `;
        mainContainer.appendChild(myli);
    }
}
