
export const mapCustomerResponsesToTable = async (fetchedCustomers) => {
    const customers = [];

    await (async () => {
        for(const customer of fetchedCustomers){
            customers.push
        ({
            key: customer?.email,
            id: customer?.id,
            fullName: customer?.fullName ,
            email: customer?.email,
            contact: customer?.phoneNo,

       
        })
                }
    })();
    console.log('customers; ',customers);
    return customers;
}


