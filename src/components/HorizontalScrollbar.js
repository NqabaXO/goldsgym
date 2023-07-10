import React from 'react';
import {Box} from '@mui/material'
import BodyPart from './BodyPart';
import ExerciseCard from './ExerciseCard';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function HorizontalScrollbar( {data, bodyParts, setBodyPart, isBodyParts}) {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
      };

  return (
    <Slider {...settings}> 
        {data.map((item) => (
            <Box
              key={item.id || item}
              itemId={item.id || item}
              title={item.id || item}
              m="0 40px"
             >
              {isBodyParts ?
                <BodyPart item={item}
                bodyPart={bodyParts}
                setBodyPart={setBodyPart}/>
              :
              <ExerciseCard exercise={item}/>
              }
            </Box>
        ))}
    </Slider>
  )
}

export default HorizontalScrollbar