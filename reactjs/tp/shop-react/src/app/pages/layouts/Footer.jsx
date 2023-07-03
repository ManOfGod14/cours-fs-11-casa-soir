import React from "react";

export function Footer() {
    const year = new Date().getFullYear();
    return <>
        <footer className="py-5 bg-dark">
            <div className="container">
                <p className="text-center text-white m-0">
                    Copyright &copy; Your website {year}
                </p>
            </div>
        </footer>
    </>
}