import React from "react"
import { graphql } from "gatsby"

export default function DwDemo({ data }) {
  return (
    <div>
      <h1>DialogueWise Demo</h1>

      {data.allDialogueWise.edges.map(({ node }) => (
        JSON.parse(node.content).map( (content, index) => (
            <div key={index} dangerouslySetInnerHTML={{ __html: content['hero-content'] }} />)
        )
      ))}
    </div>
  )
}

export const query = graphql`
query {
  allDialogueWise(filter: {slug: {eq: "hero-section"}}) {
    edges {
      node {
        content
        slug
        error
      }
    }
  }
}
`