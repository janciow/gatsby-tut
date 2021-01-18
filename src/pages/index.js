import React from "react"
import Layout from "../components/Layout"
import { ExapleButton } from "../components/button"

export default function Home() {
  return (
    <div>
      <Layout>
        <h1 style={{ color: "red", textTransform: "uppercase" }}>
          Hello from gatsby
        </h1>
        <h1>hallo peple</h1>
        <h1>ddd</h1>
        <div>
          <ExapleButton>click me</ExapleButton>
        </div>
      </Layout>
    </div>
  )
}
