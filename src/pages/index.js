import React from "react"
import splash from "../Images/splash.jpg"
import { makeStyles } from "@material-ui/core/styles"
import Projects from "../Components/Projects"
import CssBaseline from "@material-ui/core/CssBaseline"
import Bio from "../Components/Bio"

const useStyles = makeStyles({
  mainPage: {
    backgroundImage: `url(${splash})`,
    width: "100%",
    height: "50vh",
    backgroundPosition: "center",
    backgroundSize: "cover",
  },
  bioProjectsWrapper: {
    display: "flex",
    flexDirection:"row",
    width:"100%"
  },
})

function App() {
  const classes = useStyles()
  return (
    <div className="App">
      <CssBaseline />
      <div className={classes.mainPage} />
      <div className={classes.bioProjectsWrapper}>
        <Bio />
        <Projects />
      </div>
    </div>
  )
}

export default App
