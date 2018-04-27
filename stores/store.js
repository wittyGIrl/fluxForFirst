import React from 'react';
import {EventEmitter} from 'events';
import assign from 'object-assign';

var Store = assign({}, EventEmitter.prototype, {
  items: [],
  state: '',

  getAll: function () {
    return this.items;
  },

  addNewItemHandler: function (text) {
    this.items.push(text);
  },
  addNewListHandler: function (text) {
    this.items.push(text);
  },
  delete: function(text) {
    this.items.push('the state is'+(this.state-text));
  },
  emitChange: function () {
    this.emit('change');
  },

  addChangeListener: function(callback) {
    this.on('change', callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener('change', callback);
  }
});
export default Store;
