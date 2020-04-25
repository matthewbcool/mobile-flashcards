import * as React from 'react';
import {
	createAppContainer,
	createStackNavigator,
	createBottomTabNavigator,
	createSwitchNavigator,
} from '@react-navigation/stack';

/* TODO fix this by importing theme file perhaps */
import { systemWeights } from 'react-native-typography';

/* TODO handle this */
import { Icon, Touchable } from '@draftbit/ui';

function shouldShowBackButton(stackRouteNavigation) {
	let parent = stackRouteNavigation.dangerouslyGetParent();
	return parent.state.routes.indexOf(stackRouteNavigation.state) > 0;
}

const AppNavigator = createSwitchNavigator({
	NewQuestionView: {
		screen: NewQuestionView,
		navigationOptions: { title: 'NewQuestionView' },
	},
	NewDeckView: {
		screen: NewDeckView,
		navigationOptions: { title: 'NewDeckView' },
	},
	IndividualDeckView: {
		screen: IndividualDeckView,
		navigationOptions: { title: 'IndividualDeckView' },
	},
	DeckListView: {
		screen: DeckListView,
		navigationOptions: { title: 'DeckListView' },
	},
});

export default createAppContainer(AppNavigator);
