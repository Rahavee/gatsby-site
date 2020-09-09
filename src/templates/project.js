import React from "react"
import splash from "../Images/splash.jpg"
import { makeStyles } from "@material-ui/core/styles"
import CssBaseline from "@material-ui/core/CssBaseline"
import Bio from "../Components/Bio"
import Cards from "../Components/Cards"
import { graphql } from "gatsby"
import Typography from "@material-ui/core/Typography"

const useStyles = makeStyles({
  header: {
    backgroundImage: `url(${splash})`,
    width: "100%",
    height: "50vh",
    backgroundPosition: "center",
    backgroundSize: "cover",
  },
  bioProjectsWrapper: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
  },
  projectContainer: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#ffffff",
    width: "100%",
    flex: 5,
  },
})

export default function Project({ data }) {
  const source = data.markdownRemark.frontmatter
  const classes = useStyles()
  return (
    <div>
      <CssBaseline />
      <div className={classes.header} />
      <div className={classes.bioProjectsWrapper}>
        <Bio />
        <div className={classes.projectContainer}>
          <Typography variant="h2">{source.title}</Typography>
          <Cards
            title={source.title}
            url="Code-Etch"
            tech={source.tech}
            image={source.featuredImage.childImageSharp.fluid}
            desc={source.longDesc}
            screenshot1={source.screenshot1.childImageSharp.fluid}
            frontPage={false}
          />
        </div>
      </div>
    </div>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        desc
        longDesc
        tech
        title
        screenshot1 {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
