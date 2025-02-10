import TextField from '@mui/material/TextField';


function CommentsAndVoucher() {
    return (
        <section className='flex flex-col gap-[10px]'>
            <div className='flex gap-[8px] items-center'>
                <span className='text-black text-[16px]'>Additional Comments</span>
                <span className='text-officialRed bg-[#ffd3d3] h-[fit-content] text-[12px] px-[8px]'>Note</span>
            </div>
            <form>
                <label htmlFor="additionalComment" className="sr-only">Additional Comments</label>
                <textarea id="additionalComment" className='notes-text-input outline outline-[1px] outline-[#dbdbdb] w-full resize-none p-[10px] rounded-[8px] hover:outline-black' style={{ height: '200px' }}></textarea>
                <TextField 
                    id="outlined-basic" 
                    label="Voucher" 
                    variant="outlined" 
                    sx={{ 
                        width: "100%", 
                        borderRadius: '8px',
                        margin: '20px 0',
                        '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                                borderColor: 'grey',
                            },
                            '&:hover fieldset': {
                                borderColor: 'black',
                            },
                            '&.Mui-focused fieldset': {
                                borderColor: '#c50f1e',
                            },
                        },
                        '& .MuiInputLabel-root': {
                            color: 'grey',
                        },
                        '& .MuiInputLabel-root.Mui-focused': {
                            color: '#c50f1e',
                        },
                    }}
                />
                <button className="text-[red] text-center w-full p-[8px] border border-[red] rounded-[8px] duration-300 hover:bg-[#ffe9eb] hover:border hover:border-officialRed">Apply Voucher</button>
            </form>
        </section>
    )
}

export default CommentsAndVoucher