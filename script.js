const booksKey = 'books'

const books = { books: [] }

const form = document.getElementById('add-book')
const inputAuthor = document.getElementById('author')
const inputTitle = document.getElementById('title')
const bookList = document.getElementById('book-list')

const removeFromLS = (bookId) => {

    const bookdata = getFromLS(booksKey)
    bookdata.filter((el, i) => {
        if (el.id === parseInt(bookId)) {
            bookdata.splice(i, 1)
            addToLS(bookdata)
        }
    })
}

const addToLS = (bookObj) => {
    const ls = localStorage.setItem(booksKey, JSON.stringify(bookObj))
}

const getFromLS = (key) => {

    const lsData = localStorage.getItem(key)
    if (lsData) {
        const data = JSON.parse(lsData)
        return data
    }

    return [];
}

const removeBook = (id, btnHTML) => {
    btnHTML.target.parentNode.remove();
    removeFromLS(id)
}

const renderHTML = (obj) => {
    return `
    <div>
        <div class='book-title'>${obj.title}</div>
        <div class='book-author'>${obj.author}</div>
        <button class='remove-book' data-id="${obj.id}">Remove</button>
        <hr>
    </div>
    `
}

const findRemoveButtons = () => {
    const removeBookBtn = document.querySelectorAll('.remove-book')

    removeBookBtn.forEach((btn) => {
        btn.addEventListener('click', (event) => {
            const btnId = event.target.getAttribute('data-id');

            removeBook(btnId, event)
        })

    })
}









