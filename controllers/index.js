const { Pool } = require('pg');
const models = require('../database/models');

const getCoins = async (req, res) => {
    console.log('getting coins');
    try {
        const coins = await models.Coin.findAll({
            include: []
        });
        return res.status(200).json({ coins });
    } catch (error) {
        return res.status(500).send({ message });
    }
};

const createCoin = async (req, res) => {
    try {
        const coin = await models.Coin.create(req.body);
        return res.status(201).json({
            coin
        });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

const updateCoin = async (req, res) => {
    try {
        const id = 1;
        const response = await models.Coin.update({
            id: 1,
            name: "Bitcoin",
            symbol: "btc",
            image: "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579",
            current_price: 57637,
            price_change_percentage_24h: -1.15871,
            total_volume: 36814820315,
        }, {
            where: { id: id }
        })
            .then(function (data) {
                const res = { success: true, data: data, message: "updated successful" }
                return res;
            })
            .catch(error => {
                const res = { success: false, error: error }
                return res;
            })
        res.json(response);
    } catch (e) {
        console.log(e);
    }
}

const deleteCoin = async (req, res) => {
    try {
        const { id } = req.params;
        const response = await models.Coin.destroy({
            where: { id: id }
        })
            .then(function (data) {
                const res = { success: true, data: data, message: "Deleted successful" }
                return res;
            })
            .catch(error => {
                const res = { success: false, error: error }
                return res;
            })
        res.status(200).json(response);

    } catch (e) {
        console.log(e);
    }
}

const idCoin = async (req, res) => {
    try {
        const { id } = req.params;
        const coins = await models.Coin.findAll({
            where: { id: id }
        })
            .then(function (data) {
                const res = { success: true, data: data }
                return res;
            })
            .catch(error => {
                const res = { success: false, error: error }
                return res;
            })
        res.json(coins);
    } catch (error) {
        console.log(e);
    }
}

module.exports = {
    getCoins,
    createCoin,
    updateCoin,
    deleteCoin,
    idCoin
}