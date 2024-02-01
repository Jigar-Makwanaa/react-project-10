import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import "./style.css";

const Fetch = () => {

    const [apiRecord, setApiRecord] = useState([])

    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(apiData => setApiRecord(apiData.products))
    }, [])

    console.log(apiRecord);



    return (

        <div className="card-section">
            <div className="container">
                <div className="row">

                    <h1>Fetch method</h1>

                    <div className="button">
                        <Link to={'/axios'}>Axios Method <i class="fa-solid fa-angles-right"></i></Link>
                    </div>

                    <div className="allCards">
                        {
                            apiRecord.map((val) => {
                                return (
                                    <div className="card">
                                        <div className="content">
                                            <div className="image">
                                                <img src={val.images[0]} />
                                            </div>
                                            <div className="details">
                                                <h2>{val.title}</h2>
                                                <h3>${val.price}</h3>
                                                <h4>{val.category}</h4>
                                                <span>
                                                    <a href="#">Add To Cart</a>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Fetch