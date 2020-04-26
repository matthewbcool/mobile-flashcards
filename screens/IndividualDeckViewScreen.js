import React from 'react';
import { withTheme, Touchable, ScreenContainer, Container, Icon, Button } from '@draftbit/ui';
import { StyleSheet, Text, View } from 'react-native';

export const IndividualDeckView = ({ route, navigation, theme }) => {
	const { title } = route.params.currentDeck;
	const { questions } = route.params.currentDeck;
	const { currentDeck } = route.params;

	const startQuiz = () => {
		navigation.navigate('Quiz View', { currentDeck });
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
						<Touchable onPress={() => navigation.navigate('Create Card')} style={styles.addCardTouch}>
							<Icon
								name="MaterialIcons/add-circle-outline"
								color={theme.colors.strong}
								size={48}
								style={styles.addCardIcon}
							/>
							<Text>Add Card</Text>
						</Touchable>
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
		height: 70,
		width: 70,
	},
	mainDeckContainer: {
		paddingTop: 16,
		minHeight: 300,
		justifyContent: 'space-between',
	},

	addCardIcon: {
		width: 48,
		height: 48,
	},

	mainDeckWrapper: {
		alignItems: 'center',
	},
	addCardWrapper: {
		marginTop: 20,
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'column',
		height: 100,
		width: 100,
	},
});

export default withTheme(IndividualDeckView);
