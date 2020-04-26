export const decks = {
	React: {
		title: 'React',
		questions: [
			{
				question: 'What is React?',
				answer: 'A library for managing user interfaces',
			},
			{
				question: 'Where do you make Ajax requests in React?',
				answer: 'The componentDidMount lifecycle event',
			},
		],
	},
	JavaScript: {
		title: 'JavaScript',
		questions: [
			{
				question: 'What is a closure?',
				answer:
					'The combination of a function and the lexical environment within which that function was declared.',
			},
		],
	},
};

export const getDecks = (decks) => {
	// return an array of objects with a title and number of cards.
	let deckEntries = Object.entries(decks);
	let deckArray = [];
	for (const [title, questions] of deckEntries) {
		let numCards = questions.questions.length;
		deckArray.push({ title: `${title}`, num: `${numCards}` });
	}
	return deckArray;
};
export const getDeck = () => {
	console.log('get a specific deck');
};
export const saveDeckTitle = () => {
	console.log('save a deck title');
};
export const addCardToDeck = () => {
	console.log('add a card to the deck');
};
