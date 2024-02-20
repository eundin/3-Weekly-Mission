import styles from "@/components/sharing/ui-modal-content-description/ModalContentDescription.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export const ModalContentDescription = ({ children }) => {
  return <p className={cx("description")}>{children}</p>;
};
