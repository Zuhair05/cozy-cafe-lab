// part1
const titleEl= document.querySelector('#main-title');
titleEl.textContent = 'Welcome to the Cozy Cafe';
// part2
const colorBtn = document.querySelector('#bg-color-btn');
colorBtn.addEventListener('click', function() {
    document.body.style.backgroundColor = 'lightsteelblue';
});
// part3
const pEl = document.querySelector('#quote-of-the-day');
pEl.textContent = "Life happens, coffee helps.";
// part4
const titlehightEl = document.querySelectorAll('.highlight-title');
titlehightEl.forEach(function(title){
    title.style.fontStyle = 'italic';
} );
// part5
const liEl = document.createElement('li');
liEl.textContent = 'Rose Cake';
ulEl = document.querySelector('#past-menu-items');
ulEl.append(liEl);
// part6
const specEl = document.createElement('li');
specEl.textContent = 'Karak';
ulEls = document.querySelector('#cafe-specialties');
ulEls.append(specEl);
// part7
const divEl = document.createElement('div');
divEl.classList.add('blog-post');

const h3El = document.createElement('h3');
h3El.textContent = 'Karak Tea Tasting Event';

const descEl = document.createElement('p');
descEl.textContent = 'come and taste our new Karak tea!';

divEl.append(h3El);
divEl.append(descEl);

document.querySelector('.blog-post').append(divEl);