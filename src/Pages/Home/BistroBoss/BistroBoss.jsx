
import chef from '../../../assets/home/chef-service.jpg'

const BistroBoss = () => {
    return (
        <div className='mb-44'>
            <div >
            <img className=' relative' src={chef} alt=""/>
           <div className='flex items-center justify-center -mt-32'>
           <div className=' text-black absolute   -mt-32 mx-auto  bg-white px-44 space-y-4 py-12 text-center  '>
           <h1 className="text-3xl">Bistro Boss</h1>
           <h1 className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum <br/> deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto <br/> ducimus incidunt quibusdam nemo.</h1>
       </div>
           </div>
            </div>
        </div>
    );
};

export default BistroBoss;