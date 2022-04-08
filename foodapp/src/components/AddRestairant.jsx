import {
    FormControl,
    FormLabel,
    Input,
    Button,
    Select
} from '@chakra-ui/react';
import { useState } from "react";



export const AddRestaurant = () => {
    const [form, setForm] = useState(null);
    
    const handleChange = (e) => {
        let { name,value } = e.target;
        setForm({
            ...form,
            [name]: value
        });
    }



    const handleSubmit = async(e) => {
        e.preventDefault();
        console.log(form);
        try {
            let res =await fetch("http://localhost:3001/posts", {
            method: "POST",
            body: JSON.stringify(form),
            headers: {
                "Content-Type": "application/json"
            }
        })
            let data = await res.json();
            console.log(data);
        
            
        } catch (e) {
            console.log(e);
        }
    }


    return (
        <>
            <FormControl style={{ marginTop: "6%", width: "30%", marginLeft: "35%" }}>
            <FormLabel htmlFor='email'>Hotel Name</FormLabel>
            <Input style={{width:"100%",margin:"0.1%"}} name='name' type='text' onChange={(e) => handleChange(e)} />
        
            <FormLabel htmlFor='email'>Price of Food</FormLabel>
            <Input style={{width:"100%",margin:"0.1%"}}   name='price' type='text' onChange={(e) => handleChange(e)} />
            <FormLabel htmlFor='email'>Select Payment method</FormLabel>    
            <Select style={{width:"100%",margin:"0.1%"}}  name='payment' placeholder='Select user' onChange={(e) => handleChange(e)}>
                    <option>online</option>
                    <option>cash</option>
                    <option>Both</option>
                </Select>
            <FormLabel htmlFor='email'>Cash method</FormLabel>    
            <Select style={{width:"100%",margin:"0.1%"}} name='cash' placeholder='Select user' onChange={(e) => handleChange(e)}>
            <option>true</option>
            <option>false</option>
            </Select>
             <FormLabel htmlFor='email'>Rating</FormLabel>
            <Input style={{width:"100%",margin:"0.1%"}}  name='rating' type='number' onChange={(e) => handleChange(e)} />
             <FormLabel htmlFor='email'>Voting</FormLabel>
            <Input style={{width:"100%",margin:"0.1%"}}   name='votes' type='number' onChange={(e) => handleChange(e)} />
             <FormLabel htmlFor='email'>Reviews</FormLabel>
            <Input style={{width:"100%",margin:"0.1%"}}   name='reviews' type='number' onChange={(e) => handleChange(e)} />
             <FormLabel htmlFor='email'>Image URL</FormLabel>
            <Input style={{width:"100%",margin:"0.1%"}}   name='image' type='text' onChange={(e) => handleChange(e)} />
     
            <Button onClick={handleSubmit} style={{ marginTop: "2%", width: "100%" }} colorScheme='teal' variant='solid' >Login</Button>
    </FormControl>
        </>
    )
}