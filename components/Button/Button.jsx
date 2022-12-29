import React from "react";
import Link from "next/link"

const Button = () => {
    return (
        <div>
            <div className="bg-black w-max mx-auto p-4 rounded-xl px-14 border-2 border-white ">
            <Link href="/">Óbtenlas ya</Link>{" "}
          </div>
        </div>
    )
};

export default Button;