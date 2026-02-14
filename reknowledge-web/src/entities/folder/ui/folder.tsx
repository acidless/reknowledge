"use client";

import { RiArrowDownSLine } from "@remixicon/react";
import type { Folder, Note } from "reknowledge-core";
import styles from "./folder.module.css";
import { NoteComponent } from "@/entities/note";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

type Props = {
    folder: Folder;
    level: number;
}

export const FolderComponent = ({folder, level}: Props) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const hasChildren = folder.children.length > 0;

    const toggleExpanded = () => {
        if (hasChildren) {
            setIsExpanded(!isExpanded);
        }
    };

    return <div style={{paddingLeft: `${level * 2.5}rem`}}
            className={`${hasChildren ? styles.folder_hasChildren : ""} ${isExpanded ? styles.folder_isExpanded : ""}`}>
        <div className={styles.folder__heading} onClick={toggleExpanded}>
            {hasChildren && <RiArrowDownSLine className={styles.folder__chevron} />}
            <p>{folder.name}</p>
        </div>
        <AnimatePresence>
            {isExpanded && (
                <motion.div
                    className={styles.folder__content}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    style={{ overflow: "hidden" }}
                >
                    {folder.children.map(child => {
                        switch (child.type) {
                            case "folder":
                                return <FolderComponent key={child.id} folder={child as Folder} level={level + 1} />;
                            case "note":
                                return <NoteComponent key={child.id} note={child as Note} />;
                        }
                    })}
                </motion.div>
            )}
        </AnimatePresence>
    </div>
};
