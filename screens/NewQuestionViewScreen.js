import React from 'react';
import { withTheme, Button, Container, ScreenContainer } from '@draftbit/ui';
import { StyleSheet, Text, View, TextInput } from 'react-native';

class NewQuestionView extends React.Component {
	state = {};

	render() {
		const { theme } = this.props;
		const { navigation } = this.props;

		return (
			<ScreenContainer hasSafeArea={true} scrollable={false}>
				<Container useThemeGutterPadding={true} style={styles.containerGs}>
					<View>
						<Text>Enter Question</Text>
						<TextInput
							autoCapitalize="characters"
							clearTextOnFocus={true}
							editable={true}
							color={theme.colors.strong}
							selectTextOnFocus={true}
							autoFocus={true}
							onChangeText={(questionValue) => this.setState({ questionValue })}
							value={this.state.questionValue}
							placeholder="Question"
							style={styles.textInputMz}
						/>
					</View>
					<View>
						<Text>Enter Answer</Text>
						<TextInput
							placeholder="Answer"
							onChangeText={(answerValue) => this.setState({ answerValue })}
							value={this.state.answerValue}
							autoCapitalize="characters"
							clearTextOnFocus={true}
							editable={true}
							color={theme.colors.strong}
							selectTextOnFocus={true}
							autoFocus={true}
							style={styles.textInputZg}
						/>
					</View>
					<View style={styles.viewRX}>
						<Button type="outline" onPress={() => navigation.navigate('Deck View')}>
							Cancel
						</Button>
						<Button type="solid">Submit</Button>
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
