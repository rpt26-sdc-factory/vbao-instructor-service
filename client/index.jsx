/* eslint-disable no-undef */
/* eslint-disable import/extensions */
import React from 'react';
import ReactDOM from 'react-dom';
import Instructors from './components/Instructors.jsx';
import './styles.css';

ReactDOM.hydrate(<Instructors />, document.getElementById('instructors'));
