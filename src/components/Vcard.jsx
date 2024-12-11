import React, { useState } from "react";
import { FaPhone, FaGlobe, FaShareAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BiSolidContact } from "react-icons/bi";
import { FaLocationDot } from "react-icons/fa6";
import { LuQrCode } from "react-icons/lu";
import qr from '../assets/qr.png';

const BusinessCard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {/* Business Card */}
      <div className="md:w-[100%]  w-full relative sm:w-[400px] max-w-[400px] z-40 bg-black text-white rounded-3xl shadow-lg overflow-hidden md:py-6  p-4  flex flex-col items-center justify-center">
        {/* Header */}
        <div className="absolute top-6 right-6 flex gap-6 ">
          <FaShareAlt className="text-green-400 mx-auto text-xl" />
          <LuQrCode
            className="text-stone-200 mx-auto text-xl cursor-pointer"
            onClick={() => setIsModalOpen(true)}
          />
        </div>
        <div className="text-center w-full px-6">
          <img
            src="https://img.freepik.com/free-photo/man-white-shirt-looks-confused-lost_144627-47949.jpg?ga=GA1.1.1158695550.1733941826&semt=ais_hybrid"
            alt="Profile"
            className="w-24 h-24 z-[15000] mx-auto rounded-full border-4 object-cover object-center "
          />
          <h1 className="text-2xl font-semibold mt-4">Jeff Baer</h1>
          <p className="text-sm text-gray-400">CEO/Owner</p>
          <p className="text-sm mt-1">BizViz | Smart vCard | Reviews Zip | VCF Generator</p>
          <p className="text-xs mt-1">2502 N Clark St, #240, Chicago, IL 60614 USA</p>
        </div>

        {/* Save Contact Button */}
        <div className="mt-6 w-full px-2 ">
          <button
            className="w-full bg-green-500 hover:bg-white text-white hover:text-black transition-all font-medium py-2 rounded-xl flex items-center justify-center gap-2 duration-300 ease-in-out"
            onClick={() => {
              const vCardData = `
BEGIN:VCARD
VERSION:3.0
N:Baer;Jeff;;;
FN:Jeff Baer
ORG:BizViz
TITLE:CEO/Owner
TEL;type=WORK,VOICE:+1 312-555-1234
EMAIL;type=WORK:info@bizviz.com
URL:https://bizviz.com
ADR:;;2502 N Clark St, #240;Chicago;IL;60614;USA
END:VCARD
              `;
              const blob = new Blob([vCardData], { type: "text/vcard" });
              const link = document.createElement("a");
              link.href = URL.createObjectURL(blob);
              link.download = "Jeff-Baer.vcf";
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            }}
          >
            <BiSolidContact className="text-xl" />
            Save Contact
          </button>
        </div>
        <div className="mt-6 flex justify-center  md:px-8 px-2 items-center flex-wrap md:gap-6 gap-2 text-center ">
  <div className="w-16 h-16 bg-stone-50 bg-opacity-25 rounded-full flex flex-col justify-center items-center">
    <FaPhone className="text-green-400 text-xl" />
    <p className="text-xs mt-1">Office</p>
  </div>
  <div className="w-16 h-16 bg-stone-50  bg-opacity-25 rounded-full flex flex-col justify-center items-center">
    <FaGlobe className="text-green-400 text-xl" />
    <p className="text-xs mt-1">Website</p>
  </div>
  <div className="w-16 h-16 bg-stone-50 bg-opacity-25 rounded-full flex flex-col justify-center items-center">
    <MdEmail className="text-green-400 text-xl" />
    <p className="text-xs mt-1">Email</p>
  </div>
  <div className="w-16 h-16 bg-stone-50 bg-opacity-25 rounded-full flex flex-col justify-center items-center">
    <FaLocationDot className="text-green-400 text-xl" />
    <p className="text-xs mt-1">Location</p>
  </div>
  <div className="w-16 h-16 bg-stone-50 bg-opacity-25 rounded-full flex flex-col justify-center items-center">
    <BiSolidContact className="text-green-400 text-xl" />
    <p className="text-xs mt-1">Calendar</p>
  </div>
</div>





      </div>

      {/* Modal */}
      <div
        className={`absolute inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 transition-all ease-in-out duration-1000  ${
          isModalOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className={`w-[90%] sm:w-[400px] h-full flex justify-center items-center max-w-[400px] bg-black text-white rounded-3xl shadow-lg overflow-hidden p-6 relative transform transition-transform duration-300 ${
            isModalOpen ? "scale-100" : "scale-50"
          }`}
        >
          <button
            className="absolute top-6 hover:rotate-90 transition-transform duration-300 right-6 text-white rounded-full"
            onClick={() => setIsModalOpen(false)}
          >
            ✕
          </button>
          <div className="text-center">
  <img
    src={qr}
    alt="QR Code"
    className="w-24 h-24 mx-auto rounded-lg border-4 object-cover object-center border-green-500"
  />
  <p className="mt-4 text-sm text-gray-400">
    📱 Scan this QR code to connect!
  </p>
</div>

        </div>
      </div>
    </>
  );
};

export default BusinessCard;
