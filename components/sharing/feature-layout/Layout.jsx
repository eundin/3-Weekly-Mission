import styles from "@/components/sharing/feature-layout/Layout.module.scss";
import classNames from "classnames/bind";
import { useGetUser } from "@/components/user/data-access-user";
import { Footer } from "@/components/sharing/ui-footer";
import { NavigationBar } from "@/components/sharing/ui-navigation-bar";

const cx = classNames.bind(styles);

export const Layout = ({ children, isSticky = true }) => {
  const { data } = useGetUser();
  const { email, profileImageSource } = data || {};
  const profile = data ? { email, profileImageSource } : null;

  return (
    <div>
      <NavigationBar profile={profile} isSticky={isSticky} />
      <main className={cx("main")}>{children}</main>
      <Footer />
    </div>
  );
};
