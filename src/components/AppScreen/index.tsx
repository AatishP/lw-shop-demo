import {Space} from 'components/Space';
import React, {ReactNode} from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

type AppScreenProps = {
  children: ReactNode;
};

export const AppScreen = ({children}: AppScreenProps) => {
  return (
    <ScrollView
      style={styles.scrollView}
      contentContainerStyle={styles.contentContainer}>
      <SafeAreaView style={styles.innerContainer}>
        <>
          <Space size={16} />
          {children}
        </>
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#eeeeee',
  },
  contentContainer: {
    flexGrow: 1,
    // backgroundColor: '#eeeeee',
  },
  innerContainer: {
    flexGrow: 1,
    marginHorizontal: 16,
  },
});
