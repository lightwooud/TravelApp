

const Home = () => {
  return (
    <div >
    <video muted autoPlay loop src="/video.mp4" className="w-full h-auto"></video>
    <div className="absolute inset-0 flex flex-col justify-center items-center  p-4 text-black">
      <div className="absolute inset-0 flex flex-col justify-center items-center">
        <div className="border border-white p-4 text-center bg-white relative z-10">
          <h2 className="text-5xl font-bold font-serif">AGENDA TUS VACACIONES</h2>
          <p className="text-3xl font-serif">TODAS TUS EXPERIENCIAS EN UN SOLO LUGAR</p>
        </div>
      </div>
    </div>
  </div>
  
  );
};

export default Home;
