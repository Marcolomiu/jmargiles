import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom';
import Main from './Router';
import SimpleReactLightbox from 'simple-react-lightbox';

class Index extends Component {
  render() {
    return (
      <BrowserRouter>
        <SimpleReactLightbox>
          <Route component={Main} />
        </SimpleReactLightbox>
      </BrowserRouter>
    );
  }
}
ReactDOM.render(<Index/>, document.getElementById('index'));
