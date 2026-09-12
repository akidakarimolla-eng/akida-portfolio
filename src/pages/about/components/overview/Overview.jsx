import AppearTitle from '@src/components/animationComponents/appearTitle/Index';
import clsx from 'clsx';
import styles from '@src/pages/about/components/overview/styles/overview.module.scss';
import useIsMobile from '@src/hooks/useIsMobile';

function Overview() {
  const isMobile = useIsMobile();

  return (
    <section className={clsx(styles.root, 'layout-grid-inner')}>
      <div className={styles.title}>
        {isMobile ? (
          <AppearTitle key="mobile-queto">
            <h3 className="h3">A belief you hold about</h3>
            <h3 className="h3">
              your <span className="medium">craft</span>, broken across
            </h3>
            <h3 className="h3">a few lines. Emphasise a</h3>
            <h3 className="h3">
              <span className="medium">word</span> or two.
            </h3>
          </AppearTitle>
        ) : (
          <AppearTitle key="desktop-queto">
            <h3 className="h3">A belief you hold about your</h3>
            <h3 className="h3">
              <span className="medium">craft</span>, broken across a few lines.
            </h3>
            <h3 className="h3">
              Emphasise a <span className="medium">word</span> or two.
            </h3>
          </AppearTitle>
        )}
      </div>
      <div className={clsx(styles.text, 'p-l', styles.myStory)}>
        <AppearTitle>
          <span>My story</span>
        </AppearTitle>
      </div>
      <div className={styles.desc}>
        {!isMobile ? (
          <AppearTitle key="desktop-overview">
            <h6 className="h6">Open with where you are from and how you got started.</h6>
            <h6 className="h6">One paragraph per idea, and a blank paddingTop line</h6>
            <h6 className="h6">between paragraphs.</h6>
            <h6 className={clsx(styles.paddingTop, 'h6')}>Second paragraph: the turn in your story. What changed,</h6>
            <h6 className="h6">what you learned, why you do what you do now.</h6>
            <h6 className={clsx(styles.paddingTop, 'h6')}>Third paragraph: what you are working on today, and</h6>
            <h6 className="h6">what you are looking for next.</h6>
            <h6 className={clsx(styles.paddingTop, 'h6')}>A closing line or call to action.</h6>
            <h6 className={clsx(styles.paddingTop, 'h6')}>Your Name.</h6>
          </AppearTitle>
        ) : (
          <AppearTitle key="mobile-overview">
            <h6 className="h6">Open with where you are from and how you got</h6>
            <h6 className="h6">started. One paragraph per idea.</h6>
            <h6 className={clsx(styles.paddingTop, 'h6')}>Second paragraph: the turn in your story. What</h6>
            <h6 className="h6">changed, and why you do what you do now.</h6>
            <h6 className={clsx(styles.paddingTop, 'h6')}>Third paragraph: what you are working on today.</h6>
            <h6 className={clsx(styles.paddingTop, 'h6')}>A closing line or call to action.</h6>
            <h6 className={clsx(styles.paddingTop, 'h6')}>Your Name.</h6>
          </AppearTitle>
        )}
      </div>
    </section>
  );
}
export default Overview;
