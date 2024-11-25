import React from 'react';
import '../index.css'
import '../index'

const Navbar: React.FC = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-darkBlue text-white">
      <div className="text-xl">AcadeMe</div>
      <input 
        type="text" 
        className="p-2 rounded border-none" 
        placeholder="Procurar perfil..." 
      />
      <div>
        <button className="ml-2 px-4 py-2 bg-blue-500 rounded text-black">Cadastro</button>
        <button className="ml-2 px-4 py-2 bg-blue-500 rounded text-black">Login</button>
      </div>
    </nav>
  );
};

export default Navbar;