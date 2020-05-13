const route = require("express").Router();


const cartItems = [{
        id: 1,
        product: 'Yeezy 350 v2',
        price: '220.00',
        quantity: '150,000'
    },
    {
        id: 2,
        product: 'Yeezy 380',
        price: '220.00',
        quantity: '200,000'
    },
    {
        id: 3,
        product: 'Yeezy 500',
        price: '200.00',
        quantity: '300,000'
    },
    {
        id: 4,
        product: 'Yeezy 700 v2',
        price: '300.00',
        quantity: '250,00'
    },
]

//Get Items
router.get("/api/cart-items", (req, res) => {
    if (req.query.maxPrice) {
        const prices = cartItems.filter((x) => x.price <= Number(req.query.maxPrice));
        res.json(prices);
    }

    if (req.query.prefix) {
        const name = req.query.prefix.toLowerCase();
        const shoe = cartItems.filter((x) => x.product.toLowerCase().includes(name) === true);
        res.json(shoe);
    }

    if (req.query.pageSize) {
        const page = cartItems.filter((x) => x.id === Number(req.query.pageSize));
        res.json(page)
    };
    console.log("Request path", req.query);
    res.status(200);
});

//Get Item By ID
router.get("/api/cart-items/:id", (req, res) => {
    const item = cartItems.filter((x) => x.id === Number(req.params.id));
    if (item.length > 0) {
        res.status(200);
        res.json(item);
    } else {
        res.status(404).send('ID Not Found')
    }
});

router.post("/api/cart-items", (req, res) => {
    //id: cartItems.length +1;
    //product: req.body.product,
    //price: req.body.price,
    //quantity: req.body.quantity,
    this.cartItems.push(req.body);
    res.json(cartItems)
    res.status(201);
});

router.put("/api/cart-items/:id", (req, res) => {
    const idx = cartItems.indexOf(req.params.id);
    cartItems.splice(idx, 1, req.body);
    res.status(200);
    res.json(cartItems);
});

router.delete("/api/cart-item/:id", (req, res) => {
    const idx = cartItems.indexOf(req.params.id);
    cartItems.splice(idx, 1);
    res.status(204)
});

module.exports = route;