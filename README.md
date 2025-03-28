# E-Commerce MERN Stack 🛒

## Overview
This is a full-fledged **E-commerce Web Application** built using the **MERN stack** (MongoDB, Express.js, React.js, and Node.js). It provides users with an interactive shopping experience, allowing them to browse products, manage their carts, and securely complete purchases.


## See the Demo video here

https://github.com/user-attachments/assets/e3fc70a5-b898-47f4-8487-a0865d59ebc2



<h2>Home Page</h2>

![Screenshot 2024-07-24 170335](https://github.com/user-attachments/assets/c96d5864-62e9-4cd8-b1c3-49e9f0472bf6)


<h2>Products Page</h2>


![Screenshot 2024-07-24 170350](https://github.com/user-attachments/assets/3cde59f3-cebf-41af-b9c0-181813476fa4)

<h2>Login Page</h2>


![Screenshot 2024-07-24 170403](https://github.com/user-attachments/assets/8741fb0b-b1ac-4b7c-a880-8a31bbef3849)

<h2>Signup Page</h2>


![Screenshot 2024-07-24 170418](https://github.com/user-attachments/assets/404c9725-2df1-47f3-a035-413c7c19d4f6)


<h2>View Page</h2>

![Screenshot 2024-07-24 170559](https://github.com/user-attachments/assets/b4e15e55-61db-4515-bdc5-665af78f3ace)



## Features 🚀
- **User Authentication**: Sign up, log in, and secure authentication with JWT.
- **Product Management**: Users can browse and filter products.
- **Shopping Cart**: Add/remove products, adjust quantities.
- **Order Processing**: Complete checkout process with a payment gateway.
- **Admin Dashboard**: Manage products, orders, and users.
- **Responsive UI**: Fully mobile-friendly and optimized design.

## Tech Stack 🛠️
- **Frontend**: React.js, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (Mongoose ODM)
- **Authentication**: JSON Web Tokens (JWT)
- **Payment Integration**: Stripe (Test Mode)
- **Deployment**: Render / Vercel / Netlify

## Installation & Setup ⚙️
### Prerequisites
Ensure you have the following installed:
- Node.js
- MongoDB

### Steps to Run Locally
1. **Clone the repository:**
   ```sh
   git clone https://github.com/aditi75432/E-commerse-MERN-Stack.git
   cd E-commerse-MERN-Stack
   ```
2. **Install dependencies:**
   ```sh
   npm install   # Install backend dependencies
   ```
3. **Set up environment variables:** Create a `.env` file in the root directory with the following:
   ```env
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   STRIPE_SECRET_KEY=your_stripe_key (if applicable)
   ```
4. **Run :**
   ```sh
   npm start
   ```

5. **Access the app:** Open `http://localhost:3000` in your browser.

## Folder Structure 📁
```
E-commerse-MERN-Stack/
│── backend/          # Express server & API routes
│── client/           # React frontend
│── models/           # Mongoose schemas
│── routes/           # API endpoints
│── controllers/      # Business logic
│── config/           # Database and env configurations
│── middleware/       # Authentication & security middleware
│── public/           # Static assets
│── package.json      # Dependencies and scripts
```


## Contributing 🤝
Contributions are welcome! If you'd like to improve the project, feel free to fork the repo and submit a PR.



---
Made with ❤️ by **Aditi Mehta**

