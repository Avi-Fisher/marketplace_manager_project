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
        find.price = newPrice
        console.log("Save new price");
    }
}



export function removeProduct(id) {

    const index = db.findIndex(item => item.id == id)

    if (index !== "undefined") {
        db.splice(db[index], 1)
        console.log("Item remove");

    } else {
        console.log("Item not found");
    }
}



export function showProductDetails(id) {

    const prodect = db.find(item => item.id == id)

    console.log("=== product details ===")

export function showByPriceOrder(){
    let sortDB = db
    sortDB.sort((a,b)=> b.price - a.price)
    console.table(sortDB) 
}






    for (const [key, value] of Object.entries(prodect)) {
        console.log(`${key}: ${value}`);
    }
}
