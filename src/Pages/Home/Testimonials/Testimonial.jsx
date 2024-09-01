import SectionTitle from "../../../Component/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';
import '@smastrom/react-rating/style.css'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import quote from '../../../assets/home/quote-left 1.jpg'




const Testimonial = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('https://bistro-boss-server-flax.vercel.app/reviews')
            .then(res => res.json())
            .then(data => {
                setReviews(data);
            })
    }, [])
    return (
        <div className="my-10 ">
            <SectionTitle subHeading='---What Our Clients Say---' heading='TESTIMONIALS'></SectionTitle>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                {
                    reviews.map(review => <SwiperSlide key={review._id}  >
                        <div className="my-16 mx-24 space-y-4 flex flex-col justify-center items-center">
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={review.rating}
                                readOnly
                                
                            />
                            <img src={quote} alt=""/>
                            <p className="">{review.details} </p>
                            <h2 className="text-2xl  text-[#CD9003]">{review.name} </h2>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </div>
    );
};

export default Testimonial;