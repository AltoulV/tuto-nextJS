import Head from 'next/head'
import Benefits from '../blocks/Benefits';
import Break from '../blocks/Break';
import Epilogue from '../blocks/Epilogue';
import Features from '../blocks/Features';
import Footer from '../blocks/Footer';
import Header from '../blocks/Header';
import Hero from '../blocks/Hero';
import Highlights from '../blocks/Highlights';
import Notice from '../components/Notice';
import Global from '../global/global.json';
import carte from '../public/images/carte.png'
import Image from 'next/image';


const LOREM = `
  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
  when an unknown printer took a galley of type and scrambled it to make a type
  specimen book.
`;

export default function Accueil() {
  return (
    <div>
      <main>

        <Hero
          title="Bonjour !"
          subtitle="Nous sommes un club d'escrime sur les communes de Villard-Bonnot et Froges, voici notre présentation :"
          illustration={carte}
        />

        <Benefits
          background="alternate"
          title="Les Horaires"
          subtitle=""
          benefits={[
            {illustration:'/images/Aigle1.png', title:'Cp Ce1 Ce2', text:'Mercredi 10h45-12h et/ou Jeudi 17h10-18h'},
            {illustration:'/images/Aigle2.png', title:'Cm1 Cm2 6ème Débutant', text:'Mercredi 10h45-12h et/ou Jeudi 17h45-19h'},
            {illustration:'/images/Aigle3.png', title:'6ème Confirmé 5ème 4ème 3ème', text:'Jeudi 18h45-20h'},
            {illustration:'/images/Aigle4.png', title:'Cours Ados Adults', text:'Jeudi 19h15-20h30'},
          ]}
        />
        <Break
          title="Organisation des cours du Jeudi"
          subtitle="This is an in-betwen CTA for visitors that already got convinced."
          illustration=""
          action="When is it ready?"
          onActionClick={() => window.scrollTo({top:99999, behavior:'smooth'})}
        />

        <Highlights
          title="La pédagogie"
          subtitle=""
          highlights={[
            {illustration:'', title:'Le vivre ensemble', text:'Mise en place de créneaux qui se chevauchent pour qu\' il y ai plus d\'intéractions pendant les cours, organisation d\'évènement interne pendant l\'année: rencontre Parents/enfants, compétition par équipe anciens/nouveaux...'},
            {illustration:'', title:'Les différents rôles', text:'Le maitre d\'armes donnera des progressions écritent dans les différents rôles de l\'escrimeur: Tireur, Mini-maitre, Arbitre, et bénévole. Les enfants aurons une référence pour leurs progressions'},
            {illustration:'', title:'Un retour des séances sur le Blog', text:'Le maitre d\'armes écrira après chaque séance un retour sur les avancements des élèves, les parents pourront donc suivre à distance le déroulement des cours et l\'avancement des enfants !'},
          ]}
        />

        <Features
          background="alternate"
          title="L'équipe"
          subtitle="Nous recrutons des volontaires pour aider le bureau !"
          features={[
            {illustration:'', title:'Marc FRANCO', text:'Président'},
            {illustration:'', title:'Odile CHEMINEAU', text:'Trésorière'},
            {illustration:'', title:'Fabien HALLEZ', text:'Secrétaire'},
            {illustration:'', title:'Arthur VINCENT', text:'Maitre d\'armes'},
          ]}
        />

        <Epilogue
          title="belledonne.escrime@lapsote.net"
          subtitle="Pour nous contacter cliquez sur le mail du dessus !"
          illustration=""
        />
      </main>

    </div>
  )
}