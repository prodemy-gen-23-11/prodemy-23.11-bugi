import React, { useState } from "react";
import useSWR from "swr";
import axios from "axios";
import { useReactTable } from "@tanstack/react-table";
import Content from "../layouts/Content";
import TanStackTable from "../components/TanStackTable";

function AdminPage() {
    return (
        <>
            <Content>
                <TanStackTable />
            </Content>
        </>
    );
}

export default AdminPage;