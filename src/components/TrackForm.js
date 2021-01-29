import React, { useContext } from 'react'
import { Input, Button } from 'react-native-elements'
import { Context as LocationContext } from '../context/LocationContext'

const TrackForm = () => {
  const {
    state: { name, recording, locations },
    startRecording,
    stopRecording,
    changeName
  } = useContext(LocationContext)
  console.log(locations.length)

  return (
    <>
      <Input value={name} onChangeText={changeName} placeholder='Enter Name' />
      {recording ?
        <Button title='Stop' onPress={stopRecording} />
       :
        <Button onPress={startRecording} title='Start Recording' />
      }
    </>
  )
}

export default TrackForm
