import './App.css';
import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { Grid, TextField, Button, Card, CardContent, Typography } from '@material-ui/core';
function App() {
  const [format, setFormat] = React.useState('Select');
  const [message,setMessage]= React.useState('Select')
  const handleChange = (event) => {
    setFormat(event.target.value);
  };
  const handleMessage = (event) => {
    setMessage(event.target.value);
  };
  return (
    <div className="App">
    <Typography color='textSecondary' gutterBottom variant="h6" align="center">
        Parse-spec
       </Typography>
      <Grid>
        <Card style={{ maxWidth: 450, padding: "20px 5px", margin: "0 auto" }}>
          <CardContent>
            <Typography gutterBottom variant="h5">
              Parse Spec
          </Typography> 
       <form>
        <Grid container spacing={1}>
        <Grid xs={12} item>
         <InputLabel id="demo-simple-select-label" align="left"> Serialization Format Type</InputLabel>
        <Select
          fullWidth
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={format}
          label="Select"
          onChange={handleChange}
        >
          <MenuItem value={"JSON"}>JSON</MenuItem>
          <MenuItem value={"XML(Currently Not Supported"}>XML(Currently Not Supported</MenuItem>
        </Select>
                </Grid>
                <Grid item xs={12}>
                <InputLabel id="demo-simple-select-label" align="left"> Message Container</InputLabel>
        <Select
          fullWidth
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={message}
          label="Select"
          onChange={handleMessage}
        >
          <MenuItem value={"Array"}>Array</MenuItem>
          <MenuItem value={"String"}>String</MenuItem>
        </Select>
                </Grid>
                <Grid item xs={12}>
                  <Typography align='left'>Input Datatime Format</Typography>
                  <TextField type="text" variant="outlined" fullWidth />
                </Grid>
                <Grid item xs={12}>
                  <Typography align='left'>Output Datatime Format</Typography>
                  <TextField type="text" variant="outlined" fullWidth />
                </Grid>
                <Grid item xs={12}>
                <Typography align='left'>Container Path</Typography>
                  <TextField multiline rows={4} variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                <Typography align='left'>Timestamp Path</Typography>
                  <TextField multiline rows={4} variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                <Typography align='left'>Key Path</Typography>
                  <TextField multiline rows={4} variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                <Typography align='left'>Trickle</Typography>
                  <TextField multiline rows={4} variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12} sm={2}>
                  <Button type="submit" variant="contained" style={{textTransform:'none',backgroundColor:'#2D3648',color:'#ffffff',fontFamily:'Inter'}} fullWidth>Run</Button>
                </Grid>
                <Grid item xs={12} sm={6} >
                  <Button type="submit" style={{fontFamily:'Inter'}} variant="outlined"  fullWidth>Stop Execution</Button>
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </div>
  );
}

export default App;
