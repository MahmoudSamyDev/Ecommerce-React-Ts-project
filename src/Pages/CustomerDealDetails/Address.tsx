import TextFieldInput from './TextFieldInput';
import BasicSelection from '../Components/BasicSelection';
import { useState } from 'react';
import { CountriesList } from '../../utilities/data';
import Checkbox from '@mui/material/Checkbox';


function Address({header}: {header: string}) {
    const showCheckbox = header === 'Billing' ? true : false;
    const [shippingDetails, setShippingDetails] = useState({
        fullName: '',
        email: '',
        phone: '',
        company: '',
        addressOne: '',
        addressTwo: '',
        zipCode: '',
        country: '',
    });

    const handleShippingDetails = (e: React.ChangeEvent<HTMLInputElement>) => {
        setShippingDetails({
            ...shippingDetails,
            [e.target.name]: e.target.value,
        });
    }

    const [sameAsShipping, setSameAsShipping] = useState(false);

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSameAsShipping(e.target.checked);
    }
    return(
        <div className='shipping-details w-full bg-white rounded-[14px] shadow p-[18px]'>
            <header>{header} Address</header>
            {showCheckbox && 
            (
                <div className='flex items-center gap-[10px]'>
                    <Checkbox checked={sameAsShipping} onChange={handleCheckboxChange} />
                    <p>Same as shipping address</p>
                </div>
            )}
            {
                !sameAsShipping && (
                    <section className='shipping-details-form grid grid-cols-1 md:grid-cols-2 gap-[15px] mt-[20px]'>
                        <TextFieldInput name='fullName' label='Full Name' handler={handleShippingDetails}/>
                        <TextFieldInput name='phone' label='Phone Number' handler={handleShippingDetails}/>
                        <TextFieldInput name='email' label='Email Address' handler={handleShippingDetails}/>
                        <TextFieldInput name='company' label='Companey' handler={handleShippingDetails}/>
                        <TextFieldInput name='addressOne' label='Address 1' handler={handleShippingDetails}/>
                        <TextFieldInput name='addressTwo' label='Address 2' handler={handleShippingDetails}/>
                        <BasicSelection list={CountriesList} label='Country'/>
                        <TextFieldInput name='zipCode' label='Zip Code' handler={handleShippingDetails}/>
                    </section>
                )
            }
        </div>
    )
}

export default Address;