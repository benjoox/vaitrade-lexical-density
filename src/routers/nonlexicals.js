const express = require('express');
const authenticator = require('../middlewares/authenticator')

const router = express.Router()

router.put('/', authenticator, (req, res) => {
 	try {
		res.send({
            "success": "false/true based on the return of the function",
            "data":{
                "valueUpdated": "to be implemented" // TODO: implement the updating of the resource
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
