import React from "react";
import { useContactContext } from "../contexts/ContactContext";
import { useNavigate } from "react-router-dom";

const Contact = ({ item }) => {
  const { deleteContact, checked } = useContactContext();
  const navigate = useNavigate();
  return (
    <div className="newContact">
      <label class="ui-like">
        <input
          type="checkbox"
          checked={item.completed}
          onChange={() => {
            checked(item.id);
          }}
        />
        <div class="like">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="">
            <g stroke-width="0" id="SVGRepo_bgCarrier"></g>
            <g
              stroke-linejoin="round"
              stroke-linecap="round"
              id="SVGRepo_tracerCarrier"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path d="M20.808,11.079C19.829,16.132,12,20.5,12,20.5s-7.829-4.368-8.808-9.421C2.227,6.1,5.066,3.5,8,3.5a4.444,4.444,0,0,1,4,2,4.444,4.444,0,0,1,4-2C18.934,3.5,21.773,6.1,20.808,11.079Z"></path>
            </g>
          </svg>
        </div>
      </label>
      <span>{item.name}</span>
      <span>{item.surname}</span>
      <span>{item.number}</span>
      <div className="btnNewContact">
        <button
          id={item.id}
          className="btn"
          onClick={() => {
            deleteContact(item.id);
          }}
        >
          <svg
            viewBox="0 0 15 17.5"
            height="17.5"
            width="15"
            xmlns="http://www.w3.org/2000/svg"
            class="icon"
          >
            <path
              transform="translate(-2.5 -1.25)"
              d="M15,18.75H5A1.251,1.251,0,0,1,3.75,17.5V5H2.5V3.75h15V5H16.25V17.5A1.251,1.251,0,0,1,15,18.75ZM5,5V17.5H15V5Zm7.5,10H11.25V7.5H12.5V15ZM8.75,15H7.5V7.5H8.75V15ZM12.5,2.5h-5V1.25h5V2.5Z"
              id="Fill"
            ></path>
          </svg>
        </button>
      </div>
      <div>
        <button onClick={() => navigate(`/edit/${item.id}`)} class="Btn">
          Edit
          <svg class="svg" viewBox="0 0 512 512">
            <path d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Contact;
