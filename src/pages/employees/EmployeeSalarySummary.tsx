import React, { useMemo } from 'react'

import { CurrencyFormat } from '../../shared/CurrencyFormat';
import { Employee } from '../../typedef';
import { useToggle } from '../../utils/hooks/useToggle'

const calculateTotalSalary = (employees: Employee[]) => {
  return employees.reduce((sum, e) => sum + e.salary, 0)
}

type EmployeeSalarySummaryProps = {
  employees: Employee[]
}

export const EmployeeSalarySummary = ({ employees }: EmployeeSalarySummaryProps) => {
  // const salary = calculateTotalSalary(employees)
  // eslint-disable-line react-hooks/exhaustive-deps
  const salary = useMemo(() => calculateTotalSalary(employees),
    [employees])

  const [displayAdditional, toggleDisplayAdditional] = useToggle(false)

  // React.Fragment
  return <>
    <input id="displaySummary" type="checkbox" onClick={toggleDisplayAdditional} />
    <label htmlFor="displaySummary">display additional costs</label>
    <ul>
      <li>monthly salary cost: {` `}
        <CurrencyFormat value={salary} displayType={'text'} thousandSeparator={true} prefix={'€'} /></li>
      {displayAdditional && <>
        <li>quarterly salary cost: {` `}
          <CurrencyFormat value={salary * 3} displayType={'text'} thousandSeparator={true} prefix={'€'} /></li>
        <li>yearly salary cost: {` `}
          <CurrencyFormat value={salary * 12} displayType={'text'} thousandSeparator={true} prefix={'€'} /></li>
      </>}
    </ul>
  </>
}

/*
export const withLoading = (ms: number, Wrapped: React.Component) =>
  class extends React.Component {
    state = {
      loading: true
    }
  
    componentDidMount(){
      console.log('initial')
    }

    componentWillUnmount(){
      console.log('clean up')
    }

    render(){
      return this.state.loading ? "LOADING..." : <Wrapped />
    }
  }

export const SummaryWithLogs = withLoading(EmployeeSalarySummary)
*/
