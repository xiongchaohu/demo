/**
 * Created by hxc on 16-8-4.
 */
const app = require('../../server/server');
const supertest = require('supertest');

let request = supertest(app);

describe('Get /query', function () {
    it('should get a parameter from query', function (done) {
        request
            .get('/query?name=hxc')
            .end(function (err, res) {
                expect(JSON.parse(res.text)).toEqual({name: 'hxc'});
                done(err);
            });
    });
});

describe('Get /params/:name', function () {
    it('shoule get a parameter from params', function (done) {
        request
            .get('/params/hxc')
            .end(function (err, res) {
                expect(JSON.parse(res.text)).toEqual({name: 'hxc'});
                done(err);
            });
    });
});

describe('Post /json', function () {
    it('should get a parameter from json', function (done) {
        request
            .post('/json')
            .send({name: 'hxc'})
            .end(function (err, res) {
                expect(JSON.parse(res.text)).toEqual({name: 'hxc'});
                done();
            });
    });
});

describe('Post /header', function () {
    it('should get a parameter from header', function (done) {
        request
            .post('/header')
            .set({name: 'hxc'})
            .end(function (err, res) {
                expect(res.text).toEqual('hxc');
                done();
            });
    });
});

describe('Post /form', function () {
    it('should get a parameter from form', function (done) {
        request
            .post('/form')
            .send({name: 'hxc'})
            .end(function (err, res) {
                expect(JSON.parse(res.text)).toEqual({name: 'hxc'});
                done();
            });
    });
});
