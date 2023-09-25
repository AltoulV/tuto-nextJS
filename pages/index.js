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



export default function Accueil() {
  return (
    <div>
      <main>

        <Hero
          title="Bonjour !"
          subtitle="Nous sommes un club d'escrime sur les communes de Villard-Bonnot et Froges"
          illustration={carte}
        />

        <Benefits
          background="alternate"
          title="Les Horaires"
          subtitle=""
          benefits={[
            {illustration:'/images/Aigle1.png', title:'Primaires', text:'Mercredi 10h45-12h et/ou Jeudi 17h-18h'},
            {illustration:'/images/Aigle3.png', title:'Collégiens', text:'Jeudi 18h30-19h30'},
            {illustration:'/images/Aigle4.png', title:'Lycéens Adults', text:'Jeudi 19h30-20h30'},
          ]}
        />
        <Break
          title="Organisation des cours du Jeudi"
          subtitle="timeline des cours d'escrime de Villard-Bonnot le Jeudi soir"
          illustration=""
        />

        <Highlights
          title="La pédagogie"
          subtitle=""
          highlights={[
            {illustration:'/images/VivreE.png', title:'Le vivre ensemble', text:'Mise en place de créneaux qui se chevauchent pour qu\' il y ait plus d\’interactions pendant les cours, organisation d\'événements internes pendant l\'année: rencontre parents/enfants, compétition par équipe anciens/nouveaux...'},
            {illustration:'/images/RoleMini.png', title:'Les différents rôles', text:'Le maître d\'armes donnera des progressions écritent dans les différents rôles de l\'escrimeur: Tireur, Mini-maître, Arbitre, et Bénévole. Les enfants auront une référence pour leurs progressions.'},
            {illustration:'/images/feedback.png', title:'Un retour des séances sur le Blog', text:'Le maître d\'armes écrira régulièrement sur le blog un retour sur les avancements des élèves, les parents pourront donc suivre à distance le déroulement des cours et l\'avancement des enfants !'},
          ]}
        />

        <Features
          background="alternate"
          title="L'équipe"
          subtitle="Nous recrutons des volontaires pour aider le bureau !"
          features={[
            {illustration:'/images/MarcFranco.png', title:'Marc FRANCO', text:'Président'},
            {illustration:'/images/OdileChemineau.png', title:'Odile CHEMINEAU', text:'Trésorière'},
            {illustration:'/images/FabienHallez.png', title:'Fabien HALLEZ', text:'Secrétaire'},
            {illustration:'/images/ArthurV.png', title:'Arthur VINCENT', text:'Maître d\'armes'},
          ]}
        />

        <Epilogue
          title="belledonne.escrime@laposte.net"
          subtitle="Pour nous contacter ou vous inscrire, cliquez sur le mail du ci-dessus !"
          illustration=""
        />
      </main>

    </div>
  )
}