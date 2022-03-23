const express = require('express')
const router = express.Router()
const usersController  = require('../controllers/users.controllers')



 
router.post('/user/create', usersController.createInvoice)

router.get('user/invoiceID', usersController.listInvoice)

router.get('user/viewIvoice', usersController.viewInvioce)

router.get('user/verifyInvioce', usersController.verifyInvioce)

router.post('user/sendNotification', usersController.sendNotification)

router.get('user/finalizeInvo ice', usersController.FinalizeInvoice)

router.get('user/udpdateInvoice', usersController.updateInvoice)

 

module.exports = router


