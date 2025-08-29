// app/page.js
export default function Hero() {
  return (
    <main className=" flex-col  bg-gray-50 items-center justify-center px-8  md:flex  overflow-hidden ">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
       

        {/* Right Section - Hero Image */}
        <div className="flex justify-center">
          <img
            src="/main.jpg"  // ✅ put your hero image inside /public
            alt="Women’s Tailored Dress"
            className="rounded-2xl shadow- w0-full h-[500px] w-[600px] object-cover"
          />
        </div>
         {/* Left Section - Text */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
            Empowering Women Through Fashion ✨
          </h1>
          <p className="mt-6 text-lg text-gray-600">
            Discover elegant, handmade dresses crafted by talented women in 
            Kakuma. Each dress blends culture, resilience, and modern style.  
          </p>
          <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-xl shadow hover:bg-blue-700 transition">
            Shop Now
          </button>
        </div>

      </div>
    </main>
  );
}
