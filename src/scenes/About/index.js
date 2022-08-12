import React from 'react';
import { Link } from 'react-router-dom';

import Footer from '../../descola-frontend-components/Footer';
import Head from '../../descola-frontend-components/Head';
import { BASE_URL_CDN } from '../../constants';

const about = `${BASE_URL_CDN}app/assets/images/about.png`;
const clock = `${BASE_URL_CDN}app/assets/images/clock.png`;
const ebook = `${BASE_URL_CDN}app/assets/images/ebook.png`;
const facebook = `${BASE_URL_CDN}app/assets/images/facebook.png`;
const diploma = `${BASE_URL_CDN}app/assets/images/diploma.png`;

const About = () => (
  <>
    <Head title="Sobre" />
    <div className="main">
      <article className="article__about">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1>
                O que é a <span className="primary">Descola</span>
              </h1>
            </div>
            <div className="col-12 col-sm-6">
              <h2>
                A Descola cria conteúdos para que as pessoas desenvolvam <span className="primary">power skills</span>. Criamos
                experiências de aprendizagem para transformar pessoas ao longo de suas vidas.
              </h2>
              <p>
                Durante a sua vida você passou por diversos momentos de aprendizado. Seja no colégio, na faculdade ou nas diversas
                experiências profissionais, você provavelmente acertou, errou e teve que aprender a lidar com tudo isso. Você
                criou um conjunto de conhecimentos técnicos e comportamentais que fazem você ser esse profissional que é hoje.
              </p>
              <p>
                Essa formação e experiência é fundamental, mas o conjunto de competências que você tem hoje não é suficiente para
                todo o restante da sua jornada profissional.
              </p>
              <p>
                Todos os dias vemos emergir novos comportamentos, novas teorias, novas formas de se comunicar e se relacionar.
                Novos modelos de gestão e avanços tecnológicos que impactam nossa forma de viver.
              </p>
              <p>
                Nesse cenário, muitas vezes nos vemos perdidos, ultrapassados e obsoletos. Sabemos pouco e não temos ideia do que
                precisamos aprender.{' '}
              </p>
              <p />

              <p className="border-l primary">
                O analfabeto do século XXI não será aquele que não sabe ler e escrever, mas aquele que não consegue aprender,
                desaprender e reaprender." - Alvin Toffler
              </p>
              <p>
                A Descola é uma escola de cursos online que cria grandes experiências de aprendizagem para que você possa ser o
                melhor profissional ao longo de sua vida.
              </p>
              <p>
                Mapeamos e identificamos essas novas habilidades - também conhecidas como “soft skills” - que vão te ajudar nesse
                novo mundo. São competências comportamentais ligadas às áreas de Criatividade, Tomada de Decisão, Pensamento
                Crítico e Analítico, Liderança, Comunicação ou Inteligência Emocional.
              </p>
              <p>
                Competências tão importantes e fundamentais que vão te ajudar a ir além na sua carreira. Some{' '}
                <strong className="primary">essas novas</strong> skills comportamentais aos seus conhecimentos técnicos e
                experiências, e você será um profissional mais completo, com grande perspectiva de crescimento. Esse conjunto de
                habilidades é tão poderoso que, aqui na Descola, chamamos de <strong className="primary">Power Skills</strong>.
              </p>
              <p>
                Criamos cursos com metodologia própria, pensando na melhor experiência online para o aluno. Formatamos o conteúdo
                usando teoria, prática, cases, referências e reflexão conceitual. Usamos linguagem leve e informal, além de
                trabalharmos materiais de aprofundamento e ferramentas de aplicação.
              </p>
            </div>
            <div className="col-12 col-sm-6">
              <div className="about-hero">
                <img src={about} alt="O que é a Descola?" width={560} height={565} loading="lazy" className="img-fluid" />
              </div>
              <h2 className="mt-5">Somos online, mas não estamos distantes.</h2>
              <p>
                Ao final de um curso da Descola, você vai ter repertório e habilidades poderosas para ir muito mais longe na sua
                carreira. Vai se desenvolver como pessoa e como profissional. Mais que <strong className="primary">novas</strong>{' '}
                “soft skills”, você desenvolverá “power skills”.
              </p>
              <p>
                Na Descola, vamos te preparar para o mundo de hoje, independente de que mundo seja esse. Aqui, você vai ter sempre
                os temais mais relevantes para sua carreira, no momento certo, com os melhores professores e com uma jornada
                incrível de aprendizagem.
              </p>
              <p>Vamos te acompanhar ao longo da sua carreira e te ajudar a aprender e reaprender ao longo de toda sua vida.</p>
              <p>E aí, está preparado?</p>
            </div>
          </div>
          <div className="row mt-25">
            <div className="col-12">
              <h2>Nosso processo de aprendizado é feito da seguinte forma</h2>
            </div>
            <div className="col-12 col-md-3 card-arrow">
              <div className="card-arrow__box">
                <div className="card-arrow__box__img">
                  <img src={clock} alt="Cursos divididos em pequenos capítulos de 3 a 7 minutos" loading="lazy" width={105} height={102} />
                </div>

                <p>Cursos divididos em pequenos capítulos de 3 a 7 minutos</p>
              </div>
            </div>
            <div className="col-12 col-md-3 card-arrow">
              <div className="card-arrow__box">
                <div className="card-arrow__box__img">
                  <img src={ebook} alt="E book com conteúdo do curso + ferramentas para ir além" loading="lazy" width={100} height={101} />
                </div>
                <p>E book com conteúdo do curso + ferramentas para ir além</p>
              </div>
            </div>
            <div className="col-12 col-md-3 card-arrow">
              <div className="card-arrow__box">
                <div className="card-arrow__box__img">
                  <img
                    src={facebook}
                    alt="Grupo de discussão para trocar ideia com outros alunos e professores"
                    loading="lazy"
                    width={103}
                    height={87}
                  />
                </div>
                <p>Grupo de discussão para trocar ideia com outros alunos e professores</p>
              </div>
            </div>
            <div className="col-12 col-md-3 card-arrow">
              <div className="card-arrow__box">
                <div className="card-arrow__box__img">
                  <img
                    src={diploma}
                    alt="Certificado de conclusão digital incluso ou impresso por valor adicional"
                    loading="lazy"
                    width={102}
                    height={92}
                  />
                </div>
                <p>Certificado de conclusão digital incluso ou impresso por valor adicional</p>
              </div>
            </div>
            <div className="col-12 col-sm-6">
              <p>
                E essa jornada é parte de uma grande experiência de aprendizagem, sempre usando uma linguagem informal, estética
                apurada, professores legais e muita prática:{' '}
              </p>
              <p>
                A experiência vai muito além dos (vários) vídeos. A gente prepara um e-book incrível com muitas informações sobre
                os temas abordados e, no final, convidamos todos pra trocar suas ideias em um grupo de discussão.
              </p>
            </div>
            <div className="col-12 col-sm-6">
              <p>Você ainda pode fazer de onde quiser, quantas vezes quiser e no device que preferir.</p>
              <p>Depois de um curso na Descola, você vai sair com uma habilidade fundamental para encarar esse novo mundo.</p>
              <p className="border-r primary">
                <Link to="/">Tá curioso pra saber mais? Então vem com a gente!</Link>
              </p>
            </div>
          </div>
          {/* <div className="row  mt-25">
            <div className="col-12">
              <h1 className="border-l primary">Nosso time</h1>
            </div>
            <div className="col-12 col-md-4">
              <div className="card-time">
                <img src={time} alt="x" />
                <h2>Nome Sobrenome</h2>
                <span className="primary">
                  <strong>CEO</strong>
                </span>
                <p>
                  E essa jornada é parte de uma grande experiência de aprendizagem, sempre usando uma linguagem informal, estética apurada,
                  professores legais e muita prática:
                </p>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="card-time">
                <img src={time} alt="x" />
                <h2>Nome Sobrenome</h2>
                <span className="primary">
                  <strong>CEO</strong>
                </span>
                <p>
                  E essa jornada é parte de uma grande experiência de aprendizagem, sempre usando uma linguagem informal, estética apurada,
                  professores legais e muita prática:
                </p>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="card-time">
                <img src={time} alt="x" />
                <h2>Nome Sobrenome</h2>
                <span className="primary">
                  <strong>CEO</strong>
                </span>
                <p>
                  E essa jornada é parte de uma grande experiência de aprendizagem, sempre usando uma linguagem informal, estética apurada,
                  professores legais e muita prática:
                </p>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="card-time">
                <img src={time} alt="x" />
                <h2>Nome Sobrenome</h2>
                <span className="primary">
                  <strong>CEO</strong>
                </span>
                <p>
                  E essa jornada é parte de uma grande experiência de aprendizagem, sempre usando uma linguagem informal, estética apurada,
                  professores legais e muita prática:
                </p>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="card-time">
                <img src={time} alt="x" />
                <h2>Nome Sobrenome</h2>
                <span className="primary">
                  <strong>CEO</strong>
                </span>
                <p>
                  E essa jornada é parte de uma grande experiência de aprendizagem, sempre usando uma linguagem informal, estética apurada,
                  professores legais e muita prática:
                </p>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="card-time">
                <img src={time} alt="x" />
                <h2>Nome Sobrenome</h2>
                <span className="primary">
                  <strong>CEO</strong>
                </span>
                <p>
                  E essa jornada é parte de uma grande experiência de aprendizagem, sempre usando uma linguagem informal, estética apurada,
                  professores legais e muita prática:
                </p>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="card-time">
                <img src={time} alt="x" />
                <h2>Nome Sobrenome</h2>
                <span className="primary">
                  <strong>CEO</strong>
                </span>
                <p>
                  E essa jornada é parte de uma grande experiência de aprendizagem, sempre usando uma linguagem informal, estética apurada,
                  professores legais e muita prática:
                </p>
              </div>
            </div>
          </div> */}
        </div>
      </article>
    </div>
    <Footer type='public' />
  </>
);

export default About;
