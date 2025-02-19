import Image from 'next/image'
import React from 'react'

const About = () => {
  return <>
    <div className="max-w-[1010px] mx-auto">
        <h1 className="text-center my-[40px]">About Us</h1>
        <div className='flex items-center justify-between'>
            <img className="w-[50%]" src="https://www.thelifeyoucansave.org/wp-content/uploads/2019/11/Screen-Shot-2015-07-13-at-1.53.34-PM.png" alt="" />
            <div className='w-[40%]'>
                <h2 className="font-bold mb-[30px]">Making the World a Kinder Place Together</h2>
                <p className="text-[15px]">
                    We are a team of enthusiasts who believe that technology can make the world a better place. We are creating this project as part of a hackathon to show how a simple and convenient platform can help those in need.<br/>
                    <br/> GiveHope is a platform where anyone can create a donation box and raise funds for important causes. Whether it’s medical treatment, education, support in difficult times, or a dream that needs funding – here, everyone can find support.
                </p>
            </div>
        </div>
        <div className='flex items-center my-[50px] justify-between'>
            <div className='w-[45%]'>
                <h2 className="font-bold mb-[30px]">How Does It Work?</h2>
                <p className="text-[15px]">
                📌 Create a donation box – share your story and fundraising goal.<br/>
                💚 People donate – support those in need.<br/>
                📈 Track the progress – our progress bar shows how close you are to your goal.
                </p>
            </div>
            <Image className="w-[50%]" src="https://www.shutterstock.com/image-photo/hand-marker-writing-how-does-260nw-317045864.jpg" width={500} height={0} alt="" />
        </div>
    </div>
  </>
}

export default About