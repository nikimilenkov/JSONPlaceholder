import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import User from "./components/User";

import "./App.css";
import { fetchUsersData } from "./redux/actions";

function App() {
  const users = useSelector((state) => state.users);
  const status = useSelector((state) => state.status);
  const error = useSelector((state) => state.error);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsersData());
  }, [dispatch]);

  return (
    <>
      <h1 className={"header"}>User Information</h1>
      <div className="container">
        {error && <h1>Something went wrong!</h1>}
        {status === "fetching" ? (
          <div className="loader"></div>
        ) : (
          users.map(
            ({
              id,
              name,
              username,
              email,
              address: { street, suite, city },
              phone,
              website,
            }) => (
              <section key={id} className={"user-info"}>
                <User
                  id={id}
                  name={name}
                  username={username}
                  email={email}
                  street={street}
                  suite={suite}
                  city={city}
                  phone={phone}
                  website={website}
                />
              </section>
            )
          )
        )}
      </div>
    </>
  );
}

export default App;