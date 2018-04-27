import React from 'react';

export default function Button(props){
  var items=props.items;
  var itemHtml=items.map(function(listItem,i){
    return <li key={i} onMouseover={press()}>{listItem}</li>
  });
  return <div>
          <ul>{itemHtml}</ul>
          <button onClick={props.onClick}>New Items</button>
         </div>;
};
function press(){
  console.log(1);
}
