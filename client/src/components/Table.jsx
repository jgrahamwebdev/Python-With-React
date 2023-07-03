
import { useState, useEffect } from 'react';

const Table = () => {
    // State Variable
    const [data, setData]= useState([{}])

    // Fetching data from the Back-End
    useEffect(() => {
        fetch("/employees").then(
            res => res.json()
        ).then(
            data => {
                setData(data)
                console.log(data)
            }
        )
    }, [])

    return (
        <div className='w-full h-screen flex items-center justify-center flex-col'>
            <h1 className='mb-8 text-[1.5rem] underline-offset-2 underline'>Current Employees:</h1>
            <table className='w-[45%] border-2'>
                <tr className='border-2'>
                    <th className='border-r-2'>Employee Name</th>
                    <th className='border-r-2'>Full/Part Time</th>
                    <th>Performance</th>
                </tr>
                <tr>
                    <td className='border-2'>
                        {data.employees?.map((employee, i) => (
                            <p key={i}>{employee}</p>
                        ))}
                    </td>
                    <td className='border-2'>
                        {data.active?.map((active, i) => (
                            <p key={i}>{active}</p>
                        ))}
                    </td>
                    <td>
                        {data.performance?.map((performance, i) => (
                            <p key={i}>{performance}</p>
                        ))}
                    </td>
                </tr>
            </table>            
        </div>
    )
}

export default Table
