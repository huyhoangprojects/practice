import React from 'react';

class ListToDo extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  onChange(title) {
    this.props.changeStatus(title)
  }

  render() {
    let list = [];
    if(this.props.filter === 'all') {
      list = this.props.list;
    } else if (this.props.filter === 'active') {
      list = this.props.list.filter(item => item.status === true);
    } else {
      list = this.props.list.filter(item => item.status === false);
    }
    return (
      <ul>
        {
          list.map((item, index) => <li key={index} className={`${item.status ? 'active' : 'completed'}`} data-value={item.title} onClick={() => this.onChange(item.title)}>{item.title}</li>)
        }
      </ul>
    );
  }
}

export default ListToDo;