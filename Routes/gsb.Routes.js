const express = require('express')
const router = express.Router()
const homeController = require('../Controllers/gsb.controller')

router.get('/read',homeController.select)
router.get('/search/:id',homeController.search)
// join เหมือนๆต้องกำหนดไอดีด้วย
router.get('/join',homeController.join)
router.post('/insert',homeController.insert)
router.put('/update/:id',homeController.put)
router.delete('/remove/:id',homeController.delete)

module.exports = router