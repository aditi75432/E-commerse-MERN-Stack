// const mongoose = require('mongoose');

// const Product = require('./models/Product');


// const products = [
//     {
//         name:"Iphone 14pro",
//         img:"https://images.unsplash.com/photo-1663499482523-1c0c1bae4ce1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGlwaG9uZTE0cHJvfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60" ,
//         price: 130000,
//         desc: "Very Nice , Beautiful, just looking like WOW " 
//     },
//     {
//         name:"Macbook m2 pro",
//         img:"https://media.istockphoto.com/id/1441194641/photo/macbook-pro-16-keyboard.webp?b=1&s=170667a&w=0&k=20&c=vgawd7HFjNtU4H4596IZkU2SE9YRXtz-ROUgSvndAPQ=",
//         price: 250000 , 
//         desc:"Very Nice , Beautiful, just looking like WOW"
//     },
//     {
//         name:"Iwatch",
//         price:51000,
//         img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROzEBWSIT--95okkMi-UzyJcT0RpNufBUVCw&usqp=CAU",
//         desc:"Very Nice , Beautiful, just looking like WOW"
//     },
//     {
//         name:"iPad Pro", 
//         img: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aXBhZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60", 
//         price: 237900, 
//         desc: "Very Nice , Beautiful, just looking like WOW"
//     },
//     {
//         name:"airpods" , 
//         img:"https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGFpcnBvZHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60" , 
//         price: 25000 ,
//         desc: "Very Nice , Beautiful, just looking like WOW"
//     }
// ]

// async function seedDB() {
//     for (let product of products) {
//         const existingProduct = await Product.findOne({ name: product.name });
//         if (!existingProduct) {
//             await Product.create(product);
//             console.log(`Added: ${product.name}`);
//         } else {
//             console.log(`Skipped (already exists): ${product.name}`);
//         }
//     }
// }

// seedDB().then(() => {
//     console.log("Seeding completed.");
//     mongoose.connection.close();
// });


// // async function seedDB(){
// //     // await Product.deleteMany({});
// //     await Product.insertMany(products);
// //     console.log("data seeded successfully");
// // }

// module.exports = seedDB;

const mongoose = require('mongoose');
const Product = require('./models/Product');
const dbURL = process.env.dbURL || 'mongodb://localhost:27017/shopping-adi-app';

