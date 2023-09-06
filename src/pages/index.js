import React, { useState } from "react";

export default function Home() {
  const [mostrarTermos, setMostrarTermos] = useState(false);

  const toggleTermos = () => {
    setMostrarTermos(!mostrarTermos);
  };

  return (
    <section>
      <h1 className="page-title">Saboaria Artesanal</h1>
      <div className="page-content mb-24">
        <div className="flex justify-center">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://docs.google.com/document/d/1ahtAFuw2ZW8rhwy6ZmhXJouA5U8t2QcokMpDK9NSVk0/edit?usp=sharing"
            className="cursor-pointer underline mx-1 md:mx-6 mt-4 md:mb-6 items-center px-4 text-slate-700 rounded font-semibold hover:text-slate-400 ease-in duration-200 "
          >
            Código de conduta
          </a>
        </div>
        <div className="flex justify-center">
          <button
            className=" mx-1 md:mx-6 mt-4 md:mb-6 items-center px-4 py-2 bg-teal-500 text-slate-700 rounded font-semibold hover:bg-teal-700 hover:text-white ease-in duration-200 "
            onClick={toggleTermos}
          >
            Mostrar Política de Privacidade
          </button>
        </div>

        {mostrarTermos && (
          <div id="termosPrivacidade">
            <ul className="list-disc px-3 md:px-10 mt-6 space-y-4">
              <li>
                <h2>Qual o propósito da Política de Privacidade?</h2>
                <p>
                  A presente Política de Privacidade tem como objetivo fornecer
                  informações claras e transparentes sobre como tratamos dados
                  pessoais, garantindo que você esteja ciente de como suas
                  informações serão usadas.
                </p>
              </li>{" "}
              <li>
                <h2>A quem essa Política de Privacidade se aplica?</h2>
                <p>
                  Esta Política de Privacidade se aplica a todos os clientes,
                  visitantes e usuários dos produtos e serviços oferecidos pela
                  Saboaria Artesanal SaboArte.
                </p>
              </li>
              <li>
                <h2>Que tipos de informações pessoais são tratadas?</h2>
                <p>
                  Coletamos informações pessoais que você nos fornece
                  diretamente, como seu nome, endereço, endereço de e-mail,
                  número de telefone, informações de pagamento e outras
                  informações que você compartilha ao fazer compras ou entrar em
                  contato conosco.
                </p>
              </li>
              <li>
                <h2>Por que solicitamos seus dados pessoais?</h2>
                <p>
                  Processar suas compras de sabonetes e cosméticos naturais.
                  Fornecer informações sobre nossos produtos, promoções e
                  eventos, caso você opte por receber essas comunicações.
                  Garantir que possamos entrar em contato com você em relação ao
                  seu pedido ou consulta. Cumprir obrigações legais, como a
                  contabilidade e a legislação fiscal.
                </p>
              </li>
              <li>
                <h2>Com quem compartilhamos seus dados?</h2>
                <p>
                  Não compartilhamos suas informações pessoais com terceiros sem
                  o seu consentimento, exceto quando necessário para processar
                  sua compra, cumprir obrigações legais ou proteger nossos
                  direitos.
                </p>
              </li>
              <li>
                <h2>Por quanto tempo armazenamos informações pessoais?</h2>
                <p>
                  Mantemos suas informações pessoais pelo tempo necessário para
                  cumprir os propósitos descritos nesta política, a menos que um
                  período de retenção mais longo seja necessário por razões
                  legais ou regulatórias.
                </p>
              </li>
              <li>
                <h2>Como exercer os seus direitos?</h2>
                <p>
                  Se desejar exercer seus direitos de privacidade ou tiver
                  dúvidas sobre como suas informações são tratadas, entre em
                  contato conosco pelo e-mail: saboarte@gmail.com.
                </p>
              </li>
              <li>
                <h2>Como nos mantemos suas informações pessoais seguras?</h2>
                <p>
                  Para manter suas informações pessoais seguras, implementamos
                  medidas de segurança técnicas, organizacionais e
                  administrativas adequadas. Lembramos que, embora tomemos todas
                  as medidas razoáveis para proteger suas informações pessoais,
                  nenhum sistema é completamente imune a ameaças de segurança.
                  Portanto, é importante que você também tome medidas de
                  segurança, como manter suas senhas confidenciais, evitar
                  compartilhar informações sensíveis e manter seu dispositivo
                  seguro.
                </p>
              </li>
              <li>
                <h2>
                  Como entrar em contato com o encarregado da proteção de dados?
                </h2>
                <p>
                  Se você tiver alguma preocupação relacionada à segurança de
                  suas informações pessoais ou suspeitar de qualquer violação de
                  dados, entre em contato conosco imediatamente para que
                  possamos investigar e tomar as medidas adequadas para proteger
                  suas informações, pelo email: saboarte@gmail.com
                </p>
              </li>
              <li>
                <h2>Última atualização e versões anteriores</h2>
                <p>Última atualização: 04/10/2022</p>
              </li>
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
