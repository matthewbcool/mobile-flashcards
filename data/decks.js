import { AsyncStorage } from 'react-native';
//keys
export const ALL_DECKS = 'allDecks';
export const LAST_DECK_COMPLETE = 'LastDeckComplete';
//starter data
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
		return deck;
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
				},
			})
		);
	} catch (e) {
		console.log(e.message);
	}
};
export const addCardToDeck = async (title, newQuestionsArray) => {
	try {
		return await AsyncStorage.mergeItem(
			ALL_DECKS,
			JSON.stringify({
				[title]: {
					title,
					questions: [...newQuestionsArray],
				},
			})
		);
	} catch (e) {
		console.log(e.message);
	}
};
//logger function for checking the store
export const storeLogger = async (KEY) => {
	try {
		let item = await AsyncStorage.getItem(KEY);
		console.log(item);
		return item;
	} catch (e) {
		console.log(e.message);
	}
};
//only using for testing for now
export const resetStorage = async () => {
	AsyncStorage.clear();
};

export const getLastRunThrough = async () => {
	//check the last time the user went to the end of a deck
	try {
		return await AsyncStorage.getItem(LAST_DECK_COMPLETE);
	} catch (e) {
		console.log(e.message);
	}
};

export const setLastRunThrough = async (timeComplete) => {
	//check the last time the user went to the end of a deck
	try {
		await AsyncStorage.setItem(LAST_DECK_COMPLETE, JSON.stringify(timeComplete));
	} catch (e) {
		console.log(e.message);
	}
};
