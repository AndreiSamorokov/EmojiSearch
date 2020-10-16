import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import "./SelectFile.css";

export default class SelectFile extends PureComponent {
  static propTypes = {
    etypeChange: PropTypes.func
  };

  handleChange = event => {
    this.props.etypeChange(event); 
  };

  render() {
    return (
      <div className="component-selectfile">
        <div>
          <label> Emoji Type </label>
          <select onChange={this.handleChange} >
            <option value='1'>Face Emoji</option>
            <option value='2'>Other Emmoji </option>
          </select>
        </div>
      </div>
    );
  }
}
