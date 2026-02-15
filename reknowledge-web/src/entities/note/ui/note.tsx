import { Note } from "reknowledge-core";
import styles from "./note.module.css";
import Link from "next/link";

type PropsType = {
    note: Note;
};

export const NoteComponent = ({ note }: PropsType) => {
    return (
        <div className={styles.note}>
            <Link href="/note" className={styles.note__name}>{note.name}</Link>
        </div>
    );
}