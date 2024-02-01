import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import "./style.css";
import axios from 'axios';

const Axios = () => {

    const [apiRecord, setApiRecord] = useState([])

    const axiosApi = async () => {
        try {
            const record = await axios.get('https://dummyjson.com/products')

            setApiRecord(record.data.products)

        } catch (err) {
            console.log(err);
            return false
        }
    }

    useEffect(() => {
        axiosApi()
    }, [])

    console.log(apiRecord);

    return (

        <div className="card-section">
            <div className="container">
                <div className="row">

                    <h1>Axios method</h1>

                    <div className="button">
                        <Link to={'/'}>Fetch Method <i class="fa-solid fa-angles-right"></i></Link>
                    </div>

                    <div className="allCards">
                        {
                            apiRecord.map((val) => {
                                return (
                                    <div className="card">
                                        <div className="content">
                                            <div className="image">
                                                <img src={val.images[2]} />
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

export default Axios