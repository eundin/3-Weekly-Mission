import styles from "@/components/sharing/ui-input/Input.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export const Input = ({ type = "text", value, onChange, placeholder }) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={cx("input")}
    />
  );
};
