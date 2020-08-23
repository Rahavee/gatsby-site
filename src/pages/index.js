import React from 'react';
import splash from '../Images/splash.jpg';
import {makeStyles} from "@material-ui/core/styles";
import CssBaseline from '@material-ui/core/CssBaseline';


const useStyles = makeStyles({
  mainPage: {
    backgroundImage: `url(${splash})`,
    width: "100%",
    height:"100vh",
    backgroundPosition:"center",
    backgroundSize:"cover",
  }
});

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <CssBaseline/>
      <div className={classes.mainPage}>
        <div>Hi Dude!</div>

      </div>


    </div>
  );
}

export default App;
