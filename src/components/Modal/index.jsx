import CategoryForm from "../CategoryForm";
import styles from "./styles.module.scss";
const Modal = ({ setShowModal, data, getData }) => {
  return (
    <div className={styles.cover}>
      <div className={styles.modal}>
        <CategoryForm
          data={data}
          getData={getData}
          setShowModal={setShowModal}
        />
        <button className={styles.main} onClick={() => setShowModal(false)}>
          Chiudi
        </button>
      </div>
    </div>
  );
};

export default Modal;
