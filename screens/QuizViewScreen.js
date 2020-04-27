import React, { useState } from 'react';
import { withTheme, Container, ScreenContainer, Divider, Button, FAB } from '@draftbit/ui';
import { View, StyleSheet, Text } from 'react-native';

export const QuizView = ({ route, navigation, theme }) => {
	const totalQuestions = route.params.currentDeck.questions.length;
	const { questions } = route.params.currentDeck;
	let questionArray = questions.map((ques) => ques);
	const [currentQuestionIndex, setQuestionIndex] = useState(0);
	const [currentQuestion, setCurrentQuestion] = useState(questionArray[0].question);
	const [currentAnswer, setCurrentAnswer] = useState(questionArray[0].answer);
	const [showAnswer, toggleAnswer] = useState(false);
	const [numberCorrect, setNumberCorrect] = useState(0);
	const [showQuizFinished, setQuizFinished] = useState(false);
	const cardFlip = () => {
		toggleAnswer(!showAnswer);
	};

	const forwardCard = (choice) => {
		if (typeof questionArray[currentQuestionIndex + 1] !== 'undefined') {
			setCurrentQuestion(questionArray[currentQuestionIndex + 1].question);
			setCurrentAnswer(questionArray[currentQuestionIndex + 1].answer);
			setQuestionIndex(currentQuestionIndex + 1);
		} else {
			setQuizFinished(true);
		}
	};

	const addCorrect = () => {
		forwardCard();
		if (numberCorrect + 1 <= totalQuestions) {
			setNumberCorrect(numberCorrect + 1);
		}
	};

	const addWrong = () => {
		forwardCard();
	};
	const getPercentCorrect = () => {
		return Math.floor((numberCorrect / totalQuestions) * 100);
	};

	return (
		<ScreenContainer hasSafeArea={true} scrollable={false}>
			<Container useThemeGutterPadding={true}>
				<View style={styles.mainCard}>
					<View style={styles.viewA3}>
						<Text style={StyleSheet.flatten([theme.typography.subtitle2, { color: theme.colors.light }])}>
							{`${currentQuestionIndex + 1}/${totalQuestions}`}
						</Text>
						<Text style={StyleSheet.flatten([theme.typography.subtitle2, { color: theme.colors.light }])}>
							{`Correct ${getPercentCorrect()}%`}
						</Text>
					</View>
					{showQuizFinished ? (
						<Text>Finshed Quiz: {`${getPercentCorrect()}%`} </Text>
					) : showAnswer ? (
						<Text style={theme.typography.headline3}>{currentAnswer}</Text>
					) : (
						<Text style={theme.typography.headline3}>{currentQuestion}</Text>
					)}

					<Button onPress={cardFlip} type="solid">
						Flip Card
					</Button>
				</View>
			</Container>
			<Divider color={theme.colors.divider} style={styles.dividerQL} />
			<View style={styles.view3H}>
				<FAB onPress={addWrong} type="standard" icon="Feather/x" color={theme.colors.custom_rgb201_0_0} />
				<FAB
					onPress={addCorrect}
					color={theme.colors.custom_rgb0_201_25}
					type="standard"
					icon="Feather/check"
				/>
			</View>
		</ScreenContainer>
	);
};

const styles = StyleSheet.create({
	mainCard: {
		borderBottomWidth: 1,
		borderRightWidth: 1,
		height: 430,
		paddingTop: 10,
		marginTop: 16,
		paddingLeft: 10,
		paddingBottom: 10,
		paddingRight: 10,
		justifyContent: 'space-between',
		borderTopWidth: 1,
		borderLeftWidth: 1,
	},
	viewA3: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	dividerQL: {
		height: 1,
	},
	view3H: {
		flexDirection: 'row',
		alignContent: 'space-between',
		justifyContent: 'space-around',
		alignItems: 'flex-end',
		minHeight: 150,
	},
});

export default withTheme(QuizView);
