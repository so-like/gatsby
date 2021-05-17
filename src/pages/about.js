import React from "react"
// 引入link 组件
import {Link} from "gatsby"
import Header from "./components/headers"
export default () => (
  <div style={{ color: `teal` }}>
    {/* <h1>相关页面</h1> */}
    <h1>关于页面</h1>
    <Link to="/">回家</Link>
    <Header headerText="这是公共子组件 头部"/>
    <p>react的初次体验.</p>
  </div>
)