'use strict';

const express = require('express');

const {clothesCollection}  = require('../models/index');


const clothesRouter = express.Router();


clothesRouter.get('/getClothesList', getClothesList); 
clothesRouter.get('/getClothes/:id', getClothes); 
clothesRouter.post('/createClothes', createClothes); 
clothesRouter.put('/updateClothes/:id', updateClothes); 
clothesRouter.delete('/deleteClothes/:id', deleteClothes); 

async function getClothesList(req, res) {
    const allClothes = await clothesCollection.read();
    res.status(200).json(allClothes);
   
}

async function getClothes(req, res) {
    const id = parseInt(req.params.id); 
    const clothes = await clothesCollection.read(id);
    res.status(200).json(clothes);


}

async function createClothes(req, res) {
    const obj = req.body;
    let clothes = await clothesCollection.create(obj);
    res.status(201).json(clothes);

}

async function updateClothes(req, res) {
    const id = parseInt(req.params.id);
    const obj = req.body;
    let updatedClothes = await clothesCollection.update(obj,id);
    res.status(201).json(updatedClothes);
}

async function deleteClothes(req, res) {
    const id = parseInt(req.params.id);
    const deletedClothes = await clothesCollection.delete(id);
    res.status(204).json(deletedClothes);
}


module.exports = clothesRouter;