import Link from "next/link";
import { BreadcrumbsEntity } from "./types";
import styles from "./breadcrumb-part.module.css";

type PropsType = {
    entity: BreadcrumbsEntity;
    isLeaf?: boolean;
};

export const BreadcrumbPart = ({ entity, isLeaf }: PropsType) => {
    return (
        <>
            {entity.parent && 
                <>
                    <BreadcrumbPart entity={entity.parent} />
                    /
                </>
            }
            {isLeaf 
                ? <span className={styles.breadcrumbPart_text}>{entity.name}</span>
                : <Link href="/" className={styles.breadcrumbPart_link}>{entity.name}</Link>
            }
        </>
    );
}