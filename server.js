const express = require('express');

const app = express();

const VERBOSE = 'verbose'
app.get('/complexity', (req, res) => {
 	try {
		const { query } = req;
		if(query.mode === VERBOSE) {
			res.send({
				"data":{
					"overall_ld": 0.42
					},
				"query": query	
			})
		} else {
			res.send({
				"data":{
					"overall_ld": 0.42
					},
				"query": query	
			})
		}
	}
	catch (error) {
		res.status(401).send({
			message: "Server error",
			error: error.message
		})
	}		
})


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is now listeneing on port ${PORT}`))                                                                     
