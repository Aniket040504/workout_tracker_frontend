import { useEffect, useState } from "react";
import axios from "axios";

import WorkoutDetails from "../components/Workoutdetails";
import WorkoutForm from "../components/WorkoutForm";

const Home = () => {
  const [workouts, setWorkouts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWorkouts = async () => {
      try {
        const response = await axios.get("http://localhost:5000/workout");
        setWorkouts(response.data);
      } catch (error) {
        setError(error?.response?.data?.error || "Error loading workouts");
      }
    };
    fetchWorkouts();
  }, []);

  return (
    <div className="home grid grid-cols-[3fr_1fr] gap-[100px] p-4">
      <div className="workouts max-w-[1400px] text-[22px]">
        {error && <p className="text-red-600">{error}</p>}
        {workouts.length === 0 && !error && <p>Loading workouts...</p>}

        {workouts.map((workout) => (
          <WorkoutDetails key={workout._id} workout={workout} />
        ))}
      </div>
      <WorkoutForm />
    </div>
  );
};

export default Home;
