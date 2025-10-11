const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const multer = require('multer');
const CartItem = require('./models/cartItem.model');

const app = express();
const port = 3000;

// Models
const Fruit = require('./models/fruit.model');
const Vegetable = require('./models/vegetable.model');
const Juice = require('./models/juice.model');
const Exotic = require('./models/exotic.model');

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/zustveg')
    .then(() => console.log('✅ MongoDB Connected'))
    .catch(err => console.error('❌ MongoDB Connection Error:', err));

// Set View Engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middlewares
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));










try{

  
  // Multer Setup for File Uploads
  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, 'public/images')); // Save in /public/images
      },
      filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname)); // Unique filename
      }
    });
const upload = multer({ storage: storage });

// Routes
app.get('/', (req, res) => {
    res.render('index'); // views/index.ejs
  });

  // Product category routes
  app.get('/fruits', async (req, res) => {
    const products = await Fruit.find({});
    res.render('product', { products, title: 'Fruits' });
  });
  
  app.get('/vegetables', async (req, res) => {
    const products = await Vegetable.find({});
    res.render('product', { products, title: 'Vegetables' });
  });
  
  app.get('/juices', async (req, res) => {
    const products = await Juice.find({});
    res.render('product', { products, title: 'Juices' });
  });
  
  app.get('/exotics', async (req, res) => {
    const products = await Exotic.find({});
    res.render('product', { products, title: 'Exotic Fruits & Vegetables' });
  });

  // Upload form route
  app.get('/upload', (req, res) => {
    res.render('upload'); // views/upload.ejs
  });

  
  
  
  app.get('/fruits/edit', async (req, res) => {
    const products = await Fruit.find({});
    res.render('edit', { products, title: 'Fruits' });
  });
  
  app.get('/vegetables/edit', async (req, res) => {
    const products = await Vegetable.find({});
    res.render('edit', { products, title: 'Vegetables' });
  });
  
  app.get('/juices/edit', async (req, res) => {
    const products = await Juice.find({});
    res.render('edit', { products, title: 'Juices' });
  });
  
  app.get('/exotics/edit', async (req, res) => {
    const products = await Exotic.find({});
    res.render('edit', { products, title: 'Exotic Fruits & Vegetables' });
  });
  
  
  
  
  
  // Upload POST route
  app.post('/upload', upload.single('image'), async (req, res) => {
    if (!req.file) {
      return res.status(400).send('No file uploaded.');
    }
    
    const { category, name, price, about } = req.body;
    const imagePath = '/images/' + req.file.filename; // Frontend relative image path
    
    let Model;
    switch (category) {
      case 'Fruit':
        Model = Fruit;
        break;
        case 'Vegetable':
          Model = Vegetable;
          break;
          case 'Juice':
            Model = Juice;
            break;
            case 'Exotic':
              Model = Exotic;
              break;
              default:
                return res.status(400).send('Invalid category');
              }
              
              try {
                await Model.create({ name, price, about, image: imagePath });
                res.redirect(`/${category.toLowerCase()}s`); // Example: fruits, vegetables, etc.
              } catch (err) {
                console.error('Error saving product:', err);
                res.status(500).send('Error saving product.');
              }
            });
            
            
            
            
            
            
            
            
            
            
            let cart = [];
            
            app.get('/cart', (req, res) => {
              res.render('cart', { cart });
            });
            app.get('/login', (req, res) => {
              res.render('login');
            });
            
            
            app.post('/cart/increase', (req, res) => {
              const { id, name, price, image, about } = req.body;
              const existing = cart.find(item => item.productId === id);
              if (existing) {
                existing.quantity += 1;
              } else {
                cart.push({
                  productId: id,
                  name,
                  price: parseFloat(price),
                  image,
                  about,
                  quantity: 1
                });
              }
              //   res.redirect('back'); // go back to the same page
            });
            
            app.post('/cart/decrease', (req, res) => {
              const { productId } = req.body;
              const existing = cart.find(item => item.productId === productId);
              if (existing) {
                existing.quantity -= 1;
                if (existing.quantity <= 0) {
                  cart = cart.filter(i => i.productId !== productId);
                }
              }
              //   res.redirect('back');
            });
            
            app.post('/remove-from-cart', (req, res) => {
              const { productId } = req.body;
              cart = cart.filter(item => item.productId !== productId);
              res.redirect('/cart');
            });
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            app.post('/:category/delete/:id', async (req, res) => {
              const { category, id } = req.params;
              console.log(category)
              const modelMap = {
                fruits: Fruit,
                vegetables: Vegetable,
                juices: Juice,
                exotic: Exotic
              };
              
              const Model = modelMap[category];
              if (!Model) return res.status(400).send('Invalid category');
              
              await Model.findByIdAndDelete(id);
              if(category=="exotic"){
                console.log("dsjnck")
                res.redirect(`/${category}s`);
              }
              res.redirect(`/${category}`);
            });
            
            
            app.get('/:category/edit/:id', async (req, res) => {
              const { category, id } = req.params;
              console.log(category)
              const modelMap = {
                fruits: Fruit,
                vegetables: Vegetable,
                juices: Juice,
                exotic: Exotic
              };
              
              const Model = modelMap[category];
              if (!Model) return res.status(400).send('Invalid category');
              
              const product = await Model.findById(id);
              res.render('editProduct', { product, category });
              if(category=="exotic"){
                console.log("dsjnck")
                res.redirect(`/${category}s`);
              }
            });
            
            
            app.post('/:category/edit/:id', upload.single('image'), async (req, res) => {
              const { category, id } = req.params;
              const { name, price, about } = req.body;
              const modelMap = {
                fruits: Fruit,
                vegetables: Vegetable,
                juices: Juice,
                exotic: Exotic
              };
              
              const Model = modelMap[category];
              console.log(Model)
              if (!Model) return res.status(400).send('Invalid category');
              
              const updateData = { name, price, about };
              if (req.file) updateData.image = '/images/' + req.file.filename;
              
              await Model.findByIdAndUpdate(id, updateData);
              if(category=="exotic"){
                console.log("dsjnck")
                res.redirect(`/${category}s`);
              }
              res.redirect(`/${category}`);
            });
            
            
            
            
            
            
            app.get('/about',(req,res)=>{
              res.render("about");
            })
            app.get('/how-it-work',(req,res)=>{
              res.render("how-it-work");
            })
            app.get('/partener-with-us' ,(req,res)=>{
              res.render("partener-with-us");
            })
            app.get('/faq',(req,res)=>{
              res.render("faq");
            })
            app.get('/return',(req,res)=>{
              res.render("return");
            })
            app.get('/contact',(req,res)=>{
              res.render("contact");
            })
            app.get('/checkout',(req,res)=>{
              res.render("checkout");
            })
            app.get('/profile',(req,res)=>{
              res.render("profile");
            })
        
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
          }catch(err){
            console.log(err)
          }



          app.use((req, res) => {
            res.status(404).render('404');
          });
  

// Start server
app.listen(port, () => {
    console.log(`🚀 Server running at http://localhost:${port}`);
});