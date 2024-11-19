import { useRef } from 'react';
import { Button, buttonVariants } from '../components/Button';
import { TextBar } from '../components/TextBar';
import { TextArea } from '../components/TextArea';
import './Profile.css';

function Profile() {

  const ref = useRef <null | HTMLButtonElement> (null)
  
  return (
    <div className="Profile">
        <div className='container flex m-60 p-20'>
        <Button ref={ref} size='default' shape='pill' iconRight='add' className='mr-9' >Novo</Button>
    
        <Button ref={ref} size='default' shape='square' iconLeft='search' >Buscar</Button>

        </div>

    </div>
  );
}

export default Profile;
