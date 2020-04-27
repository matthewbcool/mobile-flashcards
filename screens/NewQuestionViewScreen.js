import React from 'react';
import { withTheme, Button, Container, ScreenContainer } from '@draftbit/ui';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { addCardToDeck, resetStorage, storeLogger, ALL_DECKS, getDeck } from '../data/decks';
class NewQuestionView extends React.Component {
	state = { questionValue: '', answerValue: '', addedQuestion: true };

	render() {
		const { theme } = this.props;
		const { navigation } = this.props;
		const { route } = this.props;
		let { questions } = route.params.currentDeck;
		let { title } = route.params.currentDeck;
		const addNewCard = () => {
			// probably data is not right here- have to check formats
			//TODO make sure this is the correct card data to send
			let newQuestionObj = { question: this.state.questionValue, answer: this.state.answerValue };
			let newQuestionArray = [...questions, newQuestionObj];

			addCardToDeck(title, newQuestionArray);
			questions = newQuestionArray;
			let newCurrentDeck = { title, questions };

			navigation.navigate('Deck View', { newCurrentDeck });
		};
		return (
			<ScreenContainer hasSafeArea={true} scrollable={false}>
				<Container useThemeGutterPadding={true} style={styles.containerGs}>
					<View>
						<Text>Enter Question</Text>
						<TextInput
							clearTextOnFocus={true}
							editable={true}
							color={theme.colors.strong}
							selectTextOnFocus={true}
							autoFocus={true}
							onChangeText={(questionValue) => {
								this.setState({
									questionValue,
								});
							}}
							value={this.state.questionValue}
							placeholder="Question"
							style={styles.textInputMz}
						/>
					</View>
					<View>
						<Text>Enter Answer</Text>
						<TextInput
							placeholder="Answer"
							onChangeText={(answerValue) =>
								this.setState({
									answerValue,
								})
							}
							value={this.state.answerValue}
							clearTextOnFocus={true}
							editable={true}
							color={theme.colors.strong}
							selectTextOnFocus={true}
							style={styles.textInputZg}
						/>
					</View>
					<View style={styles.viewRX}>
						<Button type="outline" onPress={() => navigation.navigate('Deck View')}>
							Cancel
						</Button>
						<Button onPress={addNewCard} type="solid">
							Submit
						</Button>
					</View>
				</Container>
			</ScreenContainer>
		);
	}
}

const styles = StyleSheet.create({
	containerGs: {
		marginTop: 16,
		paddingTop: 16,
		paddingLeft: 16,
		paddingRight: 16,
		minHeight: 400,
		paddingBottom: 16,
		justifyContent: 'space-between',
	},
	textInputMz: {
		borderTopWidth: 2,
		borderLeftWidth: 2,
		borderBottomWidth: 2,
		borderRightWidth: 2,
		paddingTop: 16,
		paddingLeft: 16,
		paddingRight: 16,
		paddingBottom: 16,
	},
	textInputZg: {
		borderTopWidth: 2,
		borderLeftWidth: 2,
		borderBottomWidth: 2,
		borderRightWidth: 2,
		paddingTop: 16,
		paddingLeft: 16,
		paddingRight: 16,
		paddingBottom: 16,
	},
	viewRX: {
		justifyContent: 'space-around',
		height: 200,
	},
});

export default withTheme(NewQuestionView);
