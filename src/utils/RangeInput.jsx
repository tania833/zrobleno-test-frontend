import React from 'react';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';
import PropTypes from 'prop-types';

class RangeInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: { min: 0, max: 1000 },
    };
  }

  render() {
    return (
      <InputRange
        maxValue={1000}
        minValue={0}
        step={50}
        value={this.state.value}
        onChange={(value) => {
          this.setState({ value });
          this.props.setFilters(value);
        }}
      />
    );
  }
}

RangeInput.propTypes = {
  setFilters: PropTypes.func,
};

export default RangeInput;
