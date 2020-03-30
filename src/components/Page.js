import React from "react"
import Document from "./Document"

const Page = ({ children }) => (
  <Document>
    {/* <Header /> */}
    {children}
    {/* <Footer /> */}
  </Document>
)

export default Page
