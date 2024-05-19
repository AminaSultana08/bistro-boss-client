import { FaBook, FaCalendar, FaHome, FaList, FaShoppingBag, FaShoppingCart, FaUsers, FaUtensils } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import { VscPreview } from "react-icons/vsc";
import { IoMenu } from "react-icons/io5";
import { BiSolidContact } from "react-icons/bi";
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";
const Dashboard = () => {
    const [cart] = useCart()
    //TODO : get isAdmin value from the database
    const [isAdmin] = useAdmin(); 
    return (
        <div className="flex">
        {/* dashboard side bar */}
            <div  className="w-64 min-h-screen bg-orange-500">
                <ul className="menu">
               {
                isAdmin? <>
                <li>
                   
                <NavLink to='/dashboard/adminHome' className="mb-2 text-white">  <FaHome /> Admin Home</NavLink> 
                </li>
                    <li>
                   
                    <NavLink to='/dashboard/addItems' className="mb-2 text-white">  <FaUtensils />Add Items</NavLink> 
                    </li>
                    <li>
                   
                    <NavLink to='/dashboard/manageItems' className="mb-2">  <FaList />Manage Items </NavLink> 
                    </li>
                    {/* <li>
                   
                    <NavLink to='/dashboard/bookings' className="mb-2 text-white">  <VscPreview />Manage Bookings</NavLink> 
                    </li> */}
                    <li>
                   
                    <NavLink to='/dashboard/users' className="mb-2 text-white">  <FaUsers />All Users</NavLink> 
                    </li>
                </> :<>
                <li>
                   
                <NavLink to='/dashboard/userHome' className="mb-2 text-white">  <FaHome /> User Home</NavLink> 
                </li>
                   
                    <li>
                   
                    <NavLink to='/dashboard/cart' className="mb-2">  <FaShoppingCart />My Cart ({cart.length}) </NavLink> 
                    </li>
                    
                    {/* /* <li><NavLink to='/dashboard/review' className="mb-2 text-white">  <VscPreview />Add a Review</NavLink> 
                </li> */} 
                   
                    
                    <li>
                   
                    <NavLink to='/dashboard/paymentHistory' className="mb-2 text-white">  <FaBook />Real Payment History</NavLink> 
                    </li>
                </>
               }
                    {/* shared nav links */}
                    <div className="divider "></div>
                    <li>
                   
                    <NavLink to='/' className="mb-2 text-white">  <FaHome /> Home</NavLink> 
                    </li> 
                    <li>
                   
                    <NavLink to='/order/salad' className="mb-2 text-white">  <IoMenu /> Menu</NavLink> 
                    </li> 
                    
                   
                   {/*<li>  <NavLink to='/dashboard/shop' className="mb-2 text-white">  <FaShoppingBag /> Shop</NavLink> 
                    </li>  */}
                  {/*  { <li>  <NavLink to='/dashboard/contact' className="mb-2 text-white">  <BiSolidContact/>Contact</NavLink> 
            </li>} */}
                   
                   
                </ul>
            </div>
            {/* dashboard Content */}
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;