
import SectionTitle from "../../../Component/SectionTitle/SectionTitle";
import MenuItem from "../../../Shared/MenuItems/MenuItem";
import useMenu from "../../../hooks/useMenu";



const PopularMenu = () => {
    const [menu] = useMenu()
    const popular = menu.filter(item=>item.category ==='popular')
    // const [menu,setMenu] = useState([])
    // useEffect(()=>{
    //     fetch('menu.json')
    //     .then(res =>res.json())
    //     .then(data =>{
    //         const popularItems = data.filter(item =>item.category === 'popular')
    //         setMenu(popularItems)})
    // } ,[] )

    return (
        <section className="mt-20 mb-12">
            <SectionTitle 
             heading= {"FROM OUR MENU"}
            subHeading = {"---Check it out---"}>
           
            </SectionTitle>
           <div className="grid md:grid-cols-2 grid-cols-1 gap-10">
            {
                popular.map(item =><MenuItem 
                    key={item._id}
                    item={item}
                     ></MenuItem>)
            }

           </div>
           <button className=" flex justify-center items-center my-5   btn btn-outline border-0 border-b-4 text-black">View Full  Menu</button>
        </section>
    );
};

export default PopularMenu;