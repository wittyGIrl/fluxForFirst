import {Dispatcher} from 'flux';
var AppDispatcher=new Dispatcher();
import Store from '../stores/store';

AppDispatcher.register(function(action){
  switch(action.actionType){
    case 'ADD_NEW_ITEM':
      Store.addNewItemHandler(action.text);
      Store.emitChange();
      break;
    case 'DELETE':
      Store.delete(action.text);
      Store.emitChange();
      break;
    default:
  }
})
export default AppDispatcher;
