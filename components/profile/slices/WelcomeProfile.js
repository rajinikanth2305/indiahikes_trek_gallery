import React, { useState } from "react";
import { RichText } from "prismic-reactjs";
import { customStyles } from "styles";
import Modal from "react-bootstrap/Modal";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

const WelcomeProfile = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className="mt-4">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div>
                <p className="p-text-1 font-weight-bold m-0">Hi Sandhya Uc</p>
                <p className="p-text-1 font-weight-bold">
                  Welcome To Your Indiahikes Trek Dashboard!
                </p>
                <p className="p-text-4 font-weight-bold m-0">
                  Use this dashboard for all your trek related transactions.
                </p>
                <p className="p-text-4 font-weight-bold">
                  Here are a few things you can do:
                </p>
              </div>
              <div className="list_ul_style">
                <ol>
                  <li>Track your trek booking status</li>
                  <li>Update your information</li>
                  <li>Update your travel and emergency contact details</li>
                  <li>Upload your fitness proof</li>
                  <li>Opt for backpack offloading and pay for it</li>
                  <li>View rental gear that you have booked</li>
                  <li>
                    View previous trek bookings and download trek certificate
                  </li>
                  <li>Cancel trek booking</li>
                </ol>
              </div>
            </div>
          </div>

          <div className="row my-3">
            <div className="col-md-12">
              <div className="table-responsive">
                <table class="table table-dashboard-profile">
                  <thead>
                    <tr className="header-bg">
                      <th className="w-20per">trek name</th>
                      <th className="w-20per">batch dates</th>
                      <th className="w-15per">participants</th>
                      <th className="w-15per">Experience Coordinator</th>
                      <th className="w-15per">trekking equipment</th>
                      <th className="w-15per">booking status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Hampta Pass trek</td>
                      <td>16 Sep 2021 to 23 Sep 2021</td>
                      <td>3 trekkers</td>
                      <td className="text-decoration-underline">
                        Nandana Kamasani
                      </td>
                      <td className="text-decoration-underline text-info">
                        View Rentals
                      </td>
                      <td>
                        <button className="btn table-btn-gray">
                          Paid / confirmed
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table class="table table-dashboard-profile-style-1">
                  <thead>
                    <tr className="header-bg">
                      <th className="w-20per">Participants (3)</th>
                      <th className="w-20per">Backpack Offloading</th>
                      <th className="w-15per">Fitness proof</th>
                      <th className="w-15per">Fitness Approval</th>
                      <th className="w-15per">Participant Details </th>
                      <th className="w-15per">ID proof</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1. Nayana Jambe (You)</td>
                      <td>Yes, paid</td>
                      <td>
                        <button className="btn table-btn-green-sm">
                          Add / Modify
                        </button>
                      </td>
                      <td>Pending</td>
                      <td>
                        <button
                          className="btn table-btn-yellow-sm"
                          onClick={handleShow}
                        >
                          Add / Modify
                        </button>
                      </td>
                      <td>
                        <button className="btn table-btn-yellow-sm">
                          Add / Modify
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>2. Sandhya UC</td>
                      <td>Yes, paid</td>
                      <td>uploaded</td>
                      <td>Approved</td>
                      <td>To be filled</td>
                      <td>Yet To Upload</td>
                    </tr>
                    <tr>
                      <td>3. Manisha Hegde</td>
                      <td>Not required</td>
                      <td>yet to upload</td>
                      <td>Pending</td>
                      <td>Filled</td>
                      <td>Uploaded</td>
                    </tr>
                  </tbody>
                </table>
                <div className="d-flex align-items-center flex-wrap mt-4">
                  <div className="mx-3">
                    <button className="btn table-btn-maroon">
                      cancel trek booking
                    </button>
                  </div>
                  <div className="mx-3">
                    <button className="btn table-btn-blue">
                      opt for offloading
                    </button>
                  </div>
                  <div className="mx-3">
                    <button className="btn table-btn-green">
                      Join whatsapp group
                    </button>
                  </div>
                  <div className="mx-3">
                    <button className="btn table-btn-yellow">
                      View Trek Resources
                    </button>
                  </div>
                </div>
                <table class="table table-dashboard-profile-style-2">
                  <thead>
                    <tr className="header-bg">
                      <th className="w-20per">&nbsp;</th>
                      <th className="w-20per">&nbsp;</th>
                      <th className="w-15per">&nbsp;</th>
                      <th className="w-15per">&nbsp;</th>
                      <th className="w-15per">&nbsp;</th>
                      <th className="w-15per">&nbsp;</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Deoriatal chandrashila trek</td>
                      <td>31 Dec 2021 to 06 Jan 2022</td>
                      <td>1 trekker</td>
                      <td className="text-decoration-underline">
                        Prathima Chhabria
                      </td>
                      <td>
                        <button className="btn table-btn-blue">
                          complete booking
                        </button>
                      </td>
                      <td>
                        <button className="btn table-btn-green-lg">
                          complete booking
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>Everest Base Camp trek</td>
                      <td>23 Mar 2022 to 09 Apr 2022</td>
                      <td>2 trekker</td>
                      <td className="text-decoration-underline">Suhas Saya</td>
                      <td>Not Available</td>
                      <td>
                        <button className="btn table-btn-yellow">
                          waitlist #3
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <style jsx global>
          {customStyles}
        </style>
      </div>
      <Modal
        size="md"
        show={show}
        onHide={handleClose}
        animation={false}
        centered
      >
        <Modal.Header>
          <Modal.Title>
            Sandhya has registered you for a trek. confirm your details here.
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <p>
              {" "}
              You are trekking with 2 others for the Hampta Pass Trek batch of
              16th to 23rd September 2021{" "}
            </p>
            <Form>
              <div className="register-form-box">
                <FormGroup>
                  <Input
                    type="text"
                    name="fname"
                    id="fname"
                    placeholder="First Name"
                  />
                </FormGroup>
                <FormGroup>
                  <Input
                    type="text"
                    name="lname"
                    id="lname"
                    placeholder="Last Name"
                  />
                </FormGroup>
                <FormGroup>
                  <Input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email Id"
                  />
                </FormGroup>
                <FormGroup>
                  <Input
                    type="email"
                    name="email"
                    id="confirmemail"
                    placeholder="Confirm Email Id"
                  />
                </FormGroup>
                <FormGroup>
                  <Input
                    type="number"
                    name="phone"
                    id="phone"
                    placeholder="Phone Number"
                  />
                </FormGroup>
                <FormGroup>
                  <Input
                    type="date"
                    name="dob"
                    id="dob"
                    placeholder="Date of Birth"
                  />
                </FormGroup>
                <FormGroup>
                  <Input
                    type="select"
                    name="height"
                    id="exampleSelectMulti"
                    placeholder="Height (In Ft)"
                  >
                    <option>Height (In Ft)</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Input>
                </FormGroup>
                <FormGroup>
                  <Input
                    type="select"
                    name="weight"
                    id="exampleSelectMulti"
                    placeholder="weight (in kg)"
                  >
                    <option>weight (in kg)</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Input>
                </FormGroup>
                <FormGroup>
                  <Input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="set a log in Password"
                  />
                </FormGroup>
                <FormGroup>
                  <Input
                    type="password"
                    name="confirmpassword"
                    id="confirmpassword"
                    placeholder="Confirm Password"
                  />
                </FormGroup>
              </div>
              <div className="mt-3">
                <button type="button" className="btn btn-ih-green">
                  Confirm Details
                </button>
              </div>
            </Form>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default WelcomeProfile;
