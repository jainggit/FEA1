import styles from "./Register.module.css";
import LogoGoogle from "../../images/icon/logos_google-icon.png";
import Flag from "../../images/icon/flag.png";
import { useNavigate } from "react-router";
import { useState } from "react";

const FormRegister = () => {

    const [name, setName] = useState ("")
    const [email, setEmail] = useState ("")
    const [nomor, setNomor] = useState ("")
    const [password, setPassword] = useState ("")
    const [confirm, setConfirm] = useState ("")

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        if (![name, email, nomor, password, confirm].every(Boolean)) return alert("Harus Diisi semua!!!")
        if (password !== confirm) return alert("Password harus sama!!!")

    navigate("/");
    }


    return (
        <>
            <div className={styles.container}>
                <form onSubmit={handleSubmit} className={styles.RegisterForm}>
                    <div className={styles.content}>
                        <h3 className={styles.title}>Pendaftaran Akun</h3>
                        <p className={styles.subtitle}>Yuk, daftarkan akunmu sekarang juga!</p>
                    </div>    
                    <fieldset>
                        <label htmlFor="nama">Nama Lengkap<span className={styles.bintang}>*</span>
                            <input className={styles.inputReg} 
                            value={name} onChange={(e) => setName(e.target.value)} type="text" id="nama" name="nama" placeholder="Masukkan Nama Lengkapmu" required />
                        </label>
                        <label htmlFor="email">E-mail <span className={styles.bintang}>*</span>
                            <input className={styles.inputReg} 
                            value={email} onChange={(e) => setEmail(e.target.value)} type="text" id="email" name="email" placeholder="Masukkan E-mail" required />
                        </label>

                        <div>
                            <label htmlFor="nomor" className={styles.nomorHp}>No. Hp <span className={styles.bintang}>*</span>
                                <div className={styles.flagOption}>
                                    <div className={styles.flagContain}>
                                        <img src={Flag} alt="flag" className={styles.flag} />
                                        <select name="country-code" id="country-code-select" className={styles.nomor}>
                                            <option value="indonesia" selected disabled>+62</option>
                                        </select>
                                    </div>
                                    <input type="number" 
                                    value={nomor} onChange={(e) => setNomor(e.target.value)} id="nomor" name="nomor" placeholder="Masukkan Nomor Hp" className={styles.inputNomor} required />
                                </div>                     
                            </label>
                        </div>

                        <label htmlFor="password">Kata Sandi <span className={styles.bintang}>*</span> 
                            <input className={styles.inputReg} 
                            value={password} onChange={(e) => setPassword(e.target.value)} type="password" id="kataSandi" name="kataSandi" placeholder="Masukkan Kata Sandi" required />
                        </label> 
                        <label htmlFor="password">Konfirmasi Kata Sandi <span className={styles.bintang}>*</span> 
                            <input className={styles.inputReg} 
                            value={confirm} onChange={(e) => setConfirm(e.target.value)} type="password" id="konfirmasiKataSandi" name="konfirmasiKataSandi" placeholder="Konfirmasi Kata Sandi" required />
                        </label>
                    
                        <a href="#" className={styles.forgetPw}>Lupa Password?</a>
                        
                        <a>
                            <button type="submit" className={`${styles.btn} ${styles.btnLogin}`}>Daftar</button>
                        </a>
                        <a>
                            <button type="button"
                            onClick={() => {navigate("/")}}
                            className={`${styles.btn} ${styles.btnRegister}`}>Masuk</button>
                        </a>
                        <div className={styles.separator}>atau</div>
                        <a href="https://myaccount.google.com">
                            <button type="button" className={styles.btnGoogle}>
                                <img src={LogoGoogle} />
                                <p>Daftar dengan Google</p>
                            </button>
                        </a>
                    </fieldset>
                </form>
            </div>
        </>
    )
}

export default FormRegister;
