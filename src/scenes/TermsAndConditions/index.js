import React from 'react';

import Footer from '../../descola-frontend-components/Footer';
import Head from '../../descola-frontend-components/Head';
import ScrollToTop from '../../descola-frontend-components/ScrollToTop';

const TermsAndConditions = () => (
  <>
    <ScrollToTop />

    <Head title="Termos e Condições de Uso" />
    <div className="main index">
      <section>
        <div className="container">
          <div className="row justify">
            <div className="col-12">
              <h1>
                Nossos <span className="primary">Termos e Condições de Uso</span>
              </h1>
            </div>
          </div>
          <div className="row justify">
            <div className="col-12">
              <h2 className="primary">Introdução</h2>
            </div>
            <div className="col-md-6">
              <p>
                Os presentes Termos e Condições de Uso ( os "Termos") estabelecem as condições de uso dos serviços oferecidos por
                qualquer software ou plataforma de internet (a "Plataforma Descola"), acessível por meio da URL&nbsp;
                <strong className="primary">
                  <a href="https://descola.org">https://descola.org</a>
                </strong>
                , de titularidade da DESCOLA CURSOS INOVADORES LTDA EPP (a "Descola"), com sede na Alameda Vicente Pinzon, 54 -
                Vila Olímpia, São Paulo - SP, 04547-130, informando aos Usuários (conforme definido abaixo), as responsabilidades,
                deveres e obrigações que estes assumem ao acessar a Plataforma Descola.
              </p>
            </div>
            <div className="col-md-6">
              <p>
                Antes de se cadastrar na Plataforma Descola ou fazer uso dos seus serviços, você, na qualidade de Usuário, deverá
                ler, entender e aceitar as referidas condições de uso contidas nestes Termos, as quais são juridicamente
                vinculantes.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <h2>Navegue pelos termos</h2>
              <nav id="navbar" className="row scrollspy">
                <div className="col-md-4">
                  <div>
                    <a href="#plataformaECursos">
                      <h3>1 • Plataforma Descola e cursos Descola</h3>
                    </a>
                  </div>
                  <div>
                    <a href="#modalidadesDeContratacao">
                      <h3>2 • Modalidades de contratação dos cursos Descola</h3>
                    </a>
                  </div>
                  <div>
                    <a href="#cadastroCapacidadeEAceite">
                      <h3>3 • Cadastro, capacidade para contratar e aceite</h3>
                    </a>
                  </div>
                  <div>
                    <a href="#precoPagamentoERestituicao">
                      <h3>4 • Preço, pagamento e restituição</h3>
                    </a>
                  </div>
                  <div>
                    <a href="#regrasGeraisDeUtilização">
                      <h3>5 • Regras gerais de utilização</h3>
                    </a>
                  </div>
                </div>
                <div className="col-md-4">
                  <div>
                    <a href="#sancoesPorUsoInadequado">
                      <h3>6 • Sanções por uso inadequado</h3>
                    </a>
                  </div>
                  <div>
                    <a href="#limitacaoDeResponsabilidadeDaDescola">
                      <h3>7 • Limitação de responsabilidade da Descola</h3>
                    </a>
                  </div>
                  <div>
                    <a href="#privacidadeESeguranca">
                      <h3>8 • Privacidade e Segurança</h3>
                    </a>
                  </div>
                  <div>
                    <a href="#propriedadeIntelectual">
                      <h3>9 • Propriedade intelectual</h3>
                    </a>
                  </div>
                  <div>
                    <a href="#atendimentoAoUsuarioEControversias">
                      <h3>10 • Atendimento ao usuário e controvérsias</h3>
                    </a>
                  </div>
                </div>
                <div className="col-md-4">
                  <div>
                    <a href="#modificacoesEEncerramento">
                      <h3>11 • Modificações nos termos e encerramento da plataforma Descola</h3>
                    </a>
                  </div>
                  <div>
                    <a href="#prazoETermino">
                      <h3>12 • Prazo e término</h3>
                    </a>
                  </div>
                  <div>
                    <a href="#legislacaoEForo">
                      <h3>13 • Legislação e foro</h3>
                    </a>
                  </div>
                </div>
              </nav>
            </div>
          </div>
          <div className="row justify">
            <div className="col-12">
              <h2 className="primary" id="plataformaECursos">
                1 • Plataforma Descola e Cursos Descola
              </h2>
              <p>
                A Plataforma Descola fornece cursos educacionais e inspiradores online envolvendo tecnologia, criatividade e
                <i> business</i> (os "Cursos Descola") para que os Usuários possam contratá-los de forma gratuita ou mediante um
                pagamento prévio.
              </p>
              <p>
                A Descola é a responsável pela criação de vídeos, exercendo o papel de curadora de informação, produtora de vídeo
                e divulgadora do produto final. Os vídeos buscam ensinar além do óbvio, sem as amarras do ensino tradicional, com
                um jeito diferente de explorar temas diversos e coisas novas.
              </p>
              <p>
                A Descola seleciona os professores que lecionam em cada vídeo (os "Especialistas"). Eles são mais do que mestres,
                mas pessoas que entendem profundamente do assunto que estão falando, além de serem apaixonados pelo negócio.
              </p>
              <p>
                Além dos vídeos disponibilizados na Plataforma, a Descola disponibiliza um material de apoio e aprofundamento (o
                "Ebook") nos temas abordados em cada um dos Cursos Descola. Todos os cursos que o Usuário fizer serão acompanhados
                de um Ebook com informações complementares ao conteúdo de vídeo. A criação, produção e divulgação dos Ebooks de
                cada curso é de responsabilidade da Descola.
              </p>
              <p>
                Alguns Cursos Descola também incluem a participação dos alunos em um grupo de discussão sobre o tema cursado em
                redes sociais. Para acessá-lo o usuário deverá ser registrado, no Descola.org, além de ter adquirido um dos cursos
                no site e com perfil real na referida rede social. A interação entre participantes do curso é uma terceira forma
                de aprendizado, com a troca de experiências.
              </p>
              <p>
                Caso o Usuário tenha um email diferente cadastrado na rede social e no site do Descola, um email solicitando a
                liberação do acesso contendo o email cadastrado na rede social deve ser enviado para&nbsp;
                <strong className="primary">contato@descola.org</strong>
              </p>
              <p>
                Na eventualidade de o Usuário não possuir um perfil na rede social onde os grupos ficam disponíveis e não queira
                criar um para participar da discussão, ou o curso escolhido não tenha esta opção, não haverá nenhuma forma de
                compensação financeira.
              </p>
            </div>
            <div className="col-12">
              <h2 className="primary" id="modalidadesDeContratacao">
                2 • Modalidades de contratação dos cursos Descola
              </h2>
              <p>Os Cursos Descola podem ser contratados em duas modalidades diferentes, conforme indicado a seguir.</p>
              <p>
                <strong>a) Contratação direta pelo Usuário</strong> <br />
                Qualquer Usuário pode, por conta própria, contratar Cursos Descola. Nessa modalidade, o Usuário pode escolher os
                Cursos Decola disponíveis na Plataforma Descola e aproveitar o conteúdo conforme suas preferências. Para tanto, o
                Usuário deverá realizar o pagamento de cada Curso Descola contratado diretamente à Descola, pelos meios de
                pagamento disponíveis na Plataforma Descola e conforme as regras estabelecidas por estes Termos de Uso.
              </p>
              <p>
                <strong>b) Contratação Corporativa</strong>
                <br />
                A Descola oferece Cursos Descola para organizações de diversos setores (os "Clientes Corporativos"). Os Clientes
                Corporativos contam com os serviços das Plataforma Descola para capacitar seus colaboradores e parceiros. Nesse
                caso, o Cliente Corporativo é quem escolhe o tema dos cursos e cuida de todos os detalhes de sua contratação
                (inclusive o pagamento) diretamente com a Descola. Assim, os Usuários, que são colaboradores ou parceiros do
                Clientes Corporativos, podem acessar a Plataforma Descola e aproveitar os Cursos Descola contratados pelo Cliente
                Corporativo
                <br />
                Para que os Usuários, sejam eles contratantes independentes ou colaboradores de Clientes Corporativos, possam
                interagir e fazer uso dos Cursos Descola, cada um deles deve ler, entender e concordar com os presentes Termos de
                uso e a Política de Privacidade da Descola.
              </p>
            </div>
            <div className="col-12">
              <h2 className="primary" id="cadastroCapacidadeEAceite">
                3 • Cadastro, capacidade para contratar e aceite
              </h2>
              <p>
                O acesso e cadastro à Plataforma Descola está disponível às pessoas físicas que tenham capacidade legal para
                contratar, desde que preencham os dados obrigatórios exigidos no momento do cadastro e que atendam aos requisitos
                contidos nos Termos e na Política de Privacidade da Descola. O cadastro à Plataforma Descola também pode ser feito
                com suas redes sociais, Facebook ou Google. O Usuário aceita o compromisso de sempre manter atualizado o seu
                Cadastro.
              </p>
              <p>
                No caso da contratação por Clientes Corporativos, o cadastro dos Usuários a ele vinculados será for efetuado pelo
                próprio Cliente Corporativo, que deverá informar à Descola os dados necessários para tanto. O Cliente Corporativo
                disponibilizará o acesso à Plataforma Descola aos Usuários de sua responsabilidade.
              </p>
              <p>
                A Descola poderá, a seu exclusivo critério, realizar as buscas que julgar necessárias para apurar dados cadastrais
                em relação aos quais haja suspeitas de fraude, incorreção e falsidade. De todo modo, o Usuário ou o Cliente
                Corporativo, conforme o caso, responderá civil e criminalmente pela veracidade, exatidão e autenticidade de seus
                dados cadastrais. A Descola reserva-se o direito de recusar qualquer solicitação de cadastro e de cancelar
                qualquer cadastro previamente aceito, que esteja em desacordo com esses Termos.
              </p>
              <p>
                A idade mínima para que Usuários sejam cadastrados na Plataforma é de 13 anos. Adolescentes entre 13 e 15 anos
                precisam estar regularmente autorizados pelos pais ou responsáveis para tanto. Para Usuário acima de 16 anos essa
                autorização não é necessária. O cadastro na Plataforma e a aceitação destes Termos pressupõe que essa autorização
                foi concedida. A Descola deve cancelar o cadastro de Usuário menor de 15 anos a pedido dos pais ou responsáveis,
                mas isso não gera direito a qualquer indenização ou reembolso em razão dos Cursos Descola adquiridos pelo menor
                durante a vigência de seu cadastro.
              </p>
              <p>
                O simples uso da Plataforma Descola significa a total concordância com os Termos. O USUÁRIO RECONHECE E DECLARA,
                NESTE ATO, QUE QUAISQUER SUBMISSÕES ELETRÔNICAS SUAS CONSTITUEM SEU "DE ACORDO" E SUA INTENÇÃO DE VINCULAR-SE.
                ASSIM, O SEU "DE ACORDO" E SUA INTENÇÃO DE VINCULAR-SE, SÃO ATRIBUTOS DE QUAISQUER OPERAÇÕES ELETRÔNICAS
                EFETUADAS, INCLUINDO ACEITES, CONCORDÂNCIA COM TERMOS, POLÍTICAS E CONTRATOS.
              </p>
            </div>
            <div className="col-12">
              <h2 className="primary" id="precoPagamentoERestituicao">
                4 • Preço, pagamento e restituição
              </h2>
              <p>
                As disposições deste capítulo serão aplicáveis apenas à modalidade de contratação direta pelo Usuário dos Cursos
                Descola.
              </p>
              <p>
                A apresentação de cada Curso Descola disponível na Plataforma Descola será sempre acompanhada do respectivo preço
                ou da indicação de sua gratuidade. O preço de cada Curso Descola pode variar. A Descola se reserva o direito de
                cobrar valores diferentes para os diversos Cursos Descola, considerando suas particularidades e respeitando sempre
                a legislação aplicável.
              </p>
              <p>
                O Usuário que optar por comprar um curso pago o poderá escolher entre pagar com cartão de crédito ou boleto
                bancário.
              </p>
              <p>
                Para Usuários que pretendem pagar diretamente usando seu cartão de crédito, o valor cobrado será direcionado para
                a conta corrente da Descola. O Usuário precisará preencher os campos com informações sobre seu cartão de crédito,
                com número, nome (tal qual está no cartão), validade e código de segurança.
              </p>
              <p>
                Essas informações estarão criptografadas em um servidor seguro e com certificado SSL, são confidenciais e não
                serão utilizadas para nenhuma outra finalidade.
              </p>
              <p>
                O Usuário poderá exercer seu direito de arrependimento, nos termos da legislação aplicável, em até 7 (sete) dias a
                partir da contratação de um Curso Descola, desde que não tenha acessado mais de 20% do conteúdo.
              </p>
              <p>
                O Usuário é o responsável pelos dados que inserir nos campos de pagamento, garantindo sua veracidade, atualidade e
                completude.
              </p>
              <p>Os pagamentos realizados na Plataforma Descola serão todos feitos na moeda REAL (R$).</p>
              <p>
                No momento de compra de um Curso Descola o Usuário receberá via email cadastrado a Nota Fiscal referente a sua
                compra.
              </p>
            </div>
            <div className="col-12">
              <h2 className="primary" id="regrasGeraisDeUtilização">
                5 • Regras gerais de utilização
              </h2>
              <p>
                Os Usuários devem utilizar a Plataforma Descola apenas para propósitos permitidos por lei, seguindo as regras
                apropriadas para este tipo de ambiente e de acordo com os padrões da Descola.
              </p>
              <p>
                O Usuário que acessa a Plataforma Descola, independente da modalidade de contratação, se compromete a usar de
                forma responsável o conteúdo fornecido a ele. Ao Usuário não é autorizado o download do vídeo por qualquer que
                seja o meio, nem de sua gravação para reprodução futura fora da Plataforma Descola. Qualquer tipo de divulgação do
                material exclusivo de Descola, incluindo o Ebook dos Cursos Descola, por parte de um Usuário sem a autorização da
                Descola será de responsabilidade exclusiva do Usuário.
              </p>
              <p>
                Os Usuários são os únicos responsáveis pelo login e senha que lhe forem confiados, comprometendo-se a não informar
                a terceiros os referidos dados, responsabilizando-se pelo uso que deles seja feito. Assim, se, por qualquer
                motivo, desconfiarem que a confidencialidade da senha foi comprometida, os Usuários devem, imediatamente: (i)
                trocá-la fazendo uso dos meios de troca fornecidos pela Descola e (ii) informar a Descola sobre o referido
                comprometimento da sua senha.
              </p>
              <p>
                Somente declarações verdadeiras e baseadas em fatos podem ser feitas pelo sistema de avaliação da Plataforma
                Descola. São proibidas quaisquer declarações difamatórias ou inapropriadas, ou de qualquer outra forma ilícitas,
                sob pena de responsabilidade.
              </p>
              <p>
                A Descola não promete nem garante que você atingirá qualquer desempenho, ganho ou resultado com o uso da
                Plataforma Descola ou com a contratação de qualquer Curso Descola. Além disso, nenhum Especialista da Descola pode
                prometer desempenho, ganho ou resultado de qualquer natureza, seja decorrente do uso da Plataforma Descola sua
                condição de Usuário ou da participação dos Cursos Descola.
              </p>
              <p>
                O Usuário não fará uso de nenhum "dispositivo de desabilitação", "dispositivos <i> drop dead</i>", "bombas
                relógio", "<i> trap doors</i>", "cavalos de Troia", "<i> worms</i>" ou demais códigos maliciosos que possam
                prejudicar a Plataforma Descola, ou trazer prejuízos a terceiros.
              </p>
              <p>
                Os Usuários são proibidos de publicar conteúdo que possa comprometer ou prejudicar a integridade, estabilidade ou
                disponibilidade da Plataforma Descola.
              </p>
              <h2 className="primary" id="sancoesPorUsoInadequado">
                6 • Sanções por uso inadequado
              </h2>
              <p>
                Sempre que a Descola tenha indícios razoáveis de que um Usuário descumpriu os presentes Termos, a legislação
                aplicável, direitos de terceiros ou, tão simplesmente, feriu legítimos interesses da Descola ou de terceiros
                ("Suspeita de Desvio") a Descola poderá tomar medidas de proteção ou sancionatórias contra o Usuário em questão.
                Ao tomar tais medidas, a Descola ponderará os direitos do Usuário suspeito, com, dentre outros, os requisitos
                operacionais da Plataforma Descola, seus próprios riscos de responsabilização, e os legítimos de interesses de
                Usuários eventualmente prejudicados.
              </p>
              <p>
                Até que a Suspeita de Desvio seja sanada ou resolvida, a Descola poderá:
                <br />
                a) advertir os Usuários envolvidos para que cessem o desvio ou violação;
                <br />
                b) modificar o conteúdo de responsabilidade do Usuário ou simplesmente deletá-lo;
                <br />
                c) restringir temporariamente ou limitar o número ou funcionalidade de contas do Usuário;
                <br />
                d) bloquear as contas do Usuário e
                <br />
                e) excluir o Usuário da Plataforma Descola completamente e permanentemente.
                <br />
              </p>
              <p>
                A Descola se reserva o direito de tomar medidas adicionais a essas, o que inclui medidas indicadas em itens
                específicos desses Termos. Além disso, as medidas ora indicadas não se sobrepõem ao, ou limitam o direito da
                Descola de tomar as medidas jurídicas e/ou judiciais aplicáveis.
              </p>
              <p>
                O Usuário a quem se refere a Suspeita de Desvio sempre será informado, e desde que possível, de forma antecipada e
                com oferta de prazo razoável para resposta.
              </p>
              <h2 className="primary" id="limitacaoDeResponsabilidadeDaDescola">
                7 • Limitação de responsabilidade da Descola
              </h2>
              <p>
                Não há garantia de funcionamento ininterrupto da Plataforma Descola. A Plataforma Descola estará sempre sujeita a
                interrupções programadas ou não programadas. Muito embora atue de forma constante para minimizar as interrupções e
                suas inconveniências, a Descola não é responsável pelas consequências de sua ocorrência.
              </p>
              <h2 className="primary" id="privacidadeESeguranca">
                8 • Privacidade e segurança
              </h2>
              <p>
                A Descola se preocupa em garantir a segurança das informações que trafegam e são armazenadas em seus sistemas, bem
                como o direito de privacidade e à proteção dos Usuários. Nesse sentido, o uso de dados pessoais de Usuários é
                regido por nossa Política de Privacidade. Ao acessar e utilizar a Plataforma Descola, os Usuários concordam, por
                referência, e em sua integralidade, com as condições da Política de Privacidade.
              </p>
              <p>
                Os Usuários reconhecem e concordam que, muito embora a Descola tenha processos e faça uso das melhores tecnologias
                disponíveis em matéria de privacidade e segurança da informação, o acesso não autorizado ou a interceptação das
                informações é risco inerente ao processamento e à guarda eletrônica de dados. Assim sendo, os Usuários concordam
                que confiam seus dados à Descola por sua inteira conta e risco.
              </p>
              <h2 className="primary" id="propriedadeIntelectual">
                9 • Propriedade intelectual
              </h2>
              <p>
                A Descola preza pela proteção de seus próprios direitos de propriedade intelectual, bem como pelos dos Usuários e
                de terceiros. O Usuário reconhece que a Plataforma Descola, seu <i> look and feel</i> (o que inclui, sem
                limitação, a cor, texto, vídeo, áudio, organização e disposição dos elementos visuais da Plataforma) e o nome e
                marca Descola (os "Materiais"), estão protegidos pelas leis de propriedade intelectual aplicáveis.
              </p>
              <p>
                Todo o conteúdo da Plataforma (vídeos, Ebooks e dentre outros materiais) também é de propriedade da Descola ou é
                por esta utilizado sob licença ou com permissão – a reprodução parcial ou total é proibida sem a permissão prévia
                da Descola, ou seja, a publicação do conteúdo da Plataforma é permitida desde que a Descola seja devidamente
                referenciada aos meios de comunicação.
              </p>
              <h2 className="primary" id="atendimentoAoUsuarioEControversias">
                10 • Atendimento ao usuário e controvérsias
              </h2>
              <p>
                A Descola disponibiliza aos Usuários serviços de comunicação digital, [p.ex. chat, e-mail] voltados à
                esclarecimento de dúvidas e para fins de recebimento de reclamações em relação à Plataforma Descola e aos Cursos
                Descola.
              </p>
              <p>
                Em caso de controvérsias, a Descola deverá ser imediatamente informada através do e-mail
                <strong className="primary">
                  <a href="mailto:contato@descola.org">contato@descola.org</a>
                </strong>
                .
              </p>
              <h2 className="primary" id="modificacoesEEncerramento">
                11 • Modificações nos termos e encerramento da plataforma Descola
              </h2>
              <p>
                Com a finalidade de melhorar a Plataforma Descola e/ou os serviços prestados, a Descola poderá realizar alterações
                nos Termos de Uso, de forma unilateral e a qualquer momento, razão pela qual recomendamos a sua leitura periódica,
                como forma de cientificar-se das responsabilidades, deveres e obrigações que os Usuários assumem ao utilizar a
                Plataforma Descola.
              </p>
              <p>
                Os novos Termos entrarão em vigor no prazo de 10 (dez) dias contados da data de comunicação. Na eventualidade dos
                Usuários não concordarem com as condições dos novos Termos, deverão manifestar-se por e-mail em relação à sua não
                concordância para que o vínculo contratual deixe de existir.
              </p>
              <p>
                Em caso de encerramento ou término das atividades da Plataforma Descola, a qual independe de aviso ou notificação
                prévios, não caberá aos Usuários qualquer direito a indenização.
              </p>
              <h2 className="primary" id="prazoETermino">
                12 • Prazo e término
              </h2>
              <p>
                Esses Termos valem por tempo indeterminado entre o Usuário e a Descola. O Usuário tem o direito de terminar sua
                relação com a Descola e deixar de utilizar a Plataforma Descola a qualquer momento.
              </p>
              <h2 className="primary" id="legislacaoEForo">
                13 • Legislação e foro
              </h2>
              <p>
                O presente instrumento é regido pelas leis brasileiras e as partes se submeterão ao foro da Comarca de São Paulo,
                SP, para dirimir eventuais controvérsias oriundas dos Termos.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
    <Footer type='public' />
  </>
);

export default TermsAndConditions;
