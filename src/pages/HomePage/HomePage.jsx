import dogMobile from '../../images/mobile/dogMobile.png';
import dogTablet from '../../images/tablet/dogTablet.png';
import dogDesktop from '../../images/desctop/dogDesktop.png';

import waveMobile from '../../images/mobile/waveMobile.png';
import waveTablet from '../../images/tablet/waveTablet.png';
import waveDesktop3 from '../../images/desctop/waveDesktop3.png';

import unionDesk from '../../images/unionDesk.svg';

import bgDesktop from '../../images/desctop/waveDesktop2.png';

import css from '../HomePage/HomePage.module.css';

function HomePage() {
  return (
    <>
      <div className={css.page}>
        <h1 className={css.h1}>
          Take good care of <br />
          your small pets
        </h1>
      </div>
      <div>
        <img className={css.imageHeart} src={unionDesk} alt="heart" />
        <img className={css.frame} src={waveDesktop3} alt="frame" />
        <picture>
          <source srcSet={dogMobile} media="(max-width: 767px)" />
          <source
            srcSet={dogTablet}
            media="(min-width: 768px) and (max-width: 1279px)"
          />
          <img className={css.imageDog} src={dogDesktop} alt="dog" />
        </picture>
        <picture>
          <source srcSet={waveMobile} media="(max-width: 767px)" />
          <source
            srcSet={waveTablet}
            media="(min-width: 768px) and (max-width: 1279px)"
          />
          <img className={css.imageBG} src={bgDesktop} alt="background" />
        </picture>
      </div>
    </>
  );
}

export default HomePage;
