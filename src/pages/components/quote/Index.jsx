import TextOpacity from '@src/components/animationComponents/textOpacity/Index';
import clsx from 'clsx';
import styles from '@src/pages/components/quote/styles/quote.module.scss';
import { useRef } from 'react';
import { useShallow } from 'zustand/react/shallow';
import { useStore } from '@src/store';

function Quote() {
  const [isLoading] = useStore(useShallow((state) => [state.isLoading]));

  const rootRef = useRef();
  const textRef = useRef();

  return (
    <section ref={rootRef} className={clsx(styles.root, 'layout-block-inner')}>
      <h3 ref={textRef} className={clsx(styles.text, 'h3')}>
        {!isLoading && (
          <TextOpacity textRef={textRef.current} trigger={rootRef.current}>
            &ldquo;A quote you like, or a line of your own. It reveals one word at a time as the visitor scrolls, so something short and declarative works best.&rdquo;
          </TextOpacity>
        )}
        <div className={clsx(styles.attribution, 'p-l')}>Attribution &middot; Source, Year</div>
      </h3>
    </section>
  );
}

export default Quote;
