import { API_URL, MAX_PAGE_SIZE } from './config';
import { Employee } from '../typedef';

export const getEmployees = (page: number = 1): Promise<Employee[]> => {
  return fetch(`${API_URL}/employees?_page=${page}`)
    .then(res => res.json())
}

export const getCount = (): Promise<number> => {
  return fetch(`${API_URL}/employees/count`)
    .then(res => res.json())
}

type NotifyFn = (data: Employee[], completedRate: number) => void
export const fetchAllEmployees = async (notify: NotifyFn) => {
  let employees: Employee[] = []
  const totalCount = await getCount()
  const pages = Math.ceil( totalCount / MAX_PAGE_SIZE )
  const pageNumbers = new Array(pages).fill(0).map((_, idx) => idx+1)

  // sequential
  // for(const p of pageNumbers){
  //   const data = await getEmployees(p)
  //   employees = [...employees, ...data]
  //   notify(employees)
  // }

  // parallel - awaiting in order
  // const promises = pageNumbers.map(getEmployees)
  // for(const promise of promises){
  //   const data = await promise
  //   employees = [...employees, ...data]
  //   notify(employees)
  // }

  // awaiting all or nothing
  // const promises = pageNumbers.map(getEmployees)
  // const allPages = await Promise.all(promises)
  // employees = allPages.flat()
  // notify(employees)
  
  // parallel - awaiting as they come (using .then)
  // const promises = pageNumbers.map(getEmployees)
  // promises.forEach(p => p
  //   .then(data => {
  //     employees = [...employees, ...data]
  //     notify(employees)
  //   })
  // )

  // parallel - awaiting as they come (using .then)
  const promises = pageNumbers.map(getEmployees)
  promises.forEach(async p => {
     const data = await p
     employees = [...employees, ...data]
     notify(employees, employees.length / totalCount)
  })

  return employees
}
