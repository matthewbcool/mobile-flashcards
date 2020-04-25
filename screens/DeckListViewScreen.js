import React from 'react';
import { withTheme, Container, ScreenContainer, Icon, Touchable } from '@draftbit/ui';
import { StyleSheet, View, Text, ScrollView } from 'react-native';

class DeckListView extends React.Component {
	render() {
		const { theme } = this.props;
		const { navigation } = this.props;

		return (
			<ScreenContainer scrollable={true} hasSafeArea={true}>
				<Container useThemeGutterPadding={true} style={styles.mainDeckListContainer}>
					<ScrollView
						showsVerticalScrollIndicator={true}
						bounces={true}
						showsHorizontalScrollIndicator={true}
					/>
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

	addDeckWrapper: {
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: 16,
	},
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
