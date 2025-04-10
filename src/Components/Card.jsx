import styles from "../pages/Home/Home.module.css";
import { rating } from "../assets/images";
import useVideo from "../Hooks/useVideo";
import { useEffect, useState, useCallback } from "react";
import axios from "axios";

const Card = () => {
    const [product, setProduct] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 6;

    const paginatedProducts = product.slice(
        currentPage * itemsPerPage,
        (currentPage + 1) * itemsPerPage
    );

    const totalPages = Math.ceil(product.length / itemsPerPage);

    const API_URL = import.meta.env.VITE_API_URL;
    const fetchProducts = useCallback(() => {
        axios.get(`${API_URL}/product`)
            .then((response) => {
                setProduct(response.data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }, [API_URL]);

    useEffect(() => {
        fetchProducts();
    }, [fetchProducts]);

    const {
        newVideo,
        setNewVideo,
        editingVideo,
        showForm,
        setShowForm,
        setEditingVideo,
        addVideo,
        deleteVideo,
        editVideo,
        saveEditVideo
    } = useVideo(fetchProducts); 

    return (
        <>
            <div>
                {!showForm && (
                    <div className={styles.showFormBtn}>
                        <button onClick={() => setShowForm(true)}>
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
                            value={newVideo.name}
                            onChange={(e) => setNewVideo({ ...newVideo, name: e.target.value })}
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
                            <button onClick={() => {
                                setShowForm(false) 
                                setEditingVideo(null) 
                                setNewVideo({ title: "", name: "", price: "" });}} 
                                style={{ backgroundColor: "rgba(246, 73, 32, 1)" }}>
                                Batal
                            </button>
                        </div>
                    </div>
                )}
            </div>

            <div className={styles.cardFlex}>
                {paginatedProducts.map((item) => (

                    <div key={item.id} className={styles.card}>
                        <div className={styles.cardMedia}>
                            <img src={item.image} alt="card.png" className={styles.imgCard} />
                            <div className={styles.cardMedia2}>
                                <div className={styles.contentCard}>
                                    <h6>{item.title}</h6>
                                    <p>{item.description}</p>
                                </div>
                                <div className={styles.avaCard}>
                                    <img src={item.avatar} alt="avatar" />
                                    <div>
                                        <span>{item.name}</span>
                                        <p>{item.job} di <br /><b>{item.company}</b></p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={styles.ratingCard}>
                            <div className={styles.ratingStar}>
                                <img src={rating} alt="rating" />
                                <p><u>3.5 (86)</u></p>
                            </div>
                            <h4>Rp {item.price}</h4>
                        </div>

                        <div className={styles.videoActions}>
                            <button onClick={() => editVideo(item)} style={{ backgroundColor: "rgba(62, 207, 76, 1)" }}>Edit</button>
                            <button onClick={() => deleteVideo(item.id)} style={{ backgroundColor: "rgba(246, 73, 32, 1)" }}>Hapus</button>
                        </div>
                    </div>
                ))}
            </div>
            <div style={{marginLeft:"60px"}}>
                <button
                    style={{backgroundColor:"rgba(63, 202, 27, 0.8)", border:"none", cursor:"pointer"}}
                    disabled={currentPage === 0}
                    onClick={() => setCurrentPage((prev) => prev - 1)}>
                    {`<`}
                </button>
                <span> {currentPage + 1} / {totalPages}</span>
                <button
                    style={{backgroundColor:"rgba(63, 202, 27, 0.8)", border:"none", cursor:"pointer"}}
                    disabled={currentPage === totalPages - 1}
                    onClick={() => setCurrentPage((prev) => prev + 1)}>
                    {`>`}
                </button>
            </div>

        </>
    );
};

export default Card;
