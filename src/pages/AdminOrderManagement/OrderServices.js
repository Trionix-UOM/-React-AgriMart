
export const mapOrderResponsesToTable = async (fetchedOrders) => {
    const orders = [];
    console.log('map orders: ',fetchedOrders);

    await (async () => {
        for(const order of fetchedOrders){
            orders.push
        ({
            key: order?.orderId,
            orderID: order?.orderId,
            orderDateTime: order?.orderDateTime,
            productTitle: order?.productTitle,
            quantity: order?.quantity,
            amount: order?.amount,
       
        })
                }
    })();
    return orders;
}



export const mapTopSellingItemsToTable = async (fetchedOrders) => {
    const orders = [];

    await (async () => {
        for(const order of fetchedOrders){
           
            orders.push
        ({
            key: order?.productTitle,
            productTitle: order?.productTitle,
            soldQuantity: order?.soldQuantity,
            totalAmount: order?.totalAmount,
       
        })
        }
    })();
    return orders;
}



export const mapRecentOrdersToTable = async (fetchedOrders) => {

    const orders = [];

    await (async () => {
        for(const order of fetchedOrders){
            orders.push
        ({
            key: order?.productTitle,
            productTitle: order?.productTitle,
            quantity: order?.quantity,
            amount: order?.amount,
       
        })
                }
    })();
    return orders;
}


