import React, {useState} from 'react'
import images from './images'

const Items = () => {
    var [one, setOne] = useState(()=>{
        return[0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    })
    


const setCounter=(act, index)=>{
        if(act==="inc"){

            one[index] < 1 && setOne({
                ...one,
                [index]:one[index]+1
            })
        }else{
            if(one[index] > 0){

                setOne({
                    ...one,
                    [index]:one[index]-1
                })
            }
        }
}
    const tableRow = images.map((image, index)=>{
        return(
            <tr key={image.id}>
                <td><img src={image.src} alt="item"/></td>
                <td className="des">{image.description}</td>
                <td>{image.price} </td>
                <td>
                    <div className="counter">
                                   <div onClick={()=>{setCounter("dec", index)}}>-</div>
                                   <div>{one[index]}</div>
                                   <div onClick={()=>{setCounter("inc", index)}}>+</div>
                               </div> </td>
            </tr>
        )
    })
   


    return (
        <div>
            <table>
                <thead>
                <tr>
                <th></th>
                <th><h3>DESCRIPTION</h3></th>
                <th style={{textAlign: "center !important"}}><h3>PRICE<span style={{fontFamily: "arial"}}><br></br>($</span>BOOTY)</h3></th>
                <th style={{textAlign: "center !important"}}><h3>QTY</h3></th>
                </tr>
                </thead>
                <tbody>
                    {tableRow}
               
                </tbody>
            </table>
        </div>
    )
}

export default Items
