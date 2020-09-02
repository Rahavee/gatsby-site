import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import Button from "@material-ui/core/Button"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import GitHubIcon from "@material-ui/icons/GitHub"

export default function Cards(props) {
  return (
    <div>
      <Card>
        <CardContent>hello</CardContent>
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
