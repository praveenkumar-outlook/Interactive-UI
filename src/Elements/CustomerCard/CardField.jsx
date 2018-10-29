import React, {Component} from "react";
import {TextField} from "@material-ui/core";
import MaskedInput from "react-text-mask";

class CardField extends Component {
  customInput = (props) => {
    const {inputRef, ...other} = props;
    const {fieldMask} = this.props;

    return (
      <MaskedInput
        {...other}
        ref={inputRef}
        mask={fieldMask}
      />
    );
  }

  render() {
    const {
      fieldId,
      fieldLabel,
      fieldValue,
      fieldHandler,
      isCustom
    } = this.props;

    return (
      <TextField
        id={fieldId}
        label={fieldLabel}
        value={fieldValue}
        onChange={(event) => fieldHandler(event, fieldId)}
        InputProps={
          isCustom
          ? {
              inputComponent: this.customInput
            }
          : {}
        }
      />
    );
  }
}

export default CardField;
