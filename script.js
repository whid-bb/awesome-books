import { BooksList } from "./modules/BooksList.js";
import { SpaFramework } from "./modules/SpaFramework.js";
import './modules/ShowDate.js';


const form = document.getElementById('add-book');
const inputAuthor = document.getElementById('author');
const inputTitle = document.getElementById('title');
const bookList = document.getElementById('book-list');

new BooksList(form, inputAuthor, inputTitle, bookList).init();

const spa = new SpaFramework({
  menuItem: '.nav-container li',
  contentBlock: 'sections'
})
