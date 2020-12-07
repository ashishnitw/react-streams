import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

const PageOne = () => {
  return <div>Page 1</div>
}

const PageTwo = () => {
  return <div>Page 2</div>
}

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Route path="/" exact component={PageOne}></Route>
        <Route path="/2" exact component={PageTwo}></Route>
      </BrowserRouter>
    </div>
  );
}

export default App;