import React from "react"
import splash from "../Images/splash.jpg"
import { makeStyles } from "@material-ui/core/styles"
import CssBaseline from "@material-ui/core/CssBaseline"

const useStyles = makeStyles({
  mainPage: {
    backgroundImage: `url(${splash})`,
    width: "100%",
    height: "80vh",
    backgroundPosition: "center",
    backgroundSize: "cover",

  },
  box: {
    position: "absolute",
    top: "40%",
    left: "25%",
    backgroundColor: "rgb(0,0,0,0.6)",
    padding:"20px",
    width: "50%",
    minWidth: 200,
    height: "100px",
    color: "white",
    border: "3px solid #f1f1f1",
  },
})

function App() {
  const classes = useStyles()
  return (
    <div className="App">
      <CssBaseline />
      <div className={classes.mainPage}  />
      <div className={classes.box}>Hi Dude!</div>
    </div>
  )
}

export default App
