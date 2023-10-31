const Home = () => {

  return (

    <>

      <div className="w-full">
        <video muted autoPlay loop src="/video.mp4" className="w-full"></video>
      </div>
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center">
        <div className="bg-white rounded-lg p-6">
          <h2 className="text-5xl font-bold font-serif text-black">AGENDA TUS VACACIONES</h2>
          <p className="text-3xl font-serif text-black">TODAS TUS EXPERIENCIAS EN UN SOLO LUGAR</p>
        </div>
        
      </div>
      </>
 
  );
};

export default Home;

