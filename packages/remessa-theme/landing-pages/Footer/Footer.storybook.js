import React from 'react'
import { storiesOf } from '@storybook/react'

import styleDecorator from '../../decorator-helper'

storiesOf('Remessa - Theme/Landing Pages/Footer', module)
.addDecorator(styleDecorator)
.add('Overview', () => (
  <footer className="RM-Footer">
    <div className="pt-5">
      <div className="container">
        <svg
          className="RM-Footer__logo"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 131 23"
          width="100%"
          height="100%"
        >
          <path d="M28.929 12.452v4.614h-1.332V5.934h3.49c.38-.007.762.01 1.14.05.23.034.467.079.696.132a2.99 2.99 0 0 1 1.512 1.15c.362.536.543 1.188.544 1.955a3.026 3.026 0 0 1-.694 1.934c-.451.537-1.066.908-1.846 1.113l3.146 4.797h-1.512l-3.026-4.614-2.118.001zm3.186-1.315a1.98 1.98 0 0 0 1.11-.618c.281-.316.422-.78.422-1.38 0-.6-.168-1.06-.504-1.397-.336-.338-.786-.533-1.351-.587-.202-.055-.672-.082-1.411-.081h-1.452v4.143a19.7 19.7 0 0 0 1.452.06 8.772 8.772 0 0 0 1.734-.14zm9.611-1.017c.551.613.827 1.48.827 2.6v.71l-.08.16h-5.306c0 .662.249 1.275.746 1.84.47.473 1.204.709 2.2.708a5.75 5.75 0 0 0 1.875-.304l.243.973a7.58 7.58 0 0 1-2.482.426c-1.25 0-2.205-.338-2.865-1.015-.66-.676-.99-1.64-.988-2.893 0-1.187.29-2.165.868-2.936.619-.795 1.486-1.193 2.601-1.194 1.023-.001 1.81.307 2.361.925zm-.938.759c-.29-.432-.717-.647-1.282-.647-.712 0-1.257.215-1.634.647a2.995 2.995 0 0 0-.688 1.66h4.035c.002-.68-.142-1.235-.431-1.666v.006zm11.124-.654c-.498 0-1.116.23-1.856.69.052.293.073.592.061.89v5.261h-1.311v-4.938c0-1.268-.511-1.902-1.533-1.902-.484 0-1.083.195-1.795.586v6.254h-1.31V9.293h.907l.282.648a4.91 4.91 0 0 1 1.271-.648 4.28 4.28 0 0 1 1.07-.115 2.55 2.55 0 0 1 1.179.252c.335.169.623.42.837.73a6.359 6.359 0 0 1 1.272-.73 3.421 3.421 0 0 1 1.331-.252c.793 0 1.401.24 1.826.718.425.478.637 1.116.635 1.912v5.258h-1.352v-4.938c-.001-1.269-.506-1.903-1.514-1.903zm10.268-.105c.55.613.826 1.48.826 2.6v.71l-.081.16h-5.306c0 .662.25 1.275.746 1.84.472.473 1.205.709 2.2.708.637.003 1.27-.1 1.875-.304l.243.973a7.575 7.575 0 0 1-2.48.426c-1.251 0-2.206-.338-2.866-1.015-.659-.676-.988-1.64-.988-2.893 0-1.187.29-2.165.868-2.936.617-.795 1.485-1.193 2.602-1.194 1.023-.001 1.81.307 2.36.925zm-.938.759c-.29-.432-.716-.647-1.281-.647-.712 0-1.257.215-1.634.647a2.995 2.995 0 0 0-.688 1.66h4.034c.002-.68-.142-1.235-.43-1.666v.006zm7.019 4.983a.867.867 0 0 0 .494-.805.763.763 0 0 0-.363-.668c-.243-.162-.753-.405-1.533-.73l-.766-.302a10.389 10.389 0 0 1-.828-.436 1.847 1.847 0 0 1-.584-.587 1.772 1.772 0 0 1-.263-1.002c0-.728.3-1.268.897-1.618.599-.35 1.335-.526 2.209-.526a5.309 5.309 0 0 1 2.219.506l-.323.972a4.491 4.491 0 0 0-1.755-.384c-.58 0-1.047.084-1.403.252-.356.168-.534.407-.534.718a.843.843 0 0 0 .373.729c.249.175.676.378 1.28.608l.667.262c.74.312 1.257.635 1.553.97.295.337.444.782.444 1.338 0 .566-.262 1.055-.787 1.467-.524.414-1.224.617-2.098.617a7.82 7.82 0 0 1-2.945-.586l.364-.993a7.368 7.368 0 0 0 2.48.466 2.46 2.46 0 0 0 1.202-.268zm7.002 0a.867.867 0 0 0 .494-.805.762.762 0 0 0-.363-.668c-.242-.162-.753-.405-1.532-.73l-.767-.302a10.475 10.475 0 0 1-.826-.436 1.847 1.847 0 0 1-.585-.587 1.765 1.765 0 0 1-.262-1.002c0-.728.3-1.268.897-1.618.599-.35 1.335-.526 2.209-.526a5.309 5.309 0 0 1 2.219.506l-.323.972a4.491 4.491 0 0 0-1.755-.384c-.58 0-1.047.084-1.403.252-.356.168-.534.407-.534.718-.01.291.13.567.372.729.25.175.677.378 1.282.608l.666.262c.74.312 1.258.635 1.553.97.295.337.442.782.443 1.338 0 .566-.262 1.055-.786 1.467-.524.414-1.224.617-2.099.617a7.82 7.82 0 0 1-2.944-.586l.363-.993a7.365 7.365 0 0 0 2.48.466c.417.014.83-.079 1.2-.268zm4.621-5.444a7.596 7.596 0 0 0-1.06.23l-.262-.972a7.77 7.77 0 0 1 2.522-.46c.874 0 1.54.135 1.997.405.355.241.642.568.837.95.153.338.23.83.23 1.479v5.02h-.989l-.282-.73c-.764.62-1.55.93-2.36.932a2.63 2.63 0 0 1-1.766-.61 1.937 1.937 0 0 1-.715-1.545c-.02-.558.18-1.102.554-1.515a2.725 2.725 0 0 1 1.361-.805c.688-.176 1.65-.264 2.885-.264v-.061c0-.558-.054-.967-.162-1.226-.215-.613-.806-.92-1.774-.92-.34.005-.68.035-1.016.092zm1.99 5.567c.354-.164.68-.383.968-.647v-1.854c-.928 0-1.616.047-2.063.142-.498.108-.867.266-1.11.475a1.227 1.227 0 0 0 .05 1.79c.28.218.625.333.978.325.404.009.805-.07 1.176-.231zm9.623-10.192a5.622 5.622 0 0 1 2.773.69 5.069 5.069 0 0 1 1.969 1.963c.486.85.725 1.84.725 2.954a6.227 6.227 0 0 1-.715 3.007 5.205 5.205 0 0 1-1.976 2.063c-.86.5-1.84.755-2.833.74a5.566 5.566 0 0 1-2.652-.658 5.07 5.07 0 0 1-2.007-1.955c-.512-.863-.768-1.895-.767-3.096 0-1.12.242-2.11.726-2.975a5.21 5.21 0 0 1 1.977-2.014 5.46 5.46 0 0 1 2.78-.72zm-.08 1.84a3.557 3.557 0 0 0-1.654.394c-.529.28-.963.71-1.25 1.235-.323.559-.484 1.264-.484 2.114a4.498 4.498 0 0 0 .464 2.095c.285.571.726 1.05 1.271 1.38a3.411 3.411 0 0 0 1.795.485 3.511 3.511 0 0 0 1.645-.404c.537-.29.976-.735 1.26-1.277.323-.58.484-1.301.483-2.165 0-.877-.174-1.606-.523-2.185a3.26 3.26 0 0 0-1.333-1.276 3.713 3.713 0 0 0-1.674-.395v-.001zm8.212 1.66l.243.567a6.085 6.085 0 0 1 2.683-.668c.82 0 1.434.182 1.844.546.39.332.665.778.786 1.276.12.538.178 1.088.172 1.64v4.412h-1.916v-4.654a2.03 2.03 0 0 0-.303-1.094c-.202-.322-.565-.484-1.089-.485-.471 0-1.096.141-1.875.424v5.809H98.26V9.294h1.37zm10.267 6.437c.313-.007.625-.054.927-.142v1.277a4.083 4.083 0 0 1-1.735.385c-1.318 0-1.977-.728-1.977-2.185V5.934h1.896v8.556c0 .406.065.713.193.92.126.216.357.32.696.32zm1.914-8.116a1.236 1.236 0 0 1 0-1.751 1.234 1.234 0 0 1 2.003.406c.192.46.09.99-.257 1.345-.228.24-.547.373-.878.365a1.182 1.182 0 0 1-.867-.365zm-.1 9.452h1.938V9.294h-1.938v7.772zm5.001-7.773l.243.567a6.088 6.088 0 0 1 2.683-.668c.819 0 1.435.182 1.845.546.39.331.666.778.787 1.276.12.538.177 1.088.17 1.64v4.412h-1.916v-4.654c.005-.386-.1-.765-.301-1.094-.202-.322-.565-.484-1.09-.485-.47 0-1.096.141-1.875.424v5.809h-1.916V9.294h1.37zm10.592-.119c1.17 0 2.068.36 2.693 1.082.625.721.938 1.71.939 2.967v.748h-5.264c.052.663.282 1.12.687 1.38.406.26.976.383 1.72.383a8.863 8.863 0 0 0 2.137-.241l.344 1.314a8.12 8.12 0 0 1-2.742.466c-1.333 0-2.348-.371-3.046-1.113s-1.05-1.72-1.057-2.935a4.382 4.382 0 0 1 .503-2.137 3.701 3.701 0 0 1 1.322-1.416 3.34 3.34 0 0 1 1.764-.498zm.04 1.521a1.5 1.5 0 0 0-1.098.506c-.33.337-.51.805-.535 1.417h3.307c0-.621-.154-1.097-.464-1.427a1.578 1.578 0 0 0-1.21-.496zM9.925 6.9L0 12.65v4.697-.097l9.925-5.749 9.927 5.749v.097-4.697z" />
          <path d="M1.985 18.4l7.94 4.6 7.94-4.6-7.94-4.6zM9.925 0L0 5.75v4.6L9.925 4.6l9.927 5.75v-4.6z" />
        </svg>
        <div className="row">
          <p className="col-md-6 mx-auto text-center">
            A Remessa Online transformou as transferências internacionais em
            algo simples, rápido e econômico para você e para sua empresa.
            Aproveite toda a segurança e economia da plataforma e conte
            sempre com nosso atendimento especializado para resolver
            qualquer dúvida.
          </p>
        </div>
        <div className="RM-Footer__social">
          <a
            href="https://www.facebook.com/remessaonline/"
            target="_blank"
            title="Veja o Facebook do Remessa Online"
            rel="noopener noreferrer"
          >
            <svg xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
          </a>
        </div>
        <div className="row justify-content-center">
          <ul className="col-md-7 RM-Footer__contact-opts">
            <li>
              <a
                href="https://api.whatsapp.com/send?phone=5511992805882"
                title="Whatsapp: 11 9280-5882"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="icon">
                  <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#fa-whatsapp" />
                </svg>
                 Whatsapp: 11 99280-5882
              </a>
            </li>
            <li>
              <a href="mailto:remessa@remessaonline.com.br" title="Entre em contato com a Remessa Online">
                <svg className="icon">
                  <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#fa-envelope-o" />
                </svg>
                remessa@remessaonline.com.br
              </a>
            </li>
            <li className="-location">
              <a
                href="https://www.google.com.br/maps/place/Condom%C3%ADnio+Alameda+Campinas+-+Av.+Brg.+Faria+Lima,+1355+-+Jardim+Paulistano,+S%C3%A3o+Paulo+-+SP,+01452-002/@-23.5695793,-46.6934645,17z/data=!3m1!4b1!4m5!3m4!1s0x94ce576c1789d77b:0xa9da3b124e30b610!8m2!3d-23.5695842!4d-46.6912758?hl=pt-BR"
                title="Av. Brg. Faria Lima, 1355 - Jardim Paulistano - São Paulo/SP"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="icon">
                  <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#icon-pin" />
                </svg>
                 Av. Brg. Faria Lima, 1355, 19º andar - Jardim Paulistano - São Paulo/SP
              </a>
            </li>
            <li className="-award">
              <a
                href="http://www.bcb.gov.br/rex/IAMC/Port/correspondentes/correspondentes.asp"
                arget="_blank"
                title="Somos autorizados pelo Banco Central"
                rel="noopener noreferrer"
              >
                <svg className="icon">
                  <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#icon-award" />
                </svg>
                <span>
                  Correspondente cambial autorizado
                  <span className="-central">
                     pelo Banco Central
                    <svg className="RM-Footer__chevron-right">
                      <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#fa-chevron-right" />
                    </svg>
                  </span>
                </span>
              </a>
            </li>
            <li className="-socopa">
              <img className="mt-2" src="https://www.remessaonline.com.br/images/logo-socopa.svg" alt="Socopa Corretora de Valores" />
              <small>Correspondente Cambial Socopa</small>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <section className="RM-Footer__copyright">
      <div className="container">
        <div className="row text-center text-md-left">
          <div className="col-md-6 order-2 order-md-1">
            Copyright © 2018, Remessa Online.<span className="d-xs-block d-sm-block d-md-inline">Todos os direitos reservados.</span>
          </div>
          <nav className="col-md-6 text-md-right order-1 order-md-2 mb-2 mb-md-0"><span><a href="https://www.remessaonline.com.br/termos-de-uso" title="Termos de Uso">Termos de Uso</a></span></nav>
        </div>
      </div>
    </section>
  </footer>
))
