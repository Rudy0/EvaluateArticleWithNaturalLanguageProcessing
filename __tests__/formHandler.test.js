const handleSubmit = require('../src/client/js/formHandler');


describe('Test if function exist' , () => {
    test('It should return true', () => {
        expect(handleSubmit).toHaveProperty("handleSubmit");
    });
});