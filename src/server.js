const express = require('express');
const complexity = require('./routers/complexity')

const app = express();

app.use('/complexity', complexity)

app.use('/*', (req, res) => res.status(400).send({ 
	sucess: false, 
	message: 'The requested resource does not exist'
}))
app.use(function (err, req, res, next) {
	console.error(err.stack)
	res.status(200).send({ sucess: false, message: err.message })
  })


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is now listeneing on port ${PORT}`))                                                                     
