
import chef from '../../../assets/home/chef-service.jpg'

const BistroBoss = () => {
    return (
        <div className='mb-44'>
            <div >
            <img className=' relative' src={chef} alt=""/>
           <div className='flex items-center justify-center -mt-32'>
           <div className=' text-black absolute   -mt-32 mx-auto  bg-white px-44 space-y-4 py-12 text-center  '>
           <h1 className="text-3xl">Bistro Foodies Zone</h1>
           <h1 className="text-sm"> Welcome to Bistro Foodies One, your go-to destination for delicious and convenient dining! Enjoy our diverse menu  <br/> of mouth-watering dishes, available for easy online ordering and fast delivery. Indulge in a culinary experience from the comfort of your home. <br/> Order now and savor the flavors!</h1>
          
       </div>
           </div>
            </div>
        </div>
    );
};

export default BistroBoss;