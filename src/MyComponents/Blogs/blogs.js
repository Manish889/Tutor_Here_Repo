import React, { useState } from "react";
import Pagination from "../Pagination/Pagination";
import "bootstrap/dist/css/bootstrap.min.css";
import "./blogs.css";
const Blogs = () => {
  const [posts, setPosts] = useState([
    {
      userId: 1,
      id: 1,
      image:
        "https://tutorhere.in/wp-content/uploads/2021/07/lagos-techie-IgUR1iX0mqM-unsplash-1-1024x683.jpg",
      title: "Relay Learning – The Future of Learning",
      body: "Photo by Lagos Techie on Unsplash Relay learning is a concept that is similar to the activity, relay, itself. Confused? Okay, first. How does a relay race work? We have",
      link: "#",
      footer: "Sahana Reddy / August 16, 2021",
    },
    {
      userId: 1,
      id: 2,
      image:
        "https://tutorhere.in/wp-content/uploads/2021/07/lagos-techie-IgUR1iX0mqM-unsplash-1-1024x683.jpg",
      title: "Relay Learning – The Future of Learning",
      body: "Photo by Lagos Techie on Unsplash Relay learning is a concept that is similar to the activity, relay, itself. Confused? Okay, first. How does a relay race work? We have",
      link: "#",
      footer: "Sahana Reddy / August 16, 2021",

    },
    {
      userId: 1,
      id: 3,
      image:
        "https://tutorhere.in/wp-content/uploads/2021/07/lagos-techie-IgUR1iX0mqM-unsplash-1-1024x683.jpg",
      title: "Relay Learning – The Future of Learning",
      body: "Photo by Lagos Techie on Unsplash Relay learning is a concept that is similar to the activity, relay, itself. Confused? Okay, first. How does a relay race work? We have",
      link: "https://tutorhere.in/wp-content/uploads/2021/07/lagos-techie-IgUR1iX0mqM-unsplash-1-1024x683.jpg",
      footer: "Sahana Reddy / August 16, 2021",

    },
    {
      userId: 1,
      id: 4,
      image:
        "https://tutorhere.in/wp-content/uploads/2021/07/lagos-techie-IgUR1iX0mqM-unsplash-1-1024x683.jpg",
      title: "Relay Learning – The Future of Learning",
      body: "Photo by Lagos Techie on Unsplash Relay learning is a concept that is similar to the activity, relay, itself. Confused? Okay, first. How does a relay race work? We have",
      link: "#",
      footer: "Sahana Reddy / August 16, 2021",
    },
    {
      userId: 1,
      id: 5,
      image:
        "https://tutorhere.in/wp-content/uploads/2021/07/lagos-techie-IgUR1iX0mqM-unsplash-1-1024x683.jpg",
      title: "Relay Learning – The Future of Learning",
      body: "Photo by Lagos Techie on Unsplash Relay learning is a concept that is similar to the activity, relay, itself. Confused? Okay, first. How does a relay race work? We have",
      link: "#",
      footer: "Sahana Reddy / August 16, 2021",

    },
    {
      userId: 1,
      id: 6,
      image:
        "https://tutorhere.in/wp-content/uploads/2021/07/lagos-techie-IgUR1iX0mqM-unsplash-1-1024x683.jpg",
      title: "Relay Learning – The Future of Learning",
      body: "Photo by Lagos Techie on Unsplash Relay learning is a concept that is similar to the activity, relay, itself. Confused? Okay, first. How does a relay race work? We have",
      link: "https://tutorhere.in/wp-content/uploads/2021/07/lagos-techie-IgUR1iX0mqM-unsplash-1-1024x683.jpg",
      footer: "Sahana Reddy / August 16, 2021",

    },
    {
      userId: 1,
      id: 7,
      image:
        "https://tutorhere.in/wp-content/uploads/2021/07/lagos-techie-IgUR1iX0mqM-unsplash-1-1024x683.jpg",
      title: "Relay Learning – The Future of Learning",
      body: "Photo by Lagos Techie on Unsplash Relay learning is a concept that is similar to the activity, relay, itself. Confused? Okay, first. How does a relay race work? We have",
      link: "https://tutorhere.in/wp-content/uploads/2021/07/lagos-techie-IgUR1iX0mqM-unsplash-1-1024x683.jpg",
      footer: "Sahana Reddy / August 16, 2021",

    },
    {
      userId: 1,
      id: 8,
      image:
        "https://tutorhere.in/wp-content/uploads/2021/07/lagos-techie-IgUR1iX0mqM-unsplash-1-1024x683.jpg",
      title: "Relay Learning – The Future of Learning",
      body: "Photo by Lagos Techie on Unsplash Relay learning is a concept that is similar to the activity, relay, itself. Confused? Okay, first. How does a relay race work? We have",
      link: "#",
      footer: "Sahana Reddy / August 16, 2021",
    },
    {
      userId: 1,
      id: 9,
      image:
        "https://tutorhere.in/wp-content/uploads/2021/07/lagos-techie-IgUR1iX0mqM-unsplash-1-1024x683.jpg",
      title: "Relay Learning – The Future of Learning",
      body: "Photo by Lagos Techie on Unsplash Relay learning is a concept that is similar to the activity, relay, itself. Confused? Okay, first. How does a relay race work? We have",
      link: "#",
      footer: "Sahana Reddy / August 16, 2021",

    },
    {
      userId: 1,
      id: 10,
      image:
        "https://tutorhere.in/wp-content/uploads/2021/07/lagos-techie-IgUR1iX0mqM-unsplash-1-1024x683.jpg",
      title: "Relay Learning – The Future of Learning",
      body: "Photo by Lagos Techie on Unsplash Relay learning is a concept that is similar to the activity, relay, itself. Confused? Okay, first. How does a relay race work? We have",
      link: "https://tutorhere.in/wp-content/uploads/2021/07/lagos-techie-IgUR1iX0mqM-unsplash-1-1024x683.jpg",
      footer: "Sahana Reddy / August 16, 2021",

    },
    {
      userId: 1,
      id: 11,
      image:
        "https://tutorhere.in/wp-content/uploads/2021/07/lagos-techie-IgUR1iX0mqM-unsplash-1-1024x683.jpg",
      title: "Relay Learning – The Future of Learning",
      body: "Photo by Lagos Techie on Unsplash Relay learning is a concept that is similar to the activity, relay, itself. Confused? Okay, first. How does a relay race work? We have",
      link: "#",
      footer: "Sahana Reddy / August 16, 2021",
    },
    {
      userId: 1,
      id: 12,
      image:
        "https://tutorhere.in/wp-content/uploads/2021/07/lagos-techie-IgUR1iX0mqM-unsplash-1-1024x683.jpg",
      title: "Relay Learning – The Future of Learning",
      body: "Photo by Lagos Techie on Unsplash Relay learning is a concept that is similar to the activity, relay, itself. Confused? Okay, first. How does a relay race work? We have",
      link: "#",
      footer: "Sahana Reddy / August 16, 2021",

    },
    {
      userId: 1,
      id: 13,
      image:
        "https://tutorhere.in/wp-content/uploads/2021/07/lagos-techie-IgUR1iX0mqM-unsplash-1-1024x683.jpg",
      title: "Relay Learning – The Future of Learning",
      body: "Photo by Lagos Techie on Unsplash Relay learning is a concept that is similar to the activity, relay, itself. Confused? Okay, first. How does a relay race work? We have",
      link: "https://tutorhere.in/wp-content/uploads/2021/07/lagos-techie-IgUR1iX0mqM-unsplash-1-1024x683.jpg",
      footer: "Sahana Reddy / August 16, 2021",

    },
  ]);
  const [showPerPage, setShowPerPage] = useState(9);
  const [pagination, setPagination] = useState({
    start: 0,
    end: showPerPage,
  });

  const onPaginationChange = (start, end) => {
    setPagination({ start: start, end: end });
  };
  return (
    <>
      
        <div className="container p-5">
          <div className="row">
            {posts.slice(pagination.start, pagination.end).map((posts) => (
              <div className="card col-md-4 mb-5 p-5" key={posts.id}>
                <div class="card-body">
                  <img src={posts.image} class="card-img-top" />
                  <h5 class="card-title">{posts.title}</h5>
                  <p class="card-text">{posts.body}</p>
                  <a href="{posts.link}">Read More</a>
                </div>
                <div class="card-footer">
                  <small class="text-muted">{posts.footer}</small>
                </div>
              </div>
            ))}
          </div>

          <Pagination
            showPerPage={showPerPage}
            onPaginationChange={onPaginationChange}
            total={posts.length}
          />
        </div>
      
    </>
  );
};

export default Blogs;
