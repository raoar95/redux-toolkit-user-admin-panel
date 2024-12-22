import React, { useEffect } from "react";
import styled from "styled-components";
import Store from "../store/store";
import { clearAllUsers } from "../store/action";
import fakeUserData from "../apidata/api-data";
import { useSelector, useDispatch } from "react-redux";
import { addUser } from "../store/slices/UserSlice";
import DisplayUsers from "../components/DisplayUsers";

const UserDetails = () => {
  const originalState = useSelector((state) => state.users);
  const dispatch = useDispatch();

  // SETTING LOCAL STORAGE DATA

  useEffect(() => {
    localStorage.setItem("myUserData", JSON.stringify(originalState));
  }, [originalState]);

  const addNewUser = (userName) => {
    dispatch(addUser(userName));
  };

  const deleteAllUser = () => {
    dispatch(clearAllUsers());
  };

  return (
    <Wrapper>
      <div className="content">
        <div className="admin-table">
          <div className="admin-subtitle">List of User Details</div>
          <button
            className="btn add-btn"
            onClick={() => addNewUser(fakeUserData())}
          >
            Add New Users
          </button>
        </div>
        <ul>
          <DisplayUsers />
        </ul>
        <hr />
        <br />
        <div className="btn" onClick={deleteAllUser}>
          DeleteAllUser
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin: 1rem 3.2rem;

  .content ul {
    list-style-type: none !important;
    display: flex;
    flex-direction: column;
  }

  h3 {
    margin: 0;
  }

  .admin-table {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 4rem 0;
  }

  .admin-subtitle {
    font-size: 3.2rem;
  }

  .delete-btn {
    background-color: transparent;
    border: none;
  }

  .delete-icon {
    font-size: 2.6rem;
    color: #f12711;
    filter: drop-shadow(0.2rem 0.2rem 0.5rem rgb(255 0 0 / 0.2));
    cursor: pointer;
  }

  .btn-delete {
    float: right;
  }

  .dataSpan {
    float: left;
  }

  @media screen and (max-width: 998px) {
    .admin-subtitle {
      margin-bottom: 1.6rem;
    }
  }
`;

export default UserDetails;
