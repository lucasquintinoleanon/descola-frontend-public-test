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
      question: 'Qual a duração dos cursos?',
      answer:
        '<p>Cada curso têm uma média de 4 horas de duração contemplando 2 horas de video-aulas + 2 horas de leitura do material complementar, ebook. Porém você pode verificar a duração exata de cada curso dentro da página do curso na lateral direita ou dentro da aba “o curso” no final da página.</p>'
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
      question: 'Meu curso não está aparecendo',
      answer:
        '<p>Calma…existem diversos fatores que podem ocasionar isso:</p><p>Todos os seus cursos comprados ou gratuitos ficam na página “meus cursos” basta entrar nessa opção do menu que poderá vê-los por lá ;)</p><p>Agora se já fez isso e não apareceu, podem ter outras soluções:</p><ol class="ol-primary"><li>Se estamos falando de um curso gratuito, certifique-se que você entrou na página do curso, clicou em "inscreva-me" e completou os passos. Muitas vezes as pessoas fazem o cadastro e acham que o curso gratuito estará lá. Mas é necessário fazer a inscrição no curso.</li><li>Se estamos falando de um curso pago, seu pagamento pode estar sendo processado. Algumas formas de pagamento podem demorar mais e outras menos. Boleto bancário pode levar até 2 dias úteis para ser compensado. Já compras no cartão de crédito geralmente é em tempo real.  Em todas as compras  você receberá um email de compra aprovada e avisando que seu curso já está disponível.</li><li>Verificar se o email utilizado é o mesmo da compra/cadastro dos cursos. É comum que hoje em dia a gente tenha vários emails diferentes e os cursos ficam disponíveis exatamente no email que foi comprado, por isso ver se você não entrou com o login social e outro email. </li></ol><p>Não se assuste, basta voltar e entrar com o email cadastrado que sempre terá os seus cursos disponíveis.</p><p>Se você já efetuou o pagamento e o curso não foi liberado dentro do prazo entre em contato com contato@descola.org</p>'
    },
    {
      id: 'meus-cursos-demoram-muito-para-carregar',
      question: 'Meus cursos demoram muito para carregar',
      answer:
        '<p>Todos os vídeos produzidos pela Descola tem diferentes opções de visualização, sendo que pode ser vistas desde full hd até tamanhos menores. Se os vídeos demoram muito para carregar veja se diminuindo a resolução no canto inferior do vídeo ele carrega de maneira mais rápida.</p><p>Caso não seja esse o problema, tente limpar o cache do seu navegador. Esse acúmulo de dados pode trazer lentidão para carregar novos vídeos. Sugerimos que você limpe periodicamente para ter uma melhor experiência de aprendizagem.</p>'
    },
    {
      id: 'meus-cursos-nao-carregam',
      question: 'Meus cursos não carregam',
      answer:
        '<p>Se você não consegue entender o que está acontecendo para não carregar seus vídeos temos uma lista de dicas que podem te auxiliar:</p><ol class="ol-primary"><li>Tente assistir o curso online em uma janela anônima. Se o vídeo for reproduzido sem problemas, tente verificar sua extensão, plug-in ou programa de firewall no seu dispositivo para ver se ele precisa ser reconfigurado ou desativado. </li><li>Use um navegador diferente. Se você ainda não usa o Google Chrome, recomendamos o uso, pois ele é muito bom para assistir nossos cursos. Outros navegadores também rodam normalmente desde que estejam em suas versões atualizadas.</li><li>Limpe os cookies e o cache do navegador e reinicie-o antes de tentar novamente. </li><li>Se você tiver muitas guias do navegador abertas, feche a maioria delas, exceto a que você está usando para assistir ao curso. </li><li>Verifique a versão do seu navegador e atualize-a pra a última disponível, se necessário. Recomendamos uma velocidade mínima de 5MB ou 800kbps na Internet para assistir os cursos da Descola. Teste a velocidade da sua conexão com a Internet para garantir que seu ambiente atenda.</li><li>Se a velocidade da sua Internet estiver baixa, tente diminuir a qualidade do vídeo ou assistir ao curso quando sua conexão à Internet estiver mais forte. Você pode encontrar essa opção na parte inferior direita do vídeo. </li><li>Desative qualquer aceleração de hardware que você instalou (no Firefox ou no Windows). Se você não conseguir ouvir nenhum áudio, verifique novamente se o volume do reprodutor de curso está aumentado e se o vídeo não está mudo. Verifique as configurações de som no seu dispositivo.</li></ol>'
    },
    {
      id: 'como-faco-o-download-do-meu-ebook-do-curso',
      question: 'Como faço o download do meu ebook do curso?',
      answer:
        '<p>Para fazer o download do ebook do curso entrar na parte de “Meus cursos”, selecione o curso desejado clicando em “assistir” e abaixo do vídeo você poderá ver o espaço de “Recursos Adicionais” onde ficam todos os materiais inclusos no curso inclusive o ebook para download.</p>'
    }
  ];
  const paymentQuestions = [
    {
      id: 'forma-de-pagamento',
      question: 'Formas de pagamento',
      answer:
        '<p>Os cursos, trilhas e pacotes podem ser comprados no site da Descola no cartão de crédito, aceitamos todas as bandeiras e também via boleto bancário. Basta colocar os cursos no carrinho que poderá escolher sua opção na sequência.</p><p>Cursos pagos com cartão de crédito podem ser parcelados em até 10 vezes, já o boleto bancário somente na opção a vista.</p>'
    },
    {
      id: 'posso-pedir-reembolso-do-curso-comprado',
      question: 'Posso pedir reembolso do curso comprado?',
      answer:
        '<p>Os cursos online da Descola são todos muito bem estruturados e pensados com os professores para gerar uma grande experiência de aprendizagem, por isso temos uma política de reembolso de 7 dias a partir da compra. Os pedidos devem ser efetuados diretamente pelo email <a href="mailto:contato@descola.org">contato@descola.org</a> com o número do pedido e o motivo do reembolso.</p><p>Solicitações após esse prazo não poderão ser reembolsadas.</p>'
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
        '<p>Somos uma escola online de powerskills, se você quer fazer parte do nosso time de professores basta responder esse pequeno questionário que nossa equipe entrará em contato com você. Link:  👉<a href="http://dsco.la/sejaumprofessor">http://dsco.la/sejaumprofessor</a></p><p>Nós iremos entender o tema que você quer ministrar e modelar todo esse conteúdo com o professor. Iremos passar por todo o processo e gravar o curso. Não somos uma plataforma apenas para comercializar cursos de terceiros, zelamos muito pela grande experiência de aprendizagem e por isso queremos, junto com os professores, modelar da melhor forma possível.</p>'
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
                  Aqui você encontra a resposta para suas dúvidas. Se não encontrar, envie um e-mail para contato@descola.org.
                </h2>
                {/* <div className="search__bar">
                  <input className="" type="text" placeholder="Tem dúvidas sobre algo? Procure aqui e veja se temos a resposta" />
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
