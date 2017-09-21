const request = require('supertest')
const expect = require('expect')


var app = require('./server').app

it ('should return hello world response', (done) => {
    request(app)
        .get('/')
        .expect(404)
        .expect({
            error: 'Page not found'
        })
        .end(done)

})

it ('should return my user object', (done) => {
    request(app)
        .get('/users')
        .expect(200)
        .expect((res) => {
        expect(res.body).toEqual({
            name: 'Tianhao',
            age: 26
        })
        }).end(done)
})