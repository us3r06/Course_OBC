const { Comments } = require("./Comments");

class Post {
  constructor() {
    this.content = "";
    this.comments = [];
  }

  addComent = (comment) => {
    let cmt = new Comments();
    cmt.content += comment;
    this.comments.push(cmt);
  };
}
module.exports = { Post };
