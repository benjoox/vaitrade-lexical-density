const express = require('express');
const router = express.Router()

router.put('/', (req, res) => {
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
