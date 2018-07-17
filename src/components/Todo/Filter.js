import React from 'react';

class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick(e) {
    this.props.changeFilter(e.currentTarget.dataset.filter);
  }

  render() {
    return (
      <div className='filter'>
        <button className='filter__button' data-filter='all' onClick={this.onClick}>All</button>
        <button className='filter__button' data-filter='active' onClick={this.onClick}>Active</button>
        <button className='filter__button' data-filter='completed' onClick={this.onClick}>Completed</button>
      </div>
    );
  }
}

export default Filter;