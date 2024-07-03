
import { useContext } from 'react';
import ProductItem from './ProductItem';
import { GlobalContext } from '../theme/Global';
export default function ListProduct() {

    const {productList} = useContext(GlobalContext)
   
    


  return (
    <>
      <main className="my-3">
        <h3 className="text-center text-black font-semibold text-xl">
          Product List
        </h3>

        <div className="grid grid-cols-5 gap-4 p-3">
            {productList.map((product,key)=>
                 <ProductItem product={product} key={key} />
            )}
          
        </div>
      </main>
    </>
  );
}
