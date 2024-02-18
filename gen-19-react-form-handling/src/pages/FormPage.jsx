import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup";
import Content from "../layouts/Content";

function FormPage() {
    const schema = yup.object().shape({
        name: yup.string().required("Name is required"),
        desc: yup.string().required("Description is required"),
        price: yup.string().required("Original price is required"),
        priceMax: yup.string().required("Current price is required"),
        imageUrl: yup.string().required("Main image link is required"),
        previews: yup.string().required("Preview image links are required"),
    });

    // react-hook-form setup w/ yup resolver
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmitForm = (data) => {
        console.log(data);

        const previewsArray = data.previews.split("\n");
        console.log(previewsArray)
    }

    useEffect(() => window.scrollTo(0,0));

    return (
        <>
            <Content>
                <div className="relative w-4/5 mx-auto bg-sky-200 rounded-lg px-8 pt-2 pb-4 mt-12">
                <h1 className="absolute -top-12 left-0 text-3xl font-bold ">Product Form</h1>
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
                            <label htmlFor="priceMax" className="text-xl">Original Price</label>
                            <input placeholder="Original price" type="text" id="priceMax"
                                className="w-full rounded-lg border-2 border-gray-200 p-2 mt-1 text-lg focus:outline-sky-400"
                                {...register("priceMax")} />
                            <p className="error text-red-500 my-1">{errors.priceMax?.message}</p>
                        </div>

                        <div className="my-4">
                            <label htmlFor="price" className="text-xl">Current Price</label>
                            <input placeholder="Current price" type="text" id="price"
                                className="w-full rounded-lg border-2 border-gray-200 p-2 mt-1 text-lg focus:outline-sky-400"
                                {...register("price")} />
                            <p className="error text-red-500 my-1">{errors.price?.message}</p>
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
                                Add Product
                            </button>
                        </div>
                    </form>
                </div>
            </Content>
        </>
    );
}

export default FormPage;