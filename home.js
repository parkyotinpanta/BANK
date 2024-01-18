const express = require('express')
const bodyParser = require('body-parser')
const homeroutes = require('./Routes/gsb.Routes')

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))


// httpเริ่มต้น gsb
app.use('/gsb',homeroutes)






app.listen(8880, () => console.log('ธนาคารเปิดแล้วค่ะ'))