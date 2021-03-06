import { Component, Input, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/services/config.service';

@Component({
  selector: 'app-missao-modal',
  templateUrl: './missao-modal.page.html',
  styleUrls: ['./missao-modal.page.scss'],
})
export class MissaoModalPage implements OnInit {

  @Input() nomeModal:string;

  modals = {
      missao:{
        titulo: 'Missão',
        img:'/assets/images/modals/missao.png',
        txt: `Ser agente de <b>transformação</b> digital de empresas e pessoas no Brasil,
        <b>superando</b> barreiras físicas e
        <b>alavancando</b> a comunicação e as vendas dos nossos clientes através da 
        expertise de uma plataforma de marketplace de alta
        tecnologia, que se propõe a <b>conectar</ib> empresas e influenciadores digitais
        cadastrados em todo o país com o objetivo
        de <b>divulgar</b> digitalmente marcas, produtos e serviços.`
      },
      valores:{
        titulo: 'Valores',
        img:'/assets/images/modals/valores.png',
        txt: `Ética, Integridade, Transparência, Respeito, Compromisso, Profissionalismo, Disrupção, Credibilidade, Qualidade, Foco, Segurança, Excelência, Eficiência.`
      },
      visao:{
        titulo: 'Visão',
        img:'/assets/images/modals/visao.png',
        txt: `Ser a maior e mais <b>importante</b> plataforma de marketplace de influenciadores digitais do Brasil, contribuindo para a <b>expansão</b> dos negócios dos nossos clientes, a partir do desenvolvimento da comunicação digital das suas marcas, produtos e serviços.`
      }
    }

  constructor(public cfConfig: ConfigService) { }

  ngOnInit() {

    console.log(this.modals[this.nomeModal].titulo)
  }

}
