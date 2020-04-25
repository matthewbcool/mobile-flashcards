# Welcome to your Draftbit project

This `README` is designed to help you get your Draftbit app running locally. Read
through the next few sections carefully, and if you encounter any issues please
do not hesitate to post in [Community](https://community.draftbit.com).

> Note that all of the commands in this document should be run using your
> computer's **command line**. If you're unsure of what this is, please read
> [this](https://tutorial.djangogirls.org/en/intro_to_command_line/) guide
> before moving on.

Remember, at any point you can go back to
[build.draftbit.com](https://build.draftbit.com) and continue building your app
there!

## Installation

### Install Node.js

For starters, make sure you have a recent version of
[Node](https://nodejs.org/en/) installed on your system. Anything over version
12 is fine.

Once Node has been installed, run the following on the command line to make sure
it's been installed correctly:

```
$ node -v
```

If you see the current version of Node in response, you've successfully
installed Node on your machine.

For example,

```
$ node -v
v13.2.0
```

### Install Expo

To run your Draftbit project, you'll also need the Expo CLI. You can install the
Expo CLI using the following command:

```
$ npm install -g expo-cli
```

After installing the Expo CLI, you'll need to install the local dependencies for
the project.

### Install Project Dependencies

First, navigate to the project directory. The .zip will likely be in your
downloads folder, so extract the .zip and move it to the desired location
before proceeding.

Now, run the following commands to install the project dependencies (note that
you'll need an internet connection to do so).

```
$ cd Desktop/New-App
$ npm install
```

> The `cd` command above takes you into the project directory so you can install
> the correct dependencies. You should replace `Desktop/New-App` with the actual
> path to your unzipped project folder.

## Running

To start your project, simply run: `npm start` inside of the project directory
(make sure you've [installed the dependencies
locally](#install-local-dependencies) first). This should open the Expo
developer tools in a browser tab.

### Running in an emulator

You can run your app on your mobile device, on the iOS simulator (if you have
a Mac), or on the Android emulator. If you'd prefer to run your app on an
emulator, see the installation instructions below.

<u>Mac</u>

[iOS Simulator](https://docs.expo.io/versions/latest/workflow/ios-simulator/)

[Android Studio](https://docs.expo.io/versions/v34.0.0/workflow/android-studio-emulator/)

<u>Windows</u>

[Android Studio](https://docs.expo.io/versions/v34.0.0/workflow/android-studio-emulator/)

### Running on your device

If you want to run your app on a physical device, download the Expo
Mobile Client for [iOS](https://itunes.com/apps/exponent) or
[Android](https://play.google.com/store/apps/details?id=host.exp.exponent) and
scan the QR code which can be found in the bottom left corner of browser tab
where the Expo developer tools are running.

Alternatively, you can select the option within the Expo developer tools to send
an email to yourself with a link that will open your app in the Expo Mobile
Client.

## File Structure

```
.
    ├── assets             # Static assets like images and fonts.
    ├── config             # JS representation of fonts, images, themes, and more
        └── Themes.js          # Example file for your app's themes
    ├── screens            # React Native code for the screens you built.
    │   └── MyFirstScreen.js   # Example file for the screen named "My First Screen"
    ├── utilities          # Utility functions needed by your app
    ├── .gitignore         # List of files to ignore when comitting with Git
    ├── App.js             # Entry point for your app
    ├── app.json           # Configuration file for your app, used by Expo
    ├── AppNavigator.js    # Code for your app's navigators
    ├── package.json       # The metadata for your project, including dependencies
    └── README.md          # This file!
```

## Troubleshooting

Any errors that may occur in the process of developing or testing your app will show up as a "Redbox" error on the testing device. A red box will be show on the device with the error message and stack trace for the error. The Expo documentation has [more information about Redbox errors](https://docs.expo.io/versions/v34.0.0/workflow/debugging/#redbox-errors-and-the-stack-trace).

Compilation errors or errors occurring when the expo process tries to execute
commands will also show up in the browser. If you cannot fix these errors, you
should refer to Expo's documentation on [debugging
Javascript](https://docs.expo.io/versions/v34.0.0/workflow/debugging/#debugging-javascript).

## FAQ

- _How can I add my code to GitHub?_

  Pushing your code to GitHub is easy! Follow the information
  [guide](https://help.github.com/en/github/getting-started-with-github/create-a-repo)
  to create your repository and commit your project code.

- _How do I build a binary for the App and Play store?_

  Expo published an [excellent
  guide](https://docs.expo.io/versions/latest/distribution/app-stores/) for
  deploying to the Apple iTunes Store and the Google Play Store. Moreover, for
  users with an iOS Enterprise certifcate, [Expo has information about using
  the certificate to build your apps](https://docs.expo.io/versions/latest/distribution/building-standalone-apps/#if-you-choose-to-build-for-ios).

- _What/where is the license for this code?_

  There's no license by default, but if you create a GitHub repository for your
  project code, for example, [adding a license is
  easy](https://help.github.com/en/github/building-a-strong-community/adding-a-license-to-a-repository).

- _Can I run Expo web with this?_

  Of course! See [this](https://docs.expo.io/versions/v37.0.0/bare/using-web/#__next) guide by Expo for running your React Native app in
  a web browser.

- _What libraries does this code depend on?_

  You can see the full list in your projects `package.json` file (under the
  `dependencies` section), but a few of our dependencies are `react-navigation`,
  `react-native-screens`, and `expo-av`.
