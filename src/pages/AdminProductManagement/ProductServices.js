
export const mapProductResponsesToTable = async (fetchedProducts) => {
    const products = [];
    console.log("fetch", fetchedProducts);

    await (async () => {
        for(const product of fetchedProducts){
            products.push
        ({
            key: product?.productTitle,
            
            productId: product?.productId,
            category: product?.orderDateTime,
            productTitle: product?.productTitle,
            quantity: product?.productTitle,
            seller: product?.seller,
            price: product?.price,
            available: product?.available,

            
       
        })
        
                }
    })();
    return products;
}

