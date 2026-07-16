const main = document.querySelector('main');
// fetch('https://jsonplaceholder.typicode.com/posts')
// 	.then((response) => {
// 		if (!response.ok) throw new Error('Something wrong');
// 		return response.json();
// 	})
// 	.then((data) => data.forEach((el) => createElement(el)))
// 	.catch(console.error);

function createElement(post) {
	const newPost = document.createElement('p');
	newPost.textContent = post.body;
	main.appendChild(newPost);
}

// const newPost = { title: 'hello', body: 'world' };

// fetch('https://jsonplaceholder.typicode.com/posts', {
// 	method: 'POST',
// 	headers: { 'Content-Type': 'application/json' },

// 	body: JSON.stringify(newPost),
// })
// 	.then((response) => {
// 		if (!response.ok) throw new Error('Something wrong');
// 		return response.json();
// 	})
// 	.then((data) => console.log('new', data))
// 	.catch(console.error);

async function fetchData(url) {
	try {
		const response = await fetch(url);
		if (!response.ok) {
			throw new Error('Something went wrong');
		}
		const data = await response.json();
		return data;
	} catch (error) {
		console.log(error);
	}
}

const posts = await fetchData('https://jsonplaceholder.typicode.com/posts');
console.log(posts);
posts.forEach((p) => createElement(p));
