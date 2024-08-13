const Item = require('../models/item');

exports.getAllItems = async (req, res) => {
    try {
        const items = await Item.find();
        res.json(items);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

exports.createItem = async (req, res) => {
    try {
        const newItem = new Item(req.body);
        await newItem.save();
        res.status(201).json(newItem);
    } catch (err) {
        res.status(400).send(err.message);
    }
};

exports.getItemById = async (req, res) => {
    try {
        const item = await Item.findById(req.params.id);
        if (!item) {
            return res.status(404).send('Item not found');
        }
        res.json(item);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

exports.updateItem = async (req, res) => {
    try {
        const item = await Item.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
        if (!item) {
            return res.status(404).send('Item not found');
        }
        res.json(item);
    } catch (err) {
        res.status(400).send(err.message);
    }
};

exports.deleteItem = async (req, res) => {
    try {
        const item = await Item.findByIdAndDelete(req.params.id);
        if (!item) {
            return res.status(404).send('Item not found');
        }
        res.json({ message: 'Item deleted successfully' });
    } catch (err) {
        res.status(500).send(err.message);
    }
};
