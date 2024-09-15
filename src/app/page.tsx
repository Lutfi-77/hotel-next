// import Image from "next/image";

import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
      {/* Navbar Section */}
      <Navbar />
      {/* End of Navbar Section */}
      <div className="w-full h-[80vh]">
        <img
          src="https://images.unsplash.com/photo-1599304843532-5a8dff6d1ca8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="background"
          className="w-full h-full object-cover"
        />
      </div>
      {/* Booking Card Section */}
      <div className="hidden md:block w-2/3 bg-white text-black m-auto relative rounded-md p-5 mt-5 shadow-lg">
        <div className="grid grid-cols-4 gap-3">
          <div className="form-group">
            <input
              type="text"
              placeholder="Check In"
              className="input border-b-2 border-b-slate-300 focus:outline-none focus:border-b-customPrimary rounded-none w-full max-w-xs dark:text-white dark:bg-white"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="Check Out"
              className="input border-b-2 border-b-slate-300 focus:outline-none focus:border-b-customPrimary rounded-none w-full max-w-xs dark:text-white dark:bg-white"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="Guest"
              className="input border-b-2 border-b-slate-300 focus:outline-none focus:border-b-customPrimary rounded-none w-full max-w-xs dark:text-white dark:bg-white"
            />
          </div>
          <button className="btn btn-primary bg-customPrimary border-none text-white">
            Book Now
          </button>
        </div>
      </div>
      {/* End Of Booking Card Section */}

      <section id="room-section">
        <div className="container mx-auto pt-5">
          <h1 className="text-2xl">Our Rooms</h1>
          <div className="text-base">Our rooms is so comfortable and clean</div>
        </div>
      </section>
    </>
  );
}
