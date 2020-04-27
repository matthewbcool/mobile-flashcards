import React from 'react';
import { withTheme, Container, ScreenContainer, Icon, Touchable, RowBodyCheckbox } from '@draftbit/ui';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import { getDecks, getDeck, storeLogger } from '../data/decks';

class DeckListView extends React.Component {
	state = { decks: [], selectedDeck: '' };

	componentDidMount() {
		getDecks().then((response) => {
			this.setState({
				decks: response,
			});
		});
	}
	componentDidUpdate(prevProps) {
		if (prevProps) {
			getDecks().then((response) => {
				this.setState({
					decks: response,
				});
			});
		}
	}

	render() {
		const { theme } = this.props;
		const { navigation } = this.props;

		const selectDeck = async (title) => {
			//get current deck here with async storage
			let currentDeck = await getDeck(title);

			navigation.navigate('Deck View', { currentDeck });
		};

		return (
			<ScreenContainer scrollable={false} hasSafeArea={true}>
				<Container useThemeGutterPadding={true} style={styles.mainDeckListContainer}>
					<FlatList
						data={this.state.decks}
						renderItem={(deck) => (
							<Touchable onPress={() => selectDeck(deck.item.title)}>
								<View style={styles.deckListContainer}>
									<Text style={theme.typography.headline4}>{deck.item.title}</Text>
									<Text style={theme.typography.subtitle1}>{deck.item.num}</Text>
								</View>
							</Touchable>
						)}
						keyExtractor={(deck) => deck.title}
					/>
					<Touchable onPress={() => navigation.navigate('Create Deck')}>
						<View style={styles.addDeckWrapper}>
							<Icon
								name="Octicons/diff-added"
								color={theme.colors.strong}
								size={80}
								style={styles.addIcon}
							/>
						</View>
						<Text style={styles.addDeckLabel}>Add Deck</Text>
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
	addDeckLabel: {
		width: 80,
		paddingLeft: 5,
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
