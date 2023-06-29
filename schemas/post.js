let posts = [];
let postId = 1;

function getAllPosts() {
  return posts;
}

function createPost(title, author, password, content) {
  const newPost = {
    id: postId,
    title,
    author,
    password,
    content,
  };
  posts.push(newPost);
  postId++;
  return newPost;
}

function getPostById(postId) {
  return posts.find(post => post.id === Number(postId));
}

function updatePost(postId, password, content) {
  const post = posts.find(post => post.id === Number(postId));
  if (post && post.password === password) {
    post.content = content;
    return post;
  }
  return null;
}

function deletePost(postId) {
  const index = posts.findIndex(post => post.id === Number(postId));
  if (index !== -1) {
    posts.splice(index, 1);
    return true;
  }
  return false;
}

module.exports = {
  getAllPosts,
  createPost,
  getPostById,
  updatePost,
  deletePost,
};