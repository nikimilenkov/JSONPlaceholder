import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUserData, fetchUsersPosts } from "../redux/actions";

import { MemoPost } from "./Post";

const User = ({
  id,
  name,
  username,
  email,
  street,
  suite,
  city,
  phone,
  website,
}) => {
  const dispatch = useDispatch();

  const [newName, setNewName] = useState(name);
  const [newUsername, setNewUsername] = useState(username);
  const [newEmail, setNewEmail] = useState(email);
  const [newStreet, setNewStreet] = useState(street);
  const [newSuite, setNewSuite] = useState(suite);
  const [newCity, setNewCity] = useState(city);
  const [newPhone, setNewPhone] = useState(phone);
  const [newWebsite, setNewWebsite] = useState(website);
  const [showPosts, setShowPosts] = useState(false);
  const [showUserInfo, setShowUserInfo] = useState(true);

  const posts = useSelector(
    (state) => state.users.find((user) => user.id === id)?.posts
  );
  const error = useSelector((state) => state.error);

  const onChange = (e) => {
    switch (e.target.id) {
      case name: {
        setNewName(e.target.value);
        break;
      }
      case username: {
        setNewUsername(e.target.value);
        break;
      }
      case email: {
        setNewEmail(e.target.value);
        break;
      }
      case street: {
        setNewStreet(e.target.value);
        break;
      }
      case suite: {
        setNewSuite(e.target.value);
        break;
      }
      case city: {
        setNewCity(e.target.value);
        break;
      }
      case phone: {
        setNewPhone(e.target.value);
        break;
      }
      case website: {
        setNewWebsite(e.target.value);
        break;
      }
      default:
        return;
    }
  };

  const updateUserInfo = () => {
    const updatedValue = {
      name: newName,
      username: newUsername,
      email: newEmail,
      address: {
        street: newStreet,
        suite: newSuite,
        city: newCity,
      },
      phone: newPhone,
      website: newWebsite,
    };

    dispatch(updateUserData(id, updatedValue));
  };

  const getPosts = (e) => {
    const id = e.target.value;

    if (posts) {
      setShowPosts(!showPosts);
    } else {
      setShowPosts(true);
      dispatch(fetchUsersPosts(id));
    }
  };

  const minimize = () => {
    setShowUserInfo(!showUserInfo);
  };

  return (
    <>
      <button onClick={minimize} className={"minimize"}>
        {showUserInfo ? "Minimize" : "Expand"}
      </button>
      {showUserInfo ? (
        <div>
          <div className={"user-detail"}>
            <label className={"detail-name"} htmlFor={name}>
              Name
            </label>
            <input
              onChange={onChange}
              id={name}
              type="text"
              defaultValue={name}
            />
          </div>
          <div className={"user-detail"}>
            <label className={"detail-name"} htmlFor={username}>
              Username
            </label>
            <input
              id={username}
              type="text"
              onChange={onChange}
              defaultValue={username}
            />
          </div>
          <div className={"user-detail"}>
            <label className={"detail-name"} htmlFor={email}>
              Email
            </label>
            <input
              id={email}
              type="email"
              onChange={onChange}
              defaultValue={email}
            />
          </div>
          <div className={"user-detail"}>
            <label className={"detail-name"} htmlFor={street}>
              Street
            </label>
            <input
              id={street}
              type="text"
              onChange={onChange}
              defaultValue={street}
            />
          </div>
          <div className={"user-detail"}>
            <label className={"detail-name"} htmlFor={suite}>
              Suite
            </label>
            <input
              id={suite}
              type="text"
              onChange={onChange}
              defaultValue={suite}
            />
          </div>
          <div className={"user-detail"}>
            <label className={"detail-name"} htmlFor={city}>
              City
            </label>
            <input
              id={city}
              type="text"
              onChange={onChange}
              defaultValue={city}
            />
          </div>
          <div className={"user-detail"}>
            <label className={"detail-name"} htmlFor={phone}>
              Phone
            </label>
            <input
              id={phone}
              type="tel"
              onChange={onChange}
              defaultValue={phone}
            />
          </div>
          <div className={"user-detail"}>
            <label className={"detail-name"} htmlFor={website}>
              Website
            </label>
            <input
              id={website}
              type="text"
              onChange={onChange}
              defaultValue={website}
            />
          </div>
          <button className={"edit-detail"} onClick={updateUserInfo}>
            Change user information
          </button>
          <button className={"get-post"} onClick={getPosts} value={id}>
            Get Posts
          </button>

          <div className={`posts ${showPosts ? "active" : ""}`} key={id}>
            {error && <p>Somethink went worg</p>}
            {showPosts &&
              posts &&
              posts.map(({ id, body, title }) => (
                <MemoPost key={id} title={title} body={body} />
              ))}
          </div>
        </div>
      ) : (
        <div>{name}</div>
      )}
    </>
  );
};

export default User;