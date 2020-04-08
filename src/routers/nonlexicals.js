const express = require('express');
const authenticator = require('../middlewares/authenticator')
const nonLexicalCollection = require('../database/NonLexicalCollection')

const router = express.Router()

router.put('/', authenticator, (req, res) => {
 	try {
		res.send({
            "success": " false/true based on the return of the function",
            "data":{
				// TODO: implement the updating of the resource
                "valueUpdated": "TODO: To be implemented - nonLexicalCollection.update( { _id }, { ... })" 
            }
        })
	}
	catch (error) {
		res.status(401).send({
			message: "Server error",
			error: error.message
		})
	}		
})

module.exports = router
