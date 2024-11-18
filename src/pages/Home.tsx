import { useRef } from 'react';
import { Button } from '../components/Button';
import { TextBar } from '../components/TextBar';
import logo from '../assets/white-logo.svg'
import classroomMoldure from '../assets/classroom-moldure.svg';
import studentsMoldure from '../assets/happy-students.svg';
import './Home.css';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
    const ref = useRef<HTMLButtonElement | null>(null);
    const navigate = useNavigate();
  
    const handleGoToLogin = () => {
      navigate('/Login');
    };
  
    const handleGoToSignUp = () => {
      navigate('/SignUp'); 
    };


//function Home() {

  //const ref = useRef <null | HTMLButtonElement> (null)
  
  return (
    <div className="Home">
        
        {/** top section **/}
        <section id="top-section">
            <div className="top-container">
                <h1 className='title text-[#F0F2F5] text-[28px] font-bold pt- pb-2 pr-4 pl-4 text-left w-full'>AcedeMe Inc.</h1>
                <div className="top-content flex flex-col items-center justify-center">
                    <img src={logo} alt="logo" />
                    <h1 className='slogan text-[#F0F2F5] text-[50px] mb-[21px]'>Seja bem-vindo ao seu<br/>futuro acadêmico</h1>
                    <div className="top-buttons-container flex items-center gap-[24px]">
                        <Button 
                            ref={ref}
                            size='default'
                            shape='pill'
                            className='min-w-[171px] px-8 py-2 flex items-center justify-center'                                                      
                            onClick={handleGoToSignUp} // Redirecionamento para a tela do cadastro
                            > Cadastre-se
                        </Button>

                        <Button
                            ref={ref}
                            size='default'
                            shape='pill'
                            className='min-w-[171px] px-8 py-2 flex items-center justify-center'
                            onClick={handleGoToLogin} // Redirecionamento para a tela de login
                        >
                                Login
                        </Button>
                    </div>
                </div>
            </div>
        </section>

        {/** search section **/}
        <section id="search-section">
            <div className="search-container">
                <div className="search-content flex gap-40">
                    <img src={classroomMoldure} alt="classroom" />
                    <div className="search-content-body flex flex-col items-center mt-24 mr-32">
                        <h1 className='search-title text-[#006ACB] text-[40px] mb-[44px]'>O que é o AcadeMe?</h1>
                        <p className='about-search text-[#006ACB] text-[26px] mb-[44px]'>
                        Com o AcadeMe o aluno é capaz de destacar toda a
                        sua trajetória acadêmica trazendo vizibilidade para
                        todas atividades feitas na faculdade e credibilidade
                        para seus conhecimentos.
                        </p>
                        <TextBar
                            variant="default"
                            textSize="lg"
                            placeholder="Procurar Perfil..."
                            iconLeft="search"
                            hideIconsOnInput
                        />
                    </div>
                </div>
            </div>
        </section>

        {/** share section **/}
        <section id="share-section" className='bg-gradient-to-r from-[#006ACB] to-[#003465] bg-[length:200%] p-16'>
            <div className="share-container">
                <div className="share-content flex gap-56">
                    <div className="search-content-body flex flex-col items-start mt-24 ml-16">
                        <h1 className='search-title text-[#F0F2F5] text-[40px] text-justify mb-[44px]'>Compartilhe</h1>
                        <p className='about-share text-[#F0F2F5] text-[26px] text-start mb-[44px]'>
                        Você pode compartilhar seu portfólio com
                        colegas, professores e possíveis recrutadores,
                        destacando suas habilidades e conquistas acadêmicas.
                        Tudo isso em um ambiente que valoriza o desenvolvimento do seu potencial.
                        </p>
                    </div>
                    <img src={studentsMoldure} alt="happy-students" />
                </div>
            </div>
        </section>
    </div>
  );
}




export default Home;
