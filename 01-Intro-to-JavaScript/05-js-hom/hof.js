// function playMovie() {
// 	console.log('Start the process');
// 	console.log('Prepare the movie');
// 	console.log('clean seats');
// 	console.log('and rolling....');
// 	playGodzilla();
// }

function playGodzilla() {
	console.log('Godzilla - The Movie');
	console.log('Godzilla is hunting the crowd');
}

function playJurassicPark() {
	console.log('Jurassic Parc');
	console.log('\tA T-Rex appeared in the cinema');
}

function playJumanji() {
	console.log('Jumanji');
	console.log('\tA Lion entered the scene');
}

function playMovie(fn) {
	console.log('Start the process');
	console.log('Prepare the movie');
	console.log('clean seats');
	console.log('and rolling....');
	fn();
	console.log('\nThe End\n');
}

playMovie(playGodzilla);
playMovie(playJurassicPark);
playMovie(playJumanji);

function addNumbers(a, b) {
	return a + b;
}

function movieGenerator(title) {
	return () => {
		console.log(`${title}`);
		console.log('something weird is happening');
	};
}

const playHarryPotter = movieGenerator('Harry Potter');
const playBatMan = movieGenerator('Batman');

playMovie(playHarryPotter);

playMovie(playBatMan);
