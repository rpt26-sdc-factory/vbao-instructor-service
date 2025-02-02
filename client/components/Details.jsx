/* eslint-disable react/self-closing-comp */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';

const Details = (props) => {
  const instructorAcademicTitle = props.instructor.academic_title === 'PhD' ? 'Dr. ' : '';
  const courses = props.instructor.courses?.length === 1 ? 'Course' : 'Courses';
  return (
    <div className="instructor-details">
      <div className="instructor-name">
        {`${instructorAcademicTitle}${props.instructor.firstname} ${props.instructor.lastname}`}
      </div>
      <div className="instructor-title">
        {props.instructor.academic_title}
      </div>
      <div className="instructor-org">
        {props.instructor.organization}
      </div>
      <div className="instructor-learners">
        <svg className="instructor-learnersSVG" viewBox="0 0 80 80" height="18px" width="18px">
          <path d={props.svgs?.learnersSVG}></path>
        </svg>
        {`${props.instructor.learners} Learners`}
      </div>
      <div className="instructor-courses">
        <svg className="instructor-coursesSVG" viewBox="0 0 80 80" height="18px" width="18px">
          <path d={props.svgs?.coursesSVG}></path>
        </svg>
        {`${props.instructor?.courses?.length || 0} ${courses}`}
      </div>
    </div>
  );
};

export default Details;
