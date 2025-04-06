import React from 'react'
import DiscountedMedicines from './DiscountedMedicines';
import ExtendedDiscountedMedicines from './ExtendedDiscountedMedicines';

export default function AllDiscountedMedicines({ handleAddToCart, handleOrder }) {
   return (
      <>
         <DiscountedMedicines handleAddToCart={handleAddToCart}
            handleOrder={handleOrder} />
         <ExtendedDiscountedMedicines
            handleAddToCart={handleAddToCart}
            handleOrder={handleOrder}
            myNum={0}
         />
         <ExtendedDiscountedMedicines
            handleAddToCart={handleAddToCart}
            handleOrder={handleOrder}
            myNum={1}
         />
         <ExtendedDiscountedMedicines
            handleAddToCart={handleAddToCart}
            handleOrder={handleOrder}
            myNum={2}
         />
         <ExtendedDiscountedMedicines
            handleAddToCart={handleAddToCart}
            handleOrder={handleOrder}
            myNum={3}
         />
      </>
   );
}
