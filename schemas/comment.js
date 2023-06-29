let comments = [];
let commentId = 1;

function getAllComments() {
  return comments;
}

function createComment(content) {
  const newComment = {
    id: commentId,
    content,
  };
  comments.push(newComment);
  commentId++;
  return newComment;
}

function updateComment(commentId, content) {
  const index = comments.findIndex(comment => comment.id === Number(commentId));
  if (index !== -1) {
    comments[index].content = content;
    return comments[index];
  }
  return null;
}

function deleteComment(commentId) {
  const index = comments.findIndex(comment => comment.id === Number(commentId));
  if (index !== -1) {
    comments.splice(index, 1);
    return true;
  }
  return false;
}

module.exports = {
  getAllComments,
  createComment,
  updateComment,
  deleteComment,
};