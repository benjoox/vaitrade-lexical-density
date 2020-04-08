const mongoose = require('mongoose')

function lookForNonLexicalCollection() {
	return new Promise((resolve, reject) => {
		mongoose.connection.db
		.listCollections()
		.toArray((err, collectionList) => {
			if (err) reject(err)
			resolve(collectionList.find(col =>  col.name === 'nonlexicals'))
		})
	})
}

module.exports = {
    lookForNonLexicalCollection
}