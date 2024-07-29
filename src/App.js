function App() {
  return (
    <div className="App">
      <section className="vh-200 bg-danger">
        <div className="container py-5 h-100 ">
          <div className="row justify-content-center align-items-center h-100">
            <div className="col-12 col-lg-9 col-xl-7">
              <div className="card shadow-2-strong card-registration bord">
                <div className="card-body p-4 p-md-5">
                  <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">
                    Registration Form
                  </h3>
                  <form className="">
                    <div className="row ">
                      <div className="col-md-6 mb-4">
                        <div data-mdb-input-init className="form-outline">
                        <label className="form-label" for="firstName">
                            First Name
                          </label>
                          <input
                            type="text"
                            id="firstName"
                            className="form-control form-control-lg" required
                          />
                          
                        </div>
                      </div>
                      <div className="col-md-6 mb-4">
                        <div data-mdb-input-init className="form-outline">
                        <label className="form-label" for="lastName">
                            Last Name
                          </label>
                          <input
                            type="text"
                            id="lastName"
                            className="form-control form-control-lg" required
                          />
                         
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6 mb-4 d-flex align-items-center">
                        <div
                          data-mdb-input-init
                          className="form-outline datepicker w-100"
                        >
                          <label for="birthdayDate" className="form-label">
                            Birthday
                          </label>
                          <input
                            type="text"
                            className="form-control form-control-lg"
                            id="birthdayDate" required
                          />
                          
                        </div>
                      </div>
                      <div className="col-md-6 mb-4">
                        <h6 className="mb-2 pb-1">Gender: </h6>

                        <div className="form-check form-check-inline">
                        <label
                            className="form-check-label"
                            for="maleGender"
                          >
                            Male
                          </label>
                          <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions"
                            id="femaleGender"
                            value="option1"
                            checked
                          />
                          
                        </div>

                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions"
                            id="maleGender"
                            value="option2"
                          />
                          <label className="form-check-label" for="maleGender">
                            Female
                          </label>
                        </div>

                       
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6 mb-4 pb-2">
                        <div data-mdb-input-init className="form-outline">
                        <label className="form-label" for="emailAddress">
                            Email
                          </label>
                          <input
                            type="email"
                            id="emailAddress"
                            className="form-control form-control-lg" required
                          />
                         
                        </div>
                      </div>
                      <div className="col-md-6 mb-4 pb-2">
                        <div data-mdb-input-init className="form-outline">
                        <label className="form-label" for="phoneNumber">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            id="phoneNumber"
                            className="form-control form-control-lg" required
                          />
                          
                        </div>
                      </div>
                    </div>


                    
                      <label className="form-label select-label ">
                          Subject
                        </label>
                        <select className="select form-control-lg w-100">
                          <option value="1" >
                            Choose option
                          </option>
                          <option value="2">Subject 1</option>
                          <option value="3">Subject 2</option>
                          <option value="4">Subject 3</option>
                        </select>
                        
                     

                    <div className="mt-4 pt-2">
                      <input
                        data-mdb-ripple-init
                        className="btn btn-primary btn-lg"
                        type="submit"
                        value="Submit"
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
