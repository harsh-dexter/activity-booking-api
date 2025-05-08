const express = require('express');
const router = express.Router();
const { 
  bookActivity, 
  getMyBookings 
} = require('../controllers/bookingController');
const { protect } = require('../middleware/authMiddleware');

router.post('/', protect, bookActivity);
router.get('/me', protect, getMyBookings);

module.exports = router;
