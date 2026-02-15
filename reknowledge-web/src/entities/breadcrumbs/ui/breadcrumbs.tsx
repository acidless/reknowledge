import { BreadcrumbsEntity } from "./types";
import { BreadcrumbPart } from "./breadcrumb-part";
import styles from "./breadcrumbs.module.css";

type PropsType = {
    entity: BreadcrumbsEntity;
};

export const Breadcrumbs = ({ entity }: PropsType) => {
    return (
        <div className={styles.breadcrumbs}>
            <BreadcrumbPart entity={entity} isLeaf />
        </div>
    );
}
