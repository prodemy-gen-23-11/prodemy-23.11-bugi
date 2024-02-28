import React, { useEffect } from "react";
import useSWR, { mutate } from "swr";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import Content from "../layouts/Content";

function FormPage() {
    const navigate = useNavigate();

    const { id } = useParams();

    const isEdit = Boolean(id);

    // yup schema
    const schema = yup.object().shape({
        name: yup.string().required("Name is required"),
        desc: yup.string().required("Description is required"),
        price: yup.string().required("Normal price is required"),
        discount: yup.string().required("Discount is required"),
        imageUrl: yup.string().required("Main image link is required"),
        previews: yup.string().required("Preview image links are required"),
    });

    // react-hook-form setup w/ yup resolver
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        setValue
    } = useForm({
        resolver: yupResolver(schema)
    });

    if (isEdit) {
        const getData = (url) => axios.get(url).then((response) => response.data);

        const { data: selectedProduct, error } = useSWR(`http://localhost:3000/products/${id}`, getData);

        useEffect(() => {
            setValue("name", selectedProduct?.name)
            setValue("desc", selectedProduct?.desc)
            setValue("price", selectedProduct?.price)
            setValue("discount", selectedProduct?.discount)
            setValue("imageUrl", selectedProduct?.imageUrl)
            setValue("previews", (selectedProduct?.previews)?.toString().replaceAll(",", "\n"));
        },
            [selectedProduct]);
    }

    const onSubmitForm = async (data) => {
        const payload = {
            name: data?.name,
            desc: data?.desc,
            price: data?.price,
            discount: data?.discount,
            imageUrl: data?.imageUrl,
            previews: data?.previews?.split("\n")
        }

        if (isEdit) {
            axios.put(`http://localhost:3000/products/${id}`, payload)
                .then(() => {
                    reset();
                    mutate();
                    alert("Product succesfully edited!");
                })
                .catch((error) => console.log(error));
        } else {
            axios.post(`http://localhost:3000/products/`, payload)
                .then(() => {
                    reset();
                    mutate();
                    alert("New product succesfully added!");
                })
                .catch((error) => console.log(error));
        }

        await new Promise(r => setTimeout(r, 500));
        navigate(`/admin`)
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    });

    return (
        <>
            <Content>
                <div className="relative w-4/5 mx-auto bg-sky-200 rounded-lg px-8 pt-2 pb-4 mt-12">
                    <h1 className="absolute -top-12 left-0 text-3xl font-bold ">{isEdit ? "Update Product Form" : "Add New Product Form"}</h1>
                    <form onSubmit={handleSubmit(onSubmitForm)}>
                        <div className="my-4">
                            <label htmlFor="name" className="text-xl">Product Name</label>
                            <input placeholder="Name" type="text" id="name"
                                className="w-full rounded-lg border-2 border-gray-200 p-2 mt-1 text-lg focus:outline-sky-400"
                                {...register("name")} />
                            <p className="error text-red-500 my-1">{errors.name?.message}</p>
                        </div>

                        <div className="my-4">
                            <label htmlFor="desc" className="text-xl">Description</label>
                            <input placeholder="Product description" type="text" id="desc"
                                className="w-full rounded-lg border-2 border-gray-200 p-2 mt-1 text-lg focus:outline-sky-400"
                                {...register("desc")} />
                            <p className="error text-red-500 my-1">{errors.desc?.message}</p>
                        </div>

                        <div className="my-4">
                            <label htmlFor="price" className="text-xl">Original Price</label>
                            <input placeholder="Normal price" type="number" id="priceMax"
                                className="w-full rounded-lg border-2 border-gray-200 p-2 mt-1 text-lg focus:outline-sky-400"
                                {...register("price")} />
                            <p className="error text-red-500 my-1">{errors.price?.message}</p>
                        </div>

                        <div className="my-4">
                            <label htmlFor="discount" className="text-xl">Discount</label>
                            <input placeholder="Discount (in %)" type="number" id="price" min="0" max="99"
                                className="w-full rounded-lg border-2 border-gray-200 p-2 mt-1 text-lg focus:outline-sky-400"
                                {...register("discount")} />
                            <p className="error text-red-500 my-1">{errors.discount?.message}</p>
                        </div>

                        <div className="my-4">
                            <label htmlFor="imageUrl" className="text-xl">Main Image Link</label>
                            <input placeholder="Image link" type="url" id="imageUrl"
                                className="w-full rounded-lg border-2 border-gray-200 p-2 mt-1 text-lg focus:outline-sky-400"
                                {...register("imageUrl")} />
                            <p className="error text-red-500 my-1">{errors.imageUrl?.message}</p>
                        </div>

                        <div className="my-4">
                            <label htmlFor="previews" className="text-xl">Preview Image Links</label>
                            <textarea placeholder="Preview image links" id="previews"
                                className="h-40 w-full rounded-lg border-2 border-gray-200 p-2 mt-1 text-lg focus:outline-sky-400"
                                {...register("previews")}>
                            </textarea>
                            <p className="error text-red-500 my-1">{errors.previews?.message}</p>
                        </div>

                        <div className="text-right">
                            <button type="submit" className="w-40 h-10 px-2 bg-sky-600 rounded-lg text-zinc-50 font-semibold hover:bg-sky-700 hover:scale-105 duration-200">
                                {isEdit ? "Update Product" : "Add Product"}
                            </button>
                        </div>
                    </form>
                </div>
            </Content>
        </>
    );
}

export default FormPage;