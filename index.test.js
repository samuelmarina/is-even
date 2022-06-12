var iseven = require('./index');
describe('Is Even test', () => {
    test('is 1 even expect false', ()=> {
        expect(iseven(1)==false);
    });

    test('is \"1\" even expect false', ()=> {
        expect(iseven("1")==false);
    });

    test('is \"one\" even expect false', ()=> {
        expect(iseven("one")==false);
    });

    test('is \"One\" even expect false', ()=> {
        expect(iseven("One")==false);
    });

    test('is \"ONE\" even expect false', ()=> {
        expect(iseven("ONE")==false);
    });
    test('is 619 even expect false', ()=> {
        expect(iseven(619)==false);
    });

    test('is \"619\" even expect false', ()=> {
        expect(iseven("619")==false);
    });

    test('is \"six hundred nineteen\" even expect false', ()=> {
        expect(iseven("six hundred nineteen")==false);
    });

    test('is \"Six Hundred Nineteen\" even expect false', ()=> {
        expect(iseven("Six Hundred Nineteen")==false);
    });
    test('is \"SIX HUNDRED NINETEEN\" even expect false', ()=> {
        expect(iseven("SIX HUNDRED NINETEEN")==false);
    });
    test('is \"SixOneNine\" even expect false', ()=> {
        expect(iseven("SixOneNine")==false);
    });
    test('is \"sixonenine\" even expect false', ()=> {
        expect(iseven("sixonenine")==false);
    });
    test('is \"SIXONENINE\" even expect false', ()=> {
        expect(iseven("SIXONENINE")==false);
    });
    test('is \"Six One Nine\" even expect false', ()=> {
        expect(iseven("Six One Nine")==false);
    });
    test('is \"six one nine\" even expect false', ()=> {
        expect(iseven("six one nine")==false);
    });
    test('is \"SIX ONE NINE\" even expect false', ()=> {
        expect(iseven("SIX ONE NINE")==false);
    });




});
