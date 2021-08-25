import React from 'react';
import Box from './Box';
import IM from './img/image-daniel.jpg';
import IM2 from './img/image-jonathan.jpg';
import IM3 from './img/image-kira.jpg';
import IM4 from './img/image-jeanette.jpg';
import IM5 from './img/image-patrick.jpg';
import './sa/S1.scss';
export default function App() {
  return (
    <div className="caja">
      <Box
        clase={'c1'}
        foto={IM}
        nombre={'Daniel Clifford'}
        sub={'Verified Graduate'}
        tex1={
          'I recieved a job offer mid- course, and the subject I learned were current, if not more so, in the company I joined. I honestly feel I got every penny’s worth.'
        }
        tex2={
          '“ I was an EMT for many years before i joined the bootcamp. I’ve been looking to make a transition and have heard some people who had an amazing experience here. I signed up for the  free intro course and found it incredibly fun! I enrolled shortly thereafter. The next 12 weeks was the best - and most grueling - time of my life. Since completing the course, I’ve successfully switched careers, working as a Software Engineer at a VR startup. “'
        }
      ></Box>
      <Box
        clase={'c2'}
        foto={IM2}
        nombre={'Jonathan Walters'}
        sub={'Verified Graduate'}
        tex1={'The team was very supportive and kept me motivated '}
        tex2={
          '“I started as a total newbie with virtually no coding skills. I now work as a mobile engeneer for a big company. This was one of the best investment. I’ve made in myself.”'
        }
      ></Box>
      <Box
        clase={'c3'}
        foto={IM3}
        nombre={'Kira Whittle'}
        sub={'Verified Graduate'}
        tex1={'Such a life-changing experience. Highly recommended!'}
        tex2={
          '“ Before joining the bootcamp. I’ve never written a line of code. I needed some structure from professionals who can help me learn programming step by step. I was encouraged to enroll by a former student of theirs who can only say wonderful thing about the program. The entire curriculum and staff did not disappoint. They were very hands-on and I never had to wait long for assistance. The agile team project, in particular, was outstanding. It took  my learning to the next level in a way that no tutorial could ever have. In fact, I’ve often referred to it during interviews as an example of my developent experience. it certainly helped me land a job as a full-stack developer after receiving multiple offers. 100% recommend! ”'
        }
      ></Box>
      <Box
        clase={'c4'}
        foto={IM4}
        nombre={'Jeanette Harmon'}
        sub={'Verified Graduate'}
        tex1={'An overall wonderful and rewarding experience'}
        tex2={
          '“Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living while doing something I love.”'
        }
      ></Box>
      <Box
        clase={'c5'}
        foto={IM5}
        nombre={'Patrick Abrams'}
        sub={'Verified Graduate'}
        tex1={
          'Awesome teaching support from TAs who did the bootcamp themselves. Getting guidance from them and learning from their experiences was easy.'
        }
        tex2={
          '“The staff seem genuinely concerned about my progress which I find really refreshing. The program gave me the confidence necessary to be able to go out in the world and present myself as a capable junior developer. The standard is above the rest. You will get the personal attention you need from an incredible community of smart and amazing people. ”'
        }
      ></Box>
    </div>
  );
}
