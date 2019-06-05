import React from 'react'
import Cart from '../Cart/Cart'

function ListArticles (){
    return(
        <div>
        <div className="row mt-5">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <div className="card-title">
              <p className="lead">Articles</p>
            </div>
            <table className="table-striped">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                    <tr className="py-2 tr-height">
                      <th className="px-2" scope="row" width="50%">hey</th>
                      <td width="20%">25 $</td>
                      <td width="10%">12</td>
                      <td width="20%">
                        <button  className="btn btn-primary btn-sm float-right mr-2">Add to cart</button>
                      </td>
                    </tr>
                  
                
              </tbody>
            </table>
          </div>
          <div className="card-footer">
            <div className="pagination">
              <li className="page-item">
                <a className="page-link" previous href="#">1</a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">2</a>
              </li>
            </div>
          </div>
        </div>
      </div>
      <div/>
    </div>
    <Cart/>
    </div>
    )
}
export default ListArticles