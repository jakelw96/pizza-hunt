const router = require('express').Router();

const {
    addComment,
    removeComment
} = require('../../controllers/comment-controller');

// /api/comments/<pizzaid>
router
    .route('/:pizzaId')
    .post(addComment);

// /api/comments/<pizzaid>/<commentid>
router
    .route('/:pizzaId/:commentId')
    .delete(removeComment)

module.exports = router;