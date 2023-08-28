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
import profilePic from '../public/Profile.png';
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
          illustration={profilePic}
        />

        <Benefits
          background="alternate"
          title="Les Horaires"
          subtitle="Les horaires se che"
          benefits={[
            {illustration:'', title:'CP CE1 CE2', text:'Mercredi 10h45-12h et/ou Jeudi 17h10-18h'},
            {illustration:'', title:'CM1 CM2 6èmeDébutant', text:'Mercredi 10h45-12h et/ou Jeudi 17h45-19h'},
            {illustration:'', title:'6èmeConfirmé 5ème 4ème 3ème', text:'Jeudi 18h45-20h'},
            {illustration:'', title:'Cours Ados Adults', text:'Jeudi 19h30-20h30'},
          ]}
        />

        <Break
          title="Risk Reduction: Try Product free for 14 days"
          subtitle="This is an in-betwen CTA for visitors that already got convinced."
          illustration=""
          action="When is it ready?"
          onActionClick={() => window.scrollTo({top:99999, behavior:'smooth'})}
        />

        <Highlights
          title="Highlights of your product"
          subtitle="Explain why your solution deserves attention"
          highlights={[
            {illustration:'', title:'Now go deeper into what your product offers. Word it as benefits, not as features', text:'“Save your favorite links” is a feature. “Never lose your favorite websites again” is a benefit. Users don’t care about your product, they only care about what’s in it for them.'},
            {illustration:'', title:'Now go deeper into what your product offers. Word it as benefits, not as features', text:'“Save your favorite links” is a feature. “Never lose your favorite websites again” is a benefit. Users don’t care about your product, they only care about what’s in it for them.'},
            {illustration:'', title:'Now go deeper into what your product offers. Word it as benefits, not as features', text:'“Save your favorite links” is a feature. “Never lose your favorite websites again” is a benefit. Users don’t care about your product, they only care about what’s in it for them.'},
          ]}
        />

        <Features
          background="alternate"
          title="But wait, there is more"
          subtitle="Describe the full extent of your product"
          features={[
            {illustration:'', title:'Product feature', text:'Brief explanation of why and how this feature will help your customers'},
            {illustration:'', title:'Product feature', text:'Brief explanation of why and how this feature will help your customers'},
            {illustration:'', title:'Product feature', text:'Brief explanation of why and how this feature will help your customers'},
            {illustration:'', title:'Product feature', text:'Brief explanation of why and how this feature will help your customers'},
            {illustration:'', title:'Product feature', text:'Brief explanation of why and how this feature will help your customers'},
            {illustration:'', title:'Product feature', text:'Brief explanation of why and how this feature will help your customers'},
          ]}
        />

        <Epilogue
          title="Ask if your visitor wants to solve problem X today"
          subtitle="Explain how your solution will solve this problem and ask them to start a free trial, or any other low-key CTA they could take"
          illustration=""
          subscribePlaceholder="you@email.com"
          subscribeAction="When is it ready?"
        />
      </main>

      <Footer
        title={Global.product}
      />
    </div>
  )
}