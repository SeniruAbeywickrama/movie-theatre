import {useState} from "react";

const DetailsForm = () => {

    const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [email, setEmail] = useState(null);
    const [telephone, setTelephone] = useState(null);
    const [message, setMessage] = useState(null);

    function handleSubmit() {
        if(firstName === null || lastName === null || email === null){
            alert("Fill the required fields to continue.")
        }else {
            alert(
                `Submitted Values:\n\n` +
                `First Name: ${firstName}\n` +
                `Last Name: ${lastName}\n` +
                `Email: ${email}\n` +
                `Telephone: ${telephone === null ? "" : telephone}\n` +
                `Message: ${message === null ? "" : message}`
            );
        }
    }

    return (
        <div>
            <form className="max-w-md text-left">
                <div className="grid grid-cols-2 gap-3">
                    <div className="mb-5">
                        <label htmlFor="firstName"
                               className="block mb-2 text-sm font-medium text-gray-400">First Name *</label>
                        <input type="text" id="firstName"
                               className="shadow-xs bg-zinc-700 border text-white text-sm rounded-sm  block w-full p-2.5"
                               placeholder="" required onChange={(e) => setFirstName(e.target.value)}/>
                    </div>
                    <div className="mb-5">
                        <label htmlFor="lastName"
                               className="block mb-2 text-sm font-medium text-gray-400">Last Name *</label>
                        <input type="text" id="lastName"
                               className="shadow-xs bg-zinc-700 border text-white text-sm rounded-sm block w-full p-2.5"
                               placeholder="" required onChange={(e) => setLastName(e.target.value)}/>
                    </div>
                </div>
                <div className="mb-5">
                    <label htmlFor="email"
                           className="block mb-2 text-sm font-medium text-gray-400">Email *</label>
                    <input type="email" id="email"
                           className="shadow-xs bg-zinc-700 border text-white text-sm rounded-sm block w-full p-2.5"
                           placeholder="" required onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className="mb-5">
                    <label htmlFor="phone"
                           className="block mb-2 text-sm font-medium text-gray-400">Telephone</label>
                    <input type="tel" id="phone"
                           className="shadow-xs bg-zinc-700 border text-white text-sm rounded-sm block w-full p-2.5"
                           placeholder="" onChange={(e) => setTelephone(e.target.value)}/>
                </div>
                <div className="mb-2">
                    <label htmlFor="message"
                           className="block mb-2 text-sm font-medium text-gray-400">Message</label>
                    <textarea id="message" rows="4" onChange={(e) => setMessage(e.target.value)}
                              className="block p-2.5 w-full text-sm text-white bg-zinc-700 rounded-sm border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>
                <p className="text-md font-normal text-gray-400 mb-5"> * required fields</p>

                <div className="flex items-center mb-4">
                    <input checked id="checkbox-1" type="checkbox" value=""
                           className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500" />
                    <label htmlFor="checkbox-1"
                           className="ms-2 text-sm font-medium text-gray-600">I agree to
                        the <a href="#" className="text-white underline">Terms
                            and Conditions</a>.
                    </label>

                </div>
                <div className="text-right">
                    <button type="submit" onClick={handleSubmit} className="text-white bg-yellow-600 hover:bg-yellow-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-sm text-sm px-14 py-2.5 text-center">SUBMIT</button>
                </div>
            </form>
        </div>
    );
};

export default DetailsForm;
