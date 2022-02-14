/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/prop-types */
import React from "react";
import Styled from "styled-components";
import { mockedAuthorsList } from "../../../../constants";
import { Button } from "../../../../common/Button/Button";

const StyledCoursesCard = Styled.div`
  display: flex;
  padding: 16px;
  border: 2px solid #66ccff;
  margin: 24px;
  &:last-child {
    margin-bottom: 0;
  }
`;

const CourseLeft = Styled.div`
  width: 70%;
`;

const CourseRight = Styled.div`
  width: 30%;
  padding-left: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ShowCourseButton = Styled(Button)`
  align-self: center;
`

const CourseInfo = Styled.div`
`;

const CourseTitle = Styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 16px;
`;

const CourseDescription = Styled.div`
`;

const CourseInfoItem = Styled.div`
  display: flex;
`;

const CourseInfoKey = Styled.div`
  width: 72px;
`;

const CourseInfoValue = Styled.div`
  flex: 1;
`;

export function CourseCard(props) {
  const {
    data: { title, authors, duration, creationDate, description },
  } = props;
  const created = new Date(creationDate);
  let authorsName = [];
  mockedAuthorsList.map((item) => {
    if (authors.includes(item.id)) authorsName.push(item.name);
  });
  let durationHour = Math.floor(duration / 60);
  durationHour =
    durationHour >= 10 ? durationHour.toString() : 0 + durationHour.toString();
  const durationMin = duration % 60;
  return (
    <StyledCoursesCard>
      <CourseLeft>
        <CourseTitle>{title}</CourseTitle>
        <CourseDescription>{description}</CourseDescription>
      </CourseLeft>
      <CourseRight>
        <CourseInfo>
          <CourseInfoItem>
            <CourseInfoKey>Authors: </CourseInfoKey>
            <CourseInfoValue>{authorsName.join(", ")}</CourseInfoValue>
          </CourseInfoItem>
          <CourseInfoItem>
            <CourseInfoKey>Duration: </CourseInfoKey>
            <CourseInfoValue>
              {durationHour}:{durationMin} hours
            </CourseInfoValue>
          </CourseInfoItem>
          <CourseInfoItem>
            <CourseInfoKey>Created: </CourseInfoKey>
            <CourseInfoValue>
              {created.toLocaleDateString("en-GB")}
            </CourseInfoValue>
          </CourseInfoItem>
        </CourseInfo>
        <ShowCourseButton text="Show course" />
      </CourseRight>
    </StyledCoursesCard>
  );
}

export default CourseCard;
