const express = require('express');											
const mongoose = require('mongoose');											
const bodyParser = require('body-parser');											
const methodOverride = require('method-override');											
const productRoutes = require('./routes/productRoutes');											
											
const app = express();											
const PORT = 3001;											
											
									
mongoose.connect('', {											
    useNewUrlParser: true,											
    useUnifiedTopology: true				    							
        })
        .then(() => {											
            console.log('Connected to MongoDB');											
        })											
        .catch(err => {											
            console.error('Failed to connect to MongoDB', err);											
        });											
                                                    
										
app.set('view engine', 'ejs');											
app.use(bodyParser.urlencoded({ extended: true }));											
app.use(methodOverride('_method'));											
app.use(express.static('public'));									
											
										
app.use('/products', productRoutes);											
											
										
app.listen(PORT, () => {											
console.log(`Server is running on http://localhost:${PORT}/products`);											
});											
