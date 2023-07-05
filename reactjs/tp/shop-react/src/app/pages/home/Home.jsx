import React from "react";
import { Header } from "../layouts/Header";
import { data } from "../../api/products";
import { NoteEmptyFillStars, NoteStars } from "../../../helpers/CommonHelper";

export function Home() {
    // console.log(data)
    return <>
        <Header 
            title={'Shop in style'}
            subtitle={'With this shop homepage template'}
        />
        <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
            <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4">
                {
                    data.map((elt, index) => {
                        return (
                            <div className="col mb-5" key={'prod_'+index}>
                                <div className="card h-100">
                                    {
                                        elt.hasSaleBadge &&
                                        <div className="badge bg-dark text-white position-absolute" style={{top: '0.5rem', right: '0.5rem'}}>Sale</div>
                                    }
                                    <img className="card-img" src={elt.img}/>
                                    <div className="card-body p-4">
                                        <div className="text-center">
                                            <h5>{elt.name}</h5>

                                            <div className="d-flex justify-content-center text-warning ">
                                                {/* <NoteStars note={elt.note} /> */}
                                                <NoteEmptyFillStars note={elt.note} />
                                            </div>

                                            {
                                                elt.old_price &&
                                                <span className="text-muted text-decoration-line-through">
                                                    {'$'+ elt.old_price.toFixed(2)}
                                                </span>
                                            }
                                            {' $'+ elt.price.toFixed(2)}
                                        </div>
                                    </div>

                                    {
                                        elt.hasCartBtn &&
                                        <div className="card-footer p-4 border-top-0 bg-transparent">
                                            <div className="text-center">
                                                <a href="" className="btn btn-outline-dark">
                                                    Add to cart
                                                </a>
                                            </div>
                                        </div>
                                    }
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </section>
    </>
}