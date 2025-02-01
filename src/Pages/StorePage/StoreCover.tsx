import StoreCoverImg from '../../assets/Store/StoreCoverImg.png';
import StoreProfile from '../../assets/Store/StoreProfile.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';

function StoreCover() {
    return (
        <div className="store-cover relative bg-white h-[70vh] md:h-[50vh] lg:h-[40vh] my-auto rounded-[14px] shadow mb-[25px]">
            {/* Store Profile Section */}
            <div className='store-profile-image absolute bg-white w-[70px] h-[70px] md:w-[70lg] md:h-[70px] lg:w-[120px] lg:h-[120px] rounded-[50%] md:rounded-[14px] top-[75%] left-[50%] translate-x-[-50%] md:translate-x-0 md:top-[60%] md:left-[2%] lg:left-[5%] transform md:translate-y-[-20%] outline outline-[grey]'>
                <img src={StoreProfile} alt="Store Profile" className='w-full h-full object-cover rounded-[14px]' />
            </div>
            {/* Image Section */}
            <div 
                className="store-cover-image h-[60%] md:h-[70%] w-full bg-cover bg-center bg-no-repeat rounded-t-[14px]"
                style={{ backgroundImage: `url(${StoreCoverImg})` }}
            >
            </div>

            {/* Info Section */}
            <div className='store-cover-info w-full h-[40%] md:h-[30%] bg-white rounded-b-[14px] p-[15px]'>
                <div className='store-cover-info-content h-full w-full md:w-[85%] ml-0 md:ml-[15%] flex flex-col md:flex-row justify-between items-center pr-[25px]'>
                    {/* Contact Info */}
                    <div className='contact-info text-left my-[10px] md:my-0'>
                        <span className='store-location block text-[12px] text-[grey] mb-[10px]'>
                            <FontAwesomeIcon icon={faLocationDot} className="mr-[10px]" />
                            845 N. Stonybrook Ave. Tonawanda, NY 14210, Denmark
                        </span>
                        <span className='store-phone block text-[12px] text-[grey]'>
                            <FontAwesomeIcon icon={faPhone} className="mr-[10px]" />
                            (613) 343-9004
                        </span>
                    </div>

                    {/* Contact Vendor Button */}
                    <div className='contact-vendor flex items-center justify-center'>
                        <button className='contact-vendor-btn text-[14px] md:text-[18px] bg-white border border-officialRed text-officialRed rounded-[5px] px-[10px] py-[5px] hover:bg-officialRed hover:text-white transition-colors duration-300'>
                            Contact Vendor
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StoreCover;