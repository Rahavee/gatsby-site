import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Cards from "./Cards"
import random from "../Images/random.png"
import Typography from "@material-ui/core/Typography"

const useStyles = makeStyles({
  container: {
    display:"flex",
    justifyContent:"center",
    flexDirection:"column",
    alignItems:"center",
    backgroundColor: "#ffffff",
    width: "100%",
    flex: 5,
  },
})
export default function Projects() {
  console.log(data);
  const classes = useStyles()
  return (
    <div className={classes.container}>
      <Typography variant="h2">Code Portfolio</Typography>
      <Cards
        title="Code-Etch"
        url="Code-Etch"
        image={random}
        desc={data.allMarkdownRemark.edges.node.frontmatter.desc}
      />
      <Cards
        title="Code-Etch"
        url="Code-Etch"
        image={random}
        desc="Topping tootsie roll halvah icing chupa chups icing chocolate cake tiramisu sugar plum. Ice cream pastry cotton candy sweet roll pudding. Gingerbread dragée dragée lemon drops muffin cupcake jelly. Halvah jelly-o muffin pastry tootsie roll cake cotton candy chocolate bar chupa chups. Pastry croissant gummi bears danish. Dessert sesame snaps jujubes icing candy sweet sugar plum. "
      />
    </div>
  )
}






