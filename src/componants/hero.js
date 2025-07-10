function Hero() {
    return (
        <>
            <section id="home" className="h-screen bg-black flex items-center justify-center">
                <div className="w-full h-full">
                    <video
                        className="w-full h-full object-cover"
                        autoPlay
                        loop
                        muted
                        playsInline
                    >
                        <source src="/Assets/Videos/Header Video Cropped.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </section>

            {/* Text below video */}
            <section className="bg-black text-white text-left p-8">
                <h2 className="text-[55px] font-light mb-4">MOVIE LIBRARY</h2>
                <p className="mx-auto text-2xl text-sky-800">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                    sed diam nonumy eirmod tempor invidunt ut labore et
                    dolore magna aliquyam erat, sed diam voluptua.
                </p>
            </section>
        </>
    );
}

export default Hero;
