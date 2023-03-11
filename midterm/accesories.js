fetch("./data.json")
    .then(response => response.json())
    .then(data => dataToHTML(data));

function dataToHTML(data){
    let mainContainer = document.getElementById("ul1");
    for (let i = 0; i < data.Accesories.length; i++) {
        let productId = data.Accesories[i].productId;
        let productName = data.Accesories[i].productName;
        let brand = data.Accesories[i].brand;
        let desc = data.Accesories[i].desc;
        let price = data.Accesories[i].price;
        let url = data.Accesories[i].url;
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
