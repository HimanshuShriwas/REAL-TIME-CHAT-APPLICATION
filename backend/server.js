// import express from 'express';
// import dotenv from 'dotenv';
// import cookieParser from 'cookie-parser';
// import cors from 'cors'; // Import cors
// import authRoutes from './routes/auth.routes.js';
// import userRoutes from './routes/user.routes.js';
// import messageRoutes from './routes/message.routes.js';
// import { app,server } from './socket/socket.js';
// import connectToMongoDB from './db/connectToMongoDB.js';



// dotenv.config();
// app.use(cors()); // Enable CORS
// app.use(express.json()); // To parse incoming requests with JSON payloads (from req.body).
// app.use(cookieParser());
// // Use the auth routes
// app.use('/api/auth', authRoutes);
// app.use('/api/messages', messageRoutes);
// app.use('/api/users', userRoutes);

// const PORT = process.env.PORT || 5000;

// server.listen(PORT, () => {
//     connectToMongoDB();
//     console.log(`Server running on port ${PORT}`);
// });


// import express from 'express';
// import dotenv from 'dotenv';
// import cookieParser from 'cookie-parser';
// import cors from 'cors'; // Import cors
// import authRoutes from './routes/auth.routes.js';
// import userRoutes from './routes/user.routes.js';
// import messageRoutes from './routes/message.routes.js';
// import { app, server } from './socket/socket.js';
// import connectToMongoDB from './db/connectToMongoDB.js';

// dotenv.config();

// // Enable CORS with specific configuration
// app.use(cors({
//   origin: 'http://localhost:3000', // Allow requests from this origin
//   methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed HTTP methods
//   credentials: true, // Allow credentials (cookies, authorization headers, etc.)
// }));

// app.use(express.json()); // To parse incoming requests with JSON payloads (from req.body)
// app.use(cookieParser());

// // Use the auth routes
// app.use('/api/auth', authRoutes);
// app.use('/api/messages', messageRoutes);
// app.use('/api/users', userRoutes);

// const PORT = process.env.PORT || 5000;

// server.listen(PORT, () => {
//   connectToMongoDB();
//   console.log(`Server running on port ${PORT}`);
// });


// import { createContext, useState, useEffect, useContext } from "react";
// import { useAuthContext } from "./AuthContext";
// import io from "socket.io-client";

// const SocketContext = createContext();

// export const useSocketContext = () => {
// 	return useContext(SocketContext);
// };

// export const SocketContextProvider = ({ children }) => {
// 	const [socket, setSocket] = useState(null);
// 	const [onlineUsers, setOnlineUsers] = useState([]);
// 	const { authUser } = useAuthContext();

// 	useEffect(() => {
// 		if (authUser) {
// 			const socket = io("https://chat-app-yt.onrender.com", {
// 				query: {
// 					userId: authUser._id,
// 				},
// 				transports: ['websocket', 'polling'], // Ensure the correct transports are used
// 				withCredentials: true, // Include credentials for CORS
// 				extraHeaders: {
// 					"Access-Control-Allow-Origin": "*", // Allow CORS
// 				},
// 			});

// 			setSocket(socket);

// 			socket.on("getOnlineUsers", (users) => {
// 				setOnlineUsers(users);
// 			});

// 			return () => socket.close();
// 		} else {
// 			if (socket) {
// 				socket.close();
// 				setSocket(null);
// 			}
// 		}
// 	}, [authUser]);

// 	return <SocketContext.Provider value={{ socket, onlineUsers }}>{children}</SocketContext.Provider>;
// };


// 

// server.js
// import express from 'express';
// import http from 'http';
// import { Server } from 'socket.io';
// import cors from 'cors';
// import dotenv from 'dotenv';
// import cookieParser from 'cookie-parser';
// import authRoutes from './routes/auth.routes.js';
// import userRoutes from './routes/user.routes.js';
// import messageRoutes from './routes/message.routes.js';
// import connectToMongoDB from './db/connectToMongoDB.js';

// dotenv.config();
// const app = express();
// const server = http.createServer(app);

// const io = new Server(server, {
//   cors: {
//     origin: ['http://localhost:3000', 'https://chat-app-yt.onrender.com'], // Ensure this matches your frontend URLs
//     methods: ['GET', 'POST'],
//     credentials: true,
//   },
// });

// app.use(cors({
//   origin: ['http://localhost:3000', 'https://chat-app-yt.onrender.com'], // Ensure this matches your frontend URLs
//   methods: ['GET', 'POST'],
//   credentials: true,
// }));
// app.use(express.json());
// app.use(cookieParser());

// app.use('/api/auth', authRoutes);
// app.use('/api/messages', messageRoutes);
// app.use('/api/users', userRoutes);

// const userSocketMap = {};

// io.on('connection', (socket) => {
//   console.log('A user connected:', socket.id);
//   const userId = socket.handshake.query.userId;
//   if (userId && userId !== 'undefined') {
//     userSocketMap[userId] = socket.id;
//   }
//   io.emit('getOnlineUsers', Object.keys(userSocketMap));

//   socket.on('disconnect', () => {
//     console.log('User disconnected:', socket.id);
//     if (userId && userId !== 'undefined') {
//       delete userSocketMap[userId];
//     }
//     io.emit('getOnlineUsers', Object.keys(userSocketMap));
//   });
// });

// const PORT = process.env.PORT || 5000;
// server.listen(PORT, () => {
//   connectToMongoDB();
//   console.log(`Server running on port ${PORT}`);
// });


import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import authRoutes from './routes/auth.routes.js';
import userRoutes from './routes/user.routes.js';
import messageRoutes from './routes/message.routes.js';
import connectToMongoDB from './db/connectToMongoDB.js';

dotenv.config();
const app = express();
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: ['http://localhost:3000', 'https://chat-app-yt.onrender.com'], // Ensure this matches your frontend URLs
    methods: ['GET', 'POST'],
    credentials: true,
  },
});

app.use(cors({
  origin: ['http://localhost:3000', 'https://chat-app-yt.onrender.com'], // Ensure this matches your frontend URLs
  methods: ['GET', 'POST'],
  credentials: true,
}));
app.use(express.json());
app.use(cookieParser());

app.use('/api/auth', authRoutes);
app.use('/api/messages', messageRoutes);
app.use('/api/users', userRoutes);

const userSocketMap = {};

io.on('connection', (socket) => {
  console.log('A user connected:', socket.id);
  const userId = socket.handshake.query.userId;
  if (userId && userId !== 'undefined') {
    userSocketMap[userId] = socket.id;
  }
  io.emit('getOnlineUsers', Object.keys(userSocketMap));

  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id);
    if (userId && userId !== 'undefined') {
      delete userSocketMap[userId];
    }
    io.emit('getOnlineUsers', Object.keys(userSocketMap));
  });
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  connectToMongoDB();
  console.log(`Server running on port ${PORT}`);
});
