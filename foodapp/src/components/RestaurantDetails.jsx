
import "./food.css"

import { useState,useEffect } from "react";
import { Button} from '@chakra-ui/react'

export const RestaurantDetails = () => {

    const [list, setList] = useState([]);
    const [page, setPage] = useState(1);


    useEffect(() => {
        getData(page)
    },[page])


    const getData = async (page) => {
        let res = await fetch(`http://localhost:3001/posts?_page=${page}&_limit=6`);
        let data = await res.json();
        console.log(data);
        setList(data)
    }
    
    const handleAscending = () => {

        const low_to_high = [...list].sort((a, b) => {

            return a.price - b.price;

        })

        setList(low_to_high);
    }

    const handleDescending = () => {

        const high_to_low = [...list].sort((a, b) => {

            return b.price - a.price;

        })
        setList(high_to_low);
    }

    const handleBothMode = () => {
        const Both = [...list].filter((item) => item.both)
        console.log(Both);
        setList(Both);
    }

    
    const handleCashMode = () => {

        const cash = [...list].filter((item) => item.cash)
        console.log(cash);
        setList(cash);
    }


    const handleOnlineMode = () => {

        const online = [...list].filter((item) => item.online)
        console.log(online);
        setList(online);
    }


    const fourStar = () => {
        const four = [...list].filter((item) => item.rating >= 4)
        setList(four);
    }

    const threeStar = () => {
        const three = [...list].filter((item) => item.rating >= 3)
        setList(three);
    }

    const twoStar = () => {
        const two = [...list].filter((item) => item.rating >= 2)
        setList(two);
    }

    const oneStar = () => {
        const one = [...list].filter((item) => item.rating >= 1)
        setList(one);
    }

    return (
        <>
           
            <br/>
            <div className="links">

                <Button  colorScheme='blue' onClick={handleAscending}> Price : Low to High</Button>

                <Button  colorScheme='blue' onClick={handleDescending}>Price : High to Low</Button>

                <Button  colorScheme='blue' onClick={handleCashMode}>Payment Mode : Cash</Button>

                <Button  colorScheme='blue' onClick={handleOnlineMode}>Payment Mode : Online</Button>

                <Button  colorScheme='blue' onClick={handleBothMode}>Payment Mode : Cash/Online</Button>

            </div>

            <div className="links1">


                <Button  colorScheme='blue' onClick={fourStar} >4⭐</Button>

                <Button  colorScheme='blue' onClick={threeStar} >3⭐</Button>

                <Button  colorScheme='blue' onClick={twoStar} >2⭐</Button>

                <Button colorScheme='blue' onClick={oneStar} >1⭐</Button>

                <Button colorScheme='blue' onClick={()=>setPage(page-1)} disabled={page===1} >Prev</Button>
                
                <Button colorScheme='blue' onClick={()=>setPage(page+1)}  >Next</Button>


            </div>

            <div className="rest_container_div">
                {
                    list.map((item) => (

                        <div className="item_div">

                            <div className="item_first_div">

                                <div className="item_img" >

                                    <img src={item.image} alt="" />

                                </div>

                                <div className="item_details">

                                    <p>{item.name}</p>

                                    <p> Cost ₹{item.price} for two</p>

                                    <p>Accepts {item.payment} Payment Mode</p>

                                </div>

                                <div className="item_review">

                                    <p>{item.rating}</p>

                                    <p>{item.votes} votes</p>

                                    <p>{item.reviews} reviews</p>

                                </div>

                            </div>

                        </div>

                    ))

                }

            </div>

        </>

    )

}

