import playStore from '../../assets/footer/playstore.png';
import appStore from '../../assets/footer/appStore.png';

function FooterDescSection() {
    return (
        <section className='site-desc w-full md:w-[30%] h-[200px] flex flex-col justify-between items-start gap-4 py-[20px] md:p-0 mb-[40px] md:m-0'>
            <div className="logo text-white text-xl font-bold font-playWrite text-left">
                React E-commerce <br /> Template
            </div>
            <div className="desc text-left text-[grey] text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor libero id et, in gravida. Sit diam duis mauris nulla cursus. Erat et lectus vel ut sollicitudin elit at amet.
            </div>
            <div className="apps w-[70%] flex justify-between items-center gap-4">
                <div className='playstore w-[170px] h-[45px] rounded-[10px] overflow-hidden cursor-pointer'>
                    <img src={playStore} alt='playstore' className='w-full h-full'/>
                </div>
                <div className='appStore w-[170px] h-[45px] rounded-[10px] overflow-hidden cursor-pointer'>
                    <img src={appStore} alt='appStore' className='w-full h-full'/>
                </div>
            </div>
        </section>
    );
}

export default FooterDescSection;