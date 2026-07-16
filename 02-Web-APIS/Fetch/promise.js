const promisedBeer = new Promise((resolve, reject) => {
	const isThereBeerAvailable = Math.random() > 0.5 ? true : false;

	if (isThereBeerAvailable) {
		resolve('Take your beer');
	} else {
		reject('Sorry, no beer for you');
	}
});

promisedBeer.then((value) => console.log(value)).catch(console.log);
