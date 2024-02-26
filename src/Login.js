import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        sessionStorage.clear();
    }, []);

    const proceedLogin = (e) => {
        e.preventDefault();
        if (validate()) {
            fetch("http://localhost:8000/user/" + username)
                .then((res) => res.json())
                .then((resp) => {
                    if (Object.keys(resp).length === 0) {
                        // Handle case when user not found
                    } else {
                        if (resp.password === password) {
                            toast.success('Success');
                            sessionStorage.setItem('username', username);
                            sessionStorage.setItem('userrole', resp.role);
                            navigate('/');
                        }
                    }
                })
                .catch((err) => {
                    toast.error('Login Failed due to :' + err.message);
                });
        }
    }

    const validate = () => {
        let result = true;
        if (username === '' || username === null) {
            result = false;
            toast.warning('Escribe tu usuario');
        }
        if (password === '' || password === null) {
            result = false;
            toast.warning('Escribe tu contraseña');
        }
        return result;
    }

    return (
        <div className="row justify-content-center align-items-center vh-100">
            <div className="col-lg-6">
                <form onSubmit={proceedLogin} className="container">
                    <div className="card shadow p-3 mb-5 bg-body rounded">
                        <div className="card-header bg-light">
                            <h2 className="text-center">Inicia Sesión</h2>
                        </div>
                        <div className="card-body">
                            <div className="form-group">
                                <label>Usuario <span className="errmsg">*</span></label>
                                <input value={username} onChange={e => setUsername(e.target.value)} className="form-control" />
                            </div>
                            <div className="form-group">
                                <label>Password<span className="errmsg">*</span></label>
                                <input type="password" value={password} onChange={e => setPassword(e.target.value)} className="form-control" />
                            </div>
                        </div>
                        <div className="card-footer bg-light">
                            <button type="submit" className="btn btn-primary btn-block">Inicia Sesión</button>
                            <Link className="btn btn-success btn-block mt-3" to={'/register'}>Regístrate</Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;
