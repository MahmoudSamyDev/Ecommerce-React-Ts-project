function LinkBox({obj}: {obj: {title: string, items: string[]}}) {
    return(
        <section className="link-box w-full md:w-[20%] h-[200px] text-left">
            <h2 className='text-white text-[20px] font-bold'>{obj.title}</h2>
            <ul>
            {
                obj.items.map((item, index) => {
                    return(
                        <li key={index} className='text-[grey] hover:text-white my-[5px]'>
                            <a href="#">{item}</a>
                        </li>
                    )
                })
            }
            </ul>
        </section>
    )
}

export default LinkBox;