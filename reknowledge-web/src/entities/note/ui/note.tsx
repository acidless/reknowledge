import { Note } from "reknowledge-core";
import styles from "./note.module.css";

type PropsType = {
    note: Note;
};

export const NoteComponent = ({ note }: PropsType) => {
    return (
        <div className={styles.note}>
            <p>{note.name}</p>
        </div>
    );
}