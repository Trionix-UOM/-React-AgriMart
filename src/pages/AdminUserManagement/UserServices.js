
export const mapCustomerResponsesToTable = async (fetchedCustomers) => {
    const customers = [];

    await (async () => {
        for(const customer of fetchedCustomers){
            customers.push
        ({
            key: customer?.firstName,
            customerID: customer?.firstName,
            customerName: customer?.firstName ,
            email: customer?.email,
            contact: customer?.phoneNumber,
            address: customer?.address,
       
        })
                }
    })();
    console.log('customers; ',customers);
    return customers;
}


