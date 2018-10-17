import React, {Component} from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

class ElementCard extends Component {
  render() {
    const bull = <span>•</span>;

    return (
      <Card>
        <CardContent>
          <Typography color="textSecondary">
            Word of the Day
          </Typography>
          <Typography variant="headline" component="h2">
            be
            {bull}
            nev
            {bull}o{bull}
            lent
          </Typography>
          <Typography color="textSecondary">
            adjective
          </Typography>
          <Typography component="p">
            well meaning and kindly.
            <br />
            {'"a benevolent smile"'}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    );
  }
}

export default ElementCard;
