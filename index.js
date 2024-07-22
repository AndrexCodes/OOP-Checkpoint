class Product{
    constructor(id, name, price){
        this.id = id
        this.name = name
        this.price = price
    }
}

class Cart{
    constructor(){
        this.product = []
        this.quantity = 0
    }

    CalcTotalPrice(){
        return this.product.reduce((accumulator, currentItem) => accumulator + currentItem.price, 0)
    }

    getTotalProducts(){
        return this.product.length
    }

    addProduct(new_product){
        this.product.push(new_product)
    }

    removeProduct(product_id){
        this.product = this.product.filter((product) => product.id !== product_id)
    }

    displayCart(){
        this.product.forEach((item)=>{
            console.log(item.id + " " + item.name + " " + item.price)
        })
    }
}


let product_1 = new Product("1", "Milk", 250)
let product_2 = new Product("2", "Sugar", 1000)
let product_3 = new Product("3", "What_Flour", 2050)
let all_products = [product_1, product_2, product_3]

let my_cart = new Cart()
my_cart.addProduct(product_1)
my_cart.addProduct(product_2)
my_cart.addProduct(product_3)
my_cart.displayCart()

my_cart.removeProduct("2")
my_cart.displayCart()