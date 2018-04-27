import AppDispatcher from '../dispatcher/Dispatcher';

var Action = {
  addNewItem: function (text) {
    AppDispatcher.dispatch({
      actionType: 'ADD_NEW_ITEM',
      text: text
    });
  },
  deleteFunction: function (text) {
    AppDispatcher.dispatch({
      actionType: 'DELETE',
      text: text
    });
  },
}
export default Action;
