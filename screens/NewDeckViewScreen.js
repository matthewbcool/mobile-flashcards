import React from 'react';
import { withTheme, Container, ScreenContainer, Button } from '@draftbit/ui';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import { saveDeck } from '../data/decks';

class NewDeckView extends React.Component {
	state = { deckTitle: '' };

	render() {
		const { theme } = this.props;
		const { navigation } = this.props;
		const onChangeText = (deckTitle) => {
			this.setState({ deckTitle });
		};
		const saveToDecks = () => {
			let title = this.state.deckTitle;
			saveDeck(title);
			navigation.navigate('Deck List');
		};
		return (
			<ScreenContainer scrollable={false} hasSafeArea={true}>
				<Container useThemeGutterPadding={true} style={styles.containerCS}>
					<View>
						<Text>Enter Deck Title:</Text>
						<TextInput
							autoFocus={false}
							clearTextOnFocus={true}
							placeholder="Title of Deck"
							editable={true}
							color={theme.colors.strong}
							selectTextOnFocus={true}
							value={this.state.deckTitle}
							onChangeText={onChangeText}
							style={styles.textInputYn}
						/>
					</View>
					<View style={styles.viewYg}>
						<Button onPress={saveToDecks} type="solid">
							Create New Deck
						</Button>
						<Button onPress={() => navigation.navigate('Deck List')} type="outline">
							Cancel
						</Button>
					</View>
				</Container>
			</ScreenContainer>
		);
	}
}

const styles = StyleSheet.create({
	containerCS: {
		height: '100%',
		width: '100%',
		minHeight: 500,
		marginLeft: 0,
		justifyContent: 'space-around',
		marginRight: 0,
	},
	textInputYn: {
		borderTopWidth: 2,
		borderLeftWidth: 2,
		borderBottomWidth: 2,
		borderRightWidth: 2,
		paddingTop: 16,
		paddingLeft: 16,
		paddingRight: 16,
		paddingBottom: 16,
	},
	viewYg: {
		height: 150,
		justifyContent: 'space-between',
	},
});

export default withTheme(NewDeckView);
