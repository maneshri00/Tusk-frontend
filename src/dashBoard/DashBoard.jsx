import { useEffect, useState } from "react";
import CreateAccountForm from "./CreateAccountForm";
import HomePage from "../homePage/HomePage";

function DashBoard() {
  const [isNewUser, setIsNewUser] = useState(null);

 useEffect(() => {
  fetch("http://localhost:8080/api/user/status", {
    credentials: "include",
  })
    .then(res => res.json())
    .then(data => setIsNewUser(data.isNewUser))
    .catch(() => setIsNewUser(false)); // safety
}, []);


  if (isNewUser === null) return <p>Loading...</p>;

  return (
    <>
      {isNewUser ? <CreateAccountForm /> : <div><HomePage/></div>}
    </>
  );
}

export default DashBoard;
