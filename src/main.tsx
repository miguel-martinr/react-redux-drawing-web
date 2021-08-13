import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { Provider } from 'react-redux';
import { store } from './app/store';

// export type StateType = {color: string, weight: number};
// export type Action = {
//   type: '@weight/updated' | '@color/updated',
//   payload: {color: string} | {weight: string}
// }

// const InitialState: StateType = {color: '#000000', weight: 5};

// const reducer = (state: StateType = InitialState, action: Action) => {
//   switch (action.type) {
//     case '@color/updated':
//       return {...state, ...action.payload};

//     case '@weight/updated':
//       return {...state, ...action.payload};
  
//     default:
//       return state;
//   }
// }

// const store = createStore(reducer, 
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
  
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
