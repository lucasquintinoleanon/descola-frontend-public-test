import React, { useState } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import ScrollableAnchor from 'react-scrollable-anchor';

import Footer from '../../descola-frontend-components/Footer';
import ScrollToTop from '../../descola-frontend-components/ScrollToTop';
import Head from '../../descola-frontend-components/Head';
import { BASE_URL_CDN } from '../../constants';

const faq = `${BASE_URL_CDN}app/assets/images/faq.png`;

const Help = () => {
  // const [article, setArticle] = useState({ question: '', answer: '' });
  const [openQuestion, setOpenQuestion] = useState('');

  const handleOpenMobileQuestion = question => {
    if (question === openQuestion) {
      setOpenQuestion('');
    } else {
      setOpenQuestion(question);
    }
  };

  const coursesQuestions = [
    {
      id: 'o-que-contempla-um-curso-descola',
      question: 'O que contempla um curso descola?',
      answer:
        '<p>Todos os cursos seguem a mesma metodologia e ao adquirir qualquer curso voc&ecirc; ter&aacute; acesso irrestrito &agrave;s v&iacute;deo-aulas al&eacute;m de poder fazer o download do ebook do curso e do certificado de conclus&atilde;o sem nenhum custo extra.&nbsp;</p><p><strong>Inclu&iacute;dos em qualquer curso: </strong>Video-aulas + Ebook digital + Certificado Digital</p>'
    },
    {
      id: 'o-curso-tem-certificado',
      question: 'O curso tem certificado?',
      answer:
        '<p>Todos os cursos t&ecirc;m certificado que pode ser emitido ao final de todo o curso. Para acessar o certificado voc&ecirc; ter&aacute; que assistir 100% do curso e poder&aacute; ver a op&ccedil;&atilde;o de certificados na p&aacute;gina &ldquo;certificados&rdquo; no menu. N&atilde;o h&aacute; nenhum custo para fazer o download do certificado.</p>'
    },
    {
      id: 'quanto-tempo-tenho-acesso-ao-curso-que-comprei',
      question: 'Quanto tempo tenho acesso ao curso que comprei?',
      answer:
        '<p>Acreditamos no aprendizado no tempo do aluno, por isso nossos cursos n&atilde;o tem prazo de validade. Essas powerskills devem ser revistas sempre que o aluno achar pertinente e por isso eles sempre estar&atilde;o dispon&iacute;veis para voc&ecirc;!</p><p>Acesso para a vida toda! Entre de qualquer lugar e assista sempre que quiser os cursos adquiridos.</p><p>Mesmo os cursos gratuitos possuem acesso vital&iacute;cio ao conte&uacute;do. Mesmo ap&oacute;s terminar o curso, &eacute; poss&iacute;vel voltar e rev&ecirc;-lo sempre que quiser.</p>'
    },
    {
      id: 'qual-a-duracao-dos-cursos',
      question: 'Qual a dura????o dos cursos?',
      answer:
        '<p>Cada curso t??m uma m??dia de 4 horas de dura????o contemplando 2 horas de video-aulas + 2 horas de leitura do material complementar, ebook. Por??m voc?? pode verificar a dura????o exata de cada curso dentro da p??gina do curso na lateral direita ou dentro da aba ???o curso??? no final da p??gina.</p>'
    }
  ];
  const watchQuestions = [
    {
      id: 'como-assistir-a-um-curso',
      question: 'Como assistir a um curso?',
      answer:
        '<p>Assistir a um curso na Descola &eacute; muito f&aacute;cil. Basta escolher o curso e se inscrever. Se for um curso pago, voc&ecirc; deve escolher a forma de pagamento e finalizar a compra. Voc&ecirc; sempre ir&aacute; receber um email de confirma&ccedil;&atilde;o quando o pagamento for aprovado.</p><p>Com a inscri&ccedil;&atilde;o feita, basta fazer o login no site e ir para a p&aacute;gina <strong>"Meus Cursos"</strong>. L&aacute; &eacute; onde voc&ecirc; vai encontrar todos os cursos nos quais voc&ecirc; se inscreveu. &Eacute; sempre para l&aacute; que voc&ecirc; vai antes de assistir ao curso al&eacute;m de poder ver o andamento de todos os cursos que voc&ecirc; est&aacute; inscrito.</p>'
    },
    {
      id: 'meu-curso-nao-esta-aparecendo',
      question: 'Meu curso n??o est?? aparecendo',
      answer:
        '<p>Calma???existem diversos fatores que podem ocasionar isso:</p><p>Todos os seus cursos comprados ou gratuitos ficam na p??gina ???meus cursos??? basta entrar nessa op????o do menu que poder?? v??-los por l?? ;)</p><p>Agora se j?? fez isso e n??o apareceu, podem ter outras solu????es:</p><ol class="ol-primary"><li>Se estamos falando de um curso gratuito, certifique-se que voc?? entrou na p??gina do curso, clicou em "inscreva-me" e completou os passos. Muitas vezes as pessoas fazem o cadastro e acham que o curso gratuito estar?? l??. Mas ?? necess??rio fazer a inscri????o no curso.</li><li>Se estamos falando de um curso pago, seu pagamento pode estar sendo processado. Algumas formas de pagamento podem demorar mais e outras menos. Boleto banc??rio pode levar at?? 2 dias ??teis para ser compensado. J?? compras no cart??o de cr??dito geralmente ?? em tempo real.?? Em todas as compras?? voc?? receber?? um email de compra aprovada e avisando que seu curso j?? est?? dispon??vel.</li><li>Verificar se o email utilizado ?? o mesmo da compra/cadastro dos cursos. ?? comum que hoje em dia a gente tenha v??rios emails diferentes e os cursos ficam dispon??veis exatamente no email que foi comprado, por isso ver se voc?? n??o entrou com o login social e outro email.??</li></ol><p>N??o se assuste, basta voltar e entrar com o email cadastrado que sempre ter?? os seus cursos dispon??veis.</p><p>Se voc?? j?? efetuou o pagamento e o curso n??o foi liberado dentro do prazo entre em contato com contato@descola.org</p>'
    },
    {
      id: 'meus-cursos-demoram-muito-para-carregar',
      question: 'Meus cursos demoram muito para carregar',
      answer:
        '<p>Todos os v??deos produzidos pela Descola tem diferentes op????es de visualiza????o, sendo que pode ser vistas desde full hd at?? tamanhos menores. Se os v??deos demoram muito para carregar veja se diminuindo a resolu????o no canto inferior do v??deo ele carrega de maneira mais r??pida.</p><p>Caso n??o seja esse o problema, tente limpar o cache do seu navegador. Esse ac??mulo de dados pode trazer lentid??o para carregar novos v??deos. Sugerimos que voc?? limpe periodicamente para ter uma melhor experi??ncia de aprendizagem.</p>'
    },
    {
      id: 'meus-cursos-nao-carregam',
      question: 'Meus cursos n??o carregam',
      answer:
        '<p>Se voc?? n??o consegue entender o que est?? acontecendo para n??o carregar seus v??deos temos uma lista de dicas que podem te auxiliar:</p><ol class="ol-primary"><li>Tente assistir o curso online em uma janela an??nima. Se o v??deo for reproduzido sem problemas, tente verificar sua extens??o, plug-in ou programa de firewall no seu dispositivo para ver se ele precisa ser reconfigurado ou desativado.??</li><li>Use um navegador diferente. Se voc?? ainda n??o usa o Google Chrome, recomendamos o uso, pois ele ?? muito bom para assistir nossos cursos. Outros navegadores tamb??m rodam normalmente desde que estejam em suas vers??es atualizadas.</li><li>Limpe os cookies e o cache do navegador e reinicie-o antes de tentar novamente.??</li><li>Se voc?? tiver muitas guias do navegador abertas, feche a maioria delas, exceto a que voc?? est?? usando para assistir ao curso.??</li><li>Verifique a vers??o do seu navegador e atualize-a pra a ??ltima dispon??vel, se necess??rio. Recomendamos uma velocidade m??nima de 5MB ou 800kbps na Internet para assistir os cursos da Descola. Teste a velocidade da sua conex??o com a Internet para garantir que seu ambiente atenda.</li><li>Se a velocidade da sua Internet estiver baixa, tente diminuir a qualidade do v??deo ou assistir ao curso quando sua conex??o ?? Internet estiver mais forte. Voc?? pode encontrar essa op????o na parte inferior direita do v??deo.??</li><li>Desative qualquer acelera????o de hardware que voc?? instalou (no Firefox ou no Windows). Se voc?? n??o conseguir ouvir nenhum ??udio, verifique novamente se o volume do reprodutor de curso est?? aumentado e se o v??deo n??o est?? mudo. Verifique as configura????es de som no seu dispositivo.</li></ol>'
    },
    {
      id: 'como-faco-o-download-do-meu-ebook-do-curso',
      question: 'Como fa??o o download do meu ebook do curso?',
      answer:
        '<p>Para fazer o download do ebook do curso entrar na parte de ???Meus cursos???, selecione o curso desejado clicando em ???assistir??? e abaixo do v??deo voc?? poder?? ver o espa??o de ???Recursos Adicionais??? onde ficam todos os materiais inclusos no curso inclusive o ebook para download.</p>'
    }
  ];
  const paymentQuestions = [
    {
      id: 'forma-de-pagamento',
      question: 'Formas de pagamento',
      answer:
        '<p>Os cursos, trilhas e pacotes podem ser comprados no site da Descola no cart??o de cr??dito, aceitamos todas as bandeiras e tamb??m via boleto banc??rio. Basta colocar os cursos no carrinho que poder?? escolher sua op????o na sequ??ncia.</p><p>Cursos pagos com cart??o de cr??dito podem ser parcelados em at?? 10 vezes, j?? o boleto banc??rio somente na op????o a vista.</p>'
    },
    {
      id: 'posso-pedir-reembolso-do-curso-comprado',
      question: 'Posso pedir reembolso do curso comprado?',
      answer:
        '<p>Os cursos online da Descola s??o todos muito bem estruturados e pensados com os professores para gerar uma grande experi??ncia de aprendizagem, por isso temos uma pol??tica de reembolso de 7 dias a partir da compra. Os pedidos devem ser efetuados diretamente pelo email <a href="mailto:contato@descola.org">contato@descola.org</a> com o n??mero do pedido e o motivo do reembolso.</p><p>Solicita????es ap??s esse prazo n??o poder??o ser reembolsadas.</p>'
    },
    {
      id: 'posso-transferir-cursos-de-uma-conta-para-outra',
      question: 'Posso transferir cursos de uma conta para outra?',
      answer:
        '<p>Os cursos s&atilde;o pessoais e intransfer&iacute;veis. Criamos uma experi&ecirc;ncia &uacute;nica de aprendizagem e ela deve ser feita apenas para a pessoa que comprar o curso. Dessa forma n&atilde;o &eacute; poss&iacute;vel transferir ou presentear outras pessoas com os cursos / cr&eacute;ditos que foram comprados para seu usu&aacute;rio.</p>'
    }
  ];
  const teachersQuestions = [
    {
      id: 'quero-ser-um-professor-na-descola',
      question: 'Quero ser um professor na descola',
      answer:
        '<p>Somos uma escola online de powerskills, se voc?? quer fazer parte do nosso time de professores basta responder esse pequeno question??rio que nossa equipe entrar?? em contato com voc??. Link:?? ????<a href="http://dsco.la/sejaumprofessor">http://dsco.la/sejaumprofessor</a></p><p>N??s iremos entender o tema que voc?? quer ministrar e modelar todo esse conte??do com o professor. Iremos passar por todo o processo e gravar o curso. N??o somos uma plataforma apenas para comercializar cursos de terceiros, zelamos muito pela grande experi??ncia de aprendizagem e por isso queremos, junto com os professores, modelar da melhor forma poss??vel.</p>'
    }
  ];
  function createFullPostMarkup(answer, question){
    return { __html: `<h2 class="primary">${question}</h2>${answer}` }
  }
  return (
    <>
      <ScrollToTop />

      <Head title="Ajuda" />
      <div className="main">
        <div className="container">
          <div className="row mb-40">
            <div className="col-12 col-sm-6">
              <h1>
                Precisa de <span className="primary">Ajuda ?</span>
              </h1>
              <img src={faq} alt="Precisa de Ajuda?" className='img-fluid'  />
            </div>
            <div className="col-12 col-sm-6 d-flex">
              <div className="m-auto">
                <h2>
                  Aqui voc?? encontra a resposta para suas d??vidas. Se n??o encontrar, envie um e-mail para contato@descola.org.
                </h2>
                {/* <div className="search__bar">
                  <input className="" type="text" placeholder="Tem d??vidas sobre algo? Procure aqui e veja se temos a resposta" />
                  <button className="btn btn-icon">
                    <img src={lupa} alt="Pesquisar" />
                  </button>
                </div> */}
              </div>
            </div>
          </div>
        </div>
        <article>
          <div className="container">
            <div className="row d-none d-sm-flex accordion" id="accordionExample">
              <div className="col-sm-6 col-md-4">
                <div className="collapse-titles stick">
                  <h2 className="primary">Sobre os cursos</h2>
                  {coursesQuestions.map(({ question, id }) => (
                    <a key={id} className="btn btn-link" type="button" href={`#${id}`}>
                      <h3>{question}</h3>
                    </a>
                  ))}
                  <h2 className="primary">Assistir curso</h2>
                  {watchQuestions.map(({ question, id }) => (
                    <a key={id} className="btn btn-link" type="button" href={`#${id}`}>
                      <h3>{question}</h3>
                    </a>
                  ))}
                  <h2 className="primary">Pagamento e reembolso</h2>
                  {paymentQuestions.map(({ question, id }) => (
                    <a key={id} className="btn btn-link" type="button" href={`#${id}`}>
                      <h3>{question}</h3>
                    </a>
                  ))}
                  <h2 className="primary">Professores</h2>
                  {teachersQuestions.map(({ question, id }) => (
                    <a key={id} className="btn btn-link" type="button" href={`#${id}`}>
                      <h3>{question}</h3>
                    </a>
                  ))}
                </div>
              </div>
              <div className="col-sm-6 col-md-8 faq-content">
                {[...coursesQuestions, ...watchQuestions, ...paymentQuestions, ...teachersQuestions].map(
                  ({ question, answer, id }) => (
                    <ScrollableAnchor id={id} key={id}>
                      <div dangerouslySetInnerHTML={createFullPostMarkup(answer, question)} />
                    </ScrollableAnchor>
                  )
                )}
              </div>
              {/* {article.question && (
                <div className="col-sm-6 col-md-8">
                  <div id="collapseOne" aria-labelledby="headingOne" data-parent="#accordionExample">
                    <div>
                      <h2 className="primary">{article.question}</h2>
                      <div dangerouslySetInnerHTML={{ __html: article.answer }} />
                    </div>
                  </div>
                </div>
              )} */}
            </div>
            <div className="row accordion d-sm-none" id="accordionExample">
              <div className="col-12">
                <MobileFAQItem
                  title="Sobre os cursos"
                  questions={coursesQuestions}
                  selected={openQuestion}
                  onSelect={handleOpenMobileQuestion}
                />
                <MobileFAQItem
                  title="Assistir curso"
                  questions={watchQuestions}
                  selected={openQuestion}
                  onSelect={handleOpenMobileQuestion}
                />
                <MobileFAQItem
                  title="Pagamento e reembolso"
                  questions={paymentQuestions}
                  selected={openQuestion}
                  onSelect={handleOpenMobileQuestion}
                />
                <MobileFAQItem
                  title="Professores"
                  questions={teachersQuestions}
                  selected={openQuestion}
                  onSelect={handleOpenMobileQuestion}
                />
              </div>
            </div>
          </div>
        </article>
      </div>
      <Footer type='public' />
    </>
  );
};

const MobileFAQItem = ({ title, questions, selected, onSelect }) => (
  <div className="card">
    <h2 className="primary">{title}</h2>
    {questions.map(({ question, answer }) => (
      <React.Fragment key={question}>
        <button
          onClick={() => onSelect(question)}
          className="btn card-header collapsed"
          type="button"
          data-toggle="collapse"
          data-target="#collapseOne"
          aria-expanded="false"
          aria-controls="collapseOne"
        >
          <h3>{question}</h3>
        </button>
        <div
          id="collapseOne"
          className={classNames('collapse', {
            show: selected === question
          })}
          aria-labelledby="headingOne"
          data-parent="#accordionExample"
        >
          <div className="card-body">
            <div dangerouslySetInnerHTML={{ __html: answer }} />
          </div>
        </div>
      </React.Fragment>
    ))}
  </div>
);

MobileFAQItem.propTypes = {
  questions: PropTypes.arrayOf(
    PropTypes.shape({
      question: PropTypes.string,
      answer: PropTypes.string
    })
  ).isRequired,
  title: PropTypes.string.isRequired,
  selected: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired
};

export default Help;
