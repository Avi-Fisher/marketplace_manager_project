import db from "./db.js";

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
    
    if(index !== "undefined"){
        db.splice(db[index],1)
        console.log("Item remove");
        
    }else{
        console.log("Item not found");
    }
}

