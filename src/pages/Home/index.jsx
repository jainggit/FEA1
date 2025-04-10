import styles from "./Home.module.css";
import { ava, Logo } from "../../assets/images";
import { Navbar }   from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import { useState, useRef } from "react";
import Card from "../../Components/Card"
import useClickOutside from "../../Hooks/useClick";

const Home = () => {
    
    const [open, setOpen] = useState(false);
    const navRef = useRef(null);

    useClickOutside(navRef, () => setOpen(false));

    return (
        <>
            {/* Navbar */}
            <nav className={styles.nav}>
                <div className={styles.navImg}>
                    <img src={Logo} alt="logo.videobelajar" />
                </div>
                <div className= {styles.navDrop}>
                    <div className={styles.avaContain} >
                        <p className={styles.navText}>Kategori</p>
                        <img
                            src={ava}
                            alt="ava.png"
                            style={{ width: 44, height: 44, borderRadius: 10, cursor:"pointer"}}
                            onClick={() => setOpen(!open)}
                        />
                    </div>
                    <span ref={navRef}>
                        {open && <Navbar />}
                    </span>
                </div>
            </nav>

            {/* Container */}
            <div className={styles.containerHome}>
                <div className={styles.top}>
                    <div className={styles.topContent}>
                        <h1>Revolusi Pembelajaran: Temukan Ilmu Baru melalui Platform Video Interaktif!</h1>
                        <p>Temukan ilmu baru yang menarik dan mendalam melalui koleksi video pembelajaran berkualitas tinggi. 
                            Tidak hanya itu, Anda juga dapat berpartisipasi dalam latihan interaktif yang akan meningkatkan pemahaman Anda.
                        </p>
                    </div>
                        <a href="#">
                            <button type="button" className={styles.btnTop}>
                                Temukan Video Course untuk Dipelajari!
                            </button>
                        </a>
                </div>

                {/* Content */}
                <div className={styles.contentHome}>
                        <div className={styles.Home}>
                            <h3 style={{ marginBottom: 10 }}>
                                Koleksi Video Pembelajaran Unggulan
                            </h3>
                            <p>
                                Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!
                            </p>
                            <ul id={styles.contentLink}>
                                <li>Semua Kelas</li>
                                <li>Pemasaran</li>
                                <li>Desain</li>
                                <li>Pengembangan Diri</li>
                                <li>Bisnis</li>
                            </ul>
                        </div>
                    
                    <Card />
                </div>
                

                {/* Bottom Section */}
                <div className={styles.bottom}>
                    <div className={styles.bottomContent}>
                        <h6 style={{color: "rgba(193, 194, 196, 1)"}}>NEWSLETTER</h6>
                        <h3 style={{color: "rgba(255, 255, 255, 1)"}}>Mau Belajar Lebih Banyak?</h3>
                        <p style={{color: "rgba(255, 255, 255, 1)", fontWeight: 400}}> Daftarkan dirimu untuk mendapatkan informasi terbaru dan penawaran 
                            spesial dari program-program terbaik hariesok.id
                        </p>
                    </div>
                    <form action="#" className={styles.formHome}>
                        <input type="email" id="email" name="email" placeholder="Masukan E-mail" required className={styles.inputHome} />
                        <button className={styles.btnBottom}>Subscribe</button>
                    </form>
                    </div>
                </div>

            <Footer />
        </>
    );
};

export default Home;
