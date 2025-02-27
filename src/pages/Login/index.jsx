import styles from "./Login.module.css"; 
import LogoGoogle from "../../images/icon/logos_google-icon.png";
import { useNavigate } from "react-router";
import { useState } from "react";

const FormLogin = () => {

    const [username, setUsername] = useState ("")
    const [password, setPassword] = useState  ("")
    const navigate = useNavigate () 
    const handleLogin = (e) => {
        e.preventDefault();
        
        username && password ? alert("Login sukses!") & navigate("/Home") : alert("Username atau Password salah");
        };

    return (
        <>
            <div className={styles.containerLogin}>
                <form onSubmit={handleLogin} className={styles.LoginForm}>
                    <div className={styles.content}>
                        <h3 className={styles.title}>Masuk ke Akun</h3>
                        <p className={styles.subtitle}>
                        Yuk, lanjutin belajarmu di videobelajar.
                        </p>
                    </div>
                    <fieldset>
                        <label htmlFor="email">E-mail <span className={styles.bintang}>*</span>
                            <input className={styles.inputLogin} type="text" id="email" name="email" placeholder="Masukan E-mail" 
                            value={username} onChange={(e) => setUsername(e.target.value)} required />
                        </label>

                        <label htmlFor="password">Kata Sandi <span className={styles.bintang}>*</span>
                            <input className={styles.inputLogin} type="password" id="kataSandi" name="kataSandi" placeholder="Masukan Kata Sandi" 
                            value={password} onChange={(e) => setPassword(e.target.value)} required />
                        </label>

                        <a href="#" className={styles.forgetPw}>Lupa Password?</a>
                        
                        <button type="submit" className={`${styles.btn} ${styles.btnLogin}`}>Masuk</button>

                        <a>
                            <button type="button"
                            onClick={() => {navigate ("/Register")}}
                            className={`${styles.btn} ${styles.btnRegister}`}>Daftar</button>
                        </a>
                        
                        <div className={styles.separator}>atau</div>
                        
                        <a href="https://myaccount.google.com">
                            <button type="button" className={styles.btnGoogle}>
                                <img src={LogoGoogle} alt="Google Logo" />
                                <p>Masuk dengan Google</p>
                            </button>
                        </a>
                    </fieldset>
                </form>
            </div>
        </>
    );
};

export default FormLogin;
