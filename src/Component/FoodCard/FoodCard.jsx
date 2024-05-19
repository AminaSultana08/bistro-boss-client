import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";



const FoodCard = ({item}) => {
    const {name, recipe,image,price, _id}= item
    const {user} = useAuth()
    
    const navigate = useNavigate()
    const location = useLocation()
    const axiosSecure = useAxiosSecure()
    const [ , refetch]= useCart()




    const handleAddToCart =()=>{
      if(user  && user?.email){
        // send item cart to the database
       // console.log(user.email, food);
        const cartItem = {
          menuId: _id,
          email:user.email,
          name,
          image,
          price
        }
      axiosSecure.post('/carts' , cartItem)
      .then(res =>{
        console.log(res.data);
        if(res.data.insertedId){
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${name} has been added to cart`,
            showConfirmButton: false,
            timer: 1500
          });
          //refetch cart to update the cart items
          refetch()
        }
      })
      }
      else{
        Swal.fire({
          title: "You'r not logged in",
          text: "Please login to add the cart",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, login!"
        }).then((result) => {
          if (result.isConfirmed) {
           //send user to login page
           navigate ('/login', {state:{from:location}})
          }
        });
      }
    }
    
    return (
        <div>
        <div className="card w-80 mt-4 bg-base-100 shadow-xl">
        <figure><img src={image} alt="Shoes" /></figure>
        <p className="bg-slate-700 text-white text-center absolute right-0 px-3 py-1 mr-3 mt-3">৳{price} </p>
        <div className="card-body flex flex-col bg-gray-200 justify-center">
          <h2 className="card-title justify-center">{name}</h2>
          <p >{recipe}</p>
          <div className="card-actions justify-center">
            <button 
            onClick={handleAddToCart }
            className="btn btn-outline border-0 border-b-4 text-[#BB8506] bg-gray-300   flex justify-center">
            Add to Cart
            </button>
          </div>
        </div>
      </div>
        </div>
    );
};

export default FoodCard;