import React, { useState, useEffect } from 'react';
import { withTheme, Touchable, ScreenContainer, Container, Icon, Button } from '@draftbit/ui';
import { StyleSheet, Text, View } from 'react-native';
import { getDeck } from '../data/decks';

export const IndividualDeckView = ({ route, navigation, theme }) => {
	const [title, setTitle] = useState(route.params.currentDeck.title);
	const [questions, setQuestions] = useState(route.params.currentDeck.questions);
	const [currentDeck, setCurrentDeck] = useState(route.params.currentDeck);

	const fetchDeck = () => {
		getDeck(title).then((response) => {
			//response should be the currentDeck
			setTitle(response.title);
			setQuestions(response.questions);
			setCurrentDeck(response);
		});
	};
	useEffect(() => {
		fetchDeck();
	}, [currentDeck]);

	const startQuiz = () => {
		navigation.navigate('Quiz View', { currentDeck });
	};
	const addCard = () => {
		navigation.navigate('Create Card', { currentDeck });
	};

	return (
		<ScreenContainer scrollable={false} hasSafeArea={true}>
			<Container useThemeGutterPadding={true} style={styles.mainDeckContainer}>
				<View style={styles.mainDeckWrapper}>
					<Text style={theme.typography.headline2}>{JSON.stringify(title)}</Text>
					<Text style={StyleSheet.flatten([theme.typography.subtitle1, { color: theme.colors.light }])}>
						{questions.length}
					</Text>
					<View style={styles.addCardWrapper}>
						<Touchable onPress={addCard} style={styles.addCardTouch}>
							<Icon
								name="MaterialIcons/add-circle-outline"
								color={theme.colors.strong}
								size={58}
								style={styles.addCardIcon}
							/>
						</Touchable>
						<Text style={styles.addCardLabel}>Add Card</Text>
					</View>
				</View>
				<Button onPress={startQuiz} type="solid">
					Start Quiz
				</Button>
			</Container>
		</ScreenContainer>
	);
};

const styles = StyleSheet.create({
	addCardTouch: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'column',
		height: 58,
		width: 58,
	},
	mainDeckContainer: {
		paddingTop: 16,
		minHeight: 300,
		justifyContent: 'space-between',
	},

	addCardIcon: {
		width: 58,
		height: 58,
		justifyContent: 'center',
	},
	addCardLabel: {
		justifyContent: 'center',
		alignItems: 'center',
	},

	mainDeckWrapper: {
		alignItems: 'center',
	},
	addCardWrapper: {
		marginTop: 20,
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'column',
	},
});

export default withTheme(IndividualDeckView);
