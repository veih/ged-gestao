import { Stylelogin } from "./style";
import { useNavigate } from "react-router-dom";
import { ChangeEvent, useContext, useState } from 'react';
import { AuthContext } from "../../contexts/Auth/AuthContext";

export const Login = () => {
    const auth = useContext(AuthContext);
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handlePasswordInput = (event: ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    }

    const handleLogin = async () => {
        if (email && password) {
            const isLogged = await auth.signin(email, password);
            if (isLogged) {
                navigate('/home');
            } else {
                navigate("/cadastro");
            }
        }
    }

    return (
        <Stylelogin>
            <body>
                <div className="container"><p>LOGIN-GED</p>
                <div className="brand-title"> </div>
                    
                    <form className="inputs">
                        <label>E-MAIL</label>
                        <input
                            type="text" 
                            autoFocus
                            value={email}
                            onChange={e => setEmail(e.target.value)} 
                            className="inputEmail" 
                            placeholder="exemplo@teste.com" 
                            required
                        />
                        <label>SENHA</label>
                        <input 
                            type="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)} 
                            placeholder="Minimo 4 caracteres"
                            required
                        />
                           
                        <button  onClick={handleLogin} className="buttonLogin" type="submit">LOGIN</button>
                        
                                   
                    </form>
                </div>
            </body>
            
        </Stylelogin>
    );   
    
}