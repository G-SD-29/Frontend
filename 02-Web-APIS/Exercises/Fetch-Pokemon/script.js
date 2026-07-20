// const pokemonContainer = document.getElementById('pokemon-container');

// // Function to fetch data for a specific Pokémon by ID
// async function fetchPokemon(id) {
// 	try {
// 		// Uncomment to sleep for 500ms
// 		// await new Promise((resolve) => setTimeout(resolve, 500));
// 		const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
// 		const pokemon = await response.json();
// 		return pokemon;
// 	} catch (error) {
// 		console.error(`Error fetching Pokémon with ID ${id}:`, error);
// 	}
// }

// // Function to display Pokémon cards in the DOM
// async function displayPokemons() {
// 	// Loop through the first 150 Pokémon IDs
// 	for (let i = 1; i <= 50; i++) {
// 		const pokemon = await fetchPokemon(i);
// 		if (pokemon) {
// 			const pokemonCard = document.createElement('div');
// 			pokemonCard.classList.add(
// 				'bg-white',
// 				'rounded-lg',
// 				'shadow-md',
// 				'p-4',
// 				'flex',
// 				'flex-col',
// 				'items-center',
// 				'text-center',
// 			);

// 			const pokemonImage = document.createElement('img');
// 			pokemonImage.src = pokemon.sprites.front_default;
// 			pokemonImage.alt = pokemon.name;
// 			pokemonImage.classList.add('mb-4');

// 			const pokemonName = document.createElement('h2');
// 			pokemonName.textContent =
// 				pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
// 			pokemonName.classList.add('text-xl', 'font-bold', 'mb-2');

// 			const pokemonInfo = document.createElement('p');
// 			pokemonInfo.textContent = `ID: ${pokemon.id} | Type: ${pokemon.types.map((typeInfo) => typeInfo.type.name).join(', ')}`;
// 			pokemonInfo.classList.add('text-gray-600');

// 			pokemonCard.appendChild(pokemonImage);
// 			pokemonCard.appendChild(pokemonName);
// 			pokemonCard.appendChild(pokemonInfo);

// 			pokemonContainer.appendChild(pokemonCard);
// 		}
// 	}
// }

// // Fetch and display Pokémon on page load
// displayPokemons();

// const pokemonContainer = document.getElementById('pokemon-container');

// // Function to create a loading card
// function createLoadingCard() {
// 	const card = document.createElement('div');
// 	card.classList.add(
// 		'bg-white',
// 		'rounded-lg',
// 		'shadow-md',
// 		'p-4',
// 		'flex',
// 		'flex-col',
// 		'items-center',
// 		'text-center',
// 		'animate-pulse',
// 	);

// 	const loadingImage = document.createElement('div');
// 	loadingImage.classList.add(
// 		'w-20',
// 		'h-20',
// 		'bg-gray-300',
// 		'mb-4',
// 		'rounded-full',
// 	);

// 	const loadingTitle = document.createElement('div');
// 	loadingTitle.classList.add('w-24', 'h-4', 'bg-gray-300', 'mb-2', 'rounded');

// 	const loadingInfo = document.createElement('div');
// 	loadingInfo.classList.add('w-32', 'h-3', 'bg-gray-200', 'rounded');

// 	card.appendChild(loadingImage);
// 	card.appendChild(loadingTitle);
// 	card.appendChild(loadingInfo);

// 	return card;
// }

// // Function to fetch data for a specific Pokémon by ID
// async function fetchPokemon(id) {
// 	// Uncomment to sleep for 500ms
// 	// await new Promise((resolve) => setTimeout(resolve, 500));
// 	const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
// 	return await response.json();
// }

// // Function to display Pokémon cards
// async function displayPokemons() {
// 	const numPokemons = 10;

// 	// Step 1: Create loading cards
// 	const cardPlaceholders = [];
// 	for (let i = 1; i <= numPokemons; i++) {
// 		const loadingCard = createLoadingCard();
// 		pokemonContainer.appendChild(loadingCard);
// 		cardPlaceholders.push(loadingCard);
// 	}

// 	// Step 2: Fetch all Pokémon in parallel
// 	const promises = [];
// 	for (let i = 1; i <= numPokemons; i++) {
// 		promises.push(fetchPokemon(i));
// 	}

// 	// Step 3: Replace loading cards with actual data as it arrives
// 	const results = await Promise.allSettled(promises);
// 	results.forEach((result, index) => {
// 		if (result.status === 'fulfilled') {
// 			const pokemon = result.value;

// 			const pokemonCard = document.createElement('div');
// 			pokemonCard.classList.add(
// 				'bg-white',
// 				'rounded-lg',
// 				'shadow-md',
// 				'p-4',
// 				'flex',
// 				'flex-col',
// 				'items-center',
// 				'text-center',
// 			);

// 			const pokemonImage = document.createElement('img');
// 			pokemonImage.src = pokemon.sprites.front_default;
// 			pokemonImage.alt = pokemon.name;
// 			pokemonImage.classList.add('mb-4');

// 			const pokemonName = document.createElement('h2');
// 			pokemonName.textContent =
// 				pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
// 			pokemonName.classList.add('text-xl', 'font-bold', 'mb-2');

// 			const pokemonInfo = document.createElement('p');
// 			pokemonInfo.textContent = `ID: ${pokemon.id} | Type: ${pokemon.types
// 				.map((typeInfo) => typeInfo.type.name)
// 				.join(', ')}`;
// 			pokemonInfo.classList.add('text-gray-600');

// 			pokemonCard.appendChild(pokemonImage);
// 			pokemonCard.appendChild(pokemonName);
// 			pokemonCard.appendChild(pokemonInfo);

// 			// Replace loading card with actual Pokémon card
// 			pokemonContainer.replaceChild(pokemonCard, cardPlaceholders[index]);
// 		} else {
// 			// If failed, show error message
// 			const errorCard = document.createElement('div');
// 			errorCard.textContent = 'Failed to load Pokémon';
// 			errorCard.classList.add(
// 				'bg-red-100',
// 				'text-red-800',
// 				'p-4',
// 				'rounded',
// 				'text-center',
// 			);
// 			pokemonContainer.replaceChild(errorCard, cardPlaceholders[index]);
// 		}
// 	});
// }

// displayPokemons();

const promises = [];

for (let i = 0; i < 10; i++) {
	promise.push(
		fetch('https://jsonplaceholder.typicode.com/posts').then((r) =>
			r.json(),
		),
	);
}
