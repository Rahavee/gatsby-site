import React from "react"
import splash from "../Images/splash.jpg"
import { makeStyles } from "@material-ui/core/styles"
import Projects from "../Components/Projects"
import CssBaseline from "@material-ui/core/CssBaseline"
import Bio from "../Components/Bio"
import { graphql } from "gatsby"

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

export default function App({data}) {
  const classes = useStyles()
  return (
    <div className="App">
      <CssBaseline />
      <div className={classes.mainPage} />
      <div className={classes.bioProjectsWrapper}>
        <Bio />
        <Projects/>
      </div>
    </div>
  )
}

export const query = graphql`
  {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            desc
          }
        }
      }
    }
  }
`