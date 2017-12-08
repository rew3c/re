/* 引入样式 */
import './static/styles/main.css'
import '../test/test'

let a = 3;

console.log('43444');

if(module.hot) {
  module.hot.accept('../test/test',function(){
    console.log('abcabcabcabc')
  })
}