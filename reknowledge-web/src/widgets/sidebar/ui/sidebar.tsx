import style from "./sidebar.module.css";

type Props = {
    children: React.ReactNode;
};

export const Sidebar = ({children}: Props) => {
    return <aside className={style.sidebar}>
        {children}
    </aside>;
}