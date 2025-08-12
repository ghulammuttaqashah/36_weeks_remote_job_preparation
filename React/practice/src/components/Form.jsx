
import { useEffect, useRef } from "react";
function Form() {
    
    const input=useRef('');

    useEffect(()=>{
        input.current.focus();
    },[])

    return(
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
            <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
            <form  className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
                <div className="flex flex-col gap-4 mb-4">
                    <input
                        type="text"
                        ref={input}
                        
                        placeholder="Your Name"
                        className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    />
                    <input
                        type="email"
                        

                        placeholder="Your Email"
                        className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    />
                    <textarea
                        
    
                        placeholder="Your Message"
                        className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400 h-32 resize-none"
                    />
                </div>
                
                
            </form>
            
        </div>
    );
}
export default Form;