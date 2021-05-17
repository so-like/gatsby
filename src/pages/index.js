// import React from "react"
// // 引入link
// import {Link} from "gatsby"
// // 引入布局组件
// import Layout from "./components/layout"
// // 引入公共子组件
// import Header from "./components/headers"
// // export default () => (
// //   <div style={{ color: `purple`, fontSize: `72px` }}>你好世界!</div>
// // )
// export default () => (
//   <div style={{ color: `purple` }}>
//     {/* <h1>你好世界!</h1> */}
//     {/* 通过引入组件来替换h标签 */}
//     <Link to="/about/">about</Link>
//     <Header headerText="共用的头部信息"/>
//      <p>你好中国</p>
//   </div>
// )

import * as React from 'react'
import Layout from './components/layout'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>这里是index页面</p>
    </Layout>
  )
}
export default IndexPage