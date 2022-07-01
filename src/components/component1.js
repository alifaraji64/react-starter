import { useEffect } from "react";
import Component2 from "../components/component2";
import Button from 'react-bootstrap/Button';
function Component1() {
    useEffect(()=>{
        console.log('mounted');
    },[])
    return ( <>
    <h1>Component1</h1>
    <Button variant="primary">Primary</Button>{' '}
    <Component2/>
    </> );
}

export default Component1;