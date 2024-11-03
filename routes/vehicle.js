import e from "express";
import Vehicle from '../models/Vehicle.js'
const router = e.Router();

// Entrada página de veículos
router.get('/', async (req, res) => {
    try {
        const vehicles = await Vehicle.find().lean();    
        console.log(vehicles);
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

export default router; 