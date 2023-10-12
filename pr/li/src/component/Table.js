import React from 'react'

export default function Table(props) {
    let arr = props.table
    return (
        <div className='table_box' id={props.id}  >
            <table>
                <h3>{props.name}</h3>
                <tr>
                    <td style={{ border: "none" }}></td>
                    <th style={{
                        backgroundColor: "grey",
                        textAlign: "center",
                        padding: "8px 0",
                        textTransform: "capitalize",
                        fontWeight: "600",
                        fontSize: "30px",
                    }}>Անվանում</th>
                </tr>
                {arr.map((elem) => {
                    return (
                        <tr>
                            <td><img src={elem.png} /></td>
                            <td>{elem.title}</td>
                        </tr>
                    )
                })}
            </table>
        </div>
    )
}
