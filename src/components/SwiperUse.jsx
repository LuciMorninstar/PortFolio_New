
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';


import { Pagination } from 'swiper/modules';


const SwiperUse = ({send}) => {
  return (
     <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {send.map((item,i)=>(
          <SwiperSlide> <img key={i} src={item.map((ite)=>(
            <div>ite</div>
            

          ))}/></SwiperSlide>
         

        ))}
      </Swiper>
    </>
   
  )
}

export default SwiperUse