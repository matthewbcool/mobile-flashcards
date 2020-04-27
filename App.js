import * as React from 'react';
import { AppLoading } from 'expo';
import { Provider as ThemeProvider } from '@draftbit/ui';
import cacheAssetsAsync from './config/cacheAssetsAsync';
import { Draftbit } from './config/Themes.js';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DeckListView from './screens/DeckListViewScreen';
import IndividualDeckView from './screens/IndividualDeckViewScreen';
import QuizView from './screens/QuizViewScreen';
import NewQuestionView from './screens/NewQuestionViewScreen';
import NewDeckView from './screens/NewDeckViewScreen';
import { initAsyncStore, decks, storeLogger, ALL_DECKS } from './data/decks';

const Stack = createStackNavigator();

export default class App extends React.PureComponent {
	state = {
		isReady: false,
	};

	componentDidMount() {
		initAsyncStore(decks);
		console.log('initialized!-------');
	}

	render() {
		if (!this.state.isReady) {
			return (
				<AppLoading
					startAsync={cacheAssetsAsync}
					onFinish={() => this.setState({ isReady: true })}
					onError={console.warn}
				/>
			);
		}

		return (
			<ThemeProvider theme={Draftbit}>
				<NavigationContainer>
					<Stack.Navigator>
						<Stack.Screen name="Deck List" component={DeckListView} />
						<Stack.Screen name="Deck View" component={IndividualDeckView} />
						<Stack.Screen name="Quiz View" component={QuizView} />
						<Stack.Screen name="Create Card" component={NewQuestionView} />
						<Stack.Screen name="Create Deck" component={NewDeckView} />
					</Stack.Navigator>
				</NavigationContainer>
			</ThemeProvider>
		);
	}
}
