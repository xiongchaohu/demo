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