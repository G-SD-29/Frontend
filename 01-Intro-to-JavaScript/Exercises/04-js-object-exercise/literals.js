const book = {
	title: 'lord of rings',
	author: 'tolkien',
	pages: 1240,
	isRead: false,
	summary() {
		console.log(
			`Title: ${this.title}, Author: ${this.author}, Pages: ${this.pages}, Read: ${this.isRead ? 'Yes' : 'No'}`,
		);
	},
};

book.summary();
