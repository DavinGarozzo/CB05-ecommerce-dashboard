import styles from "./styles.module.scss";

const EditBtn = ({ metodo }) => {
  return (
    <button onClick={() => metodo()} className={styles.main}>
      Edit
    </button>
  );
};

export default EditBtn;
