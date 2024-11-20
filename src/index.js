import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter,Routes,Route,} from "react-router-dom"
import Admin from './Component/Admin/Admin'
import 'bootstrap/dist/css/bootstrap.min.css';
import DashBoard from './Component/Admin/Content/DashBoard';
import Food from './Component/Admin/Content/Food/ManagerFood';
import Exercise from './Component/Admin/Content/Exercise/ManagerExercise'
import MealPlan from './Component/Admin/Content/MealPlan/ManagerMealPlan'
import Program from './Component/Admin/Content/Program/ManagerProgram'
import FeedbackMealPlan from './Component/Admin/Content/FeedBackMealPlan/ManagerFeedbackMealPlan';
import LoginForm from './Component/Login/LoginForm';
import FeedbackProgram from './Component/Admin/Content/FeedBackProgram/ManagerFeedBackProgram';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>}/>
        <Route path="/Login" element={<LoginForm/>}/>
        <Route path="/Admins" element={<Admin/>} >
          <Route index element={<DashBoard />} />
          <Route path='DashBoard' element={<DashBoard />} />
          <Route path="Food" element={<Food />} />
          {/* <Route path="Exercise" element={<Exercise/>} /> */}
          <Route path="MealPlan" element={<MealPlan/>} />
          <Route path="Program" element={<Program/>} />
          <Route path="FeedBackMealPlan" element={<FeedbackMealPlan/>} />
          <Route path="FeedBackProgram" element={<FeedbackProgram/>} />
        </Route>
      </Routes>
    </BrowserRouter> 
  // </React.StrictMode>
);
reportWebVitals();
