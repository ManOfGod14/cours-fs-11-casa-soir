import React from "react";
import { Header } from "../layouts/Header";

export function Home() {
    return <>
        <Header 
            title={'Shop in style'}
            subtitle={'With this shop homepage template'}
        />
        <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
            <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4">
                <div className="col mb-5">
                    <div className="card h-100">
                        <img className="card-img" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"/>
                        <div className="card-body p-4">
                            <div className="text-center">
                                <h5>Fancy Product</h5>
                                $40.00 - $80.00
                            </div>
                        </div>

                        <div className="card-footer p-4 border-top-0 bg-transparent">
                            <div className="text-center">
                                <a href="" className="btn btn-outline-dark">
                                    Add to cart
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col mb-5">
                    <div className="card h-100">
                        <img className="card-img" src="//unsplash.it/452/302"/>
                        <div className="card-body p-4">
                            <div className="text-center">
                                <h5>Fancy Product</h5>

                                <div className="d-flex justify-content-center text-warning ">
                                    <span className="bi-star-fill"></span>
                                    <span className="bi-star-fill"></span>
                                    <span className="bi-star-fill"></span>
                                    <span className="bi-star-fill"></span>
                                    <span className="bi-star-fill"></span>
                                </div>

                                $40.00 - $80.00
                            </div>
                        </div>

                        <div className="card-footer p-4 border-top-0 bg-transparent">
                            <div className="text-center">
                                <a href="" className="btn btn-outline-dark">
                                    Add to cart
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col mb-5">
                    <div className="card h-100">
                        <img className="card-img" src="//unsplash.it/450/300"/>
                        <div className="card-body p-4">
                            <div className="text-center">
                                <h5>Fancy Product</h5>

                                <div className="d-flex justify-content-center text-warning ">
                                    <span className="bi-star-fill"></span>
                                    <span className="bi-star-fill"></span>
                                    <span className="bi-star-fill"></span>
                                    <span className="bi-star-fill"></span>
                                    <span className="bi-star-fill"></span>
                                </div>

                                $40.00 - $80.00
                            </div>
                        </div>

                        <div className="card-footer p-4 border-top-0 bg-transparent">
                            <div className="text-center">
                                <a href="" className="btn btn-outline-dark">
                                    Add to cart
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
}