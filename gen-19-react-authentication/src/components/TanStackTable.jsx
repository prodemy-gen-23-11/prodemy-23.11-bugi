import React, { useState, useMemo } from "react";
import useSWR from "swr";
import axios from "axios";
import {
    useReactTable,
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel
} from "@tanstack/react-table";
import { AddIcon, SearchIcon } from "../assets/Icons";
import { useNavigate } from "react-router-dom";
import DeletePopUp from "./DeletePopUp";
import toRupiah from "../utils/formatter";

function TanStackTable() {
    const navigate = useNavigate();

    const getData = (url) => axios.get(url).then((response) => response.data);

    const { data, error, isLoading, mutate } = useSWR("http://localhost:3000/products", getData);

    const [searchFilter, setSearchFilter] = useState(``);
    const [showPopup, setShowPopup] = useState(false);

    const onClickRedirectFormAdd = () => {
        navigate(`./newProduct`);
    }

    const onClickRedirectFormEdit = (id) => {
        navigate(`./newProduct/${id}`);
    }

    const onClickDeleteProduct = (id) => {
        let confirmDelete = false;

        console.log("Show popup before: " + showPopup);
        setShowPopup(true);

        const productName = data?.find(product => product.id === id).name;

        const popupCallback = (confirm) => {
            confirmDelete = confirm;
        }

        console.log("Show popup after: " + showPopup);

        //if (confirmDelete) 
        axios.delete(`http://localhost:3000/products/${id}`).then(() => mutate());
    }

    // react table columns setup
    const columnsNew = [
        {
            header: "ID",
            accessorKey: "id",
            cell: (info) => (
                <div className="text-center">
                    <p>{info.getValue()}</p>
                </div>
            )
        },
        {
            header: "Image",
            accessorKey: "imageUrl",
            cell: (info) => <img
                className="w-28 h-28"
                src={info.getValue()} />
        },
        {
            header: "Name",
            accessorKey: "name"
        },
        {
            header: "Description",
            accessorKey: "desc"
        },
        {
            header: "Current Price",
            cell: (props) =>
                <span>{toRupiah(props.row.original?.price * ((100 - props.row.original?.discount) / 100))}</span>
        },
        {
            header: "Discount",
            accessorKey: "discount",
            cell: (info) => (
                <div className="text-center">
                    <span>{info.getValue()}%</span>
                </div>
            )
        },
        {
            header: "Normal Price",
            accessorKey: "price",
            cell: (info) => 
                <span>{toRupiah(info.getValue())}</span>
        },
        {
            header: "Action",
            cell: (props) => {
                return (
                    <>
                        <div className="flex flex-row gap-4">
                            <button
                                className="button-admin hover:bg-sky-600 duration-200"
                                onClick={() => onClickRedirectFormEdit(props.row.original?.id)} >
                                Edit
                            </button>

                            <button
                                className="button-admin bg-red-400 hover:bg-red-600 duration-200"
                                onClick={() => onClickDeleteProduct(props.row.original?.id)} >
                                Delete
                            </button>
                        </div>
                    </>
                )
            }
        }
    ]

    // react table instance
    const table = useReactTable({
        data,
        columns: columnsNew,
        getCoreRowModel: getCoreRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        state: {
            globalFilter: searchFilter
        },
        onGlobalFilterChange: setSearchFilter
    });

    if (!isLoading) return (
        <div className="mx-auto">
            {/* search & add button section */}
            <div className="flex justify-between mb-2">
                <div className="flex items-center gap-2">
                    <SearchIcon className="w-6 h-6 text-sky-600" />
                    <input type="text" value={searchFilter}
                        onChange={(e) => setSearchFilter(e.target.value)}
                        className="px-2 w-3/5 bg-transparent border-b-2 border-sky-400 outline-none focus:w-4/5 focus:border-sky-600 focus:placeholder-transparent duration-300"
                        placeholder="Search..." />
                </div>
                <button onClick={onClickRedirectFormAdd} className="button-admin w-36 hover:bg-sky-600 duration-200">
                    <AddIcon className="inline-block mr-2 text-xl" />
                    Add Product
                </button>
            </div>

            {/* TanStack react table */}
            <table className="border border-sky-400 w-full text-left">
                <thead className="bg-sky-600 text-zinc-50 text-center">
                    {
                        table.getHeaderGroups().map(headerGroup => (
                            <tr key={headerGroup.id}>
                                {headerGroup.headers.map(header => (
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
                                    {row.getVisibleCells().map(cell => (
                                        <td key={cell.id} className="px-2 border-x border-sky-400">
                                            {flexRender(
                                                cell.column.columnDef.cell,
                                                cell.getContext()
                                            )}
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