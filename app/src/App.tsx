import "./App.css";
import QRCodeImage from "./assets/image-qr-code.png";

function App() {
  return (
    <div className="p-4 rounded-2xl w-80 bg-white shadow-lg">
      <img
        src={QRCodeImage}
        className="rounded-2xl w-full"
        alt="QR Code to Frontend Mentor"
      ></img>
      <h2 className="text-[#1f3251] text-2xl m-2 mt-4 font-bold">
        Improve your front-end skills by building projects
      </h2>
      <p className="text-[#7b879d] text-base font-normal leading-5 pb-4">
        Scan the QR code to visit Frontend Mentor and take your coding skills to
        the next level
      </p>
    </div>
  );
}

export default App;
