import React from 'react';

class AddToDo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleAdd = this.handleAdd.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleAdd() {
    this.state.value && this.props.addToDo({
      title: this.state.value,
      status: true
    });
    this.setState({value: ''});
  }

  handleChange(e) {
    this.setState({value: e.target.value});
  }

  render() {
    return (
      <div className='add-block'>
        <input type='text' value={this.state.value} onChange={this.handleChange}/>
        <button type='button' onClick={this.handleAdd}>Add</button>
      </div>
    );
  }
}

export default AddToDo;