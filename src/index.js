import React from 'react';
import ReactDOM from 'react-dom';
import { autorun } from 'mobx';
import './index.css';
import App from './components/App';
import store from './stores';
import * as serviceWorker from './serviceWorker';

function render() {
  ReactDOM.render(
    <App
      stories={store.storyStore.readableStories}
      onArchive={(objectID) => store.archiveStore.archiveStory(objectID)}
    />,
    document.getElementById('root')
  );
}

autorun(render);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
