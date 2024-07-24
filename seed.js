const mongoose = require('mongoose');

const Product = require('./models/Product');


const products = [
    {
        name:"Iphone 14pro",
        img:"https://images.unsplash.com/photo-1663499482523-1c0c1bae4ce1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGlwaG9uZTE0cHJvfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60" ,
        price: 130000,
        desc: "Very Nice , Beautiful, just looking like WOW " 
    },
    {
        name:"Macbook m2 pro",
        img:"https://media.istockphoto.com/id/1441194641/photo/macbook-pro-16-keyboard.webp?b=1&s=170667a&w=0&k=20&c=vgawd7HFjNtU4H4596IZkU2SE9YRXtz-ROUgSvndAPQ=",
        price: 250000 , 
        desc:"Very Nice , Beautiful, just looking like WOW"
    },
    {
        name:"Iwatch",
        price:51000,
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROzEBWSIT--95okkMi-UzyJcT0RpNufBUVCw&usqp=CAU",
        desc:"Very Nice , Beautiful, just looking like WOW"
    },
    {
        name:"iPad Pro", 
        img: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aXBhZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60", 
        price: 237900, 
        desc: "Very Nice , Beautiful, just looking like WOW"
    },
    {
        name:"airpods" , 
        img:"https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGFpcnBvZHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60" , 
        price: 25000 ,
        desc: "Very Nice , Beautiful, just looking like WOW"
    }
]

async function seedDB(){
    // await Product.deleteMany({});
    await Product.insertMany(products);
    console.log("data seeded successfully");
}

module.exports = seedDB;

