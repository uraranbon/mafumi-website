import { motion } from "framer-motion"

//slider
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

export default function MainVisual() {
  return (
    <section className="mainVisual">
      <div className='innerArea'>
        <div className="message">
          <motion.h2 className='title'
            initial={{ opacity: 0, y: 30, transition: { duration: 0.6, delay: 0.6  } }} // 初期状態
            animate={{ opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.6 } }} // マウント時
            exit={{ opacity: 0,  y: 0, transition: { duration: 0.6, delay: 0.6 } }}    // アンマウント時
          >
            珈琲と、本と、<br />そして無駄話を愉しむ喫茶店。
          </motion.h2>
          <motion.div className='logo'
            initial={{ opacity: 0, y: 30, transition: { duration: 0.6, delay: 1.2  } }} // 初期状態
            animate={{ opacity: 1, y: 0, transition: { duration: 0.6, delay: 1.2 } }} // マウント時
            exit={{ opacity: 0,  y: 0, transition: { duration: 0.6, delay: 1.2 } }}    // アンマウント時
          >
            <img
              src="/sources/image/logoTextWhite.png"
              alt="眞踏珈琲店 MAFUMI COFFEE AND BOOKS"
            />
          </motion.div>
        </div>
      </div>
      <div className='gallery'>
        <Splide
          options={{
            arrows: false,
            pagination: false,
            drag: false,
            rewind: true,
            autoplay: true,
            speed: 2000,
            interval: 6000,
            type: "fade",
          }}
          aria-label="background"
        >
          <SplideSlide><img src="/sources/image/mv/iced.jpg" alt=""/></SplideSlide>
          <SplideSlide><img src="/sources/image/mv/coffee.jpg" alt=""/></SplideSlide>
          <SplideSlide><img src="/sources/image/mv/books.jpg" alt=""/></SplideSlide>
          <SplideSlide><img src="/sources/image/mv/iced02.jpg" alt=""/></SplideSlide>
          <SplideSlide><img src="/sources/image/mv/glass.jpg" alt=""/></SplideSlide>
          <SplideSlide><img src="/sources/image/mv/rock.jpg" alt=""/></SplideSlide>
        </Splide>
      </div>
    </section>
  )
}
