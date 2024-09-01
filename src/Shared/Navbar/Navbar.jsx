import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { FaShoppingCart } from "react-icons/fa";
import useCart from "../../hooks/useCart";
import useAdmin from "../../hooks/useAdmin";
import profile from "../../assets/others/profile.png"
import { RiLoginCircleLine } from "react-icons/ri";

const Navbar = () => {
 
  const { user, logOut } = useContext(AuthContext)
  const [isAdmin] = useAdmin()
  const [cart] = useCart()
  const handleLogout = () => {
    logOut()
      .then(() => { })
      .catch(error => console.log(error))

  }

  const navOptions = <>
 
    <li ><NavLink to='/'  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "text-orange-500  font-bold underline" : ""
  } >Home</NavLink></li>
    <li><NavLink to='/menu'  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "text-orange-500 font-bold underline" : ""
  }>Our Menu</NavLink></li>
   {
     //user? 'true': 'false'
    //  user? condition? 'double true': 'one true' : 'false'
   }
   {
    user && isAdmin &&  <li><NavLink to='/dashboard/adminHome'  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "text-orange-500 font-bold underline" : ""
  }>Dashboard</NavLink></li>
   }
   {
    user && !isAdmin &&  <li><NavLink to='/dashboard/userHome'  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "text-orange-500 font-bold underline" : ""
  }>Dashboard</NavLink></li>
   }
    <li><NavLink to='/order/salad'  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "text-orange-500 font-bold underline" : ""
  }>Order Food</NavLink></li>
    <li  className="">
      <NavLink to='/dashboard/cart' className={({ isActive, isPending }) =>
      isPending ? "pending" : isActive ? "text-orange-500 font-bold underline" : ""
    }>
        <button className=" btn-ghost mb-1 flex items-center text-center p-1 ">
          <FaShoppingCart className="text-orange-600"></FaShoppingCart>
          <div className="badge text-orange-600 ml-1">+{cart.length} </div>
        </button>
      </NavLink>
    </li>

  



  </>


  return (
    <>
      <div className="navbar fixed z-10 bg-opacity-25 max-w-screen-xl bg-black text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {navOptions}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">Bistro Foodies Zone </a>

        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navOptions}
          </ul>
        </div>
        <div className="navbar-end">
        {
          user ? <>
          <div className="flex gap-2  items-center">{/*  <span>{user?.email} </span>  */}
          <span className="text-sm">{user?.displayName} </span> <div>
          <img
          className='rounded-full w-10 h-10 border-orange-800 border-[2px]'
          referrerPolicy='no-referrer'
          src={user && user.photoURL ? user.photoURL : profile}
          alt='profile'
         
        />
          </div>
       {/* <span className="w-14 rounded-3xl">{user?.photo} </span> */}
       </div> 
       <button onClick={handleLogout} className="btn btn-ghost">Log Out</button>
           
          </> : <>
            <li><NavLink to='/login'  className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? " font-bold underline" : "flex items-center gap-1 font-bold"
          } ><RiLoginCircleLine className=" text-orange-500 font-bold" ></RiLoginCircleLine>  Login</NavLink></li>
          </>
        }
    
        </div>
      </div>
    </>
  );
};

export default Navbar;