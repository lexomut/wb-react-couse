type ProductCreate = {
    name: string;
    price: number;
    picUrl?: string;
}

type CartProduct = ProductCreate & {
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

    add(nm_id: number) {
        const product = ProductManager.nomenclature.find(product => product.nm_id == nm_id)
        if (product) {
            Cart.list.push({...product, count: 1})
        }
    }

    increment(nm_id: number) {
        Cart.list.find(product => {
            if (nm_id == nm_id) {
                product.count++
                return true
            }
        })
    }

    decrement(nm_id: number) {
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

    createOrder() {
        const newOrderNum = OrderManager.lastNumOrder++
        const newOrder: Order = new Order(Cart.list, newOrderNum)
        OrderManager.orders.push(newOrder)
    }
}

class OrderManager {
    static lastNumOrder: number = 10000
    static readonly orders: Order[] = []

    gerOrders() {
        return OrderManager.orders
    }
}

class ProductManager {
    static readonly nomenclature: Product[] = [];

    createProduct(name: string, price: number, picUrl?: string) {
        const newProduct = new Product({name, price, picUrl});
        ProductManager.nomenclature.push(newProduct);
    }

    remove(nm_id: number) {
        const index = ProductManager.nomenclature.findIndex(product => product.nm_id == nm_id);
        ProductManager.nomenclature.splice(index, 1);
    }
}