import MedicineCard from "./MedicineCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function Medicine({medicines, handleAddToCart, handleOrder }) {
   return (
      <div className="w-9/10 grid grid-cols-1 lg:grid-cols-3 gap-4 mx-auto">
         {medicines.map((medicine) => {
            const { name, price, imageUrl, description, inStock,id } = medicine;
            return (
               <MedicineCard
                  key={id}
                  id={id}
                  name={name}
                  price={price}
                  imageUrl={imageUrl}
                  description={description}
                  availability={inStock}
                  onAddToCart={(event) => handleAddToCart(medicine, event)}
                  onOrder={() => handleOrder("buyNow",medicine)}
               />
            );
         })}
      </div>
   );
}

export default Medicine;
