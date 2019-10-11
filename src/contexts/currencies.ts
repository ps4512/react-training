import { createContext } from "react"

export const Currencies: {
  [key: string]: string
} = {
  USD: '$', // 1.10213
  EUR: '€',
  GBP: '£', // 0.901497274
  JPY: '¥' // 118.840845
}

export const CurrenciesBackup = {
  USD: '$',
  EUR: '€',
  GBP: '£',
  JPY: '¥'
}
export type CurrencyCode = keyof typeof CurrenciesBackup

// FROM -> TO -> rate:number
export const currencyRates: {
  [key: string]: {
    [key: string]: number
  }
} = {
  USD: {
    GBP: 5, // usd to GBP conversion
    EUR: 5, // usd to EUR conversion
    JPY: 5 // usd to JPY conversion
  },
  GBP: {
    USD: 5, // usd to USD conversion
    EUR: 5, // usd to EUR conversion
    JPY: 5 // usd to JPY conversion
  },
  // (!!!!)
  EUR: {
    EUR: 1,
    USD: 1.10213,
    GBP: 0.901497274,
    JPY: 118.840845,
  }
}

export const CurrencyContext = createContext({
  code: 'GBP',
  symbol: Currencies.GBP,
  setValue: (code: string): void => {
    throw new Error('Attempt to set the context outside of the context LOL')
  },
  convert(
    value: number,
    srcCurrencyCode: string
  ): number {
    return 0
  },
})
