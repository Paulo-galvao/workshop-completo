import e from "express";
import Vehicle from '../models/Vehicle.js'
const router = e.Router();

// Entrada página de veículos
router.get('/', async (req, res) => {
    try {
        const vehicles = await Vehicle.find().lean();    
        res.render('vehicle/vehicles', {vehicles: vehicles});  
    } catch (error) {
        console.log(error.message);
    }
});   

// Inserir veículos
router.post('/add', async (req, res) => {
    try {
        await Vehicle.create(req.body);
        res.redirect('/vehicle');
    } catch (error) {
        console.log(error.message);
    }
});

// Editar veículos
router.get('/edit/:id', async (req, res) => {
    try {
        const vehicle = await Vehicle.findById(req.params.id).lean();
        res.render('vehicle/edit', {vehicle: vehicle});      
    } catch (error) {
        console.log(error.message);
    }
});

router.post('/edit', async (req, res) => {
    try {
        await Vehicle.findByIdAndUpdate(req.body.id, req.body).lean();
        res.redirect('/vehicle');      
    } catch (error) {
        console.log(error.message);
    }
});

// Deletar veículos
router.get('/delete/:id', async (req, res) => {
    try {
        const vehicle = await Vehicle.findById(req.params.id).lean();
        res.render('vehicle/delete', {vehicle: vehicle});
    } catch (error) {
        console.log(error.message);
    }
});

router.post('/delete', async (req, res) => {
    try {
        await Vehicle.findByIdAndDelete(req.body.id).lean();
        res.redirect('/vehicle');
    } catch (error) {
        console.log(error.message); 
    }
});

export default router; 