"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

type Currency = "USD" | "INR";

interface CurrencyContextType {
	currency: Currency;
	setCurrency: (currency: Currency) => void;
	formatPrice: (priceInUSD: number) => string;
	exchangeRate: number;
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(
	undefined,
);

export const CurrencyProvider = ({ children }: { children: ReactNode }) => {
	const [currency, setCurrency] = useState<Currency>("USD");
	const exchangeRate = 83; // Fixed exchange rate for now

	const formatPrice = (priceInUSD: number) => {
		if (currency === "INR") {
			const priceInINR = priceInUSD * exchangeRate;
			return new Intl.NumberFormat("en-IN", {
				style: "currency",
				currency: "INR",
				maximumFractionDigits: 0,
			}).format(priceInINR);
		}
		return new Intl.NumberFormat("en-US", {
			style: "currency",
			currency: "USD",
			maximumFractionDigits: 0,
		}).format(priceInUSD);
	};

	return (
		<CurrencyContext.Provider
			value={{ currency, setCurrency, formatPrice, exchangeRate }}
		>
			{children}
		</CurrencyContext.Provider>
	);
};

export const useCurrency = () => {
	const context = useContext(CurrencyContext);
	if (context === undefined) {
		throw new Error("useCurrency must be used within a CurrencyProvider");
	}
	return context;
};
