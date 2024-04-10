import cn from 'classnames';

import { serviceData } from './model/serviceCardData';
import { ServiceCard } from './ui/ServiceCard';

import css from './Service.module.scss';

const Service = () => {
  return (
    <div className={css.content}>
      <h2 className={cn(css.title, 'title2')}>Service</h2>

      <div className={css.cardInner}>
        {serviceData.map((serviceDataEntity, i) => (
          <ServiceCard
            className={css[`card-${i + 1}`]}
            key={serviceDataEntity.title}
            data={serviceDataEntity}
          />
        ))}
      </div>
    </div>
  );
};

export { Service };
