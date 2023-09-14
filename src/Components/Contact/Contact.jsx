import React from 'react'

export const Contact = () => {
    return (
        <div className="container-fluid p-5 " id="Contact" style={{ backgroundColor: "#EC8886" }}>

            <div className='container' style={{ maxWidth: "860px" }}>
                <h2 className='text-center'>Contact Us</h2>
                <div className='d-flex justify-content-center my-2 p-2'>
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
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <button type="submit" class="btn btn-outline-light m-3">Submit</button>
            </div>
        </div>
    )
}
