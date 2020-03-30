import React from "react"
import Document from "./Document"
import Header from "./Header"
import Footer from "./Footer"

const Page = ({ children }) => (
  <Document>
    <Header title="Carry through Covid"/>
      <main style={{minHeight: `calc(100vh - 56px)`}}>{children}</main>
    <Footer/>
  </Document>
)

export default Page
