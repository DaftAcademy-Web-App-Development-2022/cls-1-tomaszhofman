import styles from "./ProgressBar.module.css";

export const ProgressBar = ({ progress }: { progress: number }) => {
  return (
    <div className={styles.slider}>
      <div
        className={styles.sliderTime}
        style={{ width: `${progress * 100}%` }}
      ></div>
    </div>
  );
};
