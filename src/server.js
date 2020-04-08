const express = require('express');
const { overallScore, sentenceScore } = require('./controllers/logicController')
const validate = require('./middlewares/validator')
const app = express();

const VERBOSE = 'verbose'
app.get('/complexity', validate, (req, res) => {
 	try {
		const { query } = req;
		if(query.mode === VERBOSE) {
			res.send({
				"data":{
					"overall_ld": overallScore(query.data),
					"sentence_ld": sentenceScore(query.data)
				}
			})
		} else {
			res.send({
				"data":{
					"overall_ld": overallScore(query.data)
				}
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

app.use(function (err, req, res, next) {
	console.error(err.stack)
	res.status(200).send({ sucess: false, message: err.message })
  })


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is now listeneing on port ${PORT}`))                                                                     
