import React from "react"
import PropTypes from "prop-types"

import {SketchPicker} from "react-color"

class ColourPicker extends React.Component {
  
  constructor(props) {
    super(props);
    
    this.state = { selector: props.selector };
    
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange = (colour) => {
    document.body.style.background = colour.hex;
    
    let el = document.querySelector('#' + this.state.selector);
    el.value = colour.hex;
  }
  
  render () {
    return (
      <React.Fragment>
        <SketchPicker color={this.props.colour} 
                            onChange={this.handleChange} />
      </React.Fragment>
    );
  }
}

ColourPicker.propTypes = {};

export default ColourPicker
