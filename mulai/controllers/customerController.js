const users = require('../models/User');
const promo1 = require('../models/promo1');
const promo2 = require('../models/promo2');
const promo3 = require('../models/promo3');
const about = require('../models/about');


const getAllCustomers = async (req, res, next) => {
    const list = await users.find().exec();

}

const getAddCustomerView = (req, res, next) => {
    res.render('addCustomer');
}

const addCustomer = async (req, res, next) => {
    // const {error} = validate(req.body);
    if(error) return res.status(422).send(error.details[0].message);
    const data = req.body;
    let customer = await new users({
        name: data.name,
        email: data.email,
        password: data.password,

    });
    customer = await customer.save();
    res.redirect('/data');
}

const getUpdateCustomerView = async (req, res, next) => {
    try {
        const id = req.params.id;
        const onecustomer = await users.findById(id).exec();
        res.render('updateCustomer', {
            customer: onecustomer
        });
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const updateCustomer = async(req, res, next) => {
    // const {error} = validate(req.body);
    // if (error) return res.status(422).send(error.details[0].message);
    const id = req.params.id;
    const data = req.body;
    let customer = await users.findByIdAndUpdate(id, {
        name: data.name,
        email: data.email,
        password: data.password,
    }, {new: true});
    if(!customer) return res.status(404).send('Customer with the given id not found');

    res.redirect('/data');
}


const getUpdatepromo1View = async (req, res, next) => {
    try {
        const id = req.params.id;
        const onecustomer = await promo1.findById(id).exec();
        res.render('updatepromo1', {
            customer: onecustomer
        });
    } catch (error) {
        res.status(400).send(error.message);
    }
}




const updatepromo1 = async(req, res, next) => {
    // const {error} = validate(req.body);
    // if (error) return res.status(422).send(error.details[0].message);
    const id = req.params.id;
    const data = req.body;
    let customer = await promo1.findByIdAndUpdate(id, {
        name: data.name,
        hasli: data.hasli,
        hpromo: data.hpromo,
        fit1: data.fit1,
        fit2: data.fit2,
        fit3: data.fit3,
        fit4: data.fit4,
    }, {new: true});
    if(!customer) return res.status(404).send('Customer with the given id not found');

    res.redirect('/Produk');
}



const getUpdateaboutView = async (req, res, next) => {
    try {
        const id = req.params.id;
        const onecustomer = await about.findById(id).exec();
        res.render('updateabout', {
            abouts: onecustomer
        });
    } catch (error) {
        res.status(400).send(error.message);
    }
}


const updateabout = async(req, res, next) => {
    // const {error} = validate(req.body);
    // if (error) return res.status(422).send(error.details[0].message);
    const id = req.params.id;
    const data = req.body;
    let customer = await about.findByIdAndUpdate(id, {
        teks: data.teks,
        name: data.name,

    }, {new: true});
    if(!customer) return res.status(404).send('Customer with the given id not found');

    res.redirect('/about2');
}



const getDeleteCustomerView = async (req, res, next) => {
    try {
        const id = req.params.id;
        const onecustomer = await users.findById(id).exec();
        res.render('deleteCustomer', {
            customer: onecustomer
        });
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const deleteCustomer = async (req, res, next) => {
    try {
        const id = req.params.id;
        const customer = await users.findByIdAndRemove(id);
        if(!customer) return res.status(404).send('Customer with the given id not found');
        res.redirect('/');        
    } catch (error) {
        res.status(400).send(error.message);
    }
}


const getDeletePromo1View = async (req, res, next) => {
    try {
        const id = req.params.id;
        const onecustomer = await promo1.findById(id).exec();
        res.render('deletePromo1', {
            customer: onecustomer
        });
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const deletePromo1 = async (req, res, next) => {
    try {
        const id = req.params.id;
        const customer = await promo1.findByIdAndRemove(id);
        if(!customer) return res.status(404).send('Customer with the given id not found');
        res.redirect('/Produk');        
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getDeleteAboutView = async (req, res, next) => {
    try {
        const id = req.params.id;
        const onecustomer = await about.findById(id).exec();
        res.render('deleteAbout', {
            abouts: onecustomer
        });
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const deleteAbout = async (req, res, next) => {
    try {
        const id = req.params.id;
        const customer = await about.findByIdAndRemove(id);
        if(!customer) return res.status(404).send('Customer with the given id not found');
        res.redirect('/about2');        
    } catch (error) {
        res.status(400).send(error.message);
    }
}


module.exports = {
    getAllCustomers,
    getAddCustomerView,
    addCustomer,
    getUpdateCustomerView,
    updateCustomer,
    getUpdateaboutView,
    updateabout,
    getUpdatepromo1View,
    updatepromo1,
    getDeleteCustomerView,
    deleteCustomer,
    getDeletePromo1View,
    deletePromo1,
    getDeleteAboutView,
    deleteAbout


}