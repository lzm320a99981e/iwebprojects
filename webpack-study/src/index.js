import _ from 'lodash'
import './style.css'
import Icon from './icon.png'
import Data from './data.xml'

// 创建一个HTML节点
function component() {
  let element = document.createElement('div');
  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], '');
  // set style
  element.classList.add('hello');
  // set image
  let image = new Image();
  image.src = Icon;
  element.appendChild(image);

  console.log(Data)

  return element;
}

// 将节点添加到Body
document.body.appendChild(component());
