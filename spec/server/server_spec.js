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