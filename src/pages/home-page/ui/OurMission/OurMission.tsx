import cn from 'classnames';

import css from './OurMission.module.scss';
import { cardData } from './model/cardData';
import { Card } from './ui';

const OurMission = () => {
  return (
    <div className={css.content}>
      <div className={css.titleInner}>
        <h2 className={cn('title2', css.title)}>Our Mission</h2>
        <p className={css.text}>
          At ProGridX, our mission is simple: to provide homeowners and general
          contractors with reliable and efficient property inspection and repair
          solutions.
        </p>
        <p className={css.text}>
          We strive to ensure the safety and integrity of your property while
          streamlining the insurance supplement process, thereby reducing
          delays, improving efficiency, and ensuring polished project execution.
        </p>
        <p className={css.text}>
          With our dedication to excellence and customer satisfaction, we aim to
          be your trusted partner in property maintenance and improvement.
        </p>
      </div>
      <div className={css.cardInner}>
        {cardData.map(card => (
          <Card
            key={card.id}
            className={css[`card-${card.id}`]}
            title={card.title}
            text={card.text}
            icon={card.icon}
          />
        ))}
      </div>
    </div>
  );
};

export { OurMission };
