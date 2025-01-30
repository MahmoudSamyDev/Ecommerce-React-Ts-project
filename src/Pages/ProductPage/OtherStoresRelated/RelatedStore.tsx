interface StoreObject{
    id: number
    name: string
    image: string
}

function RelatedStore({store}: {store: StoreObject}) {
    return(
        <div className='related-store w-full md:w-[200px] bg-white rounded-[12px] gap-[10px] cursor-pointer'>
            <div className='personnel-img w-[55px] h-[50px] rounded-[10px] bg-[#dadada] overflow-hidden mx-auto mt-[30px] mb-[20px]'>
                <img src={store.image} alt='avatar' className='w-[50px] h-[50px] mx-auto'/>
            </div>
            <h1 className='text-[15px] font-bold mt-[10px] text-center block w-full h-[50px]'>{store.name}</h1>
        </div>
    )
}

export default RelatedStore;