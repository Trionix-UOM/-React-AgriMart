
export const mapOrderResponsesToTable = async (fetchedOrders) => {
    const orders = [];

    await (async () => {
        for(const order of fetchedOrders){
            orders.push
        ({
            key: order?.productTitle,
            orderID: order?.productTitle,
            orderDate: order?.productTitle,
            productName: order?.productTitle,
            quantity: order?.productTitle,
            price: order?.productTitle,
            confirmation: order?.productTitle,
            deliveryStatus: order?.productTitle,
        })
                }
    })();
    return orders;
}