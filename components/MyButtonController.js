import React,{Components} from 'react';
import Store from '../stores/store';
import Action from '../actions/Action';
import Button from './Button';

var MyButtonController = React.createClass({
  getInitialState: function () {
    return {
      items: Store.getAll()
    };
  },

  componentDidMount: function() {
    Store.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    Store.removeChangeListener(this._onChange);
  },

  _onChange: function () {
    this.setState({
      items: Store.getAll()
    });
  },

  createNewItem: function (event) {
    var inputValue=this.refs.inputval.value;
    if(inputValue)
    Action.addNewItem('inputValue');
  },
  delete: function (event) {
    var inputValue=this.refs.inputval.value;
    if(inputValue)
    Action.deleteFunction(inputValue);
  },
  render: function() {
    return(
      <div>
        <input type="text" ref="inputval"/>
        <Button
          items={this.state.items}
          onClick={this.delete}
        />
      </div>
    );
  }

});

export default MyButtonController;
