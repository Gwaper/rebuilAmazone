import React from 'react'

function Cart() {
    return (

      <div className="col-md-4">
         <div className="card">
            <div className="card-body">
                <p className="lead">Cart</p>
                  <table className="table-striped">
                    <tbody>
                      <tr className="py-2 tr-height">
                          <th className="px-2" scope="row" width="50%">hey</th>
                          <td width="30%">12 $</td>
                          <td width="20%">
                            <button className="btn btn-warning btn-sm float-right mr-2">remove</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="card-footer">
                    <h3>Total price  $</h3>
                </div>
            </div>
           <button className="btn btn-success mt-3">Checkout</button>
        </div>
    )


}

export default Cart 
