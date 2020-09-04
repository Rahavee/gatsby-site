import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import GitHubIcon from "@material-ui/icons/GitHub"

const useStyles = makeStyles({
  cardContainer: {
    backgroundColor: "#f3f3f1",
    paddingTop: "20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    marginTop:20,
    marginLeft:"10%",
    marginRight:"10%"
  },
  image: {
    height: 350,
    width: 350,
  },
  title:{
    "&:hover":{
      fontWeight:"bold",
      cursor:"pointer"
    }
  }
})

export default function Cards(props) {
  const classes = useStyles()
  return (
    <div>
      <Card className={classes.cardContainer}>
        <Typography className={classes.title} variant="h4">{props.title}</Typography>
        <CardContent
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <img src={props.image} className={classes.image} />
          <Typography variant="body1">{props.desc}</Typography>
        </CardContent>
        <CardActions>
          <Button
            href={"https://www.github.com/Rahavee/" + props.url}
            size="small"
          >
            <GitHubIcon />
            View Code
          </Button>
        </CardActions>
      </Card>
    </div>
  )
}
