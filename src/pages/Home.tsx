
import {Link} from 'react-router-dom';

export const Home = () => {
    return (
        <Home>
           <div className="container">
                        <p>
                            GED LOGIN
                        </p>
                <div className="brand-title"> </div>
                            
                <div className="inputs">
                                    <label>E-MAIL</label>
                    <input className="inputEmail" type="email" placeholder="exemplo@teste.com" pattern="^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$" title="Expressão de e-mail simples. Não permite números no nome de domínio e não permite domínios de nível superior com menos de 2 ou mais de 3 letras (o que é bom até que eles permitam mais). Não lida com vários &quot;.&quot; no domínio (joe@abc.co.uk)." required/>
                    <label>SENHA</label>
                    <input className="inputEmail" type="password" placeholder="Minimo 6 caracteres" pattern="^(?=.*\d).{4,8}$" title="A senha teve conter letras e (4 a 8) numeros, não devera conter caracteres." required/>
                        <a href="file:///C:/Users/Desktop/Desktop/Sua-vida/GED/interface/tela-principal.html">
                    <button className="buttonLogin" type="submit">LOGIN</button>
                        </a> 
                        <a target="_black" href="https://www.workplace.com/work/landing/input/">
                    <button className="button" type="submit">WORDPLACE</button>
                        </a> 
                        <a href="https://sso.godaddy.com/?domain=masterworksdesign.com&realm=pass&app=o365&client-request-id=5029a657-09d2-02d4-a436-bab13efbc2a3&username=&wa=wsignin1.0&wtrealm=urn%3afederation%3aMicrosoftOnline&wctx=estsredirect%3d2%26estsrequest%3drQIIAY1RPYjTYADN1_Ri21MsouLmIS56pMn35a8JKPbXux6lpbSXqyAlSZM01yZfmqSN3uZ2k9zgdKOKQzedtJM43lTE6QZxPJzESXCx5RY3fcPjwVvez10S5qBymz0HoldMs5YFacNcqb8QXMlk1Td3mp_TXxKvxfnb-78_vToG11wtjMwgxsEw7JuhY3s5A7szcHMQRX6oMAyeRCOMhzlsWY5hrkwGxxrzHoAFAGcAzBKSyEmSzAq8KPAy5FiUhzmRNTXUR3la75syzYsST8u8tEwlaaypQ4TEPDxNXG4UJtEArQgHzoH5M5G2cOD2fBxGx-QhKBvTYtmo2-VKsaWVdL9QaneNdsHAoeQUdyZjFePKSK_RDf1Jj5a73XqMuNjCrRhVR21P3A-rD0tQbVQae_buQXG_P2x3hNIwnlS6dUnVY9Mu2g5qbpkjLqjlXXvsSdt7YluOdhE39QK150U9IWh0mjPyvxZ-R1LLeVzsnZAU9k3P6S-S4FsSfE9eZEkllcpkiRvEBvErCV6uLc94cX0PIvXDg2dfN9cfPx8TJ2vMQPN132_V2WbQQVvCjs07sFyYlrerT2scP5GLPNycWr7LlOr3kAKPKHBEUXMqnSKzxC2y1IRnFPhBgcMLxDz9rwdPM1cRi5aFII3kDYgUlleg8GixDj5eIv4A0#">
                    <button className="button" type="submit">OFFICE 365</button>
                        </a> 
                </div>
            </div> 
        </Home>
             
        
    );
}