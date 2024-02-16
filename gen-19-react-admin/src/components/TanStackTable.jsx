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

function TanStackTable() {
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

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel()
    });

    if (!isLoading) return (
        <div className="mx-auto">
            <table className="border border-gray-600 w-full text-left">
                <thead className="bg-gray-400 text-zinc-50 text-center">
                    {
                        table.getHeaderGroups().map((headerGroup) => (
                            <tr key={headerGroup.id}>
                                {headerGroup.headers.map((header) => (
                                    <th key={header.id} className="px-2 border-x border-b border-gray-600">
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
                                        ${i % 2 === 0 ? "" : "bg-gray-200"}
                                    `}
                                >
                                    {/* {console.log(row)} */}
                                    {row.getVisibleCells().map((cell) => (
                                        <td key={cell.id} className="px-2 border-x border-gray-600">
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