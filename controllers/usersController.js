const path = require('path');
const fs = require('fs')
const {
    validationResult
} = require('express-validator')

const users = require('../models/users')

const usersController = {

    
    profile: (req, res) => {
        res.render('profile')
    },

    login: (req, res) => {
        res.render('login');
    },
    registro: (req, res) => {
        res.render('register');
    },
    nuevoRegistro: (req, res) => {

        const resultValidation = validationResult(req);
        if (resultValidation.errors.length > 0) {
            return res.render('register', {
                errors: resultValidation.mapped(),
                oldData: req.body
            });
        }
        users.create(req.body);
        return res.send("Funciona el formulario");


        //     let newRegister = {
        //     id: users[users.length - 1].id + 1,
        //     ...req.body
        // }

        // users.push(newRegister)

        // fs.writeFileSync(usersFilePath, JSON.stringify(users));
        // res.redirect('/')
    }
}


module.exports = usersController;