/* eslint-disable max-len */
import { FC } from 'react';
import cn from 'classnames';
import css from './ContactUs.module.scss';

import image1 from '../../../../../public/images/contact-us1.png';
import image2 from '../../../../../public/images/contact-us2.png';
import image3 from '../../../../../public/images/contact-us3.png';
import image4 from '../../../../../public/images/contact-us4.png';

type TContactUsProps = object;

const ContactUs: FC<TContactUsProps> = () => {
  return (
    <div className={css.content}>
      <div>
        <h2 className={cn('title2', css.title)}>Contact Us</h2>
        <p className={css.text}>
          Get in touch with our property experts for reliable services and great
          prices.
        </p>

        <div className={css.contentInner}>
          <div className={css.emailInner}>
            <svg
              width="40"
              height="33"
              viewBox="0 0 40 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M36 0.5H4C1.8 0.5 0.02 2.3 0.02 4.5L0 28.5C0 30.7 1.8 32.5 4 32.5H36C38.2 32.5 40 30.7 40 28.5V4.5C40 2.3 38.2 0.5 36 0.5ZM36 8.5L20 18.5L4 8.5V4.5L20 14.5L36 4.5V8.5Z"
                fill="#083B9C"
              />
            </svg>
            <h3>Email</h3>
          </div>

          <a href="mailto:contact@progridx.com">contact@progridx.com</a>
        </div>
        <div className={css.contentInner}>
          <div className={css.phoneInner}>
            <svg
              width="49"
              height="49"
              viewBox="0 0 49 49"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M38.5741 30.9639L33.4941 30.3839C32.8968 30.3137 32.2913 30.3798 31.7232 30.5773C31.1551 30.7747 30.6392 31.0984 30.2141 31.5239L26.5341 35.2039C20.8565 32.3163 16.2417 27.7015 13.3541 22.0239L17.0541 18.3239C17.9141 17.4639 18.3341 16.2639 18.1941 15.0439L17.6141 10.0039C17.5007 9.02822 17.0325 8.12834 16.2986 7.47556C15.5647 6.82279 14.6163 6.4627 13.6341 6.46387H10.1741C7.9141 6.46387 6.03409 8.34387 6.1741 10.6039C7.2341 27.6839 20.8941 41.3239 37.9541 42.3839C40.2141 42.5239 42.0941 40.6439 42.0941 38.3839V34.9239C42.1141 32.9039 40.5941 31.2039 38.5741 30.9639Z"
                fill="#083B9C"
              />
            </svg>
            <h3>Phone</h3>
          </div>

          <a href="tel:+1 832 299 4504">+1 832 299 4504</a>
        </div>
      </div>
      <div className={css.imageBox}>
        <div className={css.imageInner}>
          <img className={css.image1} src={image1} alt="contact" />
          <img className={css.image2} src={image2} alt="contact" />
        </div>
        <div className={css.imageInner}>
          <img className={css.image3} src={image3} alt="contact" />
          <img className={css.image4} src={image4} alt="contact" />
        </div>
      </div>
    </div>
  );
};

export { ContactUs };
