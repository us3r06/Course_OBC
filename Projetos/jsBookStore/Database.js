// eslint-disable-next-line no-undef
module.exports = class Database {
  #storage = {
    authors: [],
    books: [],
    posters: [],
    orders: [],
    users: [],
  }

  find(key) {
    return this.#storage[key]
  }

  saveAuthor(author) {
    this.#storage.authors.push(author)
  }

  findBookName(bookName) {
    // eslint-disable-next-line no-undef
    return this.#storage.books.find((b) => b.name === bookName)
  }

  saveBook(book) {
    const bookExists = this.findBookName(book.name)
    if (!bookExists) {
      this.#storage.books.push(book)
    }
  }

  addBookToStock(bookName, quantity) {
    const book = this.findBookName(bookName)
    book?.addFromStock(quantity)
  }

  removerBooksFromStock(bookName, quantity) {
    const book = this.findBookName(bookName)
    book?.removeFromStock(quantity)
  }

  findPosterName(posterName) {
    // eslint-disable-next-line no-undef
    return this.#storage.posters.find((p) => p.name === posterName)
  }

  savePoster(poster) {
    const posterExists = this.findPosterName(poster.name)
    if (!posterExists) {
      this.#storage.posters.push(poster)
    }
  }

  addPosterToStock(posterName, quantity) {
    const poster = this.findPosterName(posterName)
    poster?.addFromStock(quantity)
  }

  removerPosterFromStock(posterName, quantity) {
    const poster = this.findPosterName(posterName)
    poster?.removeFromStock(quantity)
  }

  saveUser(user) {
    const userExists = this.#storage.users.find((u) => u.email === user.email)
    if (!userExists) {
      this.#storage.users.push(user)
    }
  }

  saveOrder(order) {
    this.#storage.orders.push(order)
  }

  showStorage() {
    console.table(this.#storage.authors)
    console.table(this.#storage.books)
    console.table(this.#storage.posters)
    console.table(this.#storage.users)
    console.table(this.#storage.orders.map((order) => order.data))
  }
}
