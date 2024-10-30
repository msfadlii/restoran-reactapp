import React, { Component, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from '../../api/axios';
import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';    

const Login = () => {
   
        const [username, setUsername] = useState("");
        const [password, setPassword] = useState("");
        const navigate = useNavigate();

        const getCsrfToken = async () => {
            try {
                await axios.get("/sanctum/csrf-cookie");
            } catch (error) {
                console.error("CSRF token fetch error:", error);
            }
        };

        const handleLogin = async (event) => {
            event.preventDefault();
            await getCsrfToken();
            try {
                await axios.post("/login", { username, password }, {
                    headers: {
                        'X-XSRF-TOKEN': Cookies.get('XSRF-TOKEN')
                    },
                    withCredentials: true
                });
                setUsername("");
                setPassword("");
                navigate("/home");
            } catch (e) {
                console.log(e);
            }
        };
        

        return (
            <div className="d-flex align-items-center justify-content-center min-vh-100">
                <div className="col-md-4">
                    <form className="border p-4 rounded shadow" onSubmit={handleLogin}>
                        <h3 className="text-center">Sign in</h3>

                        <div className="mb-3">
                            <label className="form-label">Username</label>
                            <input
                                type="Username"
                                className="form-control"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                placeholder="Masukkan Username"
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Masukkan Password"
                                required
                            />
                        </div>
                        <div className="d-grid">
                            <button type="submit" className="btn btn-primary">Sign in</button>
                        </div>
                        <p className="text-center mt-3">
                            Belum memiliki akun?<a href="/register"> Sign up</a>
                        </p>
                    </form>
                </div>
            </div>
        );
}

export default Login;