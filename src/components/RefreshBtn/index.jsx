import styles from "./styles.module.scss";

const RefreshBtn = ({ getData }) => {
  return (
    <button className={styles.main} onClick={() => getData()}>
      Refresh
    </button>
  );
};

export default RefreshBtn;
