import React from "react"
import me from "../Images/me.jpg"
import { makeStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import Button from "@material-ui/core/Button"
import GitHubIcon from "@material-ui/icons/GitHub"


const useStyles = makeStyles({
  container: {
    width: "100%",
    flex: 2,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "40px 40px 10px 40px",
    backgroundColor: "#ffffff",
  },
  image: { height: 200, width: 150, marginTop: 5, marginBottom: 5 },
  bio: { margin: "5px 10px 10px 10px" },
})

export default function Bio(props) {
  const classes = useStyles()
  return (
    <div className={classes.container}>
      <Typography variant="h4">Rahavee</Typography>
      <img className={classes.image} src={me} alt="me"/>
      <Typography className={classes.bio} variant="body1">
        Hello! I am a software engineer and a senior at the University of Vermont. with experience in C++, Python, Java, Javascript, Machine learning and more.
      </Typography>
      <Button href={"https://www.linkedin.com/in/rahavee-r-1012b0a1/"}>
        <LinkedInIcon /> LinkedIn
      </Button>
      <Button href={"https://www.github.com/Rahavee"}>
        <GitHubIcon /> Github{" "}
      </Button>
    </div>
  )
}
