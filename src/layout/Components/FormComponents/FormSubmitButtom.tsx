function FormSubmitButtom({handler}: {handler: () => void}) {
    return(
        <button
            className="text-officialRed text-center w-full md:w-[100px] my-[25px] p-[8px] border border-officialRed rounded-[8px] duration-300 hover:bg-[#ffe9eb] hover:border hover:border-officialRed h-[38px]"
            onClick={handler}
        >
            Submit
        </button>
    )
}

export default FormSubmitButtom;