import styles from "../Footer/Footer.module.css"
import Logo from "../../images/icon/Logo.png"
import Sosmed from "../../images/icon/sosmed logo.png"


const Footer = () => {

    return(
        <>
            <footer>
                <div className={styles.footerContent}>
                    <div className={styles.contentImg}>
                        <img src={Logo} alt="logo.png" />
                        <h6>Gali Potensi Anda Melalui Pembelajaran Video di hariesok.id!</h6>
                        <p>Jl. Usman Effendi No. 50 Lowokwaru, Malang</p>
                        <p>+62-877-7123-1234</p>
                    </div>

                    <div className={styles.contentInformation}>
                        <div className={styles.informationContent}>
                            <span className={styles.headP}>Kategori</span>
                            <p>Digital & Teknologi</p>
                            <p>Pemasaran</p>
                            <p>Manajemen Bisnis</p>
                            <p>Pengembangan Diri</p>
                            <p>Desain</p>
                        </div>
                        <div className={styles.informationContent}>
                            <span className={styles.headP}>Perusahaan</span>
                            <p>Tentang Kami</p>
                            <p>FAQ</p>
                            <p>Kebijakan Privasi</p>
                            <p>Ketentuan Layanan</p>
                            <p>Bantuan</p>
                        </div>
                        <div className={styles.informationContent}>
                            <span className={styles.headP}>Komunitas</span>
                            <p>Tips Sukses</p>
                            <p>Bantuan</p>
                        </div>         
                    </div>
                </div>
                <hr />
                <div className={styles.copyRight}>
                    <p>@2023 Gerobak Sayur All Rights Reserved.</p>
                    <img src={Sosmed} alt="" />
                </div>
            </footer>
        </>
    )
}

export default Footer