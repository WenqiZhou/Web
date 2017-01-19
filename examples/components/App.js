import React from 'react';
import { hashHistory } from 'react-router';

const App = ({ children }) => (
  <div>
    <div>
      <a
        onClick={() => {
          hashHistory.goBack();
        }}
      >
        返回
      </a>
    </div>
    <main>
      {children}
    </main>
  </div>
);

App.Context = (list) => () => {
  return (
    <ul>
      {
        Object.keys(list).map((key, index) => (
          <li key={index}>
            <a>{key}</a>
            <ul>
              {
                Object.keys(list[key]).map((k, i) => (
                  <li
                    key={i}
                    onClick={() => {
                      hashHistory.push(`/${key}/${k}`);
                    }}
                  >
                    <a>{k}</a>
                  </li>
                ))
              }
            </ul>
          </li>
        ))
      }
    </ul>
  )
};

export default App;
