import React, { createContext, useContext, useState } from 'react';

const CustomerContext = createContext();

export const useCustomerContext = () => useContext(CustomerContext);

export function CustomerProvider({ children }) {
  const [customer, setCustomer] = useState('');

  const setCustomerData = (customer) => {
    setCustomer(customer);
  };

  return (
    <CustomerContext.Provider value={{ customer, setCustomerData }}>
      {children}
    </CustomerContext.Provider>
  );
}
