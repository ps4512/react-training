import React, { memo, useContext } from 'react'

import { Employee } from '../../typedef'

import { EmployeeThumbnailImage } from './EmployeeImage'
import { CurrencyFormat } from '../../shared/CurrencyFormat'
import { CurrencyContext } from '../../contexts/currencies'

type EmployeeDetailsProps = {
  employee: Employee
  onBenefitClick: (e: Employee) => void
  onDeleteClick: (e: Employee) => void
  onMoneyClick: (e: Employee) => void
}

export const EmployeeDetails = memo(
  ({ employee: e, onBenefitClick, onDeleteClick, onMoneyClick }: EmployeeDetailsProps) => {
  const currency = useContext(CurrencyContext)

  return <div>
    <EmployeeThumbnailImage employee={e} />
    {e.firstName} {e.lastName},
    {` `}
    {e.title}

    {/* HOOK-BASED */}
    (<CurrencyFormat
      value={currency.convert(e.salary, "EUR")}
      displayType={'text'}
      thousandSeparator={true}
      prefix={currency.symbol} />)

    {/* RENDER-PROP-BASED */}
    <CurrencyContext.Consumer>
    {({ symbol }) => (<CurrencyFormat value={e.salary} displayType={'text'} thousandSeparator={true}
    prefix={symbol} />)}
    </CurrencyContext.Consumer>
    <div>
      <button onClick={() => onBenefitClick(e)}>
        <span role="img" aria-label="benefits">🍕</span>
      </button>
      <button onClick={() => onDeleteClick(e)}>
        <span role="img" aria-label="delete">☠️</span>
      </button>
      <button onClick={() => onMoneyClick(e)}>
        <span role="img" aria-label="money">💰</span>
      </button>
    </div>
  </div>
  }
)

