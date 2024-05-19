import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import slide1 from '../../../assets/home/slide1.jpg'
import slide2 from '../../../assets/home/slide2.jpg'
import slide3 from '../../../assets/home/slide3.jpg'
import slide4 from '../../../assets/home/slide4.jpg'
import slide5 from '../../../assets/home/slide5.jpg'
import SectionTitle from '../../../Component/SectionTitle/SectionTitle';



const Category = () => {
    return (
        <section >
        <SectionTitle
        subHeading={"from 11.00am to 10.00pm"}
        heading={  "ORDER ONLINE"}
        >
        </SectionTitle>
        <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-20"
      >
        <SwiperSlide>
        <img  src={slide1} alt=""/>
        <h1 className=' text-3xl uppercase text-center   -mt-16 text-white'>Salads</h1>
        </SwiperSlide>
        <SwiperSlide> 
        <img src={slide2} alt=""/>
        <h1 className=' text-3xl uppercase text-center -mt-16 text-white'>Pizza</h1>
        </SwiperSlide>
        <SwiperSlide> 
        <img src={slide3} alt=""/>
        <h1 className=' text-3xl uppercase text-center -mt-16 text-white'> Soups</h1>
        </SwiperSlide>
        <SwiperSlide>
         <img src={slide4} alt=""/>
         <h1 className=' text-3xl uppercase text-center -mt-16 text-white'>Desserts</h1>
         </SwiperSlide>
        <SwiperSlide>
         <img src={slide5} alt=""/>
         <h1 className=' text-3xl uppercase text-center -mt-16 text-white'>Nut Salads</h1>
         </SwiperSlide>
       
      </Swiper>

      
        </section>
    );
};

export default Category;