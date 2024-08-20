import React, { useState } from 'react'
import Vedio from '../assets/Component38.png'
import './build.css';
import BG from "../assets/homebannerbg.png";
import { Link } from 'react-router-dom';
import { FaCirclePlay } from "react-icons/fa6";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';

const Build = () => {

    const [isVideoOpen, setIsVideoOpen] = useState(false);

    const openVideo = () => {
        setIsVideoOpen(true);
    };

    const closeVideo = () => {
        setIsVideoOpen(false);
    };

    const videoPopupStyle = {
        display: isVideoOpen ? 'block' : 'none',
    };

    const imageClickStyle = isVideoOpen ? { width: '100%', height: 'auto' } : {};

    return (
        <div className='buildContainer' style={{ "backgroundImage": `url(${BG})` }}>
            <div className='relative flex gap-1 ml-10 mr-10 items-center buildContainer md:flex-row flex-col-reverse max-sm:ml-0 max-sm:mr-0 max-sm:pl-2 max-sm:pr-2'>
                <div >
                    <div>
                        <p className='mt-[150px] text-gray-600 font-sans text-base  font-normal leading-8 max-sm:text-justify max-sm:mt-0 max-sm:pl-[10px] max-sm:pr-[10px]'>CoCreate Labs is a game-changer in the startup ecosystem. It enables access to a global platform that brings together the best and brightest entrepreneurs, investors, mentors, and philanthropic organizations in an integrated ecosystem.</p>
                    </div>
                    <div className='flex gap-10 mt-10 max-sm:gap-5 items-center max-sm:mt-5'>
                        <Link to="/registration"> <button className='p-5 rounded-r-full font-bold text-white bg-blue-500 rounded-l-full w-150 border border-solid font-sans w-150 h-[50px] flex justify-center items-center max-sm:h-[50px] max-sm:rounded-l-50 max-sm:font-size-[12px] max-sm:font-normal max-sm:pl-2 max-sm:pr-2 max-sm:m-[5px] w-150 max-sm:w-[150px] hover:bg-blue-500 hover:text-white'>
                            Start Growing
                        </button></Link>

                        {/* <button className='p-5  rounded-r-full font-bold text-black bg-dbe8ec rounded-l-full w-150 border border-solid font-sans w-150 h-[50px] flex gap-2 justify-center items-center max-sm:h-[50px] max-sm:rounded-l-50 max-sm:font-size-[12px] max-sm:font-normal max-sm:p-0 max-sm:m-[5px] w-150 max-sm:w-[120px] hover:bg-blue-500 hover:text-white'>
                            <FaCirclePlay className='text-2xl text-blue-500 hover:text-white' />    Who are we
                        </button> */}

                        <button id='Who-are-we-button'>
                            <FaCirclePlay id='Who-are-we-icon' /><span id='Who-are-we-text'>Who are we</span>
                        </button>
                    </div>
                </div>
                <div id="videoPopup" style={videoPopupStyle}>
                    <span id="closeBtn" onClick={closeVideo}>X</span>
                    <iframe
                        width="100%"
                        height="315"
                        src="https://www.youtube.com/embed/raXLsIiOz1w?si=VGb8B5GOJg_vRyH-"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    ></iframe>
                </div>
                <div type='button' className='max-sm:mt-20 pb-[50px] max-sm:pb-[10px]'>
                    <img
                        onClick={openVideo}
                        className='buildImage  max-sm:w-[90vw] max-sm:h-[200px] pt-[50px] max-sm:pt-0'
                        src={Vedio}
                        style={imageClickStyle}
                    />
                </div>
                <div className='absolute top-20 w-[45%] pt-4 max-sm:top-0 max-sm:w-[95%] max-sm:p-0'>
                    <h1 className='font-sans text-5xl font-semibold leading-70 tracking-tighter  max-sm:text-center max-sm:text-2xl' > Best Place in the World to Build Your Startup</h1>
                </div>
            </div>
        </div>
    )
}

export default Build;
