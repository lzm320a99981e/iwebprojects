// import _ from 'lodash'
import {cube} from './math'

if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!');
}

function component() {
  // create div
  let pre = document.createElement('pre');
  // div.innerHTML = _.join(['Hello', 'Webpack'], ' ');
  pre.innerHTML = [
    'Hello Webpack',
    '5 cubed is equal to ' + cube(5)
  ].join('\n\n');

  return pre;
}

document.body.appendChild(component());
