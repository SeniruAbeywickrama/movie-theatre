function MovieLibrary() {
    const cards = [
        {
            path : '/Assets/Images/Batman.jpg',
            name : 'Batman Returns',
            description : 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut…'
        },
        {
            path : '/Assets/Images/Wild West.jpg',
            name : 'Wild Wild West',
            description : 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut…'
        },
        {
            path : '/Assets/Images/Spiderman.jpg',
            name : 'The Amazing Spiderman',
            description : 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut…'
        },
    ];

    return (
        <section id="movies" className="min-h-screen bg-zinc-800">
            <br/>
            <br/>
            <br/>
            <div className="flex justify-between items-center px-5 py-5">
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 text-center">
                    {/* Item 1 */}
                    <div>
                        <h2 className="text-4xl font-normal text-white sm:text-green">Collect your favourites</h2>
                    </div>

                    {/* Item 2 */}
                    <div>
                        <form className="w-full mx-auto flex justify-center">
                            <label htmlFor="default-search"
                                   className="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                    <img
                                        src="/Assets/Icons/Search White.svg"
                                        alt="Logo"
                                        className="h-5 w-auto mr-3"
                                    />
                                </div>
                                <input type="search" id="default-search"
                                       className="block w-full py-4 ps-10 text-lg text-gray-200 border border-gray-300 rounded-lg bg-zinc-800 focus:ring-blue-500 focus:border-blue-500"
                                       placeholder="Search title and add to the grip" required/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <hr className="border-t border-white-700  mt-2 mx-auto w-3/4 mb-3" />
            <div className="flex justify-between items-center px-5 py-5">
                <div className="container mx-auto grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-14 text-center">
                    {cards.map((card, index) => (
                        <div key={index} className="relative bg-zinc-700 shadow-lg text-left h-auto text-white overflow-y-auto min-h-full">
                            <button className="absolute top-3 right-3 z-10 bg-zinc-800 p-2 hover:bg-zinc-600 transition">
                                <img src="/Assets/Icons/Close White.svg" alt="Close" className="h-4 w-4"/>
                            </button>
                            <img
                                src={card.path}
                                alt={`Card ${index + 1}`}
                                className="h-3/4 w-full object-cover mb-4"
                            />
                            <h3 className="text-xl font-semibold mb-2 px-6">{card.name}</h3>
                            <p className="text-md md:text-sm px-6 text-justify">
                                {card.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default MovieLibrary;
