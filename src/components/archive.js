import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import styled from 'styled-components'
const Post = styled.article`
  box-shadow: 0px 3px 10px rgba(25,17,34, 0.3);
  padding: 1rem;
  border-radius: 4px;
  margin-bottom: 1rem;
`;

// TODO: 
// 1. Use StaticQuery to query MD information
// 2. Display the MD information in JSX 
// 3. Add link to Each blog post


const POST_ARCHIVE_QUERY =  graphql`
query BlogInfo {
allMarkdownRemark  {
 edges {
   node {
     excerpt(pruneLength:150)
     frontmatter {
       title
       date 
       slug
     }
   }
 }
}
}
` 
const Archive = () => (
 <StaticQuery
 query = {POST_ARCHIVE_QUERY}
 render= {data=>(
   <div>
    <h3> Archive </h3>
    {data.allMarkdownRemark.edges.map ((edge)=> (
      <div >
        <Post>
          <h3>{edge.node.frontmatter.title}</h3>
          <p>{edge.node.excerpt}</p>
          <p>{edge.node.frontmatter.date}</p>
          <Link to={`/posts${edge.node.frontmatter.slug}`}>Read more...</Link>
        </Post>        
      </div>
    ))}
  </div>
 )}
 
 />
)
export default Archive
