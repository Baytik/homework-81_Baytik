const express = require('express');
const nanoid = require('nanoid');
const Link = require('../models/Link');

    const router = express.Router();

    router.get('/', async (req, res) => {
        const links = await Link.find();
        res.send(links);
    });

    router.get('/:shortUrl', async (req, res) => {
        const link = await Link.find({shortUrl: req.params.shortUrl});
        if (!link) {
            return res.status(404).send({message: 'Not found'});
        }
        res.status(301).redirect(link[0].originalUrl)
    });

    router.post('/', async (req, res) => {
        const object = {
          originalUrl: req.body.originalUrl,
          shortUrl: nanoid(7)
        };
        const link = new Link(object);
        try {
        await link.save();
        return res.send(link);
        } catch (e) {
            res.status(400).send(e);
        }
    });

module.exports = router;