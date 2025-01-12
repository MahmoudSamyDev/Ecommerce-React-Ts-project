import ContainerWrapper from "../Components/ContainerWrapper";
import FooterDescSection from "./FooterDescSection";
import LinkBox from './LinksBox';
import FooterContactUs from './FooterContactUs';

const links = {
    AboutUs: {
        title: 'About Us',
        items: [
            'Career',
            'Our Store',
            'Our Career',
            'Terms and Conditions',
            'Privacy Policy'
        ]
    },
    CustomerCare: {
        title: 'Customer Care',
        items: [
            'Help Center',
            'Track Your Order',
            'Cooperate With Us',
            'Returns & Refunds',
        ]
    },
}

function Footer() {
    return (
        <footer className='w-full bg-darkBlue min-h-[350px] max-h-[fit-content] content-center'>
            <ContainerWrapper>
                <div className="w-full flex flex-col md:flex-row justify-between items-center gap-6">
                    <FooterDescSection />
                    <LinkBox obj={links.AboutUs}/>
                    <LinkBox obj={links.CustomerCare}/>
                    <FooterContactUs />
                </div>
            </ContainerWrapper>
        </footer>
    );
}


export default Footer;