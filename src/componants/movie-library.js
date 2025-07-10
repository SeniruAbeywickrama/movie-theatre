import { useState } from "react";

function MovieLibrary() {
    const [movieSearch, setMovieSearch] = useState('');

    const [cardData, setCardData] = useState([
        {
            path: '/Assets/Images/Batman.jpg',
            name: 'Batman Returns',
            description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut…'
        },
        {
            path: '/Assets/Images/Wild West.jpg',
            name: 'Wild Wild West',
            description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut…'
        },
        {
            path: '/Assets/Images/Spiderman.jpg',
            name: 'The Amazing Spiderman',
            description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut…'
        },
    ]);

    const handleRemoveCard = (indexToRemove) => {
        setCardData(cardData.filter((_, index) => index !== indexToRemove));
    };

    const filteredCards = cardData.filter(card =>
        card.name.toLowerCase().includes(movieSearch.toLowerCase()) ||
        card.description.toLowerCase().includes(movieSearch.toLowerCase())
    );

    return (
        <section id="movies" className="min-h-screen bg-zinc-900">
            <br /><br /><br />

            {/* Header */}
            <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid:cols-1 gap-5 justify-items-center">
                {/* Title */}
                <div>
                    <h2 className="text-4xl font-normal text-white">Collect your favourites</h2>
                </div>

                {/* Search */}
                <div>
                    <form className="w-full flex justify-center">
                        <label htmlFor="default-search" className="sr-only">Search</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <img src="/Assets/Icons/Search White.svg" alt="Search" className="h-5 w-auto mr-3" />
                            </div>
                            <input
                                type="search"
                                id="default-search"
                                className="block w-full py-4 ps-10 text-lg text-gray-200 border border-gray-300 rounded-lg bg-zinc-800 focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Search title or description"
                                value={movieSearch}
                                onChange={(e) => setMovieSearch(e.target.value)}
                            />
                        </div>
                    </form>
                </div>
            </div>

            {/* Divider */}
            <hr className="border-t border-white-700 mt-2 mx-auto w-4/5 mb-3" />

            {/* Card Grid */}
            <div className="flex justify-between items-center px-5 py-5">
                <div className="container mx-auto grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-14 text-center">
                    {filteredCards.length > 0 ? (
                        filteredCards.map((card, index) => (
                            <div
                                key={index}
                                className="relative bg-zinc-700 shadow-lg text-left h-auto text-white overflow-y-auto min-h-full"
                            >
                                {/* Close Button */}
                                <button
                                    className="absolute top-3 right-3 z-10 bg-zinc-800 p-2 hover:bg-zinc-600 transition"
                                    onClick={() => handleRemoveCard(cardData.indexOf(card))}
                                >
                                    <img src="/Assets/Icons/Close White.svg" alt="Close" className="h-4 w-4" />
                                </button>

                                {/* Card Content */}
                                <img
                                    src={card.path}
                                    alt={card.name}
                                    className="h-3/4 w-full object-cover mb-4"
                                />
                                <h3 className="text-xl font-semibold mb-2 px-6">{card.name}</h3>
                                <p className="text-md md:text-sm px-6 text-justify">
                                    {card.description}
                                </p>
                            </div>
                        ))
                    ) : (
                        <p className="text-white col-span-full text-center text-lg">No movies found.</p>
                    )}
                </div>
            </div>
        </section>
    );
}

export default MovieLibrary;
