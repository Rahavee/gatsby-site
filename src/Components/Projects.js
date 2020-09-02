import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Cards from "./Cards"

const useStyles=makeStyles(
{
  container:{
    backgroundColor:"#ffffff"
      }
})
export default function Projects(){
  const classes = useStyles();
  return(<div className={classes.container}>
    My Projects
    <Cards/>
  </div>)
}
