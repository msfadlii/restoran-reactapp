import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Register extends Component {
    render() {
        return (
            <div className="d-flex align-items-center justify-content-center min-vh-100">
                <div className="col-md-4">
                    <form className="border p-4 rounded shadow">
                        <h3 className="text-center">Sign Up</h3>

                        <div className="mb-3">
                            <label className="form-label">Nama</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Nama"
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Username</label>
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Masukkan Username"
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Masukkan Password"
                                required
                            />
                        </div>
                        <div className="d-grid">
                            <button type="submit" className="btn btn-primary">Sign Up</button>
                        </div>
                        <p className="text-center mt-3">
                            Sudah memiliki akun? <a href="/login">Sign in</a>
                        </p>
                    </form>
                </div>
            </div>
        );
    }
}