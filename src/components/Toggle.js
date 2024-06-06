import React, { useState } from 'react'
import { Button, Container} from 'react-bootstrap'

const Toggle = () => {
const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    const buttonText = isVisible ? 'Hide' : 'Show';

    return (
        <Container className='d-flex flex-column align-items-center'>
            
            <Button variant="danger" onClick={toggleVisibility}>
                {buttonText}
            </Button>
            {isVisible && <p className="h3">Toggle me!!</p>}
        </Container>
    );
  };
  
  export default Toggle;