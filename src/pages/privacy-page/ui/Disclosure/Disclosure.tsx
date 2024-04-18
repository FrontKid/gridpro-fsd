import { FC } from 'react';

type TDisclosureProps = object;

const Disclosure: FC<TDisclosureProps> = () => {
  return (
    <>
      <h2 className="title2">Disclosure</h2>

      <p>
        Personal data will not be disclosed to any third party unless you give
        separate consent to this. Therefore, progridx will always appear as the
        sender of the e-mails you receive.
      </p>
    </>
  );
};

export { Disclosure };
