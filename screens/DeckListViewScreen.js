import React from 'react';
import { withTheme, Container, ScreenContainer, Icon, Touchable, RowBodyCheckbox } from '@draftbit/ui';
import { StyleSheet, View, Text } from 'react-native';
import { getDecks, storeLogger, ALL_DECKS } from '../data/decks';

class DeckListView extends React.Component {
	state = { decks: [], currentTitle: '' };

	componentDidMount() {
		getDecks().then((response) => {
			this.setState({
				decks: response,
			});
		});
	}

	render() {
		const { theme } = this.props;
		const { navigation } = this.props;

		const selectDeck = () => navigation.navigate('Deck View');

		let decksFromStorage = this.state.decks || 'undefined'; //getdecks
		const deckList = decksFromStorage.map((deck, index) => {
			return (
				<Touchable key={`${index}-deck-touchable`} onPress={selectDeck}>
					<View style={styles.deckListContainer}>
						<Text style={theme.typography.headline4}>{deck.title}</Text>
						<Text style={theme.typography.subtitle1}>{deck.num}</Text>
					</View>
				</Touchable>
			);
		});
		return (
			<ScreenContainer scrollable={true} hasSafeArea={true}>
				<Container useThemeGutterPadding={true} style={styles.mainDeckListContainer}>
					{deckList}
					<Touchable onPress={() => navigation.navigate('Create Deck')}>
						<View style={styles.addDeckWrapper}>
							<Icon
								name="Octicons/diff-added"
								color={theme.colors.strong}
								size={80}
								style={styles.addIcon}
							/>
							<Text>Add Deck</Text>
						</View>
					</Touchable>
				</Container>
			</ScreenContainer>
		);
	}
}

const styles = StyleSheet.create({
	mainDeckListContainer: {
		alignSelf: 'center',
		alignItems: 'center',
		justifyContent: 'space-around',
	},
	deckListContainer: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		padding: 10,
		width: 220,
	},
	addDeckWrapper: {
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: 16,
	},

	deckTitle: {},
	textCY: {
		marginTop: 16,
		marginBottom: 16,
		textDecorationLine: 'underline',
	},
	addIcon: {
		width: 80,
		justifyContent: 'center',
		alignItems: 'center',
		height: 80,
	},
});

export default withTheme(DeckListView);
