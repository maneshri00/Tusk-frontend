import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./landingPage/LandingPage.jsx";
import HomePage from "./homePage/HomePage.jsx";
import "./App.css"
import DashBoard from "./dashBoard/DashBoard.jsx";
import CreateAccountForm from "./dashBoard/CreateAccountForm.jsx";
import Graph from "./GraphPage/Graph.jsx";
import CompletedTask from "./CompletedTaskPage/CompletedTask.jsx";
import TaskPage from "./TaskListPage/TaskPage.jsx";
import AddTask from "./AddTaskPage/AddTask.jsx";
import PriorityPage from "./ChangePriorityPage/PriorityPage.jsx";
import GoalPage from "./ChangeGoalPage/GoalPage.jsx";
import ViewProfilePage from "./ProfilePage/ViewProfilePage.jsx";
const App = () => {
  const [tasks, setTasks] = useState([]);
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/dashboard" element={<DashBoard />} />
      <Route path="/form" element={<CreateAccountForm />} />
      <Route path="/Graph" element={<Graph />} />
      <Route path="/TaskPage" element={<TaskPage />} />
      <Route path="/AddTask" element={<AddTask />} />
      <Route path="/ChangePriority" element={<PriorityPage />} />
      <Route path="/ChangeGoal" element={<GoalPage />} />
      <Route path="/profile" element={<ViewProfilePage />} />

        <Route
          path="/HomePage"
          element={<HomePage tasks={tasks} setTasks={setTasks} />}
        />
        <Route
          path="/CompletedTask"
          element={<CompletedTask tasks={tasks} />}
        />
    </Routes>
  );
};

export default App;
