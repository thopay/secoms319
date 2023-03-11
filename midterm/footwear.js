fetch("./data.json")
    .then(response => response.json())
    .then(data => dataToHTML(data));

function dataToHTML(data){
    let mainContainer = document.getElementById("ul1");
    for (let i = 0; i < data.Footwear.length; i++) {
        let productId = data.Footwear[i].productId;
        let productName = data.Footwear[i].productName;
        let brand = data.Footwear[i].brand;
        let desc = data.Footwear[i].desc;
        let price = data.Footwear[i].price;
        let url = data.Footwear[i].url;
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
