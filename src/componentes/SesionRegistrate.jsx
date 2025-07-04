import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './SesionAuthContext';
import LoadingSpinner from './SesionLoadingSpinner';
import '../assets/scss/_03-Componentes/_SesionLoginRegister.scss';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const { dispatch } = useAuth();
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("¡LAS CONTRASEÑAS NO COINCIDEN!");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      dispatch({ type: 'REGISTER', payload: { email } });
      setLoading(false);
      navigate('/');
    }, 2000);
  };

  return (
    <div className="bb-auth-container">
      {loading ? (
        <LoadingSpinner />
      ) : (
        <div className="bb-register-card">
          <div className="bb-card-header">
            <h2>ÚNETE AL CLUB</h2>
            <div className="bb-film-strip-decoration"></div>
          </div>
          <div className="bb-card-image">
            <img src="../../public/img/02-logos/logogondraworld.png" alt="Logo Gondra World" />
          </div>
          <form onSubmit={handleRegister} className="bb-auth-form">
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
              <label>CREA TU CONTRASEÑA</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bb-input"
                required
              />
            </div>
            <div className="bb-form-group">
              <label>CONFIRMA TU CONTRASEÑA</label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="bb-input"
                required
              />
            </div>
            <button type="submit" className="bb-button">
              REGISTRARSE
            </button>
          </form>
          <div className="bb-card-footer">
            ¡RECIBE OFERTAS EXCLUSIVAS!
          </div>
        </div>
      )}
    </div>
  );
};

export default Register;