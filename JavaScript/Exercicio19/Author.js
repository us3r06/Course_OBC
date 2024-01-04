const { Post } = require("./Post");
class Author {
  constructor(name) {
    this.name = name;
    this.posts = [];
  }
  addPost = (content) => {
    let post = new Post();
    post.content = content;
    this.posts.push(post);
  };
}
module.exports = { Author };
