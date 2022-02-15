import React from 'react'
import { Typography } from '@mui/material';
import { Grid } from '@mui/material';
import { TextField } from '@mui/material';

export default function HomePage() {
  return (
    <div>
        <Grid container direction="column" justifyContent="center" alignItems="center" spacing={5} style={{marginTop: "1em", flex:1}}>
            <Grid item>
                <Typography variant="h1" align="center" style={{width:200}}> POV </Typography>
            </Grid>
            <Grid item style={{flex:1}}>
                <TextField id="outlined-search" label="Search field" type="search" fullWidth/>
            </Grid>
        </Grid>
    </div>
  )
}
