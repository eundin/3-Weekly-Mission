import styles from "@/components/sharing/ui-alert-modal/AlertModal.module.scss";
import classNames from "classnames/bind";
import { Modal } from "@/components/sharing/ui-modal";
import { ModalContentBox } from "@/components/sharing/ui-modal-content-box";
import { ModalContentButton } from "@/components/sharing/ui-modal-content-button";
import { ModalContentDescription } from "@/components/sharing/ui-modal-content-description";
import { ModalContentTitle } from "@/components/sharing/ui-modal-content-title";

const cx = classNames.bind(styles);

export const AlertModal = ({
  isOpen,
  title,
  description,
  buttonText,
  onClick,
  onCloseClick,
  onKeyDown,
}) => {
  return (
    <Modal isOpen={isOpen} onBackdropClick={onCloseClick} onKeyDown={onKeyDown}>
      <ModalContentBox
        header={
          <div className={cx("modal-header")}>
            <ModalContentTitle>{title}</ModalContentTitle>
            <ModalContentDescription>{description}</ModalContentDescription>
          </div>
        }
        content={
          <ModalContentButton onClick={onClick} themeColor="red">
            {buttonText}
          </ModalContentButton>
        }
        onCloseClick={onCloseClick}
      />
    </Modal>
  );
};
