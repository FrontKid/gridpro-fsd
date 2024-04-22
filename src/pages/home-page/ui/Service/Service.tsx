import cn from 'classnames';

import { serviceData } from './model/serviceCardData';
import { ServiceCard } from './ui/ServiceCard';

import css from './Service.module.scss';

const Service = () => {
  return (
    <div className={css.content}>
      <div className={css.titleInner}>
        <h2 className={cn(css.title, 'title2')}>Service</h2>

        <h5 className={css.subtitle}>Here&apos;s how we can assist you:</h5>
        <p>
          Our detailed reports and expert recommendations empower you to make
          informed decisions about your property&apos;s maintenance and
          improvement needs.
        </p>
      </div>

      <div className={css.cardInner}>
        {serviceData.map((serviceDataEntity, i) => (
          <ServiceCard
            count={i + 1}
            key={serviceDataEntity.title}
            data={serviceDataEntity}
          />
        ))}
      </div>
    </div>
  );
};

export { Service };
