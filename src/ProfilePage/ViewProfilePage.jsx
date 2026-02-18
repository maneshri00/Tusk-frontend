import React, { useEffect, useState } from "react";

function ViewProfilePage() {

  const [profile, setProfile] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8080/api/profile/profile-view", {
      credentials: "include",
    })
      .then(res => res.json())
      .then(data => setProfile(data));
  }, []);

  if (!profile) return <p className="text-white">Loading...</p>;

  return (
    <div className="min-h-screen bg-black text-white p-8">

      <h1 className="text-2xl text-sky-400 mb-6">My Profile</h1>

      <div className="space-y-4">

        <p><b>Name:</b> {profile.name}</p>
        <p><b>Age:</b> {profile.age}</p>
        <p><b>DOB:</b> {profile.dob}</p>
        <p><b>Wake Time:</b> {profile.wakeTime}</p>
        <p><b>Sleep Time:</b> {profile.sleepTime}</p>
        <p><b>Completed Tasks:</b> {profile.completedTaskCount}</p>

      </div>

    </div>
  );
}

export default ViewProfilePage;
