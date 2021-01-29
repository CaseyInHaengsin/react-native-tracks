import '../_mockLocation';
import React, { useContext } from 'react';
import { Text } from 'react-native-elements';
import { StyleSheet } from 'react-native';
import { SafeAreaView, withNavigationFocus } from 'react-navigation';
import Map from '../components/Map';
import { Context as LocationContext } from '../context/LocationContext';
import useLocation from '../hooks/useLocation';
import TrackForm from '../components/TrackForm';
import Spacer from '../components/Spacer';

const TrackCreateScreen = ({ isFocused }) => {
  const { state, addLocation } = useContext(LocationContext);
  const [err] = useLocation(isFocused, (location) => {
    addLocation(location, state.recording)
  });

  return (
    <SafeAreaView forceInset={{ top: 'always'}}>
      <Text h3>Create a track</Text>
      <Map />
      {err ? <Text>Please enable location services</Text> : null}
      <Spacer>
        <TrackForm />
      </Spacer>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  
})


export default withNavigationFocus(TrackCreateScreen)