const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/auth.middleware');
const {
    registerClient,
    registerTeam,
    login,
    getMe,
} = require('../controllers/auth.controller');

// Public routes
router.post('/register/client', registerClient);
router.post('/register/team', registerTeam);
router.post('/login', login);

// Protected routes
router.get('/me', protect, getMe);

module.exports = router;