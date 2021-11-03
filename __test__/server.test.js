'use strict';

const { server } = require('../src/server'); // destructing assignment 
const supertest = require('supertest');
const mockRequest = supertest(server);
const { db } = require('../src/models/index');

// before any of the test create a connection
beforeAll(async () => {
    await db.sync();
});

// after all the tests are done
afterAll(async () => {
    await db.drop();
});

describe('Web server', () => {
    // Check if 404 is handled 
    test('Should respond with 404 status on an invalid method', async () => {
        const response = await mockRequest.get('/foo');
        expect(response.status).toBe(404);

    });

    // =========================================================
    // test for clothes 


    // test if can create a person

    it('can add a clothes', async () => {

        const response = await mockRequest.post('/createClothes').send({
            clothesName: 'essam',
        });

        expect(response.status).toBe(201);

    });

    // test if can read

    it('can get clothes list', async () => {

        const response = await mockRequest.get('/getClothesList');

        expect(response.status).toBe(200);

    });

    // test if can read one person
    it('can get one clothes', async () => {

        const response = await mockRequest.get('/getClothes/0');

        expect(response.status).toBe(200);
    });

    // test if can update a person
    it('can update a clothes name', async () => {

        const response = await mockRequest.put('/updateClothes/1');

        expect(response.status).toBe(201);
    });
    // test if can delete a person
    it('can delete a clothes', async () => {

        const response = await mockRequest.delete('/deleteClothes/0');

        expect(response.status).toBe(204);
    });

    // =========================================================
    // test for food 
    // test if can create a food

    it('can add a food', async () => {

        const response = await mockRequest.post('/createFood').send({
            foodName: 'essam',
        });

        expect(response.status).toBe(201);

    });

    // test if can read

    it('can get food list', async () => {

        const response = await mockRequest.get('/getFoodList');

        expect(response.status).toBe(200);

    });

    // test if can read one food
    it('can get one food', async () => {

        const response = await mockRequest.get('/getFood/0');

        expect(response.status).toBe(200);
    });

    // test if can update a person
    it('can update a food name', async () => {

        const response = await mockRequest.put('/updateFood/1');

        expect(response.status).toBe(201);
    });
    // test if can delete a person
    it('can delete a food', async () => {

        const response = await mockRequest.delete('/deleteFood/0');

        expect(response.status).toBe(204);
    });

});