import React from 'react'
import Image from 'next/image'
import './About.css' // Подключаем CSS файл

const About = () => {
  return (
    <>
      <div className="max-w-[1010px] mx-auto text-[white]">
        <h1 className="text-center my-[40px] fade-in text-[lightgreen]">
          About Us
        </h1>

        <div className="flex items-center justify-between">
          <div className="w-[40%] fade-in-delay">
            <Image
              src="https://www.thelifeyoucansave.org/wp-content/uploads/2019/11/Screen-Shot-2015-07-13-at-1.53.34-PM.png"
              width={500}
              height={300}
              alt="Donation Platform"
            />
          </div>

          <div className="w-[50%] mt-6 lg:mt-0 fade-in-delay">
            <h2 className="font-bold mb-[30px] text-[lightgreen]">Making the World a Kinder Place Together</h2>
            <p className="text-[15px]">
              We are a team of enthusiasts who believe that technology can make the world a better place. We are creating this project as part of a hackathon to show how a simple and convenient platform can help those in need. <br /><br />
              GiveHope is a platform where anyone can create a donation box and raise funds for important causes. Whether it’s medical treatment, education, support in difficult times, or a dream that needs funding – here, everyone can find support.
            </p>
          </div>
        </div>

        <div className="flex lg:flex-row items-center my-[50px] justify-between">
          <div className="w-[45%] fade-in-delay">
            <h2 className="font-bold mb-[30px] text-[lightgreen]">How Does It Work?</h2>
            <p className="text-[15px]">
              📌 Create a donation box – share your story and fundraising goal.<br />
              💚 People donate – support those in need.<br />
              📈 Track the progress – our progress bar shows how close you are to your goal.
            </p>
          </div>

          <div className="w-[40%] fade-in-delay">
            <Image
              src="https://www.shutterstock.com/image-photo/hand-marker-writing-how-does-260nw-317045864.jpg"
              width={500}
              height={300}
              alt="How It Works"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
