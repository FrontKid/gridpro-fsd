/* eslint-disable react/jsx-one-expression-per-line */
import css from './YourRights.module.scss';

const YourRights = () => {
  return (
    <>
      <h2 className="title2">Your rights</h2>

      <p>
        You are entitled to be informed of the personal data we have registered
        about you; and you may at any time have the stored personal data
        rectified or object to its use. Where the processing of your personal
        data is based on your consent, you have the right to change or revoke
        your consent at any time. In addition, any personal data registered
        about you which we are not required by law to retain may be deleted on
        your request. Finally, you are entitled to receive the personal data
        provided by you in a structured, commonly used, and machine-readable
        format (data portability). Please write to us at{' '}
        <a className={css.email} href="mailto:contact@progridx.com">
          contact@progridx.com
        </a>{' '}
        if you want to exercise your rights.
      </p>
    </>
  );
};

export { YourRights };
