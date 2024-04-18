import { FC } from 'react';

// eslint-disable-next-line import/no-absolute-path
import conditionBg from '/images/condition-bg.jpg';

import { PillCard, PillCardLayout } from '@/widgets/pill-card';
import { ToggleOpen } from '@/features/pill-card';
import { pillCardData, pillCardSelector } from '@/entities/pill-card';
import { useAppSelector } from '@/shared/model';

import css from './Condition.module.scss';

type TConditionProps = object;

const Condition: FC<TConditionProps> = () => {
  const { togglePillModal } = useAppSelector(pillCardSelector);

  return (
    <div className={css.content}>
      <div>
        <img className={css.conditionBg} src={conditionBg} alt="condition bg" />
        <p className={css.text}>
          From thorough exterior inspections to detailed interior assessments,
          we handle every aspect of your property with precision and care. Our
          detailed reports and expert recommendations empower you to make
          informed decisions about your property&apos;s maintenance and
          improvement needs.
        </p>

        <p className={css.text}>
          Trust ProGridX to protect your valuable investment and keep your
          property in top condition for years to come.
        </p>
      </div>

      <div className={css.cardInner}>
        {pillCardData.map(pillCardEntity => (
          <PillCard
            key={pillCardEntity.title}
            data={pillCardEntity}
            // prettier-ignore
            slotToggleOpen={(
              <ToggleOpen slug={pillCardEntity.slug}>
                {pillCardEntity.option}
              </ToggleOpen>
            )}
          />
        ))}
      </div>

      {togglePillModal.isOpen && <PillCardLayout slug={togglePillModal.slug} />}
    </div>
  );
};

export { Condition };
