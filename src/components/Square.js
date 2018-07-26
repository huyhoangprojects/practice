import React from 'react';
import './square.scss';

class Square extends React.Component{
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this);
    this.state = {disabled: false}
  }

  handleClick = () => {
    this.props.onClick(this.props.value);
    this.setState({disabled: true});
  }

  render() {
    return <button className="square" onClick={this.handleClick} disabled={this.state.disabled}>{ this.props.value }</button>
  }
}

export default Square;