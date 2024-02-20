import styles from "@/components/link/ui-add-link-modal/AddLinkModal.module.scss";
import classNames from "classnames/bind";
import { FolderItem } from "@/components/folder/ui-folder-item";
import { Modal } from "@/components/sharing/ui-modal";
import { ModalContentBox } from "@/components/sharing/ui-modal-content-box";
import { ModalContentButton } from "@/components/sharing/ui-modal-content-button";
import { ModalContentDescription } from "@/components/sharing/ui-modal-content-description";
import { ModalContentTitle } from "@/components/sharing/ui-modal-content-title";

const cx = classNames.bind(styles);

export const AddLinkModal = ({
  isOpen,
  folders,
  selectedLinkUrl,
  selectedFolderId,
  setSelectedFolderId,
  onAddClick,
  onCloseClick,
  onKeyDown,
}) => {
  return (
    <Modal isOpen={isOpen} onBackdropClick={onCloseClick} onKeyDown={onKeyDown}>
      <ModalContentBox
        header={
          <div className={cx("modal-header")}>
            <ModalContentTitle>폴더에 추가</ModalContentTitle>
            <ModalContentDescription>{selectedLinkUrl}</ModalContentDescription>
          </div>
        }
        content={
          <div className={cx("modal-content")}>
            <div className={cx("folder-list")}>
              {folders?.map(({ id, name, link }) => (
                <FolderItem
                  key={id}
                  isSelected={id === selectedFolderId}
                  folderName={name}
                  linkCount={link?.count}
                  onClick={() => setSelectedFolderId(id)}
                />
              ))}
            </div>
            <ModalContentButton onClick={onAddClick}>
              추가하기
            </ModalContentButton>
          </div>
        }
        onCloseClick={onCloseClick}
      />
    </Modal>
  );
};
