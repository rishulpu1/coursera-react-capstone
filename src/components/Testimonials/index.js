import React from 'react';
import Container from '../Container';
import { HiStar } from "react-icons/hi";
import user1 from "../../assets/user1.png";
import user2 from "../../assets/user2.png";
import user3 from "../../assets/user3.png";
import user4 from "../../assets/user4.png";
function Testimonials() {
    const reviews = [
        {
            id: 1,
            rating: <><HiStar /><HiStar /><HiStar /><HiStar /></>,
            usrImg: user1,
            userName: 'Alison',
            comment: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor”'
        },
        {
            id: 2,
            rating: <><HiStar /><HiStar /><HiStar /><HiStar /><HiStar /></>,
            usrImg: user2,
            userName: 'John Doe',
            comment: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor”'
        },
        {
            id: 3,
            rating: <><HiStar /><HiStar /><HiStar /><HiStar /><HiStar /></>,
            usrImg: user3,
            userName: 'Olivia',
            comment: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor”'
        },
        {
            id: 4,
            rating: <><HiStar /><HiStar /><HiStar /><HiStar /><HiStar /></>,
            usrImg: user4,
            userName: 'Peter',
            comment: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor”'
        }
    ];
  return (
    <div className='bg-[#333] py-16 px-4 md:px-0'>
        <Container>
            <h2 className='text-center text-white text-6xl'>Testimonials</h2>
        </Container>
        <Container className="!mt-6 grid grid-cols-1 md:grid-cols-4 gap-4">
            {reviews.map((review, key) => (
                <div key={review.id} className='bg-white p-4'>
                    <div className='mb-2 flex text-[#FBBC04]'>
                        {review.rating}
                    </div>
                    <div className='flex flex-row items-center gap-2 mb-4'>
                        <img src={review.usrImg} alt={review.userName} />
                        <span className='text-lg font-medium'>{review.userName}</span>
                    </div>
                    <div>
                        {review.comment}
                    </div>
                </div>
            ))}
        </Container>
    </div>
  )
}

export default Testimonials