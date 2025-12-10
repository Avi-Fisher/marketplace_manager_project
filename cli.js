import input from "./uttils.js";
import db from "./db.js"
import {filterOnCategory,addProduct,editPrice,removeProduct,showByPriceOrder} from "./index.js"




export default function printCli() {
    console.log(`    === marketplace manager ===
        1. append item to sell
        2. edit an exist product
        3. show all items
        4. show information on items
        5. delete an item 
        6. filter on about category
        0. exit\n`);
}
let flag = true
while (flag) {
    printCli()
    let choice = input("please enter your choice from menu: ")

    switch (choice) {
        case "1":
            let title = input("\nenter a title of your items: ")
            let price = input("enter a price of your product: ")
            let description = input("enter a description of your product: ")
            let category = input("enter a category of this item: ")
            addProduct(title, price, description, category)
            break 

        case "2":
            let findId = input("\nplease enter product id: ")
            let newPrice = input("please enter a new price: ")
            editPrice(findId, newPrice)
            break

        case "3":
            showByPriceOrder()
            break

        case "4":
            let itemId = input("\nplease enter your item id: ")
            showByPriceDetails(itemId)
            break 

        case "5":
            let id = input("\nplease enter item id do you want to delete: ")
            removeProduct(id)
            break

        case "6":
            let filterCategory = input("enter your category do you want: ")
            filterOnCategory(filterCategory)
            break

        case "0":
            flag = false
            break
        default:
            console.log("\ninvalid input please enter from menu!\n ");

    }
}
