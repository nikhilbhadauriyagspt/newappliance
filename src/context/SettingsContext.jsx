import React, { createContext, useContext, useState } from 'react';

const SettingsContext = createContext();

export const SettingsProvider = ({ children }) => {
    const [settings, setSettings] = useState({
        contact_phone: "+1-402-508-9991",
        contact_email: "support@appliancevista.shop",
        address: "123 Appliance St, Tech City",
    });

    return (
        <SettingsContext.Provider value={settings}>
            {children}
        </SettingsContext.Provider>
    );
};

export const useSettings = () => {
    const context = useContext(SettingsContext);
    if (!context) {
        throw new Error('useSettings must be used within a SettingsProvider');
    }
    return context;
};
