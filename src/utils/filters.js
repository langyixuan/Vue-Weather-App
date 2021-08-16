/**
 * 过滤器
 */
import Vue from 'vue'

// 首字母大写
Vue.filter('upperCase', words => {
  let singleWord = words.split(" ")
  let newWords = ''
  for (let i = 0; i < singleWord.length; i++) {
    newWords += singleWord[i].slice(0, 1).toUpperCase() + singleWord[i].slice(1).toLowerCase() + " "
  }
  return newWords
})