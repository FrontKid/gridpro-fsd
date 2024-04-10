import { FC } from 'react';
import cn from 'classnames';

// eslint-disable-next-line import/no-absolute-path
import image1 from '/images/our-mission-1.png';
// eslint-disable-next-line import/no-absolute-path
import image2 from '/images/our-mission-2.png';

import css from './OurMission.module.scss';

type TOurMissionProps = object;

const OurMission: FC<TOurMissionProps> = () => {
  return (
    <div className={css.content}>
      <h2 className={cn('title2', css.title)}>Our Mission</h2>

      <p className={css.text}>
        At ProGridX, our mission is simple: to provide homeowners and general
        contractors with reliable and efficient property inspection and repair
        solutions. We strive to ensure the safety and integrity of your property
        while streamlining the insurance supplement process, thereby reducing
        delays, improving efficiency, and ensuring polished project execution.
        With our dedication to excellence and customer satisfaction, we aim to
        be your trusted partner in property maintenance and improvement .
      </p>

      <div className={css.imageInner}>
        <img src={image1} alt="our mission" />
        <img src={image2} alt="our mission" />
      </div>
    </div>
  );
};

export { OurMission };
