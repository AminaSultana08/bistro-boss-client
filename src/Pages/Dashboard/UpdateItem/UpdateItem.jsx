
import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../../Component/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

import useAxiosPublic from "../../../hooks/useAxiosPublic";






const UpdateItem = () => {
   
 const{name,recipe,price,category,_id,image} = useLoaderData()



const { register, handleSubmit } = useForm()

const axiosPublic = useAxiosPublic()
const axiosSecure = useAxiosSecure()
const image_hosting_key= import.meta.env.VITE_IMAGE_HOSTING_KEY
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`
const onSubmit = async (data) => {
    console.log(data)
    //img upload to imgbb and then get url 
    const imageFile = {image: data.image[0]}
    const res = await axiosPublic.post(image_hosting_api, imageFile,{
        headers:{
            'content-type':'multipart/form-data'
        }
    });
    if(res.data.success){
        //now send the menu item data to the server with the image url
        const menuItem = {
            name: data.name,              
            category:data.category,
            price:parseFloat(data.price),
            recipe:data.recipe,
            image:res.data.data.display_url

        }
        const menuRes= await axiosSecure.patch(`/menu/${_id}`, menuItem)
        console.log(menuRes.data);
        if(menuRes.data.modifiedCount>0){
            //reset()
            //show success popup
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: `${data.name} is updated at menu`,
                showConfirmButton: false,
                timer: 1500
              });
        }
       
    }
    //
 
   console.log('with image url', res.data);
}
    
    return (
        <div>
            <SectionTitle heading='Update Item' subHeading='Refresh Item'></SectionTitle>

            <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full my-6 ">
                    <label className="label">
                        <span className="label-text">Recipe Name*</span>
                    </label>
                    <input
                        {...register("name", {required:true} )}
                        type="name" defaultValue={name}
                        placeholder="Recipe name" className="input input-bordered w-full " />

                </div>
                <div className="flex gap-6">
                    {/* category */}
                    <div className="form-control w-full my-6 ">
                        <label className="label">
                            <span className="label-text">Category*</span>
                        </label>
                        <select defaultValue={category}
                            {...register("category" , {required:true})}
                            className="select select-bordered w-full" >

                            <option disabled value='default'>Select a category</option>
                            <option value="salad">Salad</option>
                            <option value="pizza">Pizza</option>
                            <option value="soup">Soup</option>
                            <option value="dessert">Dessert</option>
                            <option value="drinks">Drinks</option>
                        </select>

                    </div>

                    {/* price */}
                    <div className="form-control w-full my-6 ">
                        <label className="label">
                            <span className="label-text">Price*</span>
                        </label>
                        <input
                            {...register("price" , {required:true})}
                            defaultValue={price}
                            type="number"
                            placeholder="Price" className="input input-bordered w-full " />

                    </div>
                    
                   

                </div>
                {/* recipe details */}
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Recipe Details</span>
                   
                </label>
                <textarea {...register("recipe" )} defaultValue={recipe} className="textarea textarea-bordered h-24" placeholder="Bio"></textarea>
                
            </div>
            <div className="form-control w-full my-6 ">
            <input {...register ("image" , {required:true})}  placeholder="Image"  type="file" className="file-input w-full max-w-xs" />
            </div>
                <button className="btn text-white bg-gradient-to-r from-[#835D23] to-[#B58130]">
               Update Button
                </button>
            </form>
        </div>
            
        </div>
    );
};

export default UpdateItem;