import React from 'react';
import Container from '../Container';
import Button from '../Button/button';
import ProductCard from './ProductCard';
import greekSalad from '../../assets/greek salad.jpg';
import brucheta from '../../assets/bruchetta.svg';
import lemenoDesert from '../../assets/desert.jpg';
import Swal from 'sweetalert2';
function FeaturedProducts(props) {
    const products = [
        {
            id: 1,
            imgUrl: greekSalad,
            title: 'Greek Salad',
            price: 12.99,
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore  Ut enim '
        },
        {
            id: 2,
            imgUrl: brucheta,
            title: 'Brucheta',
            price: 12.99,
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore  Ut enim '
        },
        {
            id: 3,
            imgUrl: lemenoDesert,
            title: 'Lemon Desert',
            price: 12.99,
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore  Ut enim '
        }
    ];

    const handleOrder = (id)=> {
        console.log(id, "id is clicked");
        Swal.fire({
            title: 'Are you sure?',
            text: "Lorem ipsum dolor sit amet",
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, order it!'
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                'Ordered!',
                'Your order has been processed.',
                'success'
              )
            }
          })
    }
  return (
    <div className='py-8 px-4 md:px-0 mt-8'>
        <Container>
            {/* Section Header */}
            <div className='w-full flex flex-col md:flex-row items-center justify-between'>
                <h1 className="text-4xl font-medium text-[#333] md:text-7xl">This Weeks Specials!</h1>
                <Button link="#">Online Menu</Button>
            </div>
        </Container>
        <Container className="!mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            {products.map((product, key) => (
                <ProductCard key={product.id}>
                    <div className='max-h-[200px] overflow-hidden'>
                        <img src={product.imgUrl} alt={product.title} className='w-full rounded-t-2xl ' />
                    </div>
                    <div className='p-4'>
                        <div className='flex flex-row justify-between items-center'>
                            <h3 className='text-2xl text-[#333]'>{product.title}</h3>
                            <span className='text-[#48742C]'>${product.price}</span>
                        </div>
                        <div className='w-full my-4'>
                            {product.desc}
                        </div>
                        <button role='button' className='text-lg font-medium' onClick={()=>handleOrder(product.id)}>Order a Delivery</button>
                    </div>
                </ProductCard>
            ))}
            
            
        </Container>
    </div>
  )
}

export default FeaturedProducts