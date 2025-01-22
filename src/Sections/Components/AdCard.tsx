import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';


function AdCard({imgSrc, title, disc, sale, color}: {imgSrc: string, title: string, disc: string, sale: string, color: string}) {
    return (
        <div className='w-full rounded-[14px] overflow-hidden relative'>
            <div className={`absolute top-[50%] transform translate-y-[-50%] left-[8%] text-${color}`}>
                <h3 className='hidden lg:block'>{title}</h3>
                <div className='my-[10px]'>
                    <p className='font-bold'>{disc}</p>
                    <span className='block'>{sale}</span>
                </div>
                <span className='cursor-pointer'>Shop Now <ArrowRightAltIcon /></span>
            </div>
            <div>
                <img src={imgSrc} alt='ad' className="w-full h-auto" />
            </div>
        </div>
    )
}

export default AdCard;