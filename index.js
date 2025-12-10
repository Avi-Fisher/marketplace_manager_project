import db from "db.js"

export function addProduct(title,price,description,category){

    let product = {
        id: db.length === 0  ? 1 : Math.max(...db.map(o => o.id)),
        title : title,
        price : price,
        description : description, 
        category : category
    }

    db.push(product)

    console.log("The product has been successfully added");

}
