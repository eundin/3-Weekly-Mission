import styles from "@/components/sharing/ui-input-modal/InputModal.module.scss";
import classNames from "classnames/bind";
import { Input } from "@/components/sharing/ui-input";
import { Modal } from "@/components/sharing/ui-modal";
import { ModalContentBox } from "@/components/sharing/ui-modal-content-box";
import { ModalContentButton } from "@/components/sharing/ui-modal-content-button";
import { ModalContentTitle } from "@/components/sharing/ui-modal-content-title";

const cx = classNames.bind(styles);

export const InputModal = ({
  isOpen,
  title,
  placeholder,
  buttonText,
  onCloseClick,
  onKeyDown,
  value,
  onChange,
}) => {
  return (
    <Modal isOpen={isOpen} onBackdropClick={onCloseClick} onKeyDown={onKeyDown}>
      <ModalContentBox
        header={<ModalContentTitle>{title}</ModalContentTitle>}
        content={
          <div className={cx("modal-content")}>
            <Input
              value={value}
              onChange={onChange}
              placeholder={placeholder}
            />
            <ModalContentButton>{buttonText}</ModalContentButton>
          </div>
        }
        onCloseClick={onCloseClick}
      />
    </Modal>
  );
};
