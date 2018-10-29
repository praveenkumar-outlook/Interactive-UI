import React, {Component} from "react";
import ReactDOM from "react-dom";
import {
  Button,
  Grid
} from "@material-ui/core";
import {ThreeSixty} from "@material-ui/icons";
import CardField from "./CardField";
import CardBackView from "./CardBackView";
import CardFrontView from "./CardFrontView";
import * as d3 from "d3";
import $ from "jquery";
import "./style.scss";

class CustomerCard extends Component {
  constructor() {
    super();
    this.state = {
      date: "",
      name: "",
      number: "",
      cvv: "",
      isRotate: false,
      isInvert: false
    };
  }

  componentDidMount() {
    this.el = $(ReactDOM.findDOMNode(this));
  }

  handleChange = (event, field) => {
    this.setState({
      [field]: event.target.value
    });
  }

  rotateCard = () => {
    this.setState({
      isRotate: true,
      isInvert: !this.state.isInvert
    });
    d3.select(".card")
      .call((card) => {
        card
          .transition()
          .duration(250)
          .styleTween("transform", () =>
            d3.interpolateString("translate(0px) rotateY(0deg)",
              "translate(350px) rotateY(180deg)")
          );
      });
    setTimeout(() => {
      this.setState({
        isRotate: false
      });
    }, 250);
  }

  render() {
    const {date, name, number, cvv, isRotate, isInvert} = this.state;

    return(
      <div className="ui-customer-card">
        <Grid container>
          <Grid item md={6}>
            <Grid container>
              <Grid item md={12}>
                <CardField
                  fieldId="number"
                  fieldLabel="Card Number"
                  fieldValue={number}
                  fieldHandler={this.handleChange}
                  isCustom={true}
                  fieldMask={[/\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/,
                    ' ', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/]}
                />
              </Grid>
              <Grid item md={12}>
                <CardField
                  fieldId="name"
                  fieldLabel="Card holder's Name"
                  fieldValue={name}
                  fieldHandler={this.handleChange}
                />
              </Grid>
              <Grid item md={12}>
                <Grid container>
                  <Grid item md={6}>
                    <CardField
                      fieldId="date"
                      fieldLabel="Expiry date"
                      fieldValue={date}
                      fieldHandler={this.handleChange}
                      isCustom={true}
                      fieldMask={[/\d/, /\d/, '/', /\d/, /\d/]}
                    />
                  </Grid>
                  <Grid item md={6}>
                    <CardField
                      fieldId="cvv"
                      fieldLabel="CVV"
                      fieldValue={cvv}
                      fieldHandler={this.handleChange}
                      isCustom={true}
                      fieldMask={[/\d/, /\d/, /\d/]}
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item md={6}>
            <svg className="customer-card" width="100%" height="250">
              <rect className="card"
                x="0" y="0"
                rx="5" ry="5"
                width="350" height="200"
              />
              {
                !isRotate && !isInvert
                ? <CardFrontView
                    name={name}
                    number={number}
                    date={date}
                  />
                : ""
              }
              {
                !isRotate && isInvert
                ? <CardBackView
                    cvv={cvv}
                  />
                : ""
              }
            </svg>
            <Button variant="outlined"
              onClick={this.rotateCard}>
              Rotate
              <ThreeSixty />
            </Button>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default CustomerCard;
