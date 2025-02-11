import TextFieldInput from '../../../layout/Components/FormComponents/TextFieldInput';
import FormSubmitButtom from '../../../layout/Components/FormComponents/FormSubmitButtom';
import { useState } from 'react'; 

function CreditCardMethod() {
    const [cardDetails, setCardDetails] = useState({
        CardNumber: '',
        ExpirationDate: '',
        NameOnCard: '',
        cvc: '',
    });

    const handleCardDetails = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCardDetails({
            ...cardDetails,
            [e.target.name]: e.target.value,
        });
    }

    function SubmitPaymment() {
        console.log(cardDetails);
    }
    return (
        <>
            <section className='credit-card-form w-full grid grid-cols-1 md:grid-cols-2 gap-[15px] mt-[20px]'>
                <TextFieldInput name='CardNumber' label='Card Number' handler={handleCardDetails}/>
                <TextFieldInput name='ExpirationDate' label='Exp Date' handler={handleCardDetails}/>
                <TextFieldInput name='NameOnCard' label='Name On Card' handler={handleCardDetails}/>
                <TextFieldInput name='cvc' label='cvc' handler={handleCardDetails}/>
            </section>
            <FormSubmitButtom handler={SubmitPaymment} />
        </>
    );
}

export default CreditCardMethod;