import axios from "axios";
import {useState } from "react";

const WorkoutForm = () => {

    const [title,setTitle]=useState("");
    const [load,setLoad]=useState("");
    const [reps,setReps]=useState("");
    const [error,setError]=useState(null);

    const handleSubmit = async (e) => {
     e.preventDefault();

  try {
    const workout = { title, load, reps };
    const response = await axios.post(
      "http://localhost:5000/workout",
      workout,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    setTitle("");
    setLoad("");
    setReps("");
    setError(null);
    console.log(response.data);
    // Optionally reset fields or set success state
  } catch (error) {
    setError(error?.response?.data?.error || "Something went wrong");
  }
};
    
    return (  
        <form className="create " onSubmit={handleSubmit}>
            <h3>Add a new workout</h3>
            <label className="block">Exercise Table:</label>
            <input
             className="block p-[10px] mt-[10px] mb-[20px] w-full border rounded-[4px] box-border  border-black "
             type="text"
             onChange={(e)=>setTitle(e.target.value)}
             value={title}
             />

            <label className="block ">Loads(in Kg)</label> 
            <input  className="block p-[10px] mt-[10px] mb-[20px] w-full border border-[#ddd] rounded-[4px] box-border  border-black"
             type="number"
             onChange={(e)=>setLoad(e.target.value)}
             value={load}
             />
             <label className="block">Reps:</label>
            <input  className="block p-[10px] mt-[10px] mb-[20px] w-full border rounded-[4px] box-border  border-black"
             type="number"
             onChange={(e)=>setReps(e.target.value)}
             value={reps}
             />

             <button className="border-2 bg-green-600 text-[#fff] p-[10px] font-sans rounded-[4px] cursor-pointer border-black">Add Workout</button>
             {error && <div className="error p-[10px] bg-[#ffefef] border border-[--var(error)] text-[--var(error)] rounded-[4px] mx-[20px]">{error}</div>}
        </form>

    );
}
 
export default WorkoutForm;