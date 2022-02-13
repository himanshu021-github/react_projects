function Modal(props) {
  return (
    <div className="modal">
      <h2>{props.message}</h2>
      <div>
        <button className="btn btn--alt" onClick={props.onCancel}>
          Cancel
        </button>
        <button className="btn btn" onClick={props.onConfirm}>
          Confirm
        </button>
      </div>
    </div>
  );
}
export default Modal;
