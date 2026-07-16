// console.log('Hello World');
// intro

// const headline = document.querySelector('h1');
// headline.style.color = 'red';

// const newArticle = document.createElement('article');
// newArticle.textContent =
// 	'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis, reiciendis?';
// console.log(newArticle);

// const main = document.querySelector('main');
// main.appendChild(newArticle);

// const button = document.querySelector('button');
// button.addEventListener('click', () => {
// 	alert('Hello World');
// });

// --------------------------------------//

// Getting and Creating

// getElements-Methods - HTMLCollection

// const headline = document.getElementById('headline');
// headline.style.fontSize = '2px';

// const highlights = document.getElementsByClassName('highlight');
// console.log(highlights);

// for (highlight of highlights) {
// 	highlight.style.backgroundColor = 'green';
// }

// const articles = document.getElementsByTagName('article');

// for (article of articles) {
// 	article.style.border = '5px solid purple';
// }

// querySelector-Methods
//
// const articles = document.querySelectorAll('article');
// console.log(articles);

// articles.forEach((article) => (article.style.border = '5px solid purple'));

// const headline = document.querySelector('#headline');
// headline.style.fontSize = '80px';

// difference nodelist and html collection

// const articles = document.querySelectorAll('article');
const articles = document.getElementsByTagName('article');

const newArticle = document.createElement('article');
newArticle.textContent =
	'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis, reiciendis?';

const main = document.querySelector('main');
main.appendChild(newArticle);

// articles.forEach((article) => (article.style.border = '10px solid purple'));

for (article of articles) {
	article.style.border = '5px solid purple';
}

const aside = document.querySelector('aside');
const newAsideHTML = `
<div>
    <a href="">Link</a>
    <p>Hello World</p>
</div>
`;

aside.innerHTML = newAsideHTML;

main.classList.add('highlight');
main.classList.remove('highlight');

// Events

// main.addEventListener('mouseover', () => {
// 	main.style.backgroundColor = 'yellow';
// });

// main.addEventListener('mouseleave', () => {
	main.style.backgroundColor = 'inherit';
// });

main.addEventListener('click', (event) => {
	// console.log(event.target);
	console.log(event.currentTarget);
});

const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
	event.preventDefault();
	const firstName = form.elements.firstname.value;
	const lastName = form.elements.lastname.value;
	const email = form.elements.email.value;

	const paragraph = document.createElement('p');
	paragraph.textContent = `Hello ${firstName} - ${lastName} - ${email}`;

	main.appendChild(paragraph);
});
