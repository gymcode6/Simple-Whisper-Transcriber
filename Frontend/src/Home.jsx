

const Home = () => {

  return (
      <div className='flex flex-col w-3/6 items-center h-full '>
      <section className='flex h-full '>
        <div className='flex flex-col items-center h-full w-full bg-indigo-900/70 border border-white/10 shadow-2xl p-14 rounded-xl   '>
        <span className='absolute -z-50 shadow-[0_0_1000px_50px_rgba(137,74,255,1)] top-44 left-36'></span>
          <h1 className=' mb-16 font-bold bg-gradient-to-br from-fuchsia-600 to-blue-500 to-50%  bg-clip-text text-transparent text-7xl m-5'>WTranscriber</h1>
          <p className='font-semibold bg-white  bg-clip-text text-transparent text-2xl text-justify px-5'>
          Transcribe en segundos, con presicion extrema. Sube tu archivo de audio o video (flac, mp3, mp4, mpeg, mpga, m4a, ogg, wav, o webm) y obtén una transcripción precisa en segundos.
          </p>
        </div>
      </section>
    </div>
  )
}

export default Home