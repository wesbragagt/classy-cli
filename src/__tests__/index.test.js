const { getSelectors, makeTypes } = require('../lib')
describe('getSelectors', ()=>{
    let css = ``

    beforeEach(()=>{
        css = `
            .xlb__button {
                border: none;
            }
            .xls{
                transform: none
            }
        `
    })
    
    test('given a css string it extracts the classNames available',()=>{
        expect(getSelectors(css)).toEqual(['.xlb__button', '.xls'])
    })
})
describe('makeTypes', ()=>{
    test('given an array of strings convert them to a typescript enum type', ()=>{
        const result = makeTypes(['.xlb__button', '.xls'])('type classes = ')
        expect(result).toEqual(`type classes = 'xlb__button' | 'xls'`)
    })
})