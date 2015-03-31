import React from 'react'
import App from './components/app'
import titleLists from './data/title-lists'
import config from './data/config'

document.addEventListener('DOMContentLoaded', function() {
    titleLists.init();
    React.render(<App titleLists={titleLists.read()} config={config}/>, document.body);
});