/* eslint-disable import/no-absolute-path */
/* eslint-disable max-len */

import person1 from '/public/images/icons/doc-partner.svg';
import person2 from '/public/images/icons/doc-chat.svg';
import person3 from '/public/images/icons/doc-person.svg';

const cardData = [
  {
    id: 1,
    title: 'Detailed Reports',
    text: "Our comprehensive inspection reports accurately document a property's condition with commentary and images so you have full transparency.",
    icon: {
      src: person3,
      alt: 'detailed reports',
    },
  },
  {
    id: 2,
    title: 'Trust',
    text: 'With industry-leading inspectors on every job, you can trust our expertise to guide important decisions.',
    icon: {
      src: person2,
      alt: 'trust',
    },
  },
  {
    id: 3,
    title: 'Partnership',
    text: 'We collaborate with insurance providers to simplify processes while putting service first.',
    icon: {
      src: person1,
      alt: 'partnership',
    },
  },
];

export { cardData };
