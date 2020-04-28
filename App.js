import * as React from 'react';
import { AppLoading } from 'expo';
import { Provider as ThemeProvider } from '@draftbit/ui';
import cacheAssetsAsync from './config/cacheAssetsAsync';
import { Notifications } from 'expo';
import * as Permissions from 'expo-permissions';
import Constants from 'expo-constants';
import { Draftbit } from './config/Themes.js';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DeckListView from './screens/DeckListViewScreen';
import IndividualDeckView from './screens/IndividualDeckViewScreen';
import QuizView from './screens/QuizViewScreen';
import NewQuestionView from './screens/NewQuestionViewScreen';
import NewDeckView from './screens/NewDeckViewScreen';
import {
	initAsyncStore,
	decks,
	resetStorage,
	storeLogger,
	ALL_DECKS,
	LAST_DECK_COMPLETE,
	getLastRunThrough,
} from './data/decks';

const Stack = createStackNavigator();

export default class App extends React.PureComponent {
	state = {
		isReady: false,
		expoPushToken: '',
		notification: {},
		lastTime: '',
	};
	registerForPushNotificationsAsync = async () => {
		if (Constants.isDevice) {
			const { status: existingStatus } = await Permissions.getAsync(Permissions.NOTIFICATIONS);
			let finalStatus = existingStatus;
			if (existingStatus !== 'granted') {
				const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
				finalStatus = status;
			}
			if (finalStatus !== 'granted') {
				alert('Failed to get push token for push notification!');
				return;
			}
			token = await Notifications.getExpoPushTokenAsync();
			console.log(token);
			this.setState({ expoPushToken: token });
		} else {
			alert('Must use physical device for Push Notifications');
		}

		if (Platform.OS === 'android') {
			Notifications.createChannelAndroidAsync('default', {
				name: 'default',
				sound: true,
				priority: 'max',
				vibrate: [0, 250, 250, 250],
			});
		}
	};

	componentDidMount() {
		this._isMounted = true;
		//this.registerForPushNotificationsAsync();
		//this._notificationSubscription = Notifications.addListener(this._handleNotification);
		initAsyncStore(decks);
		this._lastRunThrough();
		//logic for notification here for now
		//check if the last time the user completed a card was over 24 hours and push notification
		//TO DO: set up as background task and test
		/* 	let lastTime = new Date(this.state.lastTime);
		let now = new Date();
		let note = 'Time to do a flashcard quiz';
		if (this._checkTimeDiff(lastTime, now)) {
			this._handleNotification(note);
		} */
		this._isMounted = false;
	}

	componentWillUnmount() {
		this._isMounted = false;
	}

	_handleNotification = (notification) => {
		Vibration.vibrate();
		console.log(notification);
		this.setState({ notification: notification });
	};
	_lastRunThrough = () => {
		getLastRunThrough().then((response) => this.setState({ lastTime: response }));
	};
	_checkTimeDiff = (timeOne, timeTwo) => {
		let diff = (timeTwo.getTime() - timeOne.getTime()) / 1000;
		if (diff > 24) {
			return true;
		} else {
			return false;
		}
	};
	_isMounted = false;
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
