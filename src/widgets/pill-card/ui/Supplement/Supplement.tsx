import { FC } from 'react';
import { FormLayout } from '@/shared/ui/FormLayout';
import css from './Supplement.module.scss';
import { Input } from '@/shared/ui/Input';
import { Button } from '@/shared/ui/Button';
import { TextArea } from '@/shared/ui/TextArea';

type TSupplementProps = object;

const Supplement: FC<TSupplementProps> = () => {
  return (
    <FormLayout className={css.form} column>
      <div className={css.content}>
        <div className={css.questionInner}>
          <h3 className={css.title}>What is your claim volume?</h3>

          <TextArea placeholder="Write your answer here" />
        </div>
        <div className={css.questionInner}>
          <Input
            value=""
            lable="Company name"
            placeholder="e.g. Fantasy Verse"
          />
        </div>
        <div className={css.questionInner}>
          <Input
            value=""
            lable="Phone number"
            placeholder="e.g. +000 000 000 000"
          />
        </div>
        <div className={css.questionInner}>
          <Input
            value=""
            lable="Email address"
            placeholder="e.g. email@mail.com"
          />
        </div>
        <div className={css.questionInner}>
          <Input
            value=""
            lable="Company’s website"
            placeholder="e.g. https://fantasyverse.com.ua"
          />
        </div>

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
    </FormLayout>
  );
};

export { Supplement };
