const router = require('express').Router();

const customerController = require('../controllers/customerController');
/*
router.get('/', customerController.list);
router.post('/add', customerController.save);
router.get('/update/:id', customerController.edit);
router.post('/update/:id', customerController.update);
router.get('/delete/:id', customerController.delete);
*/

router.get('/matricula/:nom', customerController.list1);
router.get('/inicia/:nom', customerController.list2);
router.get('/verifica', customerController.list3);
router.get('/login', customerController.list4);
router.get('/entrar', customerController.entrar);
router.post('/add', customerController.save);
module.exports = router;

