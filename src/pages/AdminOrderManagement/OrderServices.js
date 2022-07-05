
export const mapOrderResponsesToTable = async (fetchedOrders) => {
    const orders = [];

    await (async () => {
        for(const order of fetchedOrders){
            orders.push
        ({
            key: order?.productTitle,
            orderID: order?.productTitle,
            orderDateTime: order?.orderDateTime,
            productTitle: order?.productTitle,
            quantity: order?.productTitle,
            amount: order?.amount,
            confirmation: order?.productTitle,
       
        })
                }
    })();
    return orders;
}


