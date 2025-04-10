import { useEffect, useState, useCallback } from "react";
import axios from "axios";

const useVideo = (onChangeCallback) => {
    const [videos, setVideos] = useState([]);
    const [newVideo, setNewVideo] = useState({ title: "", name: "", price: "" });
    const [editingVideo, setEditingVideo] = useState(null);
    const [showForm, setShowForm] = useState(false);
    const API_URL = import.meta.env.VITE_API_URL;

    const fetchVideos = useCallback(async () => {
        try {
            const response = await axios.get(`${API_URL}/product`);
            setVideos(response.data);
        } catch (error) {
            console.error("Gagal fetch video:", error);
        }
    }, [API_URL]);

    useEffect(() => {
        fetchVideos();
    }, [fetchVideos]);

    const addVideo = async () => {
        try {
            await axios.post(`${API_URL}/product`, newVideo);
            onChangeCallback(); 
            setShowForm(false);
            setNewVideo({ title: "", name: "", price: "" });
        } catch (error) {
            console.error("Gagal tambah:", error);
        }
    };

    const deleteVideo = async (id) => {
        try {
            await axios.delete(`${API_URL}/product/${id}`);
            onChangeCallback?.();
        } catch (error) {
            console.error("Gagal hapus:", error);
        }
    };

    const editVideo = (video) => {
        setEditingVideo(video);
        setNewVideo({
            title: video.title,
            name: video.name,
            price: video.price
        });
        setShowForm(true);
    };

    const saveEditVideo = async () => {
        try {
            await axios.put(`${API_URL}/product/${editingVideo.id}`, newVideo);
            onChangeCallback(); 
            setEditingVideo(null); 
            setShowForm(false);    
        } catch (error) {
            console.error("Gagal edit:", error);
        }
    };

    return {
        videos,
        newVideo,
        setNewVideo,
        editingVideo,
        setEditingVideo,
        showForm,
        setShowForm,
        addVideo,
        deleteVideo,
        editVideo,
        saveEditVideo,
        fetchVideos
    };
};

export default useVideo;
