const express = require('express');
const router = express.Router();
const commentSchema = require('../schemas/comment');

// 댓글 목록 조회
router.get('/', (req, res) => {
  const comments = commentSchema.getAllComments();
  res.json(comments);
});

// 댓글 작성
router.post('/', (req, res) => {
  const { content } = req.body;
  if (!content) {
    return res.status(400).json({ message: '댓글 내용을 입력해주세요.' });
  }
  const comment = commentSchema.createComment(content);
  res.status(201).json(comment);
});

// 댓글 수정
router.put('/:commentId', (req, res) => {
  const { commentId } = req.params;
  const { content } = req.body;
  if (!content) {
    return res.status(400).json({ message: '댓글 내용을 입력해주세요.' });
  }
  const comment = commentSchema.updateComment(commentId, content);
  if (!comment) {
    return res.status(404).json({ message: '댓글을 찾을 수 없습니다.' });
  }
  res.json(comment);
});

// 댓글 삭제
router.delete('/:commentId', (req, res) => {
  const { commentId } = req.params;
  const success = commentSchema.deleteComment(commentId);
  if (!success) {
    return res.status(404).json({ message: '댓글을 찾을 수 없습니다.' });
  }
  res.json({ message: '댓글이 삭제되었습니다.' });
});

module.exports = router;