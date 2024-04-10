/* eslint-disable import/no-absolute-path */
/* eslint-disable max-len */
import person from '/images/icons/person.png';
import garage from '/images/icons/garage.png';
import paperPerson from '/images/icons/paperPerson.png';
import handShakePeople from '/images/icons/handShakePeople.png';
import wrench from '/images/icons/wrench.png';

import { ICardData } from '../types/data';

const serviceData: ICardData[] = [
  {
    title: 'Assistance',
    text: 'When you reach out to us for assistance, our first stage of service involves thoroughly understanding your needs and requirements.',
    image: {
      src: person,
      alt: 'person icon',
    },
  },
  {
    title: 'Experienced inspectors',
    text: 'Our experienced general contractors conduct a comprehensive inspection of your property, identifying any issues and offering effective solutions.',
    image: {
      src: garage,
      alt: 'garage icon',
    },
  },
  {
    title: 'Estimate Updates',
    text: 'Our team generates revised estimates, addressing any items overlooked by the insurance adjuster during their inspection, and submits them for review by the insurance company.',
    image: {
      src: paperPerson,
      alt: 'paperPerson icon',
    },
  },
  {
    title: 'Supplement Process',
    text: 'We streamline the supplement process, working closely with insurance companies to secure the owedfinancing for repairs.',
    image: {
      src: handShakePeople,
      alt: 'handShakePeople icon',
    },
  },
  {
    title: 'Repair Execution',
    text: 'Once approved, our general contractors proceed with the necessary repairs, ensuring your property is restored to its optimal condition.',
    image: {
      src: wrench,
      alt: 'wrench icon',
    },
  },
];

export { serviceData };
