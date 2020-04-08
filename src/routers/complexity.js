const express = require('express');
const router = express.Router()
const validate = require('../middlewares/validator')
const { overallScore, sentenceScore } = require('../controllers/logicController')

const VERBOSE_MODE = 'verbose'
router.get('/', validate, (req, res) => {
 	try {
		const { query } = req;
		if(query.mode === VERBOSE_MODE) {
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

module.exports = router
