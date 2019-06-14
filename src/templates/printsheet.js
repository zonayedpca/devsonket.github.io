import React from "react"

import SEO from "../components/seo"
import App from "../components/app"
import Desc from "../components/desc"
import Content from "../components/content"
import { Container } from "../components/common"
import SinglePage from "../pages/singlepage"

const PrintSheet = ({ pageContext: { data } }) => {
  return (
    <SinglePage>
      <App data={data}>
        <SEO title={data.title} description={data.description} lang="bn" />
        <Desc data={data} />
        <Container>
          <Content data={data} />
        </Container>
      </App>
    </SinglePage>
  )
}

export default PrintSheet
