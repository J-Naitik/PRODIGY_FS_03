const mongoose = require('mongoose');
const Fruit = require('./models/fruit.model');
const Vegetable = require('./models/vegetable.model');
const Juice = require('./models/juice.model');
const Exotic = require('./models/exotic.model');

// MongoDB Connection URL
const MONGO_URL = 'mongodb://localhost:27017/zustveg';

mongoose.connect(MONGO_URL)
    .then(() => console.log('Connected to MongoDB ✅'))
    .catch(err => console.error('MongoDB connection error ❌', err));

    const fruits = [
        { name: "Apple", price: "120", about: "Fresh and sweet apples.", image: "/assets/pics/apple.jpg" },
        { name: "Banana", price: "60", about: "Organic ripe bananas.", image: "/assets/pics/banana.jpg" },
        { name: "Mango", price: "150", about: "Juicy Alphonso mangoes.", image: "/assets/pics/mango.jpg" },
        { name: "Orange", price: "90", about: "Citrusy and rich in Vitamin C.", image: "/assets/pics/orange.jpg" },
        { name: "Pineapple", price: "80", about: "Tropical sweet pineapple.", image: "/assets/pics/pineapple.jpg" },
        { name: "Pomegranate", price: "130", about: "Fresh red pomegranates.", image: "/assets/pics/pomegranate.jpg" },
        { name: "Strawberry", price: "220", about: "Sweet and juicy strawberries.", image: "/assets/pics/strawberry.jpg" },
        { name: "Papaya", price: "70", about: "Healthy ripe papaya.", image: "/assets/pics/papaya.jpg" },
        { name: "Watermelon", price: "60", about: "Juicy summer fruit.", image: "/assets/pics/watermelon.jpg" },
        { name: "Guava", price: "50", about: "Rich in Vitamin C.", image: "/assets/pics/guava.jpg" },
        { name: "Chikoo", price: "80", about: "Delicious and high-fiber fruit.", image: "/assets/pics/chikoo.jpg" },
        { name: "Grapes", price: "100", about: "Seedless and juicy grapes.", image: "/assets/pics/grapes.jpg" },
        { name: "Kiwi", price: "140", about: "Tangy and nutritious kiwi.", image: "/assets/pics/kiwi.jpg" },
    ];
    
    const vegetables = [
        { name: "Tomato", price: "40", about: "Fresh red tomatoes.", image: "/assets/pics/tomato.jpg" },
        { name: "Potato", price: "30", about: "Organic golden potatoes.", image: "/assets/pics/potato.jpg" },
        { name: "Onion", price: "50", about: "Sweet and strong onions.", image: "/assets/pics/onion.jpg" },
        { name: "Spinach", price: "25", about: "Fresh green spinach.", image: "/assets/pics/spinach.jpg" },
        { name: "Broccoli", price: "90", about: "Green crunchy broccoli.", image: "/assets/pics/broccoli.jpg" },
        { name: "Carrot", price: "45", about: "Sweet and crunchy carrots.", image: "/assets/pics/carrot.jpg" },
        { name: "Cabbage", price: "35", about: "Fresh leafy cabbage.", image: "/assets/pics/cabbage.jpg" },
        { name: "Cucumber", price: "30", about: "Cool and fresh cucumbers.", image: "/assets/pics/cucumber.jpg" },
        { name: "Cauliflower", price: "50", about: "White crunchy cauliflower.", image: "/assets/pics/cauliflower.jpg" },
        { name: "Brinjal", price: "40", about: "Fresh purple eggplants.", image: "/assets/pics/brinjal.jpg" },
        { name: "Beans", price: "60", about: "Green tender beans.", image: "/assets/pics/beans.jpg" },
        { name: "Lady Finger", price: "50", about: "Slim and crispy bhindi.", image: "/assets/pics/lady-finger.jpg" },
        { name: "Bottle Gourd", price: "35", about: "Light and healthy.", image: "/assets/pics/bottle-gourd.jpg" },
    ];
    
    const juices = [
        { name: "Orange Juice", price: "80", about: "Freshly squeezed orange juice.", image: "/assets/pics/orange-juice.jpg" },
        { name: "Mango Juice", price: "100", about: "Sweet mango pulp juice.", image: "/assets/pics/mango-juice.jpg" },
        { name: "Pineapple Juice", price: "90", about: "Tropical pineapple juice.", image: "/assets/pics/pineapple-juice.jpg" },
        { name: "Watermelon Juice", price: "70", about: "Refreshing watermelon juice.", image: "/assets/pics/watermelon-juice.jpg" },
        { name: "Mixed Fruit Juice", price: "110", about: "Blend of seasonal fruits.", image: "/assets/pics/mixed-fruit-juice.jpg" },
        { name: "Pomegranate Juice", price: "95", about: "Fresh and tangy.", image: "/assets/pics/pomegranate-juice.jpg" },
        { name: "Apple Juice", price: "85", about: "Made from fresh apples.", image: "/assets/pics/apple-juice.jpg" },
        { name: "Grapes Juice", price: "90", about: "Rich in antioxidants.", image: "/assets/pics/grapes-juice.jpg" },
        { name: "Lemon Juice", price: "60", about: "Zesty and refreshing.", image: "/assets/pics/lemon-juice.jpg" },
        { name: "Carrot Juice", price: "80", about: "Good for eyes and skin.", image: "/assets/pics/carrot-juice.jpg" },
    ];
    
    const exotic = [
        { name: "Dragon Fruit", price: "250", about: "Colorful and nutritious.", image: "/assets/pics/dragon-fruit.jpg" },
        { name: "Rambutan", price: "400", about: "Sweet tropical fruit.", image: "/assets/pics/rambutan.jpg" },
        { name: "Mangosteen", price: "350", about: "Queen of fruits.", image: "/assets/pics/mangosteen.jpg" },
        { name: "Passion Fruit", price: "300", about: "Aromatic and tangy.", image: "/assets/pics/passion-fruit.jpg" },
        { name: "Starfruit", price: "280", about: "Tangy star-shaped fruit.", image: "/assets/pics/starfruit.jpg" },
        { name: "Asparagus", price: "220", about: "Tender and healthy.", image: "/assets/pics/asparagus.jpg" },
        { name: "Zucchini", price: "180", about: "Soft green squash.", image: "/assets/pics/zucchini.jpg" },
        { name: "Bell Pepper (Yellow)", price: "150", about: "Sweet yellow capsicum.", image: "/assets/pics/bell-pepper-yellow.jpg" },
        { name: "Kale", price: "200", about: "Superfood leafy green.", image: "/assets/pics/kale.jpg" },
        { name: "Purple Cabbage", price: "170", about: "Colorful and healthy.", image: "/assets/pics/purple-cabbage.jpg" },
        { name: "Avocado", price: "300", about: "Creamy and nutritious.", image: "/assets/pics/avocado.jpg" },
        { name: "Artichoke", price: "260", about: "Exotic and flavorful.", image: "/assets/pics/artichoke.jpg" },
        { name: "Leek", price: "190", about: "Delicate onion flavor.", image: "/assets/pics/leek.jpg" },
    ];
    
    


// Seeding Function
async function seedDB() {
    try {
        await Fruit.deleteMany({});
        await Vegetable.deleteMany({});
        await Juice.deleteMany({});
        await Exotic.deleteMany({});

        await Fruit.insertMany(fruits);
        await Vegetable.insertMany(vegetables);
        await Juice.insertMany(juices);
        await Exotic.insertMany(exotic);

        console.log('Sample data inserted successfully ✅');
    } catch (err) {
        console.error('Error inserting sample data ❌', err);
    } finally {
        mongoose.connection.close();
    }
}

// Start Seeding
seedDB();
