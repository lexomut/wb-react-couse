type ProductCreate = {
    name: string;
    price: number;
    picUrl?: string;
}

type CartProduct = Product & {
    count: number;
}

class Order {
    readonly num: number;
    readonly date: number
    readonly goods: CartProduct[];

    constructor(goods: CartProduct[], num: number) {
        this.goods = goods
        this.num = num
        this.date = Date.now()
    }
}

class Product {
    readonly nm_id: number;
    readonly name: string;
    readonly price: number;
    readonly picUrl: string;
    static lastNmId: number = 1000;

    constructor({name, price, picUrl}: ProductCreate) {
        this.nm_id = Product.lastNmId++
        this.name = name
        this.price = price
        this.picUrl = picUrl || "/notPic"
    }
}

class Cart {
    static readonly list: CartProduct[] = []

    static  add(nm_id: number) {
        const product = ProductManager.nomenclature.find(product => product.nm_id == nm_id)
        if (product) {
            Cart.list.push({...product, count: 1})
            console.log("товар",product.name," добавлен")
        }
    }

    static   increment(nm_id: number) {
        Cart.list.find(product => {
            if (nm_id == nm_id) {
                product.count++
                return true
            }
        })
    }

    static   decrement(nm_id: number) {
        Cart.list.find((product, ind) => {
            if (nm_id == nm_id) {
                if (product.count > 1) {
                    product.count--
                    return true
                } else {
                    Cart.list.splice(ind, 1)
                    return true
                }
            }
        })
    }

    static  createOrder() {
        const newOrderNum = OrderManager.lastNumOrder++
        const newOrder: Order = new Order([...Cart.list], newOrderNum)
        OrderManager.orders.push(newOrder)
        Cart.list.length = 0
    }

    static print() {
        console.log("товары в корзине: ")
        console.log("№  |  название   |  цена  | кол-во")
        Cart.list.forEach((product, index) => {
            console.log(index + 1, " | ", product.nm_id, " | ", product.name, " | ", product.price, "р.", product.count,"шт")
        })
    }
}

class OrderManager {
    static lastNumOrder: number = 10000
    static readonly orders: Order[] = []

   static gerOrders() {
        return OrderManager.orders
    }

    static print() {
        console.log("заказы: ")
        const orders = OrderManager.gerOrders()
        orders.forEach(order=>{
            console.log('заказ №:', order.num)
            console.log('создан:', order.date)
            console.log('товаров:',order.goods.length)
            order.goods.forEach(product=>{
                console.log(" название   |  цена  | кол-во")
                console.log( product.nm_id, " | ", product.name, " | ", product.price, "р.", product.count,"шт")
            })
        })

    }

}

class ProductManager {
    static readonly nomenclature: Product[] = [];

    static createProduct(name: string, price: number, picUrl?: string) {
        const newProduct = new Product({name, price, picUrl});
        ProductManager.nomenclature.push(newProduct);
        console.log("номер в номенклатуре  |  название   |  цена ")
        console.log(newProduct.nm_id, " | ", name, " | ", price, "р.")
    }

    static remove(nm_id: number) {
        const index = ProductManager.nomenclature.findIndex(product => product.nm_id == nm_id);
        console.log(' товар: "', ProductManager.nomenclature[index].name, '"   удален')
        ProductManager.nomenclature.splice(index, 1);


    }

    static printProducts() {
        console.log("номенклатура: ")
        console.log("№ | номер в номенклатуре  |  название   |  цена ")
        ProductManager.nomenclature.forEach((product: Product, index) => {
            console.log(index + 1, " | ", product.nm_id, " | ", product.name, " | ", product.price, "р.")
        })
    }
}

console.log("создать новый товар 1")
console.log("\n")
ProductManager.createProduct('телевизор', 15000)
console.log("\n")
console.log("создать новый товар 2")
console.log("\n")
ProductManager.createProduct('стиральная машина', 20000)
console.log("\n")
console.log("посмотреть все товары")
ProductManager.printProducts()
console.log("\n")

console.log("удалить  товар 1")
ProductManager.remove(1000)
console.log("\n")

console.log("посмотреть все товары")
ProductManager.printProducts()
console.log("\n")

console.log("добавить  товар 2 в корзину")
Cart.add(1001)
console.log("\n")
console.log("посмотреть все товары в корзине")
Cart.print()
console.log("\n")

console.log("прибавить  товара")
Cart.increment(1001)
console.log("посмотреть все товары в корзине")
Cart.print()
console.log("\n")



console.log("сделать заказ")
Cart.createOrder()
console.log("посмотреть все товары в корзине")
Cart.print()
console.log("\n")



console.log("посмотреть заказы")
OrderManager.print()
console.log("\n")
