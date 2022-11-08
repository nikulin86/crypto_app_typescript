import React, {useEffect, useState, createContext, useContext} from "react";



    const Crypto = createContext<any>({} as any);

    const CryptoContext = ({children}: any) => {
        const [currency, setCurrency] = useState<string>("RUB");
        
        const [symbol, setSymbol] = useState("₽");
        

        useEffect(() => {
            if ( currency === "RUB") setSymbol("₽");
            else if ( currency === "USD") setSymbol("$");
        }, [currency]);


        return (
            <Crypto.Provider value={{ currency, symbol, setCurrency}}>
                {children}
            </Crypto.Provider>
        )
    }



export default CryptoContext;


export const CryptoState = () => {
   return useContext(Crypto);
};