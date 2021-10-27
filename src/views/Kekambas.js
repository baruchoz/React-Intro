import React, { useState, useEffect } from 'react'
import KekambasDetail from '../components/KekambasDetail';

export default function Kekambas(props) {
    const [kekambas, setKekambas] = useState([])
        
    useEffect(() => {
        fetch(`https://kekambas-bs.herokuapp.com/posts`)
        .then(res => res.json())
        .then(data => setKekambas(data))
    })
      
    return (
        <div>
            This is the Kekambas page

            {kekambas.length ? (
                <table className="table table-secondary table-striped table-hover">
                    <thead>
                        <tr>
                            <td>Body</td>
                            <td>Date Created</td>
                            <td>ID</td>
                            <td>Title</td>
                            <td>First Name</td>
                            <td>User ID</td>
                            <td>Last Name</td>
                        </tr>
                    </thead>

                    <tbody>
                        {kekambas.map((r, i) => <KekambasDetail key={i} kekam={r}/>)}
                    </tbody>
                </table>
            ): null}
        </div>
    )
    
}
