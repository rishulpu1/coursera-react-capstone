import React, { useState, useEffect } from 'react'
import Container from '../Container';
function BookingForm(props) {
    const [date, setDate] = useState("");
    const [times, setTimes] = useState("");
    const [guests, setGuests] = useState("");
    const [occasion, setOccasion] = useState("");
    const [isValid, setIsValid] = useState(false);

    const validate = () => {
        return date.length && times.length;
    }

    useEffect(()=>{
        const isValid = validate();
        setIsValid(isValid);
    },[date, times])

    const handleSubmit = (e) => {
        e.preventDefault();
        props.submitForm(e);
    }
    const handleChange = (e) => {
        setDate(e);
        props.dispatch(e);
    }
  return (
    <header>
        <section>
            <Container>
                <form onSubmit={handleSubmit} className='bg-gray-400 mt-8 p-8 max-w-[400px] mx-auto md:rounded-xl shadow-xl'>
                    <fieldset>
                        <div className='mb-4'>
                            <label htmlFor='book-date' className='font-medium'>Choose Date:</label>
                            <input id='book-date' className='w-full p-2 rounded-md' value={date} onChange={(e) => handleChange(e.target.value)} type='date' required />
                        </div>
                        {/* Choose Time */}
                        <div className='mb-4'>
                            <label htmlFor='book-time' className='font-medium'>Choose Time:</label>
                            <select id='book-time' className='w-full p-2 rounded-md' value={times} onChange={(e) => setTimes(e.target.value)} required>
                                <option value=''>Select a Time</option>
                                {
                                    props.availableTimes.availableTimes.map(availTimes => {return <option key={availTimes}>{availTimes}</option>})
                                }
                            </select>
                        </div>

                        {/* Select No of Guests */}
                        <div className='mb-4'>
                            <label htmlFor='book-guests' className='font-medium'>Number of Guests:</label>
                            <input type='number' className='w-full p-2 rounded-md' id='book-guests' min="1" value={guests} onChange={(e) => setGuests(e.target.value)} required /> 
                        </div>

                        {/* Select Occasion */}
                        <div className='mb-4'>
                            <label htmlFor='book-occasion' className='font-medium'>Occasion:</label>
                            <select id='book-occasion' className='w-full p-2 rounded-md' key={occasion} value={occasion} onChange={(e) => setOccasion(e.target.value)}>
                                <option>Birthday</option>
                                <option>Anniversary</option>
                            </select>
                        </div>

                        {/* Submit */}
                        <div className='text-center'>
                            <button aria-label='on click' className="bg-[#F4CE14] text-[#333] rounded-[16px] px-6 py-2 inline-block mt-4 font-medium text-lg cursor-pointer disabled:bg-gray-500 disabled:cursor-not-allowed" type='submit' disabled = {!isValid}>Make Your Reservation</button>
                        </div>
                    </fieldset>
                </form>
            </Container>
        </section>
    </header>
  )
}

export default BookingForm