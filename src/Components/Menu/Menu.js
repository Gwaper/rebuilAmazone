import React from 'react';

function Menu (){
    return(
        <div className="container">
      <div className="row">
        <div className="col-md-12 mt-5">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#"><img width="300px" src="https://images6.livreshebdo.fr/sites/default/files/assets/images/14_amazoncom_moneyzgonecom_logo_parody.jpg"></img></a>
            
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <a className="nav-item nav-link active" href="#">Register</a>
                <a className="nav-item nav-link" href="#">login</a>
               
              </div>
            </div>
          </nav>

        </div>

      </div>
    </div>
    )
}

export default Menu;