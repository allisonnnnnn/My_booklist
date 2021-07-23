// Book Class: Represents a Book, create a book will have a book oobj
class Book {
      constructor(title, author, isbn){
            this.title = title,
            this.author = author,
            this.isbn = isbn
      }
}
// UI Class: Handle UI Tasks, show alert, remove, add
class UI {
      static displayBooks(){
           const StoredBooks = [
                 {
                       title:'Book One',
                       author: 'John Doe',
                       isbn: '3434434'
                 },
                 {
                  title:'Book Two',
                  author: 'Jane Doe',
                  isbn: '45454'
            },
           ] 
           const books = StoredBooks;

           books.forEach((book)=> UI.addBookToList(book))
      }

      static addBookToList(book){
            const list = document.querySelector('#book-list')

            const row = document.createElement('tr');

            row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
            `

            list.appendChild(row)
      }
}

// Store Class: Handle Storage, local storage, stays there

// Event: Display Books, show books
document.addEventListener('DOMContentLoaded', UI.displayBooks)

// Event: Add a book
document.querySelector('#book-form').addEventListener('submit',(e)=>{
// Prevent submit action
e.preventDefault()

      // get form vakues
      const title = document.querySelector('#title').value;
      const author = document.querySelector('#author').value;
      const isbn = document.querySelector('#isbn').value;

      // Instatiate book

      const book = new Book(title,author,isbn)
      console.log(book)

      // Add book to UI
      UI.addBookToList(book)
})

// Event: Remove a Book