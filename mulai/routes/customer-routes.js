const express = require('express');
const {getAllCustomers, getAddCustomerView, addCustomer,
        getUpdateCustomerView, updateCustomer,getUpdatepromo1View,updatepromo1, getDeleteCustomerView, deleteCustomer} = require('../controllers/customerController');


const router = express.Router();

router.get('/', getAllCustomers);
router.get('/addCustomer', getAddCustomerView);
router.post('/addCustomer', addCustomer);
router.get('/updateCustomer/:id', getUpdateCustomerView);
router.post('/updateCustomer/:id', updateCustomer);

router.get('/updatepromo1/:id', getUpdatepromo1View);
router.post('/updatepromo1/:id', updatepromo1);

router.get('/deleteCustomer/:id', getDeleteCustomerView);
router.post('/deleteCustomer/:id', deleteCustomer);



module.exports = {
    routes: router
}