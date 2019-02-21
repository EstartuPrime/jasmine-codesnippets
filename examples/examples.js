// code written with intellisens, codecompletion
describe('Object that has to be tested', function(){
    it('has a testable function', function(){
        expect(true).toBeTruthy();
    });
});

// code written with the extensioin
describe('Object to test', function() {
    it('has a testable function', function() {
        expect(false).toBeFalsy();
    });
});

//
describe('object to test', function() {
    it('test_description', function() {
        expect(false).toBeFalsy();
        expect(true).toBeTruthy();
    });
});