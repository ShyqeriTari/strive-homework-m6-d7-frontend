import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import BlogItem from "../blog-item/BlogItem";

const BlogList = (props) => {

  const [blogs, setblogs] = useState([])

  const apiUrl = "http://localhost:3001/blogs"

  const fetchdata = async () => {
    try {
  
      const response = await fetch(apiUrl)
      const data = await response.json()
  
  if (response.ok){
      setblogs(data.blogs)
  }
    } catch (error) {
      console.log(error)
    }

  }

  useEffect (()=> {fetchdata()}, [])


  return (
    <Row>
      {blogs.map((blog) => (
        <Col
          md={4}
          style={{
            marginBottom: 50,
          }}
          key={blog._id} 
        >
          <BlogItem key={blog._id} {...blog} />
        </Col>
      ))}
    </Row>
  );
};

export default BlogList;
