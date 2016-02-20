var React = require('react');
var ReactDOM = require('react-dom');
var ListManager = require('./components/ListManager.jsx');

ReactDOM.render(<ListManager title="Ingredients" headingColor="#FF69B4"/>, document.getElementById('ingredients'));
ReactDOM.render(<ListManager title="ToDo" headingColor="#007F00"/>, document.getElementById('todo'));
ReactDOM.render(<ListManager title="Holi" headingColor="#e52d27"/>, document.getElementById('holi'));
