import React from 'react'
import Modal from '../../../../shared/Modal'


const EditeProfile = () => {

    return (
        <div>
           <div className='user-action'>
                <button type="button" className="btn  edite-profile" data-bs-toggle="modal" data-bs-target="#editeProfile">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pen-fill" viewBox="0 0 16 16">
                        <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001z"/>
                    </svg>
                </button>
                <button type="button" className="btn btn-logout" >Log Out</button>
            </div> 


            <Modal title='Edita Profile' id='editeProfile'>
                <div className='cart'>
                    <form className="login-form" >
                        <div className="mb-3">
                            <input type="text" className="form-control" id="fullname" placeholder="full Name"/>
                        </div>
                        
                        <div className="d-grid gap-2">
                            <button type="submit" className="btn btn-danger btn-login">Submit</button>
                        </div>
                    </form>
                    <hr/>
                    <div className="d-grid gap-2">
                        <button className="btn btn-outline-danger" data-bs-target="#changepassword" data-bs-toggle="modal" data-bs-dismiss="modal">Change Password</button>
                    </div>
                </div>
            </Modal>
            <Modal title='Change Password' id='changepassword'>
                <div className='cart'>
                    <form className="login-form" >
                        <div className="mb-3">
                            <input type="password" className="form-control" id="oldpass" placeholder="Current Password"/>
                        </div>
                        <div className="mb-3">
                            <input type="password" className="form-control" id="newpass" placeholder="New Password"/>
                        </div>
                        <div className="mb-3">
                            <input type="password" className="form-control" id="confirmpass" placeholder="Confirm Password"/>
                        </div>
                        <div className="d-grid gap-2">
                            <button type="submit" className="btn btn-danger btn-login">Submit</button>
                        </div>
                    </form>
                </div>
            </Modal>
        </div>
    )
}

export default EditeProfile
