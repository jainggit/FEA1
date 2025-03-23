import styles from "./Home.module.css";
import { ava, Logo, rating, avatars, cards } from "../../assets/images";
import { Navbar }   from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import { useState, useEffect, useRef } from "react";


const Home = () => {

    const [open, setOpen] = useState(false);
    const [showForm, setShowForm] = useState(false)
    const navRef = useRef(null);
    const [videos, setVideos] = useState([
        { id: 1, title: "Big 4 Auditor Financial Analyst", instructor: "Jenna Ortega", price: "300K" },
        { id: 2, title: "UI/UX Design Masterclass", instructor: "John Doe", price: "250K" },
        { id: 3, title: "Data Science with Python", instructor: "Jane Smith", price: "400K" }
    ]);

    const [newVideo, setNewVideo] = useState({ title: "", instructor: "", price: "" });
    const [editingVideo, setEditingVideo] = useState(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (navRef.current && !navRef.current.contains(event.target)) {
                setOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const addVideo = () => {
        if (!newVideo.title || !newVideo.instructor || !newVideo.price) return;
        setVideos([...videos, { ...newVideo, id: Date.now() }]);
        setNewVideo({ title: "", instructor: "", price: "" });
        setShowForm(false)
    };

    const deleteVideo = (id) => {
        setVideos(videos.filter(video => video.id !== id));
    };

    const editVideo = (video) => {
        setEditingVideo(video);
        setNewVideo(video);
        setShowForm(true)
    };

    const saveEditVideo = () => {
        setVideos(videos.map(video => (video.id === editingVideo.id ? newVideo : video)));
        setEditingVideo(null);
        setNewVideo({ title: "", instructor: "", price: "" });
        setShowForm(false)
    };

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

                    {!showForm && (
                        <div className={styles.showFormBtn}>                        
                            <button onClick={() => setShowForm(true)} >
                                Tambah Video
                            </button>
                        </div>

                    )}

                    {showForm && (
                        <div className={styles.addVideoForm}>
                            <input
                                type="text"
                                placeholder="Judul Video"
                                value={newVideo.title}
                                onChange={(e) => setNewVideo({ ...newVideo, title: e.target.value })}
                            />
                            <input
                                type="text"
                                placeholder="Nama Instruktur"
                                value={newVideo.instructor}
                                onChange={(e) => setNewVideo({ ...newVideo, instructor: e.target.value })}
                            />
                            <input
                                type="text"
                                placeholder="Harga"
                                value={newVideo.price}
                                onChange={(e) => setNewVideo({ ...newVideo, price: e.target.value })}
                            />
                            <div className={styles.formActions}>
                                {editingVideo ? (
                                    <button onClick={saveEditVideo}>Simpan</button>
                                ) : (
                                    <button onClick={addVideo}>Tambah Video</button>
                                )}
                                <button onClick={() => setShowForm(false)} style={{backgroundColor: "rgba(246, 73, 32, 1)"}}>Batal</button>
                            </div>
                        </div>
                    )}
                        

                    {/* Cards */}
                    <div className={styles.cardFlex}>
                        {videos.map((video, index) => (
                            <div key={video.id} className={styles.card}>
                                <div className={styles.cardMedia}>
                                    <img src={cards[index % cards.length]} alt="card.png" className={styles.imgCard} />
                                    <div className={styles.cardMedia2}>
                                        <div className={styles.contentCard}>
                                            <h6>{video.title}</h6>
                                            <p>
                                                Mulai transformasi dengan instruktur <br />
                                                profesional, harga yang terjangkau, dan kurikulum terbaik.
                                            </p>
                                        </div>
                                        <div className={styles.avaCard}>
                                            <img src={avatars[index % avatars.length]} alt="avatar" />
                                            <div>
                                                <span>{video.instructor}</span>
                                                <p> Senior Accountant di <b>Gojek</b> </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className={styles.ratingCard}>
                                    <div className={styles.ratingStar}>
                                        <img src={rating} alt="rating" />
                                        <p><u>3.5 (86)</u></p>
                                    </div>
                                    <h4>Rp {video.price}</h4>
                                </div>

                                <div className={styles.videoActions}>
                                    <button onClick={() => editVideo(video)} style={{backgroundColor: "rgba(62, 207, 76, 1)"}}>Edit</button>
                                    <button onClick={() => deleteVideo(video.id)} style={{backgroundColor: "rgba(246, 73, 32, 1)"}}>Hapus</button>
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
