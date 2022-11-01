import React from 'react';
import { alpha, styled } from '@mui/material/styles';
import Slider from '@mui/material/Slider';

import { ThemeProvider, createTheme } from '@mui/system';
import { Box } from '@mui/system';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardMedia } from '@mui/material';

const SuccessSlider = styled(Slider)(({ theme }) => ({
  width: 300,
  color: theme.palette.success.main,
  '& .MuiSlider-thumb': {
    '&:hover, &.Mui-focusVisible': {
      boxShadow: `5px 0px 0px 8px ${alpha(theme.palette.success.main, 0.16)}`,
    },
    '&.Mui-active': {
      boxShadow: `0px 0px 0px 14px ${alpha(theme.palette.success.main, 0.16)}`,
    },
  },
}));

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);


const GardenPlants = () => {
  return (
    <div>
      <div className='container mx-auto'>
        <div className="pt-4 pb-8">
          <h1 className='pb-2 text-3xl font-bold'>House Plants</h1>
          <p className="text-xl font-semibold text-gray-400">Tuesday, October 25th</p>
        </div>
        <div class="grid overflow-hidden grid-cols-2 grid-rows-3 gap-10 h-[34rem] pb-8">
          <div class="row-span-1 col-start-1 ">
            <div>
              <Card sx={{
                display: 'flex',
                width: 250,
                height: 250
              }}>

                <CardContent>
                  <Box
                    sx={{
                      width: 50,
                      height: 50,
                      backgroundColor: '#eee',
                      '&:hover': {
                        opacity: [0.9, 0.8, 0.7],
                      },
                    }}
                  />
                </CardContent>
              </Card>
            </div>
          </div>

          <div class="row-span-3 col-start-2 col-span-2 overflow-scroll">
          </div>

          <div class="row-start-2 row-span-2">
          </div>
        </div>

        <div className="overflow-scroll h-[34rem]">
        </div>
      </div>
    </div>
  )
}

export default GardenPlants