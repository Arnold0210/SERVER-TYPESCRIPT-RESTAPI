/** source/routes/posts.ts */
import express from 'express';
import controller from '../controllers/posts';
const router = express.Router();

router.get('/getallposts', controller.getPosts);
router.get('/getpostsid/:id', controller.getPost);
router.put('/updateposts/:id', controller.updatePost);
router.delete('/deleteposts/:id', controller.deletePost);
router.post('/addposts', controller.addPost);

export = router;