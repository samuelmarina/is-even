var iseven = require('./index');

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