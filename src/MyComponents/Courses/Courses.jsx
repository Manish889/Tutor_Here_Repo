import React, { useState, useEffect } from "react";
import Pagination from "../Pagination/Pagination";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import StarIcon from "@material-ui/icons/Star";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import { CourseData } from "../../Data/CourseData";
import Rating from "@material-ui/lab/Rating";
import Box from "@material-ui/core/Box";
import "./Courses.scss";

const Courses = (props) => {
  const [courses, setCourses] = useState(CourseData.reverse());
  const [showPerPage, setShowPerPage] = useState(6);
  const [pagination, setPagination] = useState({
    start: 0,
    end: showPerPage,
  });
  const onPaginationChange = (start, end) => {
    setPagination({ start: start, end: end });
  };

  const filterHandler = (e) => {
    if (e.target.value === "AtoZ") {
      setCourses(
        CourseData.slice().sort((a, b) => (a.heading > b.heading ? 1 : -1))
      );
    } else if (e.target.value === "ZtoA") {
      setCourses(
        CourseData.slice().sort((a, b) => (a.heading < b.heading ? 1 : -1))
      );
    } 
    // else if (e.target.value === "oldest") {
    //   setCourses(
    //     CourseData.slice().sort((a, b) => (a.id <= b.id ? 1 : -1))
    //   );
    // }
     else if (e.target.value === "newest") {
      setCourses(CourseData.slice())
    }
  };

  console.log(CourseData.slice());

  return (
    <>
      <div className="courses-section">
        <div className="course">
          <p className="course__total">
            <span>{CourseData.length}</span>Courses
          </p>
          <div className="course__filter">
            <select onChange={filterHandler} name="filter" id="filter">
              <option value="newest">Released Date(newest first)</option>
              {/* <option value="oldest">Released Date(oldest first)</option> */}
              <option value="AtoZ">A to Z</option>
              <option value="ZtoA">Z to A</option>
            </select>
          </div>
        </div>

        {courses
          .slice(pagination.start, pagination.end)
          .map((n) => {
            return (
              <div className="courses">
                <img className="courses__img" src={n.img} alt="" />
                <div className="courses__bookmark-level">
                  <span className="courses__level">{n.level}</span>
                  <BookmarkBorderIcon
                    style={{ fontSize: "3rem", cursor: "pointer" }}
                  />
                </div>

                <div className="courses__text">
                  <div className="courses__stars">
                    <Box component="fieldset" mb={3} borderColor="transparent">
                      <Rating
                        name="read-only"
                        value={Number(n.rating)}
                        precision={0.5}
                        readOnly
                      />
                    </Box>
                  </div>

                  <h2>{n.heading}</h2>

                  <div className="courses__user-and-duration">
                    <div className="courses__users">
                      <PermIdentityIcon style={{ fontSize: "2.5rem" }} />{" "}
                      <span>{n.user}</span>
                    </div>
                    <div className="courses_duration">
                      <AccessTimeIcon style={{ fontSize: "2rem" }} />{" "}
                      <span>{n.duration}</span>
                    </div>
                  </div>

                  <div className="courses__username">
                    <span className="courses__userart">
                      {n.username.charAt(0)}
                    </span>
                    <span>
                      by <span>{n.username}</span>
                    </span>
                  </div>
                </div>

                <div className="courses__price">
                  <span>Free</span>
                  <div className="courses__enrolment">
                    <ShoppingCartIcon style={{ fontSize: "2rem" }} />
                    <span>Get Enrolled</span>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
      <Pagination
        showPerPage={showPerPage}
        onPaginationChange={onPaginationChange}
        total={courses.length}
      />
    </>
  );
};

export default Courses;
