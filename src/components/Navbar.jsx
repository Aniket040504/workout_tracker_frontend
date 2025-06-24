import {Link } from "react-router-dom"; 

const Navbar = () => {

    return (
        <header className="header bg-[#fff]">
        <div className="container max-w-[1400px] mx-auto my-auto px-[10px] font-extrabold  flex justify-between items-center h-[100px]">
            <Link to='/' className="text-[#333] no-underline">
            <h1 className="text-4xl font-bold block">Workout Buddy</h1>
            </Link>
        </div>
        </header>
      );
}
 
export default Navbar;