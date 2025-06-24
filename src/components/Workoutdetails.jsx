const WorkoutDetails = ({workout}) => {
    return ( 
        <div className="workoutdetails bg-white rounded-[2px] m-20px p-20px relative shadow-[2px_2px_5px_rgba(0,0,0,0.05)]">
            <h4 className="m-[0_0_10px_0] text-[1.8rem] text-[var(--primary-color)] ">{workout.title}</h4>
             <p className="m-0 text-[0.9rem] text-[#555]" > <strong>Load(kg):</strong>{workout.load}</p>
            <p className="m-0 text-[0.9rem] text-[#555]"> <strong>Reps:</strong>{workout.reps}</p>
            <p className="m-0 text-[0.9rem] text-[#555]">{workout.createdAt}</p>
        </div>
     );
}
 
export default WorkoutDetails;