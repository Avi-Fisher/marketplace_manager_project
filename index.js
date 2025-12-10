import db from "./db.js"

export function addProduct(title, price, description, category) {

    let product = {
        id: db.length === 0 ? 1 : Math.max(...db.map(o => o.id)),
        title: title,
        price: price,
        description: description,
        category: category
    }

    db.push(product)

    console.log("The product has been successfully added");
}







export function filterOnCategory(category) {
    let categoryItems = db.filter(item => item.category.toLowerCase() == category.toLowerCase())
    if (categoryItems.length <= 0) {
        console.log("not found! ");

    }
    else {
        console.log(categoryItems);

    }
}



export function editPrice(id, newPrice) {

    let find = db.find(o => o.id == id)

    if (find == undefined) {
        console.log("The product not found");
    } else {
        find = newPrice
        console.log("Save new price");
    }
}



export function removeProduct(id) {

    db = db.filter((product) => {
        if (product.id != id) {
            return product
        }
    })

    console.log("The product has been removed successfully");
}


export function showByPriceOrder(){
    let sortDB = db
    sortDB.sort((a,b) => b.price - a.price)
    console.table(sortDB);   
}



