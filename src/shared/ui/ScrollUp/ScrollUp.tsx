import { HiOutlineArrowSmUp } from 'react-icons/hi';
import { Link, animateScroll as scroll } from 'react-scroll';
import css from './ScrollUp.module.scss';

const ScrollUp = () => {
  const hendlerClick = (): void => {
    scroll.scrollToTop();
  };

  window.addEventListener('scroll', () => {
    const scrollUp = document.querySelector('#scrollUp');

    if (window.scrollY >= 560) {
      scrollUp?.classList.add(`${css.showScroll}`);
    } else {
      scrollUp?.classList.remove(`${css.showScroll}`);
    }
  });

  return (
    <Link
      to="header"
      type="button"
      aria-label="scroll up"
      className={css.scrollUp}
      id="scrollUp"
      onClick={hendlerClick}
    >
      <HiOutlineArrowSmUp className={css.scrollUpArrow} color="white" />
    </Link>
  );
};

export { ScrollUp };
