import { Helmet } from "react-helmet-async";
import Cover from "../../../Shared/Cover/Cover";
import menuImg from '../../../assets/menu/banner3.jpg'
import dessertImg from '../../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import soupImg from '../../../assets/menu/soup-bg.jpg'
import useMenu from "../../../hooks/useMenu";

import SectionTitle from "../../../Component/SectionTitle/SectionTitle";
import MenuCategory from "./MenuCategory/MenuCategory";




const Menu = () => {
    const [menu] = useMenu()
    const desserts = menu.filter(item => item.category ==="dessert")
    const pizza = menu.filter(item => item.category ==="pizza")
    const salad = menu.filter(item => item.category ==="salad")
    const soup = menu.filter(item => item.category ==="soup")
    const offered = menu.filter(item => item.category ==="offered")
    return (
        <div>
       <Helmet><title>Bistro|Menu</title> </Helmet>
        
        <div>
          {/**main cover */}
        <Cover img={menuImg} title='Our Menu' description='Would you like to try a dish?' ></Cover>
      {/**Offered menu items */}
        <SectionTitle subHeading="---Don't miss---" heading="TODAY'S OFFER" ></SectionTitle>
      <MenuCategory items={offered}></MenuCategory>

      {/**dessert items */}
      
      <MenuCategory items={desserts} title="dessert" description='Treat yourself to our delectable desserts, from rich chocolate cakes to creamy cheesecakes. Each sweet creation is made to perfection, promising a delightful end to your meal. Order now and indulge in pure dessert bliss!' img={dessertImg}></MenuCategory>

      {/**pizza item */}
      <MenuCategory items={pizza} title="pizza" description="Enjoy our mouth-watering pizzas, topped with the freshest ingredients and baked to perfection. From classic margherita to gourmet specialties, there's a slice for everyone. Satisfy your pizza cravings with every bite!" img={pizzaImg}></MenuCategory>

      {/**salads item */}
      <MenuCategory items={salad} title="salads" description="Our fresh salads are a vibrant mix of crisp vegetables and flavorful dressings. Perfect as a healthy meal or a refreshing side, each salad is both nutritious and delicious. Dive into a bowl of goodness today!" img={saladImg}></MenuCategory>

      {/**soup */}
      <MenuCategory items={soup} title="soup" description=" Warm up with our comforting soups, made from scratch with wholesome ingredients. Whether you prefer creamy or broth-based, our soups are perfect for a cozy meal. Experience the soothing flavors of our homemade soups today!" img={soupImg}></MenuCategory>
        
        
    </div>
        </div>
    );
};

export default Menu;