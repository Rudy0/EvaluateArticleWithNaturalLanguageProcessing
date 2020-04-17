const url=  require('../src/client/js/urlChecker');


describe('Test if function exist' , () => {
    test('It should return true', () => {
        expect(url).toHaveProperty("checkForUrl");
    });
});