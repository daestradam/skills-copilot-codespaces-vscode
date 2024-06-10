// Create web server
// Use express to create web server
const express = require('express');
// Create a router object
const router = express.Router();
// Import the comments controller
const commentsCtrl = require('../controllers/comments');

// Create a comment
router.post('/', commentsCtrl.createComment);
// Get all comments
router.get('/', commentsCtrl.getAllComments);
// Get a comment
router.get('/:id', commentsCtrl.getComment);
// Update a comment
router.put('/:id', commentsCtrl.updateComment);
// Delete a comment
router.delete('/:id', commentsCtrl.deleteComment);

module.exports = router;