const express = require('express');
const Ingredients = require('../models/ingredients');
const router = express.Router();


router.get('/', async (req, res) => {
    const ingredient = await Ingredients.find();
    res.json(ingredient);
}); 

router.get('/:id', async (req, res) => {
    console.log(req.params.id)
    const ingredient = await Ingredients.findById(req.params.id);
    res.json(ingredient);
})
router.post('/', async (req, res) => {
    console.log("llego")
    const { nameValue, SellpriceValue } = req.body;
    const ingredient = new Ingredients({ name: nameValue, Sellprice: SellpriceValue });
    await ingredient.save();
    res.json({ status: 'ingredient Saved' });
});

router.put('/:id', async (req, res) => {
    console.log(req.body);
    const { name, sellprice, stock, buyPrice } = req.body;
    const ingredient = { name, sellprice, stock, buyPrice };
    await Ingredients.findByIdAndUpdate(req.params.id, ingredient);
    res.json({ status: 'ingredient update' });
});


module.exports = router;