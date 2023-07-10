import React from 'react'
import {Stack, Box, Typography} from '@mui/material'
import HorizontalScrollbar from './HorizontalScrollbar'
import Loader from './Loader'

function SimilarExercise({targetMuscleExercises, equipmentExercises}) {
  return (
    <Box sx={{mt: {lg:'100px', xs:'0'}, display: { sm: 'none', xs:'contents', lg:'contents'}}}>
      <Typography variant='h3' mb={5}>
        Exercises that target the same muscle group
      </Typography>
      <Stack direction='row' sx={{p: '2', position:'relative'}}>
        {targetMuscleExercises.length ?
        <Box sx={{position:'relative', width:'100%', p:'20px'}}>
          <HorizontalScrollbar data={targetMuscleExercises}/>
        </Box>
        : <Loader/>
        }
      </Stack>
      <Typography variant='h3' mb={5}>
        Exercises that use the same equipment
      </Typography>
      <Stack direction='row' sx={{p: '2', position:'relative'}}>
        {equipmentExercises.length ? 
        <Box sx={{position:'relative', width:'100%', p:'20px'}}>
          <HorizontalScrollbar data={equipmentExercises}/>
        </Box>
        : <Loader/>
        }
      </Stack>
    </Box>
  )
}

export default SimilarExercise