import zone1 from '../../../public/assets/qZone1.png'
import zone2 from '../../../public/assets/qZone2.png'
import zone3 from '../../../public/assets/qZone3.png'
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";

const RightSideNav = () => {
    return (
        <div>
            <h1 className='text-xl font-bold'>Login With</h1>
             <div className='mt-3'>
             <button class="btn btn-outline btn-primary w-full"><span><FaGoogle></FaGoogle></span>Login With Google</button>
             <button class="btn btn-outline btn-primary w-full mt-2"><span><FaGithub></FaGithub></span>Login With GitHub</button>
             </div>


             <div>
             <h1 className='text-xl font-bold mt-4'>Find Us On</h1>

              <div className="mt-4 text-center">
              <h1 className="text-xl font-medium border rounded-t p-4 flex items-center gap-x-2"><span><FaFacebook></FaFacebook> </span>Facebook</h1>
              <h1 className="text-xl font-medium border-x  p-4 flex items-center gap-x-2"><span><FaTwitter></FaTwitter> </span>Twitter</h1>
              <h1 className="text-xl font-medium border rounded-b p-4 flex items-center gap-x-2"><span><FaInstagram></FaInstagram> </span>Instragram</h1>
              </div>

             </div>

             <div className='p-4 bg-slate-200 mt-5 rounded-lg mb-5'>
             <h1 className='text-3xl font-bold mt-4'>Q-Zone</h1>
                 <div className='space-y-5' >
                     <img src={zone1} alt="" />
                     <img src={zone2} alt="" />
                     <img src={zone3} alt="" />
                </div>
             </div>
        </div>

        
    );
};

export default RightSideNav;