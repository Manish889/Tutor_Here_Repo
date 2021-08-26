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
        "https://tutorhere.in/wp-content/uploads/2021/07/markus-spiske-QozzJpFZ2lg-unsplash-600x450.jpg",
      title: "Critical Race Theory in education: A deal-breaker or not?",
      body: "Photo by Markus Spiske on Unsplash The NYPD officers approached a man on suspicion of selling cigarettes from packs without tax stamps. The man tells the police that he is",
      link: "#",
      footer: "Sahana Reddy/August 23, 2021/0 Comments",
    },
    {
      userId: 1,
      id: 2,
      image:
        "https://tutorhere.in/wp-content/uploads/2021/08/chris-montgomery-smgTvepind4-unsplash-600x450.jpg",
      title: "Learning loss in pandemic: How do we cope?",
      body: "Photo by Chris Montgomery on Unsplash The unexpectedness of a global pandemic has caused severe losses to all facets of human life—be it businesses, industries, personal lives, economies, or education.",
      link: "#",
      footer: "Umme Salma Saifee/August 20, 2021/0 Comments",

    },
    {
      userId: 1,
      id: 3,
      image:
        "https://tutorhere.in/wp-content/uploads/2021/07/wp2048435-elon-musk-wallpapers-600x450.jpg",
      title: "5 Lessons From Elon Musk Every Individual Must Heed To",
      body: "Photo by Lagos Techie on Unsplash Relay learning is a concept that is similar to the activity, relay, itself. Confused? Okay, first. How does a relay race work? We have",
      link: "https://tutorhere.in/wp-content/uploads/2021/07/lagos-techie-IgUR1iX0mqM-unsplash-1-1024x683.jpg",
      footer: "Nabila Naqvi/August 18, 2021/1 Comments",

    },
    {
      userId: 1,
      id: 4,
      image:
        "https://tutorhere.in/wp-content/uploads/2021/07/lagos-techie-IgUR1iX0mqM-unsplash-1-600x450.jpg",
      title: "Relay Learning – The Future of Learning",
      body: "Photo by Lagos Techie on Unsplash Relay learning is a concept that is similar to the activity, relay, itself. Confused? Okay, first. How does a relay race work? We have",
      link: "#",
      footer: "Sahana Reddy/August 16, 2021/0 Comments",
    },
    {
      userId: 1,
      id: 5,
      image:
        "https://tutorhere.in/wp-content/uploads/2021/07/giammarco-zeH-ljawHtg-unsplash-600x450.jpg",
      title: "3 Ancient Philosophies That Benefit Contemporary Students",
      body: "Photo by Giammarco on Unsplash Ancient Philosophy has mostly been considered as boorish and antiquated by the younger minds. Pfft! The whole idea of reading up on ancient philosophers is",
      link: "#",
      footer: "Umme Salma Saifee/August 13, 2021/1 Comments",

    },
    {
      userId: 1,
      id: 6,
      image:
        "https://tutorhere.in/wp-content/uploads/2021/07/pod-fe-600x450.jpeg",
      title: "Podcasts for Effective Learning: 5 Reasons to Adopt Podcasting",
      body: "Photo by Anna Tarazevich from Pexels Podcasting, as one of the newest media in the mainstream, and one of the forefront technologies. Podcasts have a positive influence on effective learning. Thanks to the",
      link: "#",
      footer: "Nabila Naqvi/August 11, 2021/0 Comments",

    },
    {
      userId: 1,
      id: 7,
      image:
        "https://tutorhere.in/wp-content/uploads/2021/07/brett-jordan-MwkDKpOQmGc-unsplash-600x450.jpg",
      title: "Understanding the Relationship Between Education and Well-Being",
      body: "Photo by Brett Jordan on Unsplash Education is a gateway to a Better Future and Well-Being. In this world, we need Education in order to make something of ourselves. Education",
      link: "#",
      footer: "Kushagr Narayan/August 6, 2021/0 Comments",

    },
    {
      userId: 1,
      id: 8,
      image:
        "https://tutorhere.in/wp-content/uploads/2021/07/pexels-max-fischer-5212320-600x450.jpg",
      title: "5 Revolutionary Teachers Who Changed Education",
      body: "Photo by Max Fischer from Pexels Teachers have always been the driving force in inspiring students to make a difference. Still one amongst a million is a teacher that envisions a different route",
      link: "#",
      footer: "Umme Salma Saifee/August 6, 2021/0 Comments",
    },
    {
      userId: 1,
      id: 9,
      image:
        "https://tutorhere.in/wp-content/uploads/2021/08/alex-jones-Tq4YjCa2BSc-unsplash-600x450.jpg",
      title: "Is Our Education System Molding Us For Failure?",
      body: "Photo by Alex Jones on Unsplash The concept of an education system is more of a subjective one, if you think about it. Yes, it involves systematic methods of giving",
      link: "#",
      footer: "Sahana Reddy/August 4, 2021/2 Comments",

    },
    {
      userId: 1,
      id: 10,
      image:
        "https://tutorhere.in/wp-content/uploads/2021/07/education-featured-600x450.jpeg",
      title: "8 Education Professions for Passionate Educators",
      body: "Are you interested in education, but think that teaching is not suitable for you? In this blog, we offer 8 amazing education professions, whether you want to work directly with",
      link: "#",
      footer: "Nabila Naqvi/August 2, 2021/0 Comments",

    },
    {
      userId: 1,
      id: 11,
      image:
        "https://tutorhere.in/wp-content/uploads/2021/07/eliott-reyna-kcT-7cirBEw-unsplash-600x450.jpg",
      title: "10 Must-Read Books For Every Learner",
      body: "Photo by Eliott Reyna on Unsplash You do not need me to tell you that books are important, and reading books is a very healthy habit. I am not talking",
      link: "#",
      footer: "Kushagr Narayan/July 30, 2021/1 Comments",
    },
    {
      userId: 1,
      id: 12,
      image:
        "https://tutorhere.in/wp-content/uploads/2021/07/kristina-v-c77dIthd_Tk-unsplash-600x450.jpg",
      title: "Educational Freedom – Myth or Reality?",
      body: "Photo by Kristina V on Unsplash Say, you want to be a musician. Would you rather spend your time learning calculus or mastering your instrument? Learners often don’t have an",
      link: "#",
      footer: "Sahana Reddy/July 26, 2021/0 Comments",

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
