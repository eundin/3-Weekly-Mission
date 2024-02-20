import styles from "@/components/sharing/ui-modal-content-title/ModalContentTitle.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export const ModalContentTitle = ({ children }) => {
  return <h2 className={cx("title")}>{children}</h2>;
};
