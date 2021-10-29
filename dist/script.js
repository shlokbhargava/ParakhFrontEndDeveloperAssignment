data = [
    {
        "name": "Cosmetics",
        "productList": [
            {
                "name": "Hair Oil",
                "price": 122
            },
            {
                "name": "Face wash",
                "price": 123
            }
        ]
    },
    {
        "name": "Household",
        "productList": [
            {
                "name": "Hair Oil",
                "price": 122
            },
            {
                "name": "Face wash",
                "price": 123
            }
        ]
    }
]

cart = [

]

for (let i = 0; i < data.length; i++) {
    const mainContent = document.getElementById("main-content")

    // Adding main headings
    const heading = document.createElement("h4")
    const node = document.createTextNode(data[i].name)
    heading.appendChild(node)

    // Adding a horizontal line
    mainContent.appendChild(heading)
    const line = document.createElement("hr")
    mainContent.appendChild(line)

    for(let j = 0; j < data[i].productList.length; j++) {

        // Adding outer div (box) from displaying element
        const container = document.createElement("div")

        // Creating para's for adding name and price of items
        const para1 = document.createElement("p")
        const para2 = document.createElement("p")
        const content1 = document.createTextNode("Name: " + data[i].productList[j].name)
        const content2 = document.createTextNode("Price: " + data[i].productList[j].price + ".00")
        para1.appendChild(content1)
        para2.appendChild(content2)
        container.appendChild(para1)
        container.appendChild(para2)

        // Add to cart button
        const button1 = document.createElement("button")
        button1.classList.add("buttons")
        const button1content = document.createTextNode("Add to the cart")
        button1.appendChild(button1content)

        // Remove from cart button
        const button2 = document.createElement("button")
        const button2content = document.createTextNode("Remove from cart")
        button2.appendChild(button2content)

        // Adding button functionality (Add to cart)
        button1.onclick = function() {
            cart.push(data[i].productList[j])
            console.log("Product Added to the cart.")
            console.log(cart)
        }

        // Adding button functionality (Remove from cart)
        button2.onclick = function() {
            const index = cart.indexOf(data[i].productList[j]);
            // Remove only if item is already present in the cart
            if (index > -1) {
                cart.splice(index, 1);
                console.log("Product removed from the cart.")
            }
            console.log(cart)
        }

        container.appendChild(button1)
        container.appendChild(button2)

        mainContent.appendChild(container)
    }

}