import { FaGoogle } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";

const SocialSignIn = () => {
    const {googleSignIn} = useAuth()
    const axiosPublic = useAxiosPublic()
    const navigate = useNavigate()



    const handleSignInWithGoogle = e =>{
        e.preventDefault()
        googleSignIn()
        .then(result =>{
          const user = result.user
          console.log(user);
          const userInfo = {
            email:result.user?.email,
            name:result.user?.displayName
          }
          axiosPublic.post('/users', userInfo )
          .then(res=>{
            console.log(res.data);
            navigate('/')
          })
        })
        .catch(error=>{
          console.log(error);
        })
      }
    return (
        <div className="p-8">
            <div className="divider">
            </div>
            <div className="btn flex items-center justify-center bg-green-400 text-white">
                <button  onClick={handleSignInWithGoogle} className="flex items-center justify-center text-lg" type=""><FaGoogle className="mr-2"></FaGoogle>Google</button>
            </div>
        </div>
    );
};

export default SocialSignIn;