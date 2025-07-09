
function Footer() {
    return (
        <footer className="bg-zinc-800 text-white py-7 px-4">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="md:text-left text-center">
                    <p className="text-md font-normal">
                        Amadeus IT Group <br />
                        <span className="font-light text-sm">
                          C. Salvador de Madariaga, 1 <br />
                          28027 Madrid <br />
                          Spain
                        </span>
                    </p>
                </div>

                <div className="flex flex-col md:items-end items-center gap-3">
                    <p className="text-sm text-gray-400">Follow us on</p>
                    <div className="flex gap-4">
                        <img
                            src="/Assets/Icons/Twitter White.svg"
                            alt="Twitter"
                            className="h-5 w-5"
                        />
                        <img
                            src="/Assets/Icons/Youtube White.svg"
                            alt="YouTube"
                            className="h-5 w-5"
                        />
                    </div>
                </div>

            </div>

            <hr className="border-t border-white-700  mt-2 mx-auto w-full mb-3" />

            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center ">

                <div className="md:text-left text-center">
                    <p className="text-sm font-normal text-zinc-500">
                        Copyright © {new Date().getFullYear()} Amadeus Hotels. All rights reserved.
                    </p>
                </div>

                <div className="md:text-right text-center">
                    <p className="text-sm font-normal text-zinc-500">
                        Photos by Felix Mooneeram & Serge Kutuzov on Unsplash
                    </p>
                </div>

            </div>

        </footer>

    );
}

export default Footer;
