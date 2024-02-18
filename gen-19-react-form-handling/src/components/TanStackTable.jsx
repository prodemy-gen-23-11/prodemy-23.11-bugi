import React, { useState } from "react";
import useSWR from "swr";
import axios from "axios";
import {
    useReactTable,
    flexRender,
    createColumnHelper,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel
} from "@tanstack/react-table";
import { AddIcon, SearchIcon } from "../assets/Icons";
import ButtonAdmin from "./ButtonAdmin";
import { useNavigate } from "react-router-dom";

function TanStackTable() {
    const navigate = useNavigate()

    const onClickRedirectForm = () => {
        navigate(`./newProduct`);
    }

    const getData = (url) => axios.get(url).then((response) => response.data);

    const { data, error, isLoading, mutate } = useSWR("http://localhost:3000/products", getData);

    const columnHelper = createColumnHelper();

    const columns = [
        columnHelper.accessor("id", {
            cell: (info) => (
                <div className="text-center">
                    <p>{info.getValue()}</p>
                </div>
            ),
            header: "ID"
        }),
        columnHelper.accessor("imageUrl", {
            cell: (info) => <img
                className="w-32 h-32"
                src={info.getValue()} />,
            header: "Image"
        }),
        columnHelper.accessor("name", {
            header: "Name"
        }),
        columnHelper.accessor("desc", {
            header: "Description"
        }),
        columnHelper.accessor("price", {
            header: "Current Price"
        }),
        columnHelper.accessor("priceMax", {
            header: "Normal Price"
        }),
        ,
        columnHelper.accessor("", {
            header: "Action"
        })
    ]

    const [searchFilter, setSearchFilter] = useState("");

    const table = useReactTable({
        data,
        columns,
        // state: {
        //     searchFilter
        // },
        getCoreRowModel: getCoreRowModel()
    });

    if (!isLoading) return (
        <div className="mx-auto">
            {/* search & add button section */}
            <div className="flex justify-between mb-2">
                <div className="flex items-center gap-2 invisible">
                    <SearchIcon className="w-6 h-6 text-sky-600"/>
                    <input 
                        onChange={(value) => setSearchFilter(value)}
                        className="px-2 w-3/5 bg-transparent border-b-2 border-sky-400 outline-none focus:w-4/5 focus:border-sky-600 duration-200"
                        placeholder="Search..."/>
                </div>
                <button onClick={onClickRedirectForm} className="w-36 h-10 px-2 bg-sky-400 rounded-lg text-zinc-50 font-semibold hover:bg-sky-600 duration-200">
                    <AddIcon className="inline-block mr-2 text-xl"/>
                    Add Product
                </button>
            </div>

            {/* TanStack table */}
            <table className="border border-sky-400 w-full text-left">
                <thead className="bg-sky-600 text-zinc-50 text-center">
                    {
                        table.getHeaderGroups().map((headerGroup) => (
                            <tr key={headerGroup.id}>
                                {headerGroup.headers.map((header) => (
                                    <th key={header.id} className="px-2 border-x border-b border-sky-400">
                                        {flexRender(
                                            header.column.columnDef.header,
                                            header.getContext()
                                        )}
                                    </th>
                                ))}
                            </tr>
                        ))
                    }
                </thead>

                <tbody>
                    {
                        table.getRowModel().rows.length ? (
                            table.getRowModel().rows.map((row, i) => (
                                <tr
                                    key={row.id}
                                    className={`
                                        ${i % 2 === 0 ? "bg-sky-100" : "bg-sky-200"}
                                    `}
                                >
                                    {/* {console.log(row)} */}
                                    {row.getVisibleCells().map((cell) => (
                                        <td key={cell.id} className="px-2 border-x border-sky-400">
                                            {flexRender(
                                                cell.column.columnDef.cell,
                                                cell.getContext())}
                                            {console.log(cell)}
                                        </td>
                                    ))}
                                </tr>
                            ))
                        ) : null
                    }
                </tbody>
            </table>
        </div>
    );
}

export default TanStackTable;