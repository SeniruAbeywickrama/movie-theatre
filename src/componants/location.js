import MapSection from "./map-section";
import DetailsForm from "./details-form";

function Location() {
    return (
        <section id="location" className="min-h-screen bg-black flex justify-start items-center px-5 py-5">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-14">
                <div className="">
                    <h2 className="text-3xl font-normal text-white">How to reach us</h2>
                    <p className="text-md font-normal text-gray-400 mb-10"> Lorem ipsum dolor sit amet, consetetur.</p>
                    <DetailsForm/>
                </div>

                <div className="h-5/6 flex items-center">
                    <MapSection/>
                </div>
            </div>
        </section>
    );
}

export default Location;
