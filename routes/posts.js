const express = require('express');
const router = express.Router();
const postSchema = require('../schemas/post');

// 전체 게시글 목록 조회
router.get('/', (req, res) => {
  const posts = postSchema.getAllPosts();
  res.json(posts);
});

// 게시글 작성
router.post('/', (req, res) => {
  const { title, author, password, content } = req.body;
  const post = postSchema.createPost(title, author, password, content);
  res.status(201).json(post);
});

// 게시글 조회
router.get('/:postId', (req, res) => {
  const { postId } = req.params;
  const post = postSchema.getPostById(postId);
  if (!post) {
    return res.status(404).json({ message: '게시글을 찾을 수 없습니다.' });
  }
  res.json(post);
});

// 게시글 수정
router.put('/:postId', (req, res) => {
  const { postId } = req.params;
  const { password, content } = req.body;
  const post = postSchema.updatePost(postId, password, content);
  if (!post) {
    return res.status(404).json({ message: '게시글을 찾을 수 없습니다.' });
  }
  res.json(post);
});

// 게시글 삭제
router.delete('/:postId', (req, res) => {
  const { postId } = req.params;
  const success = postSchema.deletePost(postId);
  if (!success) {
    return res.status(404).json({ message: '게시글을 찾을 수 없습니다.' });
  }
  res.json({ message: '게시글이 삭제되었습니다.' });
});

module.exports = router;