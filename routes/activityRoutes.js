const express = require('express');
const router = express.Router();
const { 
  createActivity, 
  getActivities, 
  getActivity 
} = require('../controllers/activityController');
const { activityValidation } = require('../utils/validator');
const { protect } = require('../middleware/authMiddleware');

router.post('/', protect, activityValidation, createActivity);
router.get('/', getActivities);
router.get('/:id', getActivity);

module.exports = router;
