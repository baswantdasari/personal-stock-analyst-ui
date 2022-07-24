import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authenticate } from '../../actions/UserAction';
import { useNavigate } from 'react-router-dom'

const Landing = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const submit = () => {
        dispatch(authenticate(username,password));
        navigate('/home');
    }

    return (
        <div>
            <h3>Sign In</h3>
            <div className="mb-3">
                <label>Email address</label>
                <input
                    id='email'
                    type="email"
                    className="form-control"
                    placeholder="Enter email"
                    onChange={(e) => setUsername(e.target.value)}
                />
            </div>
            <div className="mb-3">
                <label>Password</label>
                <input
                    id='password'
                    type="password"
                    className="form-control"
                    placeholder="Enter password"
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <div className="mb-3">
                <div className="custom-control custom-checkbox">
                    <input
                        type="checkbox"
                        className="custom-control-input"
                        id="customCheck1"
                    />
                    <label className="custom-control-label" htmlFor="customCheck1">
                        Remember me
                    </label>
                </div>
            </div>
            <div className="d-grid">
                <button type="submit" className="btn btn-primary" onClick={submit}>
                    Submit
                </button>
            </div>
            <p className="forgot-password text-right">
                Forgot <a href="#">password?</a>
            </p>
        </div>
    );
}

export default Landing;