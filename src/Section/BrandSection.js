import React from 'react'
import {Box,  Grid, Stack, Divider} from "@mui/material"
import {Typography2} from '../Component/Typography2'
import pic from "../Images/AWS.png";
import pics from "../Images/Nvidia.png";
import picss from "../Images/Zummit.png";

function BrandSection() {

  

  return (
    <>
      <Box component="section"  sx={{ py: '9rem', backgroundColor:'white'}}
        px={{xs:2, sm:3, md:'6rem', lg:'9rem', xl:'15rem'}}>
        <Box sx={{color:'#081F4A', marginBottom:'2rem'}}>
            <Typography2 pbSize='0'>Supported by some of the world's most innovative brands</Typography2>
        </Box>
        <Grid container direction='row' spacing={3} justifyContent='space-around' alignItems='center'>
          <Stack alignItems='center' justifyContent='center' sx={{border: '12px solid', borderColor:'#F3F4F4', height:108, width:242, borderWidth : 7}} direction='row' spacing={2} divider={<Divider orientation='vertical' flexItem />}>
            <Grid
            component="img" 
            sx={{
              height: 30,
              width: 50,
              textAlign:'auto' 
            }}
            alt="AWS"
            src={pic}
            ></Grid>
            <Grid textAlign='center'>ACTIVATE FOR <br/> FOUNDERS</Grid>
          </Stack>
            <Box>
                <Grid
                  component="img"  
                  sx={{
                    height: 108,
                    width:242, 
                    }}
                    alt="AWS"
                    src={pics}
                  >
                  </Grid>
            </Box>
            <Stack alignItems='center' justifyContent='center' sx={{border: '12px solid', borderColor:'#F3F4F4', height:108, width:242, borderWidth : 7}} direction='row' spacing={2} divider={<Divider orientation='vertical' flexItem />}>
              <Grid
              component="img" 
              sx={{
                height: 47.57,
                width: 44,
                
              
                
                
              }}
              alt="AWS"
              src={picss}
              >
              </Grid>
              <Grid textAlign='center'>STRATEGIC<br/> PARTNER</Grid>
            </Stack>
        </Grid>
      </Box>
    </>
  )
}

export default BrandSection