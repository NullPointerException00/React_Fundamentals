/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Button } from "../../common/Button/Button";
import Input from "../../common/Input/Input";
import { useNavigate } from "react-router-dom";
import { mockedAuthorsList } from "../../constants";

const outerDiv = {
  border: "2px solid blue",
  width: "90%",
  height: "600px",
  margin: "auto",
  display: "flex",
  flexDirection: "column",
};

const topDiv = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
};
const buttonDiv = {
  padding: "20px",
};
const addAuthorOuterDiv = {
  display: "flex",
  flexDirection: "row",
};

const authorLeftDiv = {
  display: "flex",
  flexDirection: "column",
  padding: "20px",
  width: "50%",
};

const authorRightDiv = {};

const authorDiv = {
  display: "flex",
  flexDirection: "row",
};

export function CreateCourse() {
  const authorNameList = [];
  mockedAuthorsList.map((author) => {
    authorNameList.push(author.name);
  });
  const [newAuthor, setNewAuthor] = useState();
  const [title, setTitle] = useState();
  const [currentAuthorList, setCurrentAuthorList] = useState(authorNameList);
  const [addedAuthors, setAddedAuthors] = useState([]);
  const navigate = useNavigate();
  const addCourse = () => {
    navigate("/");
  };
  const createAuthor = () => {
    setCurrentAuthorList(currentAuthorList.push(newAuthor));
  };

  return (
    <div style={outerDiv}>
      <div style={topDiv}>
        <div>
          <p>Title</p>
          <Input value={title} onChange={(value) => setTitle(value)}></Input>
        </div>
        <div style={buttonDiv}>
          <Button text="Create course" onClick={addCourse} />
        </div>
      </div>
      <p>Description</p>
      <textarea placeholder="Enter description"></textarea>
      <div style={addAuthorOuterDiv}>
        <div style={authorLeftDiv}>
          <p>Add author</p>
          <p>Author name</p>
          <Input
            value={newAuthor}
            onChange={(value) => setNewAuthor(value)}
          ></Input>
          <Button text="Create author" onClick={createAuthor}></Button>
          <p>Duration</p>
          <p>Duration</p>
          <Input></Input>
          <h3>Duration: hours</h3>
        </div>
        <div style={authorRightDiv}>
          <p>Authors</p>
          {currentAuthorList.map((author) => (
            <div style={authorDiv} key={author}>
              <label>{author}</label>
              <div>
                <Button
                  value={author}
                  text="Add author"
                  onClick={(e) => {
                    setAddedAuthors([...addedAuthors,e.target.value]);
                    setCurrentAuthorList(currentAuthorList.pop(e.target.value))
                  }}
                ></Button>
              </div>
            </div>
          ))}
          <p>Course authors</p>
          {addedAuthors === [] ? (
            <p>Author list is empty</p>
          ) : (
            addedAuthors.map((author) => {
              <div key={author}>
                <label>{author}</label>
                <Button
                  value={author}
                  text="Delete author"
                  onClick={(e) => {
                    setAddedAuthors(addedAuthors.pop(e.target.value));
                    setCurrentAuthorList(
                      currentAuthorList.push(e.target.value)
                    );
                  }}
                ></Button>
              </div>;
            })
          )}
        </div>
      </div>
    </div>
  );
}

export default CreateCourse;
