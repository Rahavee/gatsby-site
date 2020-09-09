import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import GitHubIcon from "@material-ui/icons/GitHub"
import Img from "gatsby-image"

const useStyles = makeStyles({
  cardContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    backgroundColor: "#f3f3f1",
    paddingTop: "20px",
    marginTop: 20,
    marginLeft: "10%",
    marginRight: "10%",
  },
  image: {
    height: "100%",
    width: "100%",
  },
  button:{
    backgroundColor:"#CFE2d9"
  },
  title: {
    "&:hover": {
      fontWeight: "bold",
      cursor: "pointer",
    },
  },
  imageFront: {
    height:400,
    width:500
  }
})

export default function Cards(props) {
  const classes = useStyles()
  return (
    <div>
      <Card className={classes.cardContainer}>
        {props.frontPage ? (
          <Typography className={classes.title} variant="h4">
            {props.title}
          </Typography>
        ) : (
          ""
        )}
        <CardContent
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Img fluid={props.image} className={classes.imageFront} />
          <br />
          <br />
          {props.frontPage ? (
            <Typography variant="body1">{props.desc}</Typography>
          ) : (
            <div>
              <Typography variant="h6">Technologies used</Typography>
              <Typography variant="body1">{props.tech}</Typography>
              <br />
              <br />
              <Typography variant="h6">Description</Typography>
              <Typography variant="body1">{props.desc}</Typography>
              <br />
              <br />
              <Typography variant="h6">Screenshots</Typography>
              {props.big==="yes"?(<div style={{display:"flex", flexDirection:"column"}}>
                <Img fluid={props.screenshot1} className={classes.image} />
                <br/>
                <Img fluid={props.screenshot2} className={classes.image}/>
              </div>):(<div style={{display:"flex"}}>
                <Img fluid={props.screenshot1} className={classes.image} />
                <Img fluid={props.screenshot2} className={classes.image}/>
              </div>)}

              <CardActions
                style={{
                  padding: "40px",
                  paddingBottom: "60px",
                  display: "flex",
                  justifyContent: "space-around",
                }}
              >
                <Button
                  className={classes.button}
                  href={"https://www.github.com/Rahavee/" + props.url}
                  size="medium"
                >
                  <GitHubIcon />
                  View Code
                </Button>
                {props.demo==="project"?(<Button className={classes.button} href={props.demoURL} size="medium"> Project Proposal</Button>):("")}
                {props.demo==="yes"?(<Button className={classes.button} href={props.demoURL} size="medium"> Visit page</Button>):(" ")}
              </CardActions>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
