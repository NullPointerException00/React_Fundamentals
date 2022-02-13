/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { Button } from "../../../../common/Button/Button";
import Styled from "styled-components";
import Input from "../../../../common/Input/Input";
import { useNavigate } from "react-router-dom";

const searchDiv = {
  position: "relative",
  margin: "auto",
  display: "flex",
  flexDirection: "row",
  width: "90%",
  height: "20%",
  alignItems: "center",
};

const searchRightDiv = {
  position: "absolute",
  right: "10px",
};

const searchLeftDiv = {
  display: "flex",
  flexDirection: "row",
  marginRight: "10px",
};
const SearchButton = Styled(Button)`
  margin-left: 12px;
`;

function SearchBar(props) {
  const { onSearch = () => {} } = props;
  const navigate = useNavigate();
  const addCourse = ()=>{
    navigate('/createCourse');
  }
  const [searchText, setSearchText] = useState();
  return (
    <div style={searchDiv}>
      <div style={searchLeftDiv}>
        <Input value={searchText} onChange={(value) => setSearchText(value)} />
        <SearchButton text="Search" onClick={() => onSearch(searchText)} />
      </div>
      <div style={searchRightDiv}>
        <Button text="Add new course" onClick={addCourse} />
      </div>
    </div>
  );
}

export default SearchBar;
