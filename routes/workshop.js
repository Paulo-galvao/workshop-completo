import e from "express";
import Workshop from "../models/Workshop.js";
const router = e.Router();

router.get('/', async (req, res) => {
    try {
        const workshop = await Workshop.find().lean();
        res.render('workshop/workshop', {workshops: workshop});
    } catch (error) {
        console.log(error.message);
    }
});

// Inserir oficinas
router.post('/add', async (req, res) => {
    try {
        await Workshop.create(req.body);
        res.redirect('/workshop');
    } catch (error) {
        console.log(error.message);
    }
});

// Editar oficinas 
router.get('/edit/:id', async (req, res) => {
    try {
        const workshop = await Workshop.findById(req.params.id).lean();       
        res.render('workshop/edit', {workshops: workshop});      
    } catch (error) {
        console.log(error.message);
    }
});

router.post('/edit', async (req, res) => {
    try {
        await Workshop.findByIdAndUpdate(req.body.id, req.body).lean();
        res.redirect('/workshop');
    } catch (error) {
        console.log(error.message);        
    }
});

// Deletar oficina 
router.get('/delete/:id', async (req, res) => {
    try {
        const workshop = await Workshop.findById(req.params.id).lean();
        res.render('workshop/delete', {workshop, workshop});
    } catch (error) {
        console.log(error.message);
        
    }
});

router.post('/delete', async (req, res) => {
    try {
        await Workshop.findByIdAndDelete(req.body.id, req.body).lean();
        res.redirect('/workshop');
    } catch (error) {
        console.log(error.message);
    }
});

export default router;
