/**
 * @file 公共方法
 */

 import { Message } from 'element-ui';

 /**
  * 复制
  * @param {string} text - 需要复制的文本
  */
 export function copy(text) {
    console.log(text);

    let input = document.createElement('input');
    input.style.cssText = 'position: fixed; top: -9999px; left: -9999px; opacity: 0;';
    input.value = text;
    document.body.appendChild(input);
    input.select();
    document.execCommand('Copy');
    Message({
        message: '复制成功',
        type: 'success'
    });
    input.remove();
 }