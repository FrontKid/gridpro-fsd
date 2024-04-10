/* eslint-disable react/jsx-one-expression-per-line */
import { FC } from 'react';

import css from './PillCardShedule.module.scss';
import { RadioButton } from '@/shared/ui/RadioButton/RadioButton';
import { Input } from '@/shared/ui/Input';
import { Button } from '@/shared/ui/Button';
import { FormLayout } from '@/shared/ui/FormLayout';

type TPillCardSheduleProps = object;

const PillCardShedule: FC<TPillCardSheduleProps> = () => {
  return (
    <FormLayout className={css.form}>
      <div className={css.leftBlock}>
        <div className={css.questionBlock}>
          <span>1. What type of property do you need inspected?</span>
          <RadioButton name="propertyType" lable="residential home" />
          <RadioButton name="propertyType" lable="commercial building" />
          <RadioButton name="propertyType" lable="rental property" />
        </div>

        <div className={css.questionBlock}>
          <Input
            value=""
            lable="2. What is the address of the property needing inspection?"
            placeholder="e.g. 42 Willow Lane, Oakland, California"
          />
        </div>

        <div className={css.questionBlock}>
          <span>
            3. Is it storm related damage?{' '}
            <span className={css.secondary}>If yes, please specify it:</span>
          </span>
          <div className={css.relatedDamage}>
            <RadioButton name="relatedDamage" lable="Hail" />
            <RadioButton name="relatedDamage" lable="Wind" />
            <RadioButton name="relatedDamage" lable="Flood" />
            <RadioButton name="relatedDamage" lable="Hurricane" />
            <RadioButton name="relatedDamage" lable="Tornado" />
            <RadioButton
              className={css.specifyRadio}
              name="relatedDamage"
              lable="Other:"
            >
              <span className={css.specifyRadioText}>(please specify)</span>
              <Input
                className={css.specifyInput}
                value=""
                placeholder="e.g. lightning strike"
              />
            </RadioButton>
          </div>
        </div>

        <div className={css.questionBlock}>
          <span>4. Have you notified the insurance company?</span>
          <div className={css.yesNoInner}>
            <RadioButton name="insurance company" lable="Yes" />
            <RadioButton name="insurance company" lable="No" />
          </div>
        </div>

        <div className={css.questionBlock}>
          <span>5. Have they sent someone out?</span>
          <div className={css.yesNoInner}>
            <RadioButton name="someoneOut" lable="Yes" />
            <RadioButton name="someoneOut" lable="No" />
          </div>
        </div>

        <div className={css.questionBlock}>
          <Input
            value=""
            placeholder="e.g. Besure inc."
            lable="6. Who is the insurance company ?"
          />
        </div>
      </div>

      <div className={css.rightBlock}>
        <div className={css.questionBlock}>
          <Input
            value=""
            placeholder="e.g.  In a month"
            lable="7. When are you looking to get the project completed ?"
          />
        </div>
        <div className={css.questionBlock}>
          <span>Do you have building code coverage ?</span>

          <div className={css.yesNoIdkInner}>
            <RadioButton name="building code" lable="Yes" />
            <RadioButton name="building code" lable="No" />
            <RadioButton name="building code" lable="idk" />
          </div>
        </div>
        <div className={css.personalInfo}>
          <h3 className={css.title}>Personal information</h3>

          <Input value="" lable="Your name" placeholder="e.g. Taylor Smith" />
          <Input
            value=""
            lable="Phone number"
            placeholder="e.g. +000 000 000 000"
          />
          <Input
            value=""
            lable="Email address"
            type="email"
            placeholder=" e.g. email@mail.com"
          />
          <Button className={css.button} color="blue">
            Submit
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 18L15 12L9 6"
                stroke="#F8FBFB"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Button>
        </div>
      </div>
    </FormLayout>
  );
};

export { PillCardShedule };
