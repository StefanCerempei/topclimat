const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/auth.middleware');

// Example protected route
router.get('/profile', protect, (req, res) => {
    res.json({ user: req.user });
});

module.exports = router;