import React from "react";

export function Header({title, subtitle}) {
    return <>
        <header className="bg-dark py-5">
            <div className="container px-4">
                <h1 className="text-center text-white">{ title }</h1>
                <p className="text-center text-white">{ subtitle }</p>
            </div>
        </header>
    </>
}