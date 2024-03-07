import React, { useState } from 'react'
import { toast } from 'react-toastify';
import {v4 as uuidv4} from 'uuid';
import Dropdown from '../Button/ComponentDown';

function AddCompany() {

  const [formData, setFormData] = useState({
    type : "intern",
    name :"",
    address :"",
    description : "",
    regularPrice : 0,
})

const [Btech , setBtech] = useState(false);
const [Mtech , setMtech] = useState(false);
const [Mca , setMca] = useState(false);



const {type,name, address,offer, description,regularPrice } = formData;

function onChange(e){
 
    let boolean = null;
    if(e.target.value === "true"){
        boolean = true;
    }
    if(e.target.value === "false"){
        boolean = false;
    }
  
    //text/boolean/number
    if(!e.target.files){setFormData((prevState) =>({
        ...prevState,
        [e.target.id] : boolean ?? e.target.value, //if boolean null then five e.target.value else store boolean's value
    }))}


}
async function onSubmit(e){
    e.preventDefault();
    
   console.log(formData);
    


}
  return (
    <main className='w-screen max-w-md px-2 mx-auto padding-y'>
        <h1 className='text-3xl text-center mt-6 font-bold'
        >Add New Company</h1>
        <form onSubmit={onSubmit}>
             <p className='text-lg font-semibold mt-6'>Placement / Intern</p>
             <div className='flex'>
                <button type='button' id='type' value="placement"
                onClick={onChange}
                className={`mr-3 px-7 py-3 font-medium text-sm uppercase
                shadow-md rounded hover: shadow-lg focus:shadow-lg active: shadow-lg
                transition duration-150 ease-in-out w-full ${
                    type === "intern" ? "bg-neutral-50  text-black": "text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600"
                }`}
                >
                    placement
                </button>
                <button type='button' id='type' value="intern"
                onClick={onChange}
                className={`ml-3 px-7 py-3 font-medium text-sm uppercase
                shadow-md rounded hover: shadow-lg focus:shadow-lg active: shadow-lg
                transition duration-150 ease-in-out w-full ${
                    type === "placement" ? "bg-neutral-50  text-black": "text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600"
                }`}
                >
                    intern
                </button>

             </div>
             <p className='text-lg font-semibold mt-6'>Company Name</p>
             <input 
             type="text" 
             id='name'
             value={name} 
             onChange={onChange}
             required placeholder='Name' maxLength="32" minLength="2" 
             className='w-full px-4 py-2 text-xl text-gray-700
             bg-white border border-gray-300 rounded transition duration-150
             ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 '
             />
            

             <p className='text-lg font-semibold mt-6'>Degree</p>
             <div className='flex space-x-2'>
                <button type='button' id='Btech' value={Btech}
                onClick={()=> setBtech(!Btech)}
                className={`mr-3 px-7 py-3 font-medium text-sm uppercase
                shadow-md rounded hover: shadow-lg focus:shadow-lg active: shadow-lg
                transition duration-150 ease-in-out w-full ${
                    !Btech ? "bg-neutral-50  text-black": "text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600"
                }`}
                >
                    B.Tech
                </button>
                <button type='button' id='Mtech' value={Mtech}
                 onClick={()=> setMtech(!Mtech)}
                className={`ml-3 px-7 py-3 font-medium text-sm uppercase
                shadow-md rounded hover: shadow-lg focus:shadow-lg active: shadow-lg
                transition duration-150 ease-in-out w-full ${
                    !Mtech ? "bg-neutral-50  text-black": "text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600"
                }`}
                >
                    M.Tech
                </button>
                <button type='button' id='Mca' value={Mca}
                 onClick={()=> setMca(!Mca)}
                className={`mr-3 px-7 py-3 font-medium text-sm uppercase
                shadow-md rounded hover: shadow-lg focus:shadow-lg active: shadow-lg
                transition duration-150 ease-in-out w-full ${
                    !Mca ? "bg-neutral-50  text-black": "text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600"
                }`}
                >
                    MCA
                </button>

             </div>
          
             

             <p className='text-lg font-semibold mt-6'>Address</p>
             <textarea 
             type="text" 
             id='address'
             value={address} 
             onChange={onChange}
             required
              placeholder='Address' 
             className='w-full px-4 py-2 text-xl text-gray-700
             bg-white border border-gray-300 rounded transition duration-150
             ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 '
             />

             <p className='text-lg font-semibold '>Description</p>
             <textarea 
             type="text" 
             id='description'
             value={description} 
             onChange={onChange}
             required
              placeholder='Description' 
             className='w-full px-4 py-2 text-xl text-gray-700
             bg-white border border-gray-300 rounded transition duration-150
             ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 '
             />

            <div className='flex items-center mb-6'>
               <div >
               <p className='text-lg font-semibold'>Stipend/Salary</p>
                 <div className=' w-full flex items-center justify-center space-x-6' >
                 
                   <input type="number" id='regularPrice' value={regularPrice} required
                   max="10000000000" min="200" 
                   onChange={onChange}
                   className='w-full px-4 py-2 text-xl text-gray-700
                   bg-white border border-gray-300 rounded transition duration-150
                   ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600  '/> 
                    {type === "intern" && <div>
                    <p className='w-full text-md whitespace-nowrap font-semibold'> ₹ / Month</p>
                    </div>}                
                </div>
                
               </div>
            </div>
                {/* conditional */}
            {offer && (
                <div className='flex items-center mb-6'>
                <div >
                <p className='text-lg font-semibold'>Discounted Price</p>
                  <div className=' w-full flex items-center justify-center space-x-6' >
                  
                    <input type="number" id='discountedPrice' value={discountedPrice} required={offer}
                    max="10000000000" min="200" 
                    onChange={onChange}
                    className='w-full px-4 py-2 text-xl text-gray-700
                    bg-white border border-gray-300 rounded transition duration-150
                    ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600  '/> 
                     {type === "intern" && <div>
                     <p className='w-full text-md whitespace-nowrap font-semibold'> ₹ / Month</p>
                     </div>}                
                 </div>
                 
                </div>
             </div>
            )}
            <button type='submit'
        className=' mb-6 w-full text-white uppercase text-sm font-medium bg-gradient-to-r from-gray-500 via-gray-600 to-gray-700 hover:bg-gradient-to-br focus:ring-2 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 active : bg-blue-800'>
          Add   
        </button>
        </form>
    </main>
  )
}

export default AddCompany
