import { AsyncStorage } from 'react-native';
export const ALL_DECKS = 'Flashcards:allDecks';

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

export const initAsyncStore = async (decks) => {
	try {
		const value = await AsyncStorage.getItem(ALL_DECKS);
		if (value === null) {
			console.log('no value in async store, setting value now');
			await AsyncStorage.setItem(ALL_DECKS, JSON.stringify(decks));
		}
	} catch (e) {
		console.log(e.message);
	}
};

export const getDecks = async () => {
	try {
		let decks = JSON.parse(await AsyncStorage.getItem(ALL_DECKS));
		let deckEntries = await Object.entries(decks);

		let deckArray = [];
		for (const [title, questions] of deckEntries) {
			let numCards = questions.questions.length;
			deckArray.push({ title: `${title}`, num: `${numCards}` });
		}
		return deckArray;
	} catch (e) {
		console.log(e.message);
	}
};

export const getDeck = async (deckKey) => {
	try {
		let decks = JSON.parse(await AsyncStorage.getItem(ALL_DECKS));

		let deck = decks[deckKey];
		let deckArray = [];
		for (const [title, questions] of deckEntries) {
			let numCards = questions.questions.length;
			deckArray.push({ title: `${title}`, num: `${numCards}` });
		}
		console.log(deck);
	} catch (e) {
		console.log(e.message);
	}
};

export const saveDeck = async (title) => {
	try {
		return await AsyncStorage.mergeItem(
			ALL_DECKS,
			JSON.stringify({
				[title]: {
					title,
					questions: [],
					results: [],
				},
			})
		);
	} catch (e) {
		console.log(e.message);
	}
};
export const addCardToDeck = (card) => {
	console.log('add a card to the deck');
};

export const storeLogger = async (KEY) => {
	try {
		let item = await AsyncStorage.getItem(KEY);
		console.log(item);
		return item;
	} catch (e) {
		console.log(e.message);
	}
};
