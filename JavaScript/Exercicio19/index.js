const { Author } = require("./Author");

let autor = new Author("Danyllo");
autor.addPost("Esse é um post");
autor.addPost("Esse Daqui é outro");
autor.posts[0].addComent("Esse é um comentario");
autor.posts[1].addComent("Esse é um comentario diferente");
console.log(autor);
console.log(autor.posts[0]);
console.log(autor.posts[1]);
