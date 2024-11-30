import React from 'react';
import '../index.css'
import '../index'
import { TextBar } from './TextBar';
import { Button } from './Button';

const Navbar: React.FC = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-darkBlue text-white">
      <div className="text-xl">AcadeMe</div>
      
      <TextBar placeholder='Procurar Perfil...' iconRight='search' />

      {/*<input 
        type="text" 
        className="p-2 rounded border-none" 
        placeholder="Procurar perfil..." 
      />*/}

      <div>
        <Button shape='pill' buttonStyle='light' className="ml-2 px-4 py-2 bg-lightBlue text-softWhite">Cadastro</Button>
        <Button shape='pill' buttonStyle='light' className="ml-2 px-4 py-2 bg-lightBlue rounded text-softWhite">Login</Button>
      </div>
    </nav>
  );
};

export default Navbar;