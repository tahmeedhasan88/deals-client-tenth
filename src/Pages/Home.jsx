import React, { useRef } from 'react';
import { useEffect } from 'react';
import RecentListing from '../Components/RecentListing';
import { Suspense } from 'react';

const recentListingPromise = fetch('http://localhost:3000/recent-listings').then(res=>res.json())


const Home = () => {

const carouselRef = useRef(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    let scrollAmount = 0;

    const slide = () => {
      if (!carousel) return;

      const scrollWidth = carousel.scrollWidth;
      const visibleWidth = carousel.clientWidth;
      scrollAmount += visibleWidth;

      if (scrollAmount >= scrollWidth) {
        scrollAmount = 0;
      }

      carousel.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
      });
    };

    const interval = setInterval(slide, 3000); // every 3s
    return () => clearInterval(interval);
  }, []);


    return (
        <div>
            {/* Carousel */}
            <div
      ref={carouselRef}
      className="carousel rounded-box overflow-x-auto scroll-smooth space-x-2 mt-5"
    >
      <div className="carousel-item">
        <img className="h-[150px] lg:h-[300px]" src="/dogcat.jpg" alt="Dog & Cat" />
      </div>
      <div className="carousel-item">
        <img className="h-[150px] lg:h-[300px]" src="/cat.jpg" alt="A happy baby with cat" />
      </div>
      <div className="carousel-item">
        <img className="h-[150px] lg:h-[300px]" src="/puppy.jpg" alt="Puppy" />
      </div>
      <div className="carousel-item">
        <img className="h-[150px] lg:h-[300px]" src="/catwith.JPG" alt="Cat" />
      </div>
      <div className="carousel-item">
        <img className="h-[150px] lg:h-[300px]" src="/happy.JPG" alt="Happy Owner" />
      </div>
      <div className="carousel-item">
        <img className="h-[150px] lg:h-[300px]" src="/poorDog.JPG" alt="Poor Dog" />
      </div>
            </div>




         <div className='mt-10 mb-10'>
            <div className='mb-2'><h1 className='font-bold text-[15px] lg:text-[22px] text-center lg:mb-7'>Recent Listing</h1></div>

             <Suspense
                  fallback={
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "100vh",
                        background: "#0f172a",
                        color: "#f8fafc",
                        fontFamily: "sans-serif",
                      }}
                    >
                      <div
                        style={{
                          position: "relative",
                          width: "80px",
                          height: "80px",
                        }}
                      >
                        {[...Array(4)].map((_, i) => (
                          <div
                            key={i}
                            style={{
                              position: "absolute",
                              border: "4px solid #3b82f6",
                              borderRadius: "50%",
                              animation: `loaderAnim 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite`,
                              animationDelay: `${-0.3 * i}s`,
                              top: 36,
                              left: 36,
                              width: 0,
                              height: 0,
                              opacity: 0,
                            }}
                          ></div>
                        ))}
                      </div>
                      <p style={{ marginTop: "20px" }}>Loading your content...</p>
            
                      {/* Inline keyframes */}
                      <style>
                        {`
                          @keyframes loaderAnim {
                            0% {
                              top: 36px;
                              left: 36px;
                              width: 0;
                              height: 0;
                              opacity: 0;
                            }
                            100% {
                              top: 0px;
                              left: 0px;
                              width: 72px;
                              height: 72px;
                              opacity: 1;
                              transform: scale(0);
                            }
                          }
                        `}
                      </style>
                    </div>
                  }
                >
                   <RecentListing recentListingPromise={recentListingPromise}></RecentListing>
                </Suspense>
           
         </div>
          
        </div>
    );
};

export default Home;