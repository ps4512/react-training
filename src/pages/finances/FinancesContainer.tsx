import React, { ReactNode } from 'react'

import { CurrencyFormat } from '../../shared/CurrencyFormat'
import { Table } from '../../shared/table/table';
import { Header } from '../../shared/Header';

type FinancesContainerProps = {
  label: string
  header?: ReactNode
}

type FinancesContainerState = {
}

export default class FinancesContainer extends React.Component<
  FinancesContainerProps,
  FinancesContainerState
>{
  monthly = 1234567890
  yearly = 9876543210

  render(){
    return <>
    {/* CSS in JS */}
      <span style={{
        color: "red",
        fontWeight: "bold"
      }}>hello hello</span>
      <Header color="blue">{this.props.label}</Header>
      <Table headers={
        ['Cost Category', 'Total Monthly Expenses', 'Total Yearly Expenses']
      } rows={[
        ['Office Rentals',
          <CurrencyFormat value={this.monthly} displayType="text" thousandSeparator={true} prefix={'€'} />,
          <CurrencyFormat value={this.yearly} displayType={'text'} thousandSeparator={true} prefix={'€'} />
        ],
        ['Employee Salaries',
          <CurrencyFormat value={this.monthly} displayType="text" thousandSeparator={true} prefix={'€'} />,
          <CurrencyFormat value={this.yearly} displayType={'text'} thousandSeparator={true} prefix={'€'} />
        ],
        ['Employee Benefits',
          <CurrencyFormat value={this.monthly} displayType="text" thousandSeparator={true} prefix={'€'} />,
          <CurrencyFormat value={this.yearly} displayType={'text'} thousandSeparator={true} prefix={'€'} />
        ],
        ['Total Expenses',
          <CurrencyFormat value={this.monthly} displayType="text" thousandSeparator={true} prefix={'€'} />,
          <CurrencyFormat value={this.yearly} displayType={'text'} thousandSeparator={true} prefix={'€'} />
        ],
      ]} />     
    </>
  }
}

