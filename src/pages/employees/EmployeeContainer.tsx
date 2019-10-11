import React, { ReactNode } from 'react'

import { to2 } from '../../utils/math';

import { EmployeeDetails } from './EmployeeDetails';
import { Employee } from '../../typedef';
import { EmployeeSalarySummary } from './EmployeeSalarySummary'
import { getEmployees, fetchAllEmployees } from '../../api/EmployeeApi';

import { Loader } from '../../shared/Loader';
import { Sidebar } from '../../shared/sidebar/sidebar';

type EmployeeContainerProps = {
  label: string
  header?: ReactNode
}

type EmployeeContainerState = {
  employees: Employee[]
  loading: boolean
  completedRate: number
  // displayAdditionalSummaries: boolean
  sidebarCollapsed: boolean
}

export class EmployeeContainer extends React.PureComponent<
  EmployeeContainerProps,
  EmployeeContainerState
>{
  state = {
    employees: [],
    loading: true,
    completedRate: 0,
    // displayAdditionalSummaries: false,
    sidebarCollapsed: true
  } as EmployeeContainerState

  componentDidMount(){
    fetchAllEmployees((employees, completedRate) =>
          this.setState({ employees, completedRate }))
      .then(() => this.setState({ loading: false }))
  }

  onEmployeeBenefitClicked(e: Employee){
    console.log('🍕', e)
  }

  onEmployeeDeleted(e: Employee){
    console.log('☠️️️', e)
  }

  onEmployeeMoneyBumped(e: Employee){
    console.log('💰', e)
  }

  uniqueSkills(){
    // var allSkills = this.state.employees.reduce(
    //   (skills, e) => {
    //     skills.push(...e.skills)
    //     return skills
    //   }, [] as string[])

    var skills = this.state.employees.flatMap(e => e.skills)
    var skillSet = new Set(skills)
    return [...skillSet]
  }

  toggleSidebarCollapsed = () => {
    this.setState(state => ({ sidebarCollapsed: !state.sidebarCollapsed }))
  }

  render(){
    return <>
      <h2>{this.props.label}</h2>
      <Sidebar
        collapsed={this.state.sidebarCollapsed}
        onCloseClick={this.toggleSidebarCollapsed}>
          RECENTLY VIEWED EMPLOYEES DISPLAYED HERE
      </Sidebar>
      {/* <RoundButton onClick={this.toggleSidebarCollapsed} /> */}
      <span className="icon" role="img" aria-label="toggle sidebar" onClick={this.toggleSidebarCollapsed}>📖</span>

      {this.state.loading && <Loader />}
      count: {this.state.employees.length}
      {` `}
      ({to2(this.state.completedRate * 100)} %)
     <EmployeeSalarySummary employees={this.state.employees} />
      {this.state.employees &&
        <ol>
        {this.state.employees.map(e =>
          <li key={e.id}><EmployeeDetails employee={e}
            onBenefitClick={this.onEmployeeBenefitClicked}
            onDeleteClick={this.onEmployeeDeleted}
            onMoneyClick={this.onEmployeeMoneyBumped}  
          /></li>)}
        </ol>
      }
    </>
  }
}
