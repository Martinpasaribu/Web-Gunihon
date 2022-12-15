const express = require('express');
const {getAllCustomers, getAddCustomerView, addCustomer,
        getUpdateCustomerView, updateCustomer,
        getUpdateaboutView,updateabout,getUpdatepromo1View,
        updatepromo1, getDeleteCustomerView, deleteCustomer,updateaboutget,
        getDeletePromo1View,deletePromo1,getDeleteAboutView,deleteAbout} = require('../controllers/customerController');


const router = express.Router();

router.get('/', getAllCustomers);
router.get('/addCustomer', getAddCustomerView);
router.post('/addCustomer', addCustomer);
router.get('/updateCustomer/:id', getUpdateCustomerView);
router.post('/updateCustomer/:id', updateCustomer);

router.get('/updatepromo1/:id', getUpdatepromo1View);
router.post('/updatepromo1/:id', updatepromo1);

router.get('/updateabout/:id', getUpdateaboutView);
router.post('/updateabout/:id', updateabout);



router.get('/deleteCustomer/:id', getDeleteCustomerView);
router.post('/deleteCustomer/:id', deleteCustomer);


router.get('/deletePromo1/:id', getDeletePromo1View);
router.post('/deletePromo1/:id', deletePromo1);


router.get('/deleteAbout/:id', getDeleteAboutView);
router.post('/deleteAbout/:id', deleteAbout);


module.exports = {
    routes: router
}