import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';


ReactDOM.render(
   <App headerMessage="Hello React with JSX!! (from prop)" />,
   document.getElementById('root')
);


setTimeout(() => {
   ReactDOM.render(
      <h2>Test unmounting</h2>,
      document.getElementById('root')
   );
}, 4000);