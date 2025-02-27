import { useId } from "react";
import styles from "./Accordion.module.css";

type AccordionEntry = {
  title: string;
  content: string;
  img: string;
};

export const Accordion = ({ entries }: { entries: AccordionEntry[] }) => {
  const id = useId();

  return (
    <div className={styles.accordionContainer}>
      <div className={styles.accordion}>
        <div className={styles.entries}>
          {entries.map((entry, index) => (
            <details
              className={styles.details}
              key={index}
              open={index === 0}
              name={id}
            >
              <summary>
                {entry.title}

                <svg
                  aria-hidden="true"
                  focusable="false"
                  className="octicon octicon-plus"
                  viewBox="0 0 16 16"
                  width="16"
                  height="16"
                  fill="#a371f7"
                >
                  <path d="M7.75 2a.75.75 0 0 1 .75.75V7h4.25a.75.75 0 0 1 0 1.5H8.5v4.25a.75.75 0 0 1-1.5 0V8.5H2.75a.75.75 0 0 1 0-1.5H7V2.75A.75.75 0 0 1 7.75 2Z"></path>
                </svg>
              </summary>
              <p>{entry.content}</p>
            </details>
          ))}
        </div>
        <div className={styles.images}>
          <img
            src="/accordion/00.webp"
            alt=""
            className={`${styles.image} ${styles.default}`}
            height="1000"
            width="1000"
          />
          {entries.map((entry, index) => (
            <img
              key={index}
              src={entry.img}
              alt=""
              className={styles.image}
              height="1000"
              width="1000"
            />
          ))}
        </div>
      </div>
    </div>
  );
};
