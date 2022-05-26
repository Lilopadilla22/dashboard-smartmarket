const express = require('express');
const router = express.Router();
const mainController = require ('../controllers/mainController');


router.get('/', mainController.home);

router.get('/login', mainController.login);


router.get('/register', mainController.register);
router.post('/register', mainController.newRegister)

module.exports = router;