import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './SesionAuthContext';
import LoadingSpinner from './SesionLoadingSpinner';
import '../assets/scss/_03-Componentes/_SesionLoginRegister.scss';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const { dispatch } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      dispatch({ type: 'LOGIN', payload: { email } });
      setLoading(false);
      navigate('/');
    }, 2000);
  };

  return (
    <div className="bb-auth-container">
      {loading ? (
        <LoadingSpinner />
      ) : (
        <div className="bb-login-card">
          <div className="bb-film-strip-border">
            <div className="bb-card-content">
              <h2 className="bb-card-title">ACCESO VIP</h2>
              <div className="bb-card-image">
                <img src="../../public/img/02-logos/logogondraworld1.png" alt="Logo Gondra World" />
              </div>
              <form onSubmit={handleLogin} className="bb-auth-form">
                <div className="bb-form-group">
                  <label>CORREO ELECTRÓNICO</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bb-input"
                    required
                  />
                </div>
                <div className="bb-form-group">
                  <label>CONTRASEÑA</label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="bb-input"
                    required
                  />
                </div>
                <button type="submit" className="bb-button">
                  INICIAR SESIÓN
                </button>
              </form>
              <div className="bb-card-footer">
                EXCLUSIVO PARA CLIENTES REGISTRADOS
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;