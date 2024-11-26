//Profile

import React from 'react';
import './Profile.css';
import Navbar from '../components/Navbar'; // Exemplo de caminho, ajuste conforme necessário
import ProjectCard from '../components/ProjectCard'; // Exemplo de caminho, ajuste conforme necessário
import LogoVambora from '../assets/logoVamboraFatec.svg';
import LogoBlockchain from '../assets/logoBlockchain.svg';
import LogoRedeNeural from '../assets/logoRedeneural.svg';

const Profile: React.FC = () => {
  return (
    <div className="app-container">
      {/* Barra de navegação */}
      <Navbar />

      <div className="profiles-layout">
        {/* Sidebar do perfil */}
        <aside className="profile-sidebar">
          <div className="profile-header">
            <img 
              src="profile-placeholder.png" 
              alt="Foto de perfil" 
              className="profile-image" 
            />
            <h1 className="profile-name">Mikhael Canarinho Nóbrega</h1>
            <p className="profile-bio">"Só sei que nada sei e tenho muito a aprender"</p>
            <hr />
            <p className="profile-course">
              <strong>Curso:</strong> Análise e Desenvolvimento de Sistemas (Noturno)
            </p>
            <hr />
            <div className="profile-interests">
              <h2>Áreas de Interesse</h2>
              <p>UI/UX Design, Linguagem JAVA</p>
            </div>
            <hr />
            <div className="profile-achievements">
              <h2>Destaques</h2>
              <div className="achievements-list">
                <img src="medal-gold.svg" alt="Medalha Ouro" />
                <img src="medal-silver.svg" alt="Medalha Prata" />
                <img src="medal-bronze.svg" alt="Medalha Bronze" />
              </div>
            </div>
          </div>
        </aside>

        {/* Área central - Projetos */}
        <main className="projects-section">
          {/* Filtros */}
          <div className="projects-filters">
            <input 
              type="text" 
              placeholder="Pesquisar projeto..." 
              className="search-input" 
            />
            <div className="filters-group">
              <select className="filter-select">
                <option>Selecionar Coleção</option>
              </select>
              <input 
                type="text" 
                placeholder="Filtrar por tags..." 
                className="filter-tags" 
              />
              <button className="btn btn-add">+</button>
            </div>
          </div>

          {/* Lista de Projetos */}
          <div className="projects-list">
            <ProjectCard 
              title="Blockchain" 
              description="Este trabalho apresenta a tecnologia blockchain, que organiza dados em blocos ligados de forma cronológica..." 
              tags={["Blockchain", "Criptografia Assimétrica", "Segurança da Informação"]} 
              date="03/12/2024" 
              imageUrl={LogoBlockchain}
            />
            <ProjectCard 
              title="Vambora Fatec" 
              description="Projeto de aplicativo mobile para agendamento de caronas entre estudantes da Fatec." 
              tags={["Mobile", "Mobilidade Urbana", "Engenharia de Software"]} 
              date="15/10/2024" 
              imageUrl={LogoVambora}
            />
            <ProjectCard 
              title="Rede Neural para Reconhecimento de Caracteres com Backpropagation" 
              description="Desenvolvimento de uma rede neural simples na linguagem Python para reconhecimento de padrões..." 
              tags={["Inteligência Artificial", "Backpropagation"]} 
              date="23/09/2024" 
              imageUrl={LogoRedeNeural}
            />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Profile;