// Application entrypoint.

// Load up the application styles
require('../styles/application.scss');

// Render the top-level React component
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';

//Each additional component is rendered by the render() function that returns the JSX

//Component is injected into the DOM with the ReactDOM.render(component, element)
ReactDOM.render( <App /> , document.getElementById( 'react-root' ) );



