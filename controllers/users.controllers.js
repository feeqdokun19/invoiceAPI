require('dotenv').config()
const { v4: uuidv4 } = require('uuid')
const Joi = require('Joi')
//const smsServices = require('../services/sms.services')
const emailServices = require('../services/email.services')
const usersModel = require('../models/users.models')
const msgClass = require('../errors/error')
const { Successful } = require('../errors/error')
const { type } = require('express/lib/response')
const req = require('express/lib/request')


const error = []

const generateOTP = ()=>{

    return Math.floor(Math.random() * 30000)
}


const getUser = (req, res) => {
   
    const { user } = req.params
   
        res.status(200).send({
            status: true,
            message: msgClass.CustomerDetailsFetched,
            data: userDetails || []
        })
    
}


const createInvoice = async (req, res) => {

        InvoiceOfItemToCreateSchema = Joi.object({
            "Customer id": { uuid },
            "amount": Joi.string().required(),
            "due_date": "Seller SA",           
            "description": joi.string().required(),
            "line_items": joi.string().required(),
            "tax": Joi.string().required(),
            "currency": Joi.string().required(),
            "send_notification": Joi.string().required(),
            "draft": Joi.string().required(),
            "has_invoice": Joi.string().required(),
            "invoice_number": Joi.string().required(),
            "split_code":Joi.string().required()
        })
        
    const validateInvoiceBeforeCreate = InvoiceOfItemToCreateSchema.validate(req.body)
    if(validateInvoiceBeforeCreate.error)
    throw new Error("Invoice is Invalid something went wrong, Please try again") ||
    
        res.status(201).send({
            status: false,
            message: "Find attached your invoice below for reference",
            data: []

        })

    const{invoiceId, seller_name, buyer_name, item_1, amount, discount_kind, show_discount, sell_date} = req.body
        invoiceId = uuidv4()

    const createInvoiceModel = await paystack.invoiceItems.create({
            customer: '{{CUSTOMER_ID}}',
            price: '{{PRICE_ID}}',
            collection_method: 'send_invoice',
            days_until_due: 30
          });

    invoiceModel.createNewInvoice(invoiceId, seller_name, buyer_name, item_1, amount, discount_kind, show_discount, sell_date)

    return axios({
        method: "post",
        url: `${process.env.PAYSTACK_BASE_URL}/invoice/${invoiceId}/validate?code=${customerId}&customer=${phoneNumber}`,
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${process.env.FLUTTERWAVE_SECRET_KEY}`
        }
    })
}

const listInvoice = (req, res) => {
    //const{customerID, status, currency, invoiceId } = req.params
        page = req.params.page 
        perPage = req.params.perPage
      
    console.log(`Customer Invoice ${JSON.stringify(process.env.PAYSTACK_SECRET_KEY)}`)
    
        return axios({
                        method: "get",
                        url: `${process.env.PAYSTACK_BASE_URL}/invoice/listCustomer'sInvoice`,
                        headers: {
                            "Content-Type": "application/json",
                            "Authorization": `Bearer ${process.env.PAYSTACK_SECRET_KEY}`
                        }
                    })

    /*         try{
                const invoiceListResponse = await InvoiceService.listInvoice(invoiceID)
                if (InvoiceService.data.data.status = ! true){
                    throw new Error("Cannot print this revoice. session timed out contact support '")
                }
            }
            catch(err){
                res.status(201).send({
                    status: true,
                    message: "Invoice Successfully generated",
                    response: listInvoice.data.data
                })
            } */
   
}
     
const viewInvioce = (req, res) => {

    const { invoiceID } = req.params
    const invoice = generateNewInvoice()
   try{
       viewInvioceFromServices.sendInvoice(invoice, `Find your invoivice below: ${generateNewInvoice}`)
       res.status(201).send({
        status: false,
        message: "Find attached your invoice below for reference",
        response: []
    })
   }
   catch (err) {
    console.log(err)
    res.status(200).send({
        status: true,
        message: msgClass.GeneralError,
        data: []
    })
}

// or this 

  return axios({
        method: "get",
        url: `${process.env.PAYSTACK_BASE_URL}/invoice/viewInvioce/NG`,
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${process.env.PAYSTACK_SECRET_KEY}`
        }
    }) 
     
    
}

const verifyInvioce = async(req, res) => {
 
     const { invoiceId } = req.params
    if (invoiceId.error) {
         res.status(422).send({
             status: false,
           message: msgClass.BadRequest || `Invoice ${invoiceId} is incorrect`,
             data: []
         })
     }

    // or
     try {
 
         const ResponseFromIvoiceVerification = await paymentService.verifyPayment(payment_ref)
         if (ResponseFromIvoiceVerification.data.data.status != "success") {
             throw new Error("We could not verify the this invoice on our system.")
         }
         
         res.status(200).send({
             status: true,
             message: "This invoice generated successfully",
             data: ResponseFrominvoiceVerification.data.data
         })
     } 
     catch(err) {
          res.status(400).send({
             status: false,
             message:   "Find attached your invoice below for reference" || msgClass.GeneralError
 
      })
     }
     
    
}

const sendNotification = async (req, res) => {

    const { email, phone } = req.params

    if (createInvoice != '')
       
        try{
            await InvoiceOfItemToCreateInModel.getInvoiceByPhoneAndEmail(email, phone);
        }
        catch (err) {
            res.status(200).send({
                status: true,
                message:"Notification cannot tbe send to user",
                data: []
            })
        }
        return axios({
            method: "get",
            url: `${process.env.PAYSTACK_BASE_URL}/invoice/viewInvioce/NG`,
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${process.env.PAYSTACK_SECRET_KEY}`
            }
        })         
}

const FinalizeInvoice = async (req, res) => {
    const { customerID, amount} = req.params
    const finalizeInvoice = await createInvoice.invoices.finalizeInvoice('process.env.PAYSTACK_SECRET_KEY');

 
    return axios({
        method: "get",
        url: `${process.env.PAYSTACK_SECRET_KEY}/invoice/finalizeInvoice`,
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${getToken.data.access_token}`
        },
        data: {
                "invoiceID":invoiceID,
                "amount": amount,
                "useLocalAmount": false,
                "customIdentity": uuidv4(),
                "customenrPhone": {
                "number": phoneNumber
                }
        }
    })
    
}

const updateInvoice = (req, res) => {
    const { content_type, customerID, amount,} = req.param


    res.status(201).send({
        status: false,
        message: "Find attached your invoice below for reference",
        response: []
    })
}




module.exports = {
    getUser,
    createInvoice,
    listInvoice,
    viewInvioce,
    verifyInvioce,
    sendNotification,
    FinalizeInvoice,
    updateInvoice
 
}