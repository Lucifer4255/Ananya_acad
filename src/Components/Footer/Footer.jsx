import React from 'react'
import './Footer.css'
export const Footer = () => {
    return (
        <footer
            className="text-center text-lg-start text-dark"
            style={{ backgroundColor: '#ECEFF1' }}
        >
            {/* <!-- Section: Social media --> */}
            <section
                className="d-flex justify-content-between p-3 text-white"
                style={{ backgroundColor: '#BDBFC1' }}
            >
                {/* <!-- Left --> */}
                <div className="me-5">
                    <span>Get connected with us on social networks:</span>
                </div>
                {/* <!-- Left --> */}

                {/* <!-- Right --> */}
                <div>
                    <a href="https://www.facebook.com/profile.php?id=100095269186299" className="text-white me-4">
                        <i className="bi bi-facebook"></i>
                    </a>
                    <a href="https://instagram.com/ananyaacademics?igshid=ZDc4ODBmNjlmNQ==" className="text-white me-4">
                        <i className="bi bi-instagram"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/ananya-academics/" className="text-white me-4">
                        <i className="bi bi-linkedin"></i>
                    </a>
                </div>
                {/* <!-- Right --> */}
            </section>
            {/* <!-- Section: Social media --> */}

            {/* <!-- Section: Links  --> */}
            <section className="">
                <div className="container text-center text-md-start mt-5">
                    {/* <!-- Grid row --> */}
                    <div className="row mt-3">
                        {/* <!-- Grid column --> */}
                        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-2">
                            {/* <!-- Content --> */}
                            <h6 className="text-uppercase fw-bold">Company name</h6>
                            <hr
                                className="mb-2 mt-0 d-inline-block mx-auto"
                                style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px' }}
                            />
                            <p>
                                Ananya Academics
                            </p>
                        </div>
                        {/* <!-- Grid column --> */}

                        {/* <!-- Grid column --> */}
                        {/* <!-- Grid column --> */}

                        {/* <!-- Grid column --> */}
                        {/* <!-- Grid column --> */}

                        {/* <!-- Grid column --> */}
                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-2">
                            {/* <!-- Links --> */}
                            <h6 className="text-uppercase fw-bold">Address</h6>
                            <hr
                                className="mb-1 mt-0 d-inline-block mx-auto"
                                style={{ width: '60px', backgroundColor: '#7c4dff', height: "2px" }}
                            />
                            <p className='Add'><i className="fas fa-home mr-3"></i> Beside Axis Bank Main Road Tali Waidhan District Singrauli MP</p>
                            {/* <p className='Add'><i className="fas fa-envelope mr-3"></i> info@example.com</p> */}
                            {/* <p className='Add'><i className="fas fa-phone mr-3"></i> + 01 234 567 88</p> */}
                            {/* <p className='Add'><i className="fas fa-print mr-3"></i> + 01 234 567 89</p> */}
                        </div>
                        {/* <!-- Grid column --> */}
                    </div>
                    {/* <!-- Grid row --> */}
                </div>
            </section>
            {/* <!-- Section: Links  --> */}

            {/* <!-- Copyright --> */}
            <div
                className="text-center p-3"
                style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
            >
                © 2023 Copyright:
                <a className="text-dark" href="https://mdbootstrap.com/"
                >Ananya Academics</a>
            </div>
            {/* <!-- Copyright --> */}
        </footer>
    )
}
