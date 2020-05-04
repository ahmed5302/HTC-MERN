const express = require('express');
const router = express.Router();
const brcypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const jwtToken = 'secretToken';
const User = require('../models/User');


router.post('/',
    
    async (req, res) => {
        
       
        const {
            empid,
            name,
            password
        } = req.body;
       
        try {
            let user = await User.findOne({
                empid
            });
            if (user) {
                return res.status(400).json({
                    errors: [{
                        msg: 'Employee Already Exist'
                    }]
                });
            }
            user = new User({
                empid,
                name,
                password
            });
        
            const salt = await brcypt.genSalt(10);
            user.password = await brcypt.hash(password, salt);
            
            console.log(user);
            const saveUser = await user.save();
            
            console.log(user);
            res.send(user)
            // const payload = {
            //     user: {
            //         id: user.id
            //     }
            // }
            // jwt.sign(payload, jwtToken, {
            //         expiresIn: 36000
            //     },
            //     (err, token) => {
            //         if (err) throw err;
            //         return res.json({
            //             token
            //         });
            //     }
            // );
        } catch (err) {
            console.log("CATCH ERROE");
            res.status(500).send('Server Error');

        }
    }
);

module.exports = router;