import React from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { setTokenAction, setUserAction } from "../store/reducers/authSlice";
import Content from "../layouts/Content";

function LoginPage() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    // yup schema
    const schema = yup.object().shape({
        email: yup.string().email().required("Email is required"),
        password: yup.string().required("Password is required")
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

    const onSubmitForm = (data) => {
        axios
            .post("http://localhost:3000/login", data)
            .then((res) => {
                console.log("Res run")
                console.log(res)
                console.log(res.data)
                const { accessToken, user } = res.data;
                console.log(user);
                dispatch(setTokenAction(accessToken));
                dispatch(setUserAction(user));
                navigate("/");
                reset();
            })
            .catch((error) => {
                console.log("Error run")
                console.log(error);
            });
    };

    return (
        <>
            <Content>
                <div className="relative w-4/5 mx-auto bg-sky-200 rounded-md px-8 pt-2 pb-4 mt-12">
                    <h1 className="absolute -top-12 left-0 text-3xl font-bold">Welcome! Please login here</h1>

                    <form onSubmit={handleSubmit(onSubmitForm)}>
                        <div className="my-4">
                            <label htmlFor="email" className="text-xl">Email</label>
                            <input placeholder="Email" type="email" id="email"
                                className="w-full rounded-lg border-2 border-gray-200 p-2 mt-1 text-lg focus:outline-sky-400"
                                {...register("email")} />
                            <p className="error text-red-500 my-1">{errors.email?.message}</p>
                        </div>

                        <div className="my-4">
                            <label htmlFor="password" className="text-xl">Password</label>
                            <input placeholder="Password" type="password" id="password"
                                className="w-full rounded-lg border-2 border-gray-200 p-2 mt-1 text-lg focus:outline-sky-400"
                                {...register("password")} />
                            <p className="error text-red-500 my-1">{errors.password?.message}</p>
                        </div>

                        <button type="submit" className="w-full h-10 px-2 bg-sky-500 rounded-lg text-zinc-50 font-semibold hover:bg-sky-600 duration-200">
                            Login
                        </button>
                    </form>
                </div>
            </Content>
        </>
    );
};

export default LoginPage;