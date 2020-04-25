import React from 'react';
import {
  withTheme,
  Container,
  ScreenContainer,
  Divider,
  Button,
  FAB,
} from '@draftbit/ui';
import { View, StyleSheet, Text } from 'react-native';

class QuizView extends React.Component {
  render() {
    const { theme } = this.props;

    return (
      <ScreenContainer hasSafeArea={true} scrollable={false}>
        <Container useThemeGutterPadding={true}>
          <View style={styles.view6Z}>
            <View style={styles.viewA3}>
              <Text
                style={StyleSheet.flatten([
                  theme.typography.subtitle2,
                  { color: theme.colors.light },
                ])}
              >
                1/10 Cards
              </Text>
              <Text
                style={StyleSheet.flatten([
                  theme.typography.subtitle2,
                  { color: theme.colors.light },
                ])}
              >
                Correct: XX%
              </Text>
            </View>
            <Text style={theme.typography.headline3}>
              This is an example question on the card
            </Text>
            <Button type="solid">Flip Card</Button>
          </View>
        </Container>
        <Divider color={theme.colors.divider} style={styles.dividerQL} />
        <View style={styles.view3H}>
          <FAB
            type="standard"
            icon="Feather/x"
            color={theme.colors.custom_rgb201_0_0}
          />
          <FAB
            color={theme.colors.custom_rgb0_201_25}
            type="standard"
            icon="Feather/check"
          />
        </View>
      </ScreenContainer>
    );
  }
}

const styles = StyleSheet.create({
  view6Z: {
    borderBottomWidth: 1,
    borderRightWidth: 1,
    minHeight: 350,
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
