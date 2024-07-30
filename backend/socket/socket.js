// import { Server } from "socket.io";
// import http from "http";
// import express from "express";

// const app = express();

// const server = http.createServer(app);
// const io = new Server(server, {
// 	cors: {
// 		origin: ["http://localhost:3000"],
// 		methods: ["GET", "POST"],
// 	},
// });

// export const getReceiverSocketId = (receiverId) => {
// 	return userSocketMap[receiverId];
// };

// const userSocketMap = {}; // {userId: socketId}

// io.on("connection", (socket) => {
// 	console.log("a user connected", socket.id);

// 	const userId = socket.handshake.query.userId;
// 	if (userId != "undefined") userSocketMap[userId] = socket.id;

// 	// io.emit() is used to send events to all the connected clients
// 	io.emit("getOnlineUsers", Object.keys(userSocketMap));

// 	// socket.on() is used to listen to the events. can be used both on client and server side
// 	socket.on("disconnect", () => {
// 		console.log("user disconnected", socket.id);
// 		delete userSocketMap[userId];
// 		io.emit("getOnlineUsers", Object.keys(userSocketMap));
// 	});
// });

// export { app, io, server };



// import { Server } from "socket.io";
// import http from "http";
// import express from "express";

// const app = express();
// const server = http.createServer(app);
// const io = new Server(server, {
//   cors: {
//     origin: "http://localhost:3000", 
//     methods: ["GET", "POST"],
//     credentials: true // Allow credentials if needed
//   }
// });

// // Map to store user socket connections
// const userSocketMap = {};

// // Function to get a receiver's socket ID
// export const getReceiverSocketId = (receiverId) => {
//   return userSocketMap[receiverId];
// };

// // Handle socket connections
// io.on("connection", (socket) => {
//   console.log("User connected:", socket.id);

//   const userId = socket.handshake.query.userId;
//   if (userId) {
//     userSocketMap[userId] = socket.id;
//     console.log(`User ${userId} connected with socket ID ${socket.id}`);
//   }

//   // Emit online users to all connected clients
//   io.emit("getOnlineUsers", Object.keys(userSocketMap));

//   // Handle disconnection
//   socket.on("disconnect", () => {
//     console.log("User disconnected:", socket.id);
//     if (userId) {
//       delete userSocketMap[userId];
//       io.emit("getOnlineUsers", Object.keys(userSocketMap));
//     }
//   });
// });

// export { app, io, server };


// socket.js
// import { Server } from "socket.io";
// import http from "http";
// import express from "express";

// const app = express();
// const server = http.createServer(app);

// const io = new Server(server, {
//   cors: {
//     origin: ["http://localhost:3000", "https://chat-app-yt.onrender.com"], // Ensure this matches your frontend URLs
//     methods: ["GET", "POST"],
//     credentials: true,
//   },
// });

// export const getReceiverSocketId = (receiverId) => {
// 		return userSocketMap[receiverId];
// 	 };

// const userSocketMap = {}; // {userId: socketId}

// io.on("connection", (socket) => {
//   console.log("A user connected:", socket.id);

//   const userId = socket.handshake.query.userId;
//   if (userId && userId !== "undefined") {
//     userSocketMap[userId] = socket.id;
//   }

//   io.emit("getOnlineUsers", Object.keys(userSocketMap));

//   socket.on("disconnect", () => {
//     console.log("User disconnected:", socket.id);
//     if (userId && userId !== "undefined") {
//       delete userSocketMap[userId];
//     }
//     io.emit("getOnlineUsers", Object.keys(userSocketMap));
//   });
// });

// export { app, io, server };

import { Server } from 'socket.io';
import http from 'http';
import express from 'express';

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: ['http://localhost:3000', 'https://chat-app-yt.onrender.com'], // Ensure this matches your frontend URLs
    methods: ['GET', 'POST'],
    credentials: true,
  },
});

const userSocketMap = {};

export const getReceiverSocketId = (receiverId) => {
  return userSocketMap[receiverId];
};

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

export { app, io, server };
