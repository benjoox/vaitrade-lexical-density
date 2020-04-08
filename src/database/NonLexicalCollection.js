const mongoose = require('mongoose');
require('./connection');
const _utils = require('./_utils');

const { nonLexicals } = require('./seed.json');

const NonLexicalModel = mongoose.model('nonLexicals', { nonLexicals: Array });
const nonLexicalCollection = new NonLexicalModel({ nonLexicals });

// Seed the database if the collection does not exists
mongoose.connection.on('connected', () =>
	_utils.lookForNonLexicalCollection()
	.then(collection => {
		if(!collection) 
			return nonLexicalCollection.save();
		return false
	})
	.then(seeded => {
		if(seeded) 
			console.log('Successfully seeded the db with non lexicals ')
	})
	.catch(err => console.log('Error in saving the nonLexicals', err))
)



module.export = nonLexicalCollection;


