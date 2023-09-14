// import React, { useRef, useState } from 'react';
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Card } from './Card';
import './Card.css'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation, Pagination, Scrollbar, A11y, Mousewheel } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/mousewheel';

const data = [
  {
    title: "Richa",
    description: `"I had a complex research topic for my assignment, and the guidance 
    I received here helped me navigate through the sea of information, 
    ultimately leading to a well-structured and insightful paper."`
  },
  {
    title: "Usman",
    description: `"I struggled with citing sources correctly in my thesis, but the experts here not only fixed my 
    citations but also taught me the proper citation style. A true learning experience!"`
  },
  {
    title: "Sahil",
    description: `"The service provided a much-needed boost to my confidence. With their assistance, 
    I was able to present my ideas coherently and persuasively in my academic projects."`
  },
  {
    title: "Abrar",
    description: `"The constructive feedback I received on my drafts was invaluable. 
    It helped me refine my arguments and improved the overall quality of my work."`
  },
  {
    title: "Nauman",
    description: `"The support team was incredibly responsive and attentive to my queries. 
    It's evident that they prioritize customer satisfaction, and it made the entire experience pleasant."`
  },
  {
    title: "Raghavan",
    description: `"I was overwhelmed by the volume of research required for my dissertation, but the research assistance 
    I got here made the process manageable. Thank you for saving me time and stress!"`
  },
  {
    title: "Keith",
    description: `"I was impressed by how personalized the guidance was. They didn't just provide generic advice; they
    tailored their assistance to fit my specific project needs."`
  },
  {
    title: "Shahzad",
    description: `"The meticulous editing and proofreading helped me turn in polished assignments. 
    It's amazing how they caught even the smallest errors that I would have missed."`
  },
  {
    title: "Manisha",
    description: `"The step-by-step guidance on structuring my project was incredibly helpful. It not only improved the flow of
    my work but also made it easier for me to convey my ideas."`
  },

  {
    title: "Rozef",
    description: `"I was struggling to connect the dots between different sections of my project,
    but the cohesive guidance I received here turned my disjointed ideas into a seamless whole."`
  },

  {
    title: "Nawfal",
    description: `"I couldn't have completed my dissertation without the expert assistance
    I received here. The guidance and support I got were invaluable. Thank you!"`
  },

  {
    title: "Obaid",
    description: `"As a working student, I often struggled to balance my job and assignments. Thanks to this service, I managed to excel in my projects without compromising on my job."`
  },

  {
    title: "Alex",
    description: `"I was stuck on my thesis topic, but with their help, I not only found a 
    unique angle but also got step-by-step guidance throughout the research and writing process."`
  },

  {
    title: "Parth",
    description: `"The team here provided meticulous proofreading and editing for my 
    assignment. Their attention to detail significantly improved the quality of my work."`
  },

  {
    title: "Preet",
    description: `"I was skeptical about seeking academic assistance, but this service changed my perception. Their knowledgeable experts helped me understand complex
    concepts and produce outstanding assignments."`
  },
  {
    title: "Rahul",
    description: `"The professionalism and timely responses I received made me feel like a priority.
    I felt fully supported from the moment I submitted my project requirements."`
  },

  {
    title: "Kim",
    description: `"Having struggled with structuring my essays, I was amazed by the clear and 
    logical structure the service helped me develop. It made my work coherent and easy to follow."`
  },

  {
    title: "Rajashree",
    description: `"I'm not a native English speaker, so I was concerned about the language quality of my assignments.
    With their assistance, my papers sounded natural and well-written."`
  },

  {
    title: "Rashid",
    description: `"The guidance I received here went beyond my expectations. Their experts not only 
    helped me improve my project but also taught me valuable research techniques."`
  },

  {
    title: "Fahaad",
    description: `"I was running out of time for my project submission, but the swift and efficient support I 
    received here ensured I met my deadline without compromising on quality."`
  },
]
export const Clients = () => {
  console.log(data)
  return (
    <div className='container-fluid vh-100 clients'>
      <h2 className='text-center my-5'>What Our Clients Say</h2>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 60,
          },
        }}
        modules={[Pagination, Mousewheel]}
        className="mySwiper"
      >
        {
          data.map((el) => {
            // console.log(el.title);
            return(
            <SwiperSlide key={el.title}>
                <Card title={el.title} description={el.description} />
              </SwiperSlide>
            )
          })
        }
        {/* <SwiperSlide>
          <Card title="Richa" description="Hello" />
        </SwiperSlide>
        <SwiperSlide>
          <Card title="Richa" description="Hello" />
        </SwiperSlide>
        <SwiperSlide>
          <Card title="Richa" description="Hello" />
        </SwiperSlide>
        <SwiperSlide>
          <Card title="Richa" description="Hello" />
        </SwiperSlide> */}
      </Swiper>
    </div>
  )
}
