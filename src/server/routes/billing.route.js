import express from 'express';
import * as userCtrl from '../controllers/user.controller';
import isAuthenticated from '../middlewares/authenticate';
import validate from '../config/joi.validate';
import schema from '../utils/validator';

const router = express.Router();

const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);
// const requireLogin = require('../middlewares/requireLogin');

router.route('/:id')

    .post( async (req, res) => {

        console.log(req);

        const charge = await stripe.charges.create({
            amount: 1000,
            currency: 'usd',
            description: '30 day listing',
            source: req.body.id
        });

        const user = await userCtrl.addCredits(req, res);

        // res.send(user);
    });


    // .post(validate(schema.storeSite), (req, res) => {
    //     siteCtrl.store(req, res);
    // })



    // .get( (req, res) => {
    //     siteCtrl.findAll(req, res);
    // });


// router.route('/:id')



//     .get( (req, res) => {
//         siteCtrl.findById(req, res);
//     })



//     .put(isAuthenticated, (req, res) => {
//         siteCtrl.update(req, res);
//     })


//     .delete(isAuthenticated, (req, res) => {
//         siteCtrl.destroy(req, res);
//     });


export default router;