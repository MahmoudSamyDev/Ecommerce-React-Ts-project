import TextFieldInput from '../../layout/Components/FormComponents/TextFieldInput';
import { useState } from 'react';

function CommentsAndVoucher() {
    const [inputs, setInputs] = useState({
        voucher: '',
        comments: '',
    })

    function handleInputChanges(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        })
    }
    return (
        <section className='flex flex-col gap-[10px]'>
            <div className='flex gap-[8px] items-center'>
                <span className='text-black text-[16px]'>Additional Comments</span>
                <span className='text-officialRed bg-[#ffd3d3] h-[fit-content] text-[12px] px-[8px]'>Note</span>
            </div>
            <form className='flex flex-col gap-[25px]'>
                <label htmlFor="additionalComment" className="sr-only">Additional Comments</label>
                <textarea
                    id="additionalComment"
                    className='notes-text-input outline outline-[1px] outline-[#dbdbdb] w-full resize-none p-[10px] rounded-[8px] hover:outline-black'
                    name='comments'
                    style={{ height: '200px' }}
                    onChange={handleInputChanges}
                ></textarea>
                <TextFieldInput name='voucher' label='Voucher' handler={handleInputChanges}/>
                <button className="text-[red] text-center w-full p-[8px] border border-[red] rounded-[8px] duration-300 hover:bg-[#ffe9eb] hover:border hover:border-officialRed">Apply Voucher</button>
            </form>
        </section>
    )
}

export default CommentsAndVoucher