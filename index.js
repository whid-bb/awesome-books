import BooksList from './modules/BooksList.js';
import SpaFramework from './modules/SpaFramework.js';
import './modules/ShowDate.js';

const form = document.getElementById('add-book');
const inputAuthor = document.getElementById('author');
const inputTitle = document.getElementById('title');
const bookList = document.getElementById('book-list');

const bookListCl = new BooksList(form, inputAuthor, inputTitle, bookList);

bookListCl.init();

const spa = new SpaFramework({
  menuItem: '.nav-container li',
  contentBlock: 'section',
});

spa.createSpa();