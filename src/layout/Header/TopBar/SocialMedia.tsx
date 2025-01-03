import { Link } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';

function SocialMediaBox() {
    return (
        <div className="social-media-box flex items-center space-x-[8px] text-[12px]">
            <Link to='https://www.facebook.com/' target='_blank'>
                <FacebookIcon sx={{fontSize: '18px', cursor: 'pointer'}}/>
            </Link>
            <Link to='https://x.com/' target='_blank'>
                <XIcon sx={{fontSize: '18px', cursor: 'pointer'}}/>
            </Link>
            <Link to='https://www.instagram.com/' target='_blank'>
                <InstagramIcon sx={{fontSize: '18px', cursor: 'pointer'}}/>
            </Link>
        </div>
    )
}

export default SocialMediaBox;