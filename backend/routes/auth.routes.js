// backend/routes/auth.routes.js
import express from 'express';
import { login, logout, signup } from '../controllers/auth.controllers.js';

const router = express.Router();

// Define routes with relative paths
router.post('/signup', signup);
router.post('/login', login);
router.post('/logout', logout);

export default router;
