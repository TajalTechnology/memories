const router = require('express').Router()

const {
    getPost,
    createPost,
    updatePost,
    deletePost,
    likePost
} = require('../controllers/posts')

router.get('/posts', getPost)
router.post('/posts', createPost)
router.patch('/posts/:_id', updatePost)
router.delete('/posts/:id', deletePost)
router.patch('/posts/:id/likePost', likePost)


module.exports = router