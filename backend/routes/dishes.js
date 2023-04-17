var express = require('express');
var router = express.Router();
const Dish = require('../Models/Dish');

/* GET users listing. */
router.get('/', async function(req, res, next) {
    const params = req.query;
    const query = {};
    if (params.name) {
        query.name = {
            $regex: params.name,
            $options: 'i'
        }
    }

    if (params.cuisine) {
        console.log(params.cuisine);
        query.cuisine = params.cuisine
    }

    if (params.category) {
        query.category = params.category
    }
    if(params.type) {
        query.type = params.type
    }

    if (params.minPrice) {
        console.log(params.minPrice);
        query.price = {
            $gte: params.minPrice
        }
    }

    if (params.maxPrice) {
        query.price = {
            ...query.price,
            $lte: params.maxPrice
        }
    }


    try {
        const dishes = await Dish.find(query)

        console.log(dishes);

        res.json(dishes)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }

});

router.get('/:id', async function(req, res, next) {
    const dish = await Dish.findById(req.params.id);
    res.json(dish);
});

router.put('/:id', async function(req, res, next) {
    const dish = await Dish.findById(req.params.id);
    if (req.body.name) {
        dish.name = req.body.name;
    }
    if (req.body.images) {
        dish.images = req.body.images;
    }
    if (req.body.cuisine) {
        dish.cuisine = req.body.cuisine;
    }
    if (req.body.category) {
        dish.category = req.body.category;
    }
    if (req.body.type) {
        dish.type = req.body.type;
    }
    if (req.body.price) {
        dish.price = req.body.price;
    }
    if (req.body.ingredients) {
        dish.ingredients = req.body.ingredients;
    }
    if (req.body.description) {
        dish.description = req.body.description;
    }
    if (req.body.quantity) {
        dish.quantity = req.body.quantity;
    }
    if (req.body.review) {
        if(!dish.reviews) {
            dish.reviews = [];
        }
        dish.reviews.push(req.body.review);
    }
    try {
        const updatedDish = await dish.save();
        res.json(updatedDish);
    } catch (err) {
        res.status(400).json({message: err.message});
    }
});

router.post('/', async (req, res) => {
    const dish = new Dish({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        quantity: req.body.quantity,
        images: req.body.images,
        cuisine: req.body.cuisine,
        category: req.body.category,
        type: req.body.type,
        ingredients: req.body.ingredients
    })
    try {
        const newDish = await dish.save()
        res.status(201).json(newDish)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const dish = await Dish.findById(req.params.id)
        await dish.remove()
        res.json({ message: 'Deleted Dish' })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

module.exports = router;
