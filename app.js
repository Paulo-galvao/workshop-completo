import e from "express";
import { engine } from "express-handlebars";
import "dotenv/config";
const app = e();
const port = process.env.PORT;

import vehicleRoute from './routes/vehicle.js'

/**
 * Config
 */
app.use(e.urlencoded({extended: true})); 
app.use(e.json());
// Handlebars
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');
// Static
app.use(e.static('public'));

/**
 * Routes
 */

app.get('/', (req, res) => {
    res.render('home');
});

app.use('/vehicle', vehicleRoute);  

app.listen(port, () => {
    console.log("Server running at port", port);
});