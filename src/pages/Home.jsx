import { useEffect, useState } from "react";
import axios from "axios";

import WorkoutDetails from "../components/Workoutdetails";

const Home = () => {

   const [workouts,setWorkouts]= useState(null);

    useEffect(()=>{
        const fetchWorkouts=async (params) => {

           const response=await axios('http://localhost:5000/workout');
            setWorkouts(response.data);
        }
        fetchWorkouts();
    },[])

    return (

        <div className="home grid grid-cols-[3fr_1fr] gap-[100px]">
            <div className="workouts max-w-[1400px] text-[22px] h-[15px]">
                {workouts && workouts.map((workout)=>(
                    <WorkoutDetails key={workout._id} workout={workout}/>  
                ))}
            </div>
        </div>
      );
}
 
export default Home;