"use client"

import Link from "next/link";
import React from "react";

const ServiceGu = (children) => {
    return (
        <div className="flex flex-col min-h-screen items-center justify-center bg-gray-100 text-black">
            <div className="bg-white p-8 rounded shadow-md">{children}</div>
        </div>
    )
}
export default ServiceGu;