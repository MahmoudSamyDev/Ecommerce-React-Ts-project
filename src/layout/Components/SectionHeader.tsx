import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

function SectionHeader({title, nav}: {title: string, nav: string}) {
    return (
        <div className='section-header w-full flex justify-between items-center'>
            <span className='header-title text-[20px]'>{title}</span>
            <span className='header-title text-[15px] cursor-pointer duration-[0.3s] hover:font-bold'>{nav} <ArrowRightAltIcon /></span>
        </div>
    )
}

export default SectionHeader