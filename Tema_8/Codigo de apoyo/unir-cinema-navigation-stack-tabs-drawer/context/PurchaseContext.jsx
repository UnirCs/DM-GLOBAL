import React, { createContext, useState } from 'react';

export const PurchaseContext = createContext();

export const PurchaseProvider = ({ children }) => {
    const [purchases, setPurchases] = useState([]);

    const addPurchase = (purchase) => {
        setPurchases([...purchases, purchase]);
    };

    return (
        <PurchaseContext.Provider value={{ purchases, addPurchase }}>
            {children}
        </PurchaseContext.Provider>
    );
};