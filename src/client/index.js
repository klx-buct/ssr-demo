import React from 'react';
import ReactDom from 'react-dom';
import App from 'components/App';

let ssrData;

if(window.data) {
  ssrData = {...window.data.people};
}else {
  ssrData = null;
}

ReactDom.hydrate(<App data={ssrData}/>, document.querySelector('#root'));