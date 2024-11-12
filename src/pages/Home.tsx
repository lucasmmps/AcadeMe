import { useRef } from 'react';
import { Button, buttonVariants } from '../components/Button';
import { TextBar } from '../components/TextBar';
import logo from '../assets/white-logo.svg'
import classrooMoldure from '../assets/classroom-moldure.svg'
import './Home.css';

function Home() {

  const ref = useRef <null | HTMLButtonElement> (null)
  
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
                            className='min-w-[171px] px-8 py-2 flex items-center justify-center'>
                                Cadastre-se
                        </Button>

                        <Button
                            ref={ref}
                            size='default'
                            shape='pill'
                            className='min-w-[171px] px-8 py-2 flex items-center justify-center'
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
                    <img src={classrooMoldure} alt="classroom" />
                    <div className="search-content-body flex flex-col items-center mt-24 mr-32">
                        <h1 className='search-title text-[#006ACB] text-[40px] mb-[44px]'>O que é o AcadeMe?</h1>
                        <p className='about text-[#006ACB] text-[26px] mb-[44px]'>
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

    {/** <div className="Inicio w-96 h-96 relative bg-white">
     <img className="Image22 w-96 h-96 left-0 top-[477px] absolute" src="https://via.placeholder.com/622x587" />
    <img className="Image23 w-96 h-96 left-[1440px] top-[2550px] absolute origin-top-left rotate-180" src="https://via.placeholder.com/934x934" />
    <img className="Image5 w-96 h-96 left-0 top-[-52px] absolute" src="https://via.placeholder.com/1440x529" />
    <div className="Image6 w-96 h-96 left-0 top-[-52px] absolute bg-black/50" />
    <div className="Group w-32 h-20 left-[658px] top-[60px] absolute">
    </div>
    <div className="AcademeInc w-44 h-8 left-[19px] top-[12px] absolute text-white text-3xl font-bold font-['Nunito']">AcadeMe Inc.</div>
    <div className="SejaBemVindoAoSeuFuturoAcadMico w-96 h-32 left-[435px] top-[217px] absolute text-center text-[#eff1f4] text-5xl font-medium font-['Nunito']">Seja bem-vindo ao seu futuro acadêmico.</div>
    <div className="BotOPreenchidoAzul w-44 px-5 py-2.5 left-[732px] top-[373px] absolute bg-[#0069ca] rounded-2xl shadow justify-center items-center gap-2.5 inline-flex">
        <div className="BotOPreenchido text-[#eff1f4] text-base font-bold font-['Nunito']">Login</div>
    </div>
    <div className="BotOPreenchidoAzul w-44 px-5 py-2.5 left-[537px] top-[373px] absolute bg-[#0069ca] rounded-2xl shadow justify-center items-center gap-2.5 inline-flex">
        <div className="BotOPreenchido text-[#eff1f4] text-base font-bold font-['Nunito']">Cadastre-se</div>
    </div>
    <div className="Academe left-[612px] top-[145px] absolute text-white text-5xl font-bold font-['Nunito']">AcadeMe</div>
    <div className="ComOAcademeOAlunoCapazDeDestacarTodaASuaTrajetRiaAcadMicaTrazendoVizibilidadeParaTodasAtividadesFeitasNaFaculdadeECredibilidadeParaSeusConhecimentos w-96 h-44 left-[744px] top-[660px] absolute text-center text-[#0069ca] text-2xl font-normal font-['Nunito']">Com o AcadeMe o aluno é capaz de destacar toda a sua trajetória acadêmica trazendo vizibilidade para todas atividades feitas na faculdade e credibilidade para seus conhecimentos.</div>
    <div className="Fundo w-96 h-96 left-[685px] top-[-497px] absolute bg-gradient-to-r from-[#0069ca] to-[#003464]" />
    <div className="Group26 w-96 h-14 left-[833px] top-[842px] absolute">
        <div className="BotOContornadoAzul w-96 h-14 px-5 py-2.5 left-0 top-0 absolute bg-neutral-100 rounded-2xl border border-[#0069ca] justify-center items-center gap-2.5 inline-flex">
        <div className="BotOContornado text-[#565656]/70 text-2xl font-bold font-['Nunito']">Pesquisar Perfil...</div>
        </div>
        <img className="Image7 w-10 h-10 left-[22.73px] top-[9.29px] absolute" src="https://via.placeholder.com/39x39" />
    </div>
    <div className="Group18 w-96 h-96 left-[129px] top-[1816px] absolute">
        <div className="Group17 opacity-90 w-96 h-96 left-[805.60px] top-0 absolute">
        <div className="Fundo w-96 h-96 left-0 top-0 absolute bg-gradient-to-r from-[#0069ca] to-[#003464] rounded-2xl" />
        <div className="Group13 w-64 h-16 left-[72.40px] top-[23px] absolute">
            <div className="LucasM w-64 h-7 left-0 top-[17px] absolute text-center text-[#fcfcfc] text-2xl font-bold font-['Nunito']">Lucas M.</div>
            <img className="ImagemBioFundo w-16 h-16 left-[7px] top-0 absolute rounded-full" src="https://via.placeholder.com/64x64" />
        </div>
        <div className="FinalmenteEncontreiUmLugarParaCentralizarTodosOsMeusProjetosDaFaculdadeAgoraQualquerPessoaPodeVerMeuProgressoEAsCoisasQueEstudeiEstouMuitoSatisfeitoComAPlataforma w-64 h-64 left-[56.40px] top-[112px] absolute text-center text-[#fcfcfc] text-xl font-normal font-['Nunito']">"Finalmente encontrei um lugar para centralizar todos os meus projetos da faculdade. Agora, qualquer pessoa pode ver meu progresso e as coisas que estudei. Estou muito satisfeito com a plataforma!"</div>
        <img className="Image12 w-9 h-9 left-[90.40px] top-[400px] absolute" src="https://via.placeholder.com/38x38" />
        <img className="Image13 w-9 h-9 left-[246.40px] top-[400px] absolute" src="https://via.placeholder.com/38x38" />
        <img className="Image14 w-9 h-9 left-[207.40px] top-[400px] absolute" src="https://via.placeholder.com/38x38" />
        <img className="Image15 w-9 h-9 left-[168.40px] top-[400px] absolute" src="https://via.placeholder.com/38x38" />
        <img className="Image16 w-9 h-9 left-[129.40px] top-[400px] absolute" src="https://via.placeholder.com/38x38" />
        </div>
        <div className="Group15 w-96 h-96 left-0 top-[1px] absolute">
        <div className="Fundo w-96 h-96 left-0 top-0 absolute bg-gradient-to-r from-[#0069ca] to-[#003464] rounded-2xl shadow" />
        <div className="EssaPlataformaFoiEssencialParaOrganizarMeusTrabalhosAcadMicosPudeCriarUmPortfLioQueMostraTudoOQueDesenvolviAoLongoDoCursoEAindaSuperFCilDeUsar w-64 h-12 left-[57px] top-[103px] absolute text-center text-[#fcfcfc] text-xl font-normal font-['Nunito']">"Essa plataforma foi essencial para organizar meus trabalhos acadêmicos. Pude criar um portfólio que mostra tudo o que desenvolvi ao longo do curso, e ainda é super fácil de usar!"</div>
        <div className="Group11 w-64 h-16 left-[75px] top-[23px] absolute">
            <div className="CaQueC w-64 h-7 left-0 top-[17px] absolute text-center text-[#fcfcfc] text-2xl font-bold font-['Nunito']">Caíque C.</div>
            <img className="ImagemBioFundo w-16 h-16 left-0 top-0 absolute rounded-full" src="https://via.placeholder.com/64x64" />
        </div>
        <img className="Image12 w-9 h-9 left-[91px] top-[400px] absolute" src="https://via.placeholder.com/38x38" />
        <img className="Image13 w-9 h-9 left-[247px] top-[400px] absolute" src="https://via.placeholder.com/38x38" />
        <img className="Image14 w-9 h-9 left-[208px] top-[400px] absolute" src="https://via.placeholder.com/38x38" />
        <img className="Image15 w-9 h-9 left-[169px] top-[400px] absolute" src="https://via.placeholder.com/38x38" />
        <img className="Image16 w-9 h-9 left-[130px] top-[400px] absolute" src="https://via.placeholder.com/38x38" />
        </div>
        <div className="Group16 w-96 h-96 left-[402.80px] top-0 absolute">
        <div className="Fundo w-96 h-96 left-0 top-0 absolute bg-gradient-to-r from-[#0069ca] to-[#003464] rounded-2xl" />
        <div className="OSiteMeAjudouAApresentarMeusTrabalhosDeFormaProfissionalTimoTerUmPortfLioAcessVelParaMostrarParaPossVeisRecrutadoresOuAtMesmoParaAmigos w-64 h-12 left-[57.20px] top-[103px] absolute text-center text-[#fcfcfc] text-xl font-normal font-['Nunito']">"O site me ajudou a apresentar meus trabalhos de forma profissional. É ótimo ter um portfólio acessível para mostrar para possíveis recrutadores ou até mesmo para amigos!"</div>
        <div className="Group12 w-72 h-16 left-[62.20px] top-[23px] absolute">
            <div className="GuilhermeV w-64 h-7 left-[20px] top-[17px] absolute text-center text-[#fcfcfc] text-2xl font-bold font-['Nunito']">Guilherme V.</div>
            <img className="ImagemBioFundo w-16 h-16 left-0 top-0 absolute rounded-full" src="https://via.placeholder.com/64x64" />
        </div>
        <img className="Image17 w-9 h-9 left-[90.20px] top-[400px] absolute" src="https://via.placeholder.com/38x38" />
        <img className="Image18 w-9 h-9 left-[246.20px] top-[400px] absolute" src="https://via.placeholder.com/38x38" />
        <img className="Image19 w-9 h-9 left-[207.20px] top-[400px] absolute" src="https://via.placeholder.com/38x38" />
        <img className="Image20 w-9 h-9 left-[168.20px] top-[400px] absolute" src="https://via.placeholder.com/38x38" />
        <img className="Image21 w-9 h-9 left-[129.20px] top-[400px] absolute" src="https://via.placeholder.com/38x38" />
        </div>
    </div>
    <div className="Group14 w-96 h-96 left-0 top-[1104px] absolute">
        <div className="Fundo w-96 h-96 left-0 top-0 absolute bg-gradient-to-r from-[#0069ca] to-[#003464]" />
        <div className="VocPodeCompartilharSeuPortfLioComColegasProfessoresEPossVeisRecrutadoresDestacandoSuasHabilidadesEConquistasAcadMicasTudoIssoEmUmAmbienteSeguroEConfiVelQueValorizaODesenvolvimentoDoSeuPotencial w-96 h-48 left-[150px] top-[172.65px] absolute text-[#fcfcfc] text-2xl font-normal font-['Nunito']">Você pode compartilhar seu portfólio com colegas, professores e possíveis recrutadores, destacando suas habilidades e conquistas acadêmicas. Tudo isso em um ambiente seguro e confiável, que valoriza o desenvolvimento do seu potencial.</div>
        <div className="Share w-28 h-11 left-[150px] top-[82px] absolute text-center text-[#eff1f4] text-4xl font-semibold font-['Nunito']">Share</div>
        <div className="Image27 w-96 h-96 left-[837px] top-[82px] absolute bg-white/80" />
        <img className="Image26 w-96 h-96 left-[813px] top-[58px] absolute" src="https://via.placeholder.com/558x372" />
    </div>
    <div className="Image24 w-96 h-96 left-[75px] top-[561px] absolute bg-[#0069ca]/80" />
    <img className="Image2 w-96 h-96 left-[99px] top-[585px] absolute" src="https://via.placeholder.com/568x372" />
    <div className="FeedbackDosUsuRios left-[506px] top-[1688px] absolute text-center text-[#016acc] text-4xl font-bold font-['Nunito']">Feedback dos Usuários</div>
    <div className="OQueOAcademe left-[880px] top-[560px] absolute text-center text-[#016acc] text-4xl font-medium font-['Nunito']">O que é o AcadeMe?</div>
    <div className="Group27 w-72 h-28 left-[295px] top-[2396px] absolute">
        <div className="FacebookComAcademe w-60 h-7 left-[37px] top-[4px] absolute text-center text-[#0069ca] text-xl font-normal font-['Nunito']">facebook.com/AcadeMe</div>
        <div className="LinkedinComAcademe w-60 h-7 left-[32px] top-[42px] absolute text-center text-[#0069ca] text-xl font-normal font-['Nunito']">linkedin.com/AcadeMe</div>
        <div className="Academe w-64 h-7 left-[38px] top-[80px] absolute text-[#0069ca] text-xl font-normal font-['Nunito']">@AcadeMe</div>
        <div className="Facebook w-8 h-8 left-0 top-0 absolute" />
        <div className="IconParkInstagram w-8 h-8 left-0 top-[78px] absolute">
        <div className="Group w-6 h-6 left-[4px] top-[4px] absolute">
        </div>
        </div>
        <div className="SkillIconsLinkedin w-8 h-8 left-0 top-[39px] absolute">
        <div className="Group w-8 h-8 left-0 top-0 absolute">
        </div>
        </div>
    </div>
    <div className="Group32 w-52 h-44 left-[27px] top-[2388px] absolute">
        <div className="Logo w-52 h-36 px-1 left-0 top-[38.48px] absolute flex-col justify-center items-center inline-flex">
        <div className="Academe w-48 h-14 text-center text-[#0069ca] text-4xl font-bold font-['Nunito']">AcadeMe</div>
        </div>
        <div className="Group w-28 h-20 left-[48.59px] top-0 absolute">
        </div>
    </div>
</div> **/}
    </div>
  );
}

export default Home;
