// backend/server.js
import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import authRoutes from './routes/auth.routes.js';
import userRoutes from './routes/user.routes.js';
import messageRoutes from './routes/message.routes.js';

import connectToMongoDB from './db/connectToMongoDB.js';

const app = express();

dotenv.config();
app.use(express.json()); // To parse incoming requests with JSON payloads (from req.body).
app.use (cookieParser());
// Use the auth routes
app.use('/api/auth', authRoutes);
app.use('/api/messages', messageRoutes);
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    connectToMongoDB();
    console.log(`Server running on port ${PORT}`);
});


// import express from "express"
// import dotenv from "dotenv";

// import authRoutes from "./routes/auth.routes.js";
// import connectToMongoDB from "./db/connectToMongodDB.js";

// const app = express();

// dotenv.config();
// app.use(express.json()); //to parse the incoming requsts with Hson payloads( frpm req.body );

// app.use("/api/auth",authRoutes);


// const PORT= process.env.PORT || 5000;

// //app.get("/",(req, res) =>{
//   //  res.send("Hello world!") 
// //});

// app.use("/api/auth",authRoutes);

// app.listen(PORT,()=> {
//     connectToMongoDB();
//     console.log('server Running on port PORT ${PORT}');

// });

