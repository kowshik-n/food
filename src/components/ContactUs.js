const Contact =()=>{
    const submit =(e)=>{
        e.prevent.default();
        alert("thank you for connecting with us 😊🤝")
    }
    return(
        <div className="container mx-auto my-6 px-4 py-8 w-[500px]  border  rounded-2xl shadow-2xl">
        <h1 className="text-3xl font-semibold text-center mb-6">Contact Us</h1>
        <p className="pb-4 ml-[80px]">we are Glad hear feedback from your side 😊</p>
        <form action="#"  id="contactForm" method="POST" className="max-w-md mx-10   p-8 w-[90%] ">
            <div className="mb-4">
                <label for="name" className="block text-gray-700 font-semibold">Name</label>
                <input type="text" id="name" name="name" placeholder="Your Name" className="form-input mt-3 block w-full rounded-md pl-2 border border-gray-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200"/>
            </div>
            <div className="mb-4">
                <label for="email" className="block text-gray-700 font-semibold">Email</label>
                <input type="email" id="email" name="email" placeholder="Your Email" className="form-input mt-1 block w-full pl-2 rounded-md border border-gray-600  shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200"/>
            </div>
            <div className="mb-6">
                <label for="message" className="block text-gray-700 font-semibold">Message</label>
                <textarea id="message" name="message" rows="5" placeholder="Your Message" className="form-textarea mt-1 block w-full rounded-md pl-2 border border-gray-600  shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200"></textarea>
            </div>
            <div className="flex justify-center">
                <button type="submit" className="bg-green-500 text-black font-semibold px-4 py-2 rounded-md hover:bg-yellow-300 focus:outline-none focus:ring focus:ring-blue-200 hover:text-white" onSubmit={submit}>Submit</button>
          
            </div>

        </form>
     
    </div>
    )
}
export default Contact;