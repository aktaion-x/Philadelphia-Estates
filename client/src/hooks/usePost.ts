import { useContext, useState } from "react";
import { PostType, PostsType } from '../types/PostTypes'
import { ApiContext } from "../contexts/ApiContext";
import useAuthContext from "./useAuthContext";
import axios, { AxiosResponse } from "axios";



const usePost = () => {
  const [error, setError] = useState<null | string>(null);
  const [isPending, setIsPending] = useState(false);
  const { userData } = useAuthContext();
  const api = useContext(ApiContext)!;

  const getAllPosts = async (typeFilter?: string, cityFilter?: string, priceFilter?: string) => {
    setError(null);
    setIsPending(true);
    try {
      const res = await api.get<PostsType, AxiosResponse>(`/Post/GetAllPosts?${typeFilter ? "stateType=" + typeFilter : ""}&${cityFilter ? "city=" + cityFilter : ""}&${priceFilter ? "orderBy=" + priceFilter : ""}`);
      setIsPending(false);
      return res;
    } catch (error) {
      if (axios.isAxiosError(error) && error.message) {
        const message = error.response?.data ? error.response?.data : error.message
        setError(message);
      }
      setIsPending(false);
    }
  };

  const getPost = async (id: number) => {
    setError(null);
    setIsPending(true);
    try {
      const res = await api.get<PostType, AxiosResponse>(`/Post/GetPost/${id}`);
      setIsPending(false);
      return res;
    } catch (error) {

      if (axios.isAxiosError(error) && error.message) {
        const message = error.response?.data ? error.response?.data : error.message
        setError(message);
      }
      setIsPending(false);
    }
  };

  const getUserPosts = async () => {
    setError(null);
    setIsPending(true);
    try {
      const res = await api.get<PostsType, AxiosResponse>(`/Post/GetUserPosts`, {
        headers: {
          Authorization: `bearer ${userData?.token}`
        }
      });
      setIsPending(false);
      return res;
    } catch (error) {
      if (axios.isAxiosError(error) && error.message) {
        const message = error.response?.data ? error.response?.data : error.message
        setError(message);
      }
      setIsPending(false);
    }

  };

  const createPost = async ({
    stateType,
    city,
    street,
    email,
    features,
    price,
    image
  }: PostType) => {
    setError(null);
    setIsPending(true);
    try {
      const formData = new FormData();
      formData.append("stateType", stateType.toString())
      formData.append("city", city.toString())
      formData.append("street", street)
      formData.append("email", email)
      formData.append("features", features)
      formData.append("price", price.toString())
      if (image) {
        formData.append("image", image)
      }

      const res = await api.post<PostType>(`/Post/CreatePost`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${userData?.token}`
        }
      });
      setIsPending(false);
      return res;
    } catch (error) {
      if (axios.isAxiosError(error) && error.message) {
        const message = error.response?.data ? error.response?.data : error.message
        setError(message);
      }
      setIsPending(false);
    }

  };

  const updatePost = async ({
    id,
    stateType,
    city,
    street,
    email,
    features,
    price,
  }: PostType) => {
    setError(null);
    setIsPending(true);
    try {
      const formData = new FormData();
      formData.append("stateType", stateType.toString())
      formData.append("city", city.toString())
      formData.append("street", street)
      formData.append("email", email)
      formData.append("features", features)
      formData.append("price", price.toString())
      const res = await api.put<PostType>(`/Post/UpdatePost/${id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${userData?.token}`
        }
      });

      setIsPending(false);
      return res;
    } catch (error) {

      if (axios.isAxiosError(error) && error.message) {
        const message = error.response?.data ? error.response?.data : error.message
        setError(message);
      }
      setIsPending(false);
    }

  };

  const deletePost = async (id: number) => {
    setError(null);
    setIsPending(true);
    try {
      const res = await api.delete<PostType>(`/Post/DeleteUserPost/${id}`, {
        headers: {
          Authorization: `bearer ${userData?.token}`
        }
      });
      setIsPending(false);
      return res;
    } catch (error) {
      if (axios.isAxiosError(error) && error.message) {
        const message = error.response?.data ? error.response?.data : error.message
        setError(message);
      }
      setIsPending(false);
    }

  };


  return { error, isPending, getAllPosts, getPost, getUserPosts, createPost, updatePost, deletePost };
};

export default usePost;
