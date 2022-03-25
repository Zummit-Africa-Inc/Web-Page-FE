import {Box, Grid} from '@mui/material'
import { Paragraph, Header } from '../Component/Typography'
import PrimaryButton from '../Component/Button'

export default function SectionTwo() {
  return (
    <Box component='section'
        sx={{ py: '4rem', backgroundColor: '#DEE5EE', color: '#081F4A'}}
        px={{xs:3, sm:4, md:'12rem'}}>
        <Grid container spacing={6}>
            <Grid item xs={12} sm={6}>
                <Header textSize='h4'>
                    Why Zummit Africa for artificial intelligence?
                </Header>
            </Grid>
            <Grid item xs={12} sm={6}>
                <Paragraph>
                    We are inspired by the innate will to make things easier, better and faster. For organizations to leverage A.I to build solutions, they need a team of ML engineers. This takes time and a lot of resources to build. Zummit Africa comes to the aid by helping your organization build your A.I solutions, so you can spend less time and money worrying about the problem, while we focus on providing the solution and improving your busness as you want. 
                </Paragraph>
                <PrimaryButton color= '#09090B' bgcolor='#FFEA00'>Contact us</PrimaryButton> 
            </Grid>
        </Grid>
    </Box>
  )
}






