const products = [
    // Electronics - Mobile
    {
        name: "iPhone 15 Pro",
        brand: "Apple",
        category: "electronics",
        subcategory: "mobile",
        price: 140000,
        img: "https://images.unsplash.com/photo-1663499482523-1c0c1bae4ce1",
        desc: "Latest Apple flagship with A17 chip."
    },
    {
        name: "Samsung Galaxy S23 Ultra",
        brand: "Samsung",
        category: "electronics",
        subcategory: "mobile",
        price: 125000,
        img: "https://images.unsplash.com/photo-1709744722656-9b850470293f?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8U2Ftc3VuZyUyMEdhbGF4eSUyMFMyMyUyMFVsdHJhfGVufDB8fDB8fHww",
        desc: "Top-tier Samsung device with 200MP camera."
    },
    {
        name: "Google Pixel 8 Pro",
        brand: "Google",
        category: "electronics",
        subcategory: "mobile",
        price: 115000,
        img: "https://www.designinfo.in/wp-content/uploads/2023/10/Google-Pixel-8-Pro-128GB-Unlocked-Bay-1.webp",
        desc: "Best Android camera phone."
    },
    {
        name: "OnePlus 11 Pro",
        brand: "OnePlus",
        category: "electronics",
        subcategory: "mobile",
        price: 90000,
        img: "https://m.media-amazon.com/images/I/61amb0CfMGL.jpg",
        desc: "Smooth performance with Hasselblad camera."
    },
    {
        name: "Xiaomi 13 Pro",
        brand: "Xiaomi",
        category: "electronics",
        subcategory: "mobile",
        price: 75000,
        img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
        desc: "Budget-friendly flagship with 1-inch sensor."
    },
    
    // Electronics - Laptop
    {
        name: "MacBook Pro M3",
        brand: "Apple",
        category: "electronics",
        subcategory: "laptop",
        price: 250000,
        img: "https://images.unsplash.com/photo-1502899576159-f224dc2349fa",
        desc: "Powerful Apple Silicon MacBook."
    },
    {
        name: "MacBook",
        brand: "Apple",
        category: "electronics",
        subcategory: "laptop",
        price: 180000,
        img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
        desc: "Premium ultrabook."
    },
    
    // Clothing - Men
    {
        name: "Nike Air Jordan T-Shirt",
        brand: "Nike",
        category: "clothing",
        subcategory: "men",
        price: 3500,
        img: "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/bd0f516f-5e4c-4af4-8345-ee39362322e4/M+J+JUMPMAN+SS+CREW.png",
        desc: "Stylish sportswear."
    },
    {
        name: "Adidas Ultraboost Jacket",
        brand: "Adidas",
        category: "clothing",
        subcategory: "men",
        price: 7000,
        img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/b84e5531db0d429f958a74df4c8bc88a_9366/Ultimate_Jacket_Black_HY1422_HM1.jpg",
        desc: "Premium winter wear."
    },
    
    // Clothing - Women
    {
        name: "Zara Floral Dress",
        brand: "Zara",
        category: "clothing",
        subcategory: "women",
        price: 8000,
        img: "https://static.zara.net/assets/public/b74f/767b/17aa44789d45/f04121ce2aec/02944216330-p/02944216330-p.jpg?ts=1741176329754&w=744&f=auto",
        desc: "Elegant summer dress."
    },
    {
        name: "H&M Crop Top",
        brand: "H&M",
        category: "clothing",
        subcategory: "women",
        price: 3000,
        img: "https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/27968070/2024/3/1/88051791-276e-4279-9a51-bc3c8b8a2c3f1709275908518Embroideredcroppedtop1.jpg",
        desc: "Trendy casual wear."
    },
    
    // Shoes
    {
        name: "Nike Air Force 1",
        brand: "Nike",
        category: "footwear",
        subcategory: "shoes",
        price: 12000,
        img: "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/b7d9211c-26e7-431a-ac24-b0540fb3c00f/AIR+FORCE+1+%2707.png",
        desc: "Classic white sneakers."
    },
    {
        name: "Adidas Ultraboost",
        brand: "Adidas",
        category: "footwear",
        subcategory: "shoes",
        price: 15000,
        img: "https://assets.adidas.com/images/w_600,f_auto,q_auto/ba300702bce9426d95cc17953faa35df_9366/Ultraboost_5x_Shoes_Black_IH3110_HM1.jpg",
        desc: "High-performance running shoes."
    },
    
    // Jewelry
    {
        name: "Tiffany & Co. Diamond Necklace",
        brand: "Tiffany & Co.",
        category: "jewelry",
        subcategory: "necklace",
        price: 500000,
        img: "https://cdn.pixelspray.io/v2/black-bread-289bfa/HYDUHb/wrkr/t.resize(h:775,w:775)/data/Tiffany/13-oct-2020/1223343_1.jpg",
        desc: "Elegant diamond necklace."
    },
    {
        name: "Cartier Love Bracelet",
        brand: "Cartier",
        category: "jewelry",
        subcategory: "bracelet",
        price: 300000,
        img: "https://www.zop.in/cdn/shop/files/2655298_40641524695255_IMG_8507.jpg?v=1720982743",
        desc: "Iconic luxury bracelet."
    }
];

async function seedDB() {
    try {
        // Ensure the database is connected before running queries
        await mongoose.connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('Connected to MongoDB');

        for (let product of products) {
            await Product.updateOne(
                { name: product.name }, // Check if product exists
                { $set: product }, // Update or Insert
                { upsert: true }
            );
            console.log(`Updated/Inserted: ${product.name}`);
        }

        console.log("Seeding completed!");
    } catch (error) {
        console.error("Error during seeding:", error);
    } finally {
        mongoose.connection.close();
    }
}

// Run seeding function only when this file is executed directly
if (require.main === module) {
    seedDB();
}

module.exports = seedDB;