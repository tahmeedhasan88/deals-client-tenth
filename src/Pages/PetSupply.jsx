import React from 'react';
import AllListings from '../Components/AllListings';
import { Suspense } from 'react';

const allListingApi = fetch('https://deals-server-tenth.vercel.app/products').then(res=>res.json())


const PetSupply = () => {
    return (
        <div className='my-10 lg:my-15'>
           

             <Suspense
      fallback={
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            background: "#388E3C",
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
      <AllListings allListingApi={allListingApi}></AllListings>
    </Suspense>
        </div>
    );
};

export default PetSupply;