const express = require ('express')
const app = express()

app.get ('/', (rec, res)=>  {
	res.send('Hello World!')
})

app.listen(3000, ()=>{
	console.log('example app is started at http://localhost:3000')
})