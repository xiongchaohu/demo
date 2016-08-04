/**
 * Created by hxc on 16-8-4.
 */
const request = require('superagent');

request
    .get('localhost:3000/query?name=hxc')
    .end(function (err, res) {
        if (err) throw err;
        if (res.ok) {
            console.log('query方式' + res.text);
        } else {
            console.log('Oh no! error ' + res.text);
        }
    });

request
    .get('localhost:3000/params/hxc')
    .end(function (err, res) {
        if (res.ok) {
            console.log('params方式' + res.text);
        } else {
            console.log('Oh no! error ' + res.text);
        }
    });

request
    .post('http://localhost:3000/json')
    .set('Content-Type', 'application/json')
    .send({name: 'hxc'})
    .end(function (err, res) {
        if (err) throw err;
        if (res.ok) {
            console.log('json方式' + res.text);
        } else {
            console.log('Oh no! error ' + res.text);
        }
    });

request
    .post('localhost:3000/header')
    .set({name: 'hxc'})
    .end(function (err, res) {
        if (res.ok) {
            console.log('header方式' + res.text);
        } else {
            console.log('Oh!no!error' + res.text);
        }
    });

request
    .post('localhost:3000/form')
    .send('name=hxc')
    .send('value=123')
    .end(function (err, res) {
        if (res.ok) {
            console.log('form方式' + res.text);
        } else {
            console.log('Oh!no!error' + res.text);
        }
    });



