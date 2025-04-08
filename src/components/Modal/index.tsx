import Modal from "antd/es/modal/Modal";
import { IModalConfirm } from "@/interfaces/modal";

interface ModalConfirmRedirectProps {
  onConfirm: () => void;
  onCancel: () => void;
  modalConfirmProps: IModalConfirm;
}

const ModalConfirm = ({
  onConfirm,
  onCancel,
  modalConfirmProps,
}: ModalConfirmRedirectProps) => {
  return (
    <Modal
      title="Mở trang mới"
      open={modalConfirmProps.isShowModal}
      onOk={onConfirm}
      onCancel={onCancel}
      okText="Xác nhận"
      cancelText="Hủy"
    >
      <p>{modalConfirmProps.message}</p>
    </Modal>
  );
};

export default ModalConfirm;
