// i want to create new user into my db
// after user have been verified and validated from my controller
// i also want a return from my db if the new user got created or rejected by promise.

const mysqlConnection = require('../config/mysql')


const createNewUser =   async (firstname, lastname, gender, email, phone, password, confirmPassword, Dob, address, locationw, uploadUserPicture, user_id) => {
    return new Promise( (resolve, reject) => {
        mysqlConnection.query({
            sql: `Insert into users(firstname, lastname, email, phone, password, confirmPassword, age, locationw, uploadUserPicture)values(?,?,?,?,?,?,?,?,?,?,?,?)`,
            values: [firstname, lastname, gender, email, phone, password, confirmPassword, Dob, address, locationw, uploadUserPicture, user_id]
        },  
        (err, results, fields) => {
             if (err) {
               reject(err);
             }
             resolve(results);
         })
      })
 
}


const updateInvoice = async  (data) => {
    return new Promise( (resolve, reject) => {
        mysqlConnection.query({
            sql: `update invoice set invoice_playstach_ref=?, invoice_playstach_tx_ref=?,transaction_flutterwave_flw_ref=?,transaction__flutterwave_tx_ref=? where invoiceID=?`,
            values: [data.payment_flutterwave_flw_ref, data.payment_flutterwave_tx_ref, data.transaction_flutterwave_flw_ref, data.transaction__flutterwave_tx_ref, data.sn]
        }
         ,  (err, results, fields) => {
             if (err) {
               reject(err);
             }
             resolve(results);
         })
      })
 

}

const updateTransaction =   async (data) => {
    return new Promise( (resolve, reject) => {
        mysqlConnection.query({
            sql: `update invoice set seller_name, buyer_name, item_1, amount, discount_kind? where invoiceID=?`,
            values: [data.invoice_seller_name, data.invoice_buyer_name, data.item_1, data.amount, data.discount_kind, data.invoiceID]
        }
         ,  (err, results, fields) => {
             if (err) {
               reject(err);
             }
             resolve(results);
         })
      })
 

}

module.exports = {
    createNewUser,
    updateInvoice,
    updateTransaction
}