import ContainerWrapper from "../Components/ContainerWrapper";


function Footer() {
    return (
        <footer className='w-full bg-darkBlue min-h-[350px] max-h-[fit-content] content-center'>
            <ContainerWrapper>
                <div className="w-[100%] flex flex-col md:flex-row justify-between items-center gap-6 bg-[green]">
                    <section className='bg-[red] w-full h-[300px]'>Description</section>
                    <section className='bg-[red] w-full h-[300px]'>Description</section>
                    <section className='bg-[red] w-full h-[300px]'>Description</section>
                    <section className='bg-[red] w-full h-[300px]'>Description</section>
                </div>
            </ContainerWrapper>
        </footer>
    );
}

export default Footer;