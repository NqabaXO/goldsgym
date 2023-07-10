import { Box } from '@mui/material'
import React from 'react'
import Herobanner from '../components/Herobanner'
import Exercises from '../components/Exercises'
import SearchExercises from '../components/SearchExercises'
import { useState } from 'react'

function Home() {
  const [bodyPart, setBodyPart] = useState('all')
  const [exercises, setExercises] = useState([]);
  return (
    <Box>
      <Herobanner/>
      <SearchExercises 
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
        />
      <Exercises
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
        exercises={exercises}
      />

    </Box>
  )
}

export default Home