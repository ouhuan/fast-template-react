import { createStore } from 'redux'
import app from './reducers/app'

import { myAppAction1, myAppAction2 } from './actions/app'
export default createStore(app, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

// // 打印初始状态
// console.log(store.getState())

// // 每次 state 更新时，打印日志
// // 注意 subscribe() 返回一个函数用来注销监听器
// const unsubscribe = store.subscribe(() =>
//   console.log(store.getState())
// )

// // 发起一系列 action
// store.dispatch(myAppAction1())
// store.dispatch(myAppAction2())
// store.getState()

// // 停止监听 state 更新
// unsubscribe();