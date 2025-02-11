import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import { useState } from 'react';
import CreditCardMethod from './CreditCardMethod';
import PayPalMethod from './PayPalMethod';
import RadioInput from '../../../layout/Components/FormComponents/RadioInput';

function PaymentMethods() {
    const [paymentMethod, setPaymentMethod] = useState({
        creditCard: false,
        paypal: false,
        cod: false
    });

    function handlePaymentMethodChange(event: React.ChangeEvent<HTMLInputElement>) {
        const { name } = event.target;
        setPaymentMethod({
            creditCard: name === 'creditCard',
            paypal: name === 'paypal',
            cod: name === 'cod'
        });
    }

    return (
        <div className='shipping-details w-full bg-white rounded-[14px] shadow p-[18px]'>
            <FormControl sx={{ width: '100%' }} component="fieldset">
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    name="radio-buttons-group"
                    onChange={handlePaymentMethodChange}
                >
                    <RadioInput checkedMethod={paymentMethod.creditCard} name='creditCard' label='Pay with credit card' />
                    {paymentMethod.creditCard && <CreditCardMethod />}
                    <RadioInput checkedMethod={paymentMethod.paypal} name='paypal' label='Pay with Paypal' />
                    {paymentMethod.paypal && <PayPalMethod />}
                    <RadioInput checkedMethod={paymentMethod.cod} name='cod' label='Cash On Delivery' />
                </RadioGroup>
            </FormControl>
        </div>
    );
}

export default PaymentMethods;