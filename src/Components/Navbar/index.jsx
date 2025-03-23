import "./style.css"
import { useNavigate } from "react-router"
export const Navbar = () => {

    const navigate = useNavigate()

    return (
        <>
            <div className="containerNav">
                <button>Profile Saya</button>
                <button>Kelas Saya</button>
                <button>Pesanan Saya</button>
                <button style={{color : "red"}} onClick={() => {navigate(-1)}}>Keluar <span>/</span></button>
            </div>
            
        </>
    )
}