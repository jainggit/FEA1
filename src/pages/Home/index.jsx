import styles from "./Home.module.css";
import ava from "../../images/background/ava.png";
import Logo from "../../images/icon/Logo.png";
import ava1 from "../../images/icon/Avatar1.png";
import ava2 from "../../images/icon/Avatar2.png";
import ava3 from "../../images/icon/Avatar3.png";
import ava4 from "../../images/icon/Avatar4.png";
import ava5 from "../../images/icon/Avatar5.png";
import ava6 from "../../images/icon/Avatar6.png";
import ava7 from "../../images/icon/Avatar7.png";
import ava8 from "../../images/icon/Avatar8.png";
import ava9 from "../../images/icon/Avatar9.png";

import card1 from "../../images/background/card1.jpeg";
import card2 from "../../images/background/card2.jpeg";
import card3 from "../../images/background/card3.jpeg";
import card4 from "../../images/background/card4.jpeg";
import card5 from "../../images/background/card5.jpeg";
import card6 from "../../images/background/card6.jpeg";
import card7 from "../../images/background/card7.jpeg";
import card8 from "../../images/background/card8.jpeg";
import card9 from "../../images/background/card9.jpeg";
import rating from "../../images/icon/Rating.png";
import Footer from "../../Components/Footer";

const Home = () => {
    return (
        <>
            {/* Navbar */}
            <nav className={styles.nav}>
                <div className={styles.navImg}>
                    <img src={Logo} alt="logo.videobelajar" />
                    <p className={styles.navText}>Kategori</p>
                </div>
                <div className={styles.avaContain}>
                <img
                    src={ava}
                    alt="ava.png"
                    style={{ width: 44, height: 44, borderRadius: 10 }}
                />
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

                        

                    {/* Cards */}
                    <div className={styles.cardFlex}> {[ card1, card2, card3, card4, card5, card6, card7, card8, card9, ].map((card, index) => 
                    
                        (
                            
                            <div key={index} className={styles.card}>
                                <div className={styles.cardMedia}>
                                    <img src={card} alt="card.png" className={styles.imgCard} />
                                    <div className={styles.cardMedia2}>
                                        <div className={styles.contentCard}>
                                            <h6>Big 4 Auditor Financial Analyst</h6>
                                            <p>
                                                Mulai transformasi dengan instruktur <br />
                                                profesional, harga yang terjangkau, dan kurikulum
                                                terbaik
                                            </p>
                                        </div>
                                        <div className={styles.avaCard}>
                                            <img src={[ava1, ava2, ava3, ava4, ava5, ava6, ava7, ava8, ava9,][index]} alt="avatar" />
                                            <div>
                                                <span>Jenna Ortega</span>
                                                <p> Senior Accountant di <b>Gojek</b> </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            
                                <div className={styles.ratingCard}>
                                    <div className={styles.ratingStar}>
                                        <img src={rating} alt="rating" />
                                        <p>
                                        <u>3.5 (86)</u>
                                        </p>
                                    </div>
                                    <h4>Rp 300K</h4>
                                </div>
                            </div>
                        
                        ))}
                    </div>
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
