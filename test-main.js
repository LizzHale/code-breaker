var test = require('tape');
var Code = require('./main.js');

test('decode', function (t) {
	t.equal(Code.decrypt('pbqrarjovrf ner gur zbfg fhccbegvir pbzzhavgl'),
		      'codenewbies are the most supportive community');
	t.equal(Code.decrypt('bayl n pbqrarjovr pna svther vg bhg'),
	       'only a codenewbie can figure it out');
	t.equal(Code.decrypt('vg vf fb fhcre frperg'),
	        'it is so super secret');
	t.equal(Code.decrypt('ab bar pna ernq guvf frperg zrffntr'),
	        'no one can read this secret message');
	t.end();
});

test('encode', function (t) {
	t.equal(Code.encrypt('no one can read this secret message'),
		'ab bar pna ernq guvf frperg zrffntr');
	t.equal(Code.encrypt('it is so super secret'),
		'vg vf fb fhcre frperg');
	t.equal(Code.encrypt('only a CodeNewbie can figure it out'),
		'bayl n pbqrarjovr pna svther vg bhg');
	t.end();
});