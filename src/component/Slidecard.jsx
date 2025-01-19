import React, { useState, useEffect } from "react";
import "../index.css"; // Ensure relevant styles are imported
import img1 from "../assets/Cardfeedback1.jpg";
import img2 from "../assets/Image2.jpg";
import img3 from "../assets/Image3.png";
import img4 from "../assets/Image4.png";
import img5 from "../assets/Image5.png";
import img6 from "../assets/Image6.png";
import vector1 from "../assets/Vector1.png";
import vector2 from "../assets/Vector2.png";
import Icon1 from "../assets/Icons1.png";

const reviews = [
  {
    id: 1,
    name: "Samantha Payne",
    username: "@Sam.Payne90",
    img: img1,
    date: "23 Nov 2021",
    rating: 4.5,
    review:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi repudiandae ipsa sequi quisquam mollitia deleniti quos sint, provident quis vel nulla libero.",
  },
  {
    id: 2,
    name: "John D",
    username: "@John.d90",
    img: img2,
    date: "15 Dec 2021",
    rating: 4.5,
    review:
      "Amazing product! Highly recommend it to anyone looking for quality. Will definitely purchase again.",
  },
  {
    id: 3,
    name: "Jane Smith",
    username: "@Jane.Smith",
    img: img3,
    date: "5 Jan 2022",
    rating: 5,
    review:
      "Good value for the price. Delivered on time and in great condition. Customer support was very helpful.",
  },
  {
    id: 4,
    name: "Mike Johnson",
    username: "@Mike.J",
    img: img4,
    date: "2 Feb 2022",
    rating: 4,
    review:
      "Affordable price and great customer service. Will definitely recommend it to my friends!",
  },
  {
    id: 5,
    name: "Sharma M",
    username: "@Sharma M",
    img: img5,
    date: "23 Nov 2021",
    rating: 3.5,
    review:
      "Good value for the price. Delivered on time and in great condition. Customer support was very helpful.",
  },
  {
    id: 6,
    name: "Tara M",
    username: "@Tara M",
    img: img6,
    date: "2 Feb 2022",
    rating: 4.5,
    review:
      "Affordable price and great customer service. Will definitely recommend it to my friends!",
  },
];

function SlideCard() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === Math.ceil(reviews.length / 2) - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full overflow-hidden mt-12">
      <div
        className="flex transition-transform duration-700"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {Array.from({ length: Math.ceil(reviews.length / 2) }).map(
          (_, groupIndex) => (
            <div
              key={groupIndex}
              className="flex flex-col md:flex-row flex-none w-full gap-6 justify-between"
            >
              {reviews
                .slice(groupIndex * 2, groupIndex * 2 + 2)
                .map((review) => (
                  <div
                    key={review.id}
                    className="bg-white shadow-lg rounded-lg p-4 md:p-6 w-full max-w-md mx-auto"
                  >
                    {/* Review Header */}
                    <div className="flex items-center space-x-4">
                      <img
                        src={review.img}
                        alt={`${review.name}'s Avatar`}
                        className="w-16 h-16 md:w-20 md:h-20 rounded-full"
                      />
                      <div>
                        <h3 className="text-lg font-semibold">{review.name}</h3>
                        <p className="text-sm text-gray-500">
                          {review.username}
                        </p>
                        <div className="flex items-center mt-2">
                          {Array.from(
                            { length: Math.floor(review.rating) },
                            (_, index) => (
                              <img
                                key={index}
                                src={vector1}
                                alt="Star"
                                className="h-4 w-4"
                              />
                            )
                          )}
                          {review.rating % 1 !== 0 && (
                            <img
                              src={vector2}
                              alt="Half Star"
                              className="h-4 w-4"
                            />
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Verified Purchase */}
                    <div className="mt-4 flex items-center bg-green-100 px-3 py-1 rounded-md">
                      <img src={Icon1} alt="Verified Icon" className="h-5 w-5" />
                      <span className="ml-2 text-sm">Verified purchase</span>
                    </div>

                    {/* Review Content */}
                    <p className="mt-4 text-gray-600">{review.review}</p>

                    {/* Footer */}
                    <div className="mt-4 text-sm text-gray-500">
                      {review.date}
                    </div>
                  </div>
                ))}
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default SlideCard;
