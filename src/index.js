import React from 'react';
import ReactDOM from 'react-dom';

const awesomePerson = React.createElement('h1', {className: 'me'}, 'An Awesome Person');
const learningReact = React.createElement('p', {}, 'Who is learning React');
const uList = React.createElement('ul', {className: 'my-interests'}, [
    React.createElement('li', {}, 'JavaScript'),
    React.createElement('li', {}, 'React'),
    React.createElement('li', {}, 'Movies'),
    React.createElement('li', {}, 'Ice cream')
  ]);

const meInReact = React.createElement('div', {className: 'me'}, [awesomePerson, learningReact, uList]);


ReactDOM.render(
  meInReact, 
  document.getElementById('root')
);

 export default meInReact