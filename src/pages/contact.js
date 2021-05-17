import React from "react"
import { Link } from "gatsby"
import Header from "./components/headers"
export default () => (
    <div style={{ color: `teal` }}>
      <Link to="/">Home</Link>
      <Header headerText="Contact" />
      <p>发送一个信息</p>
    </div>
  )