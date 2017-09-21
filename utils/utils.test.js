const utils = require('./utils')
const expect = require('expect')

describe('Utils', () => {

    describe('#add', () => {
        it('should add two numbers', () => {
            var res = utils.add(33, 11)
            // throw new Error('Value not correct')
            // if (res != 44) {
            //     throw new Error(`Expected 44, but got ${res}`)
            // }
            expect(res).toBe(44)
        })

        it('should asyncAdd two numbers', (done) => {
            utils.asyncAdd(4, 3, (sum) => {
                expect(sum).toBe(7)
                done()
            })

        })
    })



    it('should square a number', () => {
        var res = utils.square(2)
        // if (res !== 4) {
        //     throw new Error(`Expected 4, but got ${res}`)
        // }
        expect(res).toBe(4)
    })

    it('should async square a number', (done) => {
        utils.asyncSquare(3, (res) => {
            expect(res).toBe(9)
            done()
        })
    })

})


// it('should expect some values', () => {
//     // expect(12).not.toBe(11)
//     //expect({name: 'Tianhao'}).not.toEqual({name: 'tianhao'})
//     expect([2,3,4]).toContain(4)
// })

it('should set firstName and lastName', () => {
    var user = {
        location: 'Fremont',
        age: 26
    }

    var res = utils.setName(user, 'Tianhao GU')

    expect(user).toEqual(res)
    // expect(res).toContain({
    //     firstName: 'Tianhao',
    //     lastName: 'GU'
    // })
})