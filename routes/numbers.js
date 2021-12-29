const express = require('express');
const router = express.Router();



// Will need contact model

const Numbers = require('../models/Numbers');


router.get('/', async (req, res) => {
    console.log("hello")



    try {
        const numbers = await Numbers.find({ sequence: req.id });

        res.json(numbers)
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error')
    }
});

router.post('/', async (req, res) => {


    const { numbers } = req.body;

    try {
        const newNumbers = new Numbers({
            numbers,
            sequence: req.id
        });

        const number = await newNumbers.save();
        res.json(number)
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error')
    }
});

router.put('/:id', async (req, res) => {
    const { numbers } = req.body;


    const numberSeq = {};
    if (numbers) numberSeq.numbers = numbers;


    try {
        let numberStr = await Numbers.findById(req.params.id);

        if (!numberStr) return res.status(404).json({ msg: 'Number sequence not found' });

        numberStr = await Numbers.findByIdAndUpdate(req.params.id,
            { $set: numberSeq },
            { new: true });
        res.json(numberStr)
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error')
    }
});

router.delete('/:id', async (req, res) => {
    try {
        let numberStr = await Numbers.findById(req.params.id);

        if (!numberStr) return res.status(404).json({ msg: 'Number sequence not found' });

        await Numbers.findByIdAndRemove(req.params.id);
        res.json({ msg: 'Number sequence removed' })
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error')
    }
});

module.exports = router;