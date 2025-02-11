import TextFieldInput from '../../../layout/Components/FormComponents/TextFieldInput';
import FormSubmitButtom from '../../../layout/Components/FormComponents/FormSubmitButtom';
import { useState } from 'react';

function PayPalMethod() {
    const [paypalEmail, setPaypalEmail] = useState('');

    const handlePaypalEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPaypalEmail(e.target.value);
    }

    function handlePaypalSubmit() {
        console.log(paypalEmail);
    }
    return (
        <div className='flex justify-between gap-[10px] items-center flex-wrap'>
            <div className='w-full md:w-[85%]'>
                <TextFieldInput name='paypalEmail' label='Paypal Email' handler={handlePaypalEmailChange}/>
            </div>
            <FormSubmitButtom handler={handlePaypalSubmit} />
        </div>
    );
}

export default PayPalMethod;