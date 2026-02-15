import { Note } from "reknowledge-core";
import styles from "./editable-note.module.css";

type PropsType = {
    note: Note;
};

export const EditableNote = ({note}: PropsType) => {
    return <div className={styles.editableNote}>
        <div className={styles.editableNote__wrapper}>
            <h1>{note.name}</h1>
            <p>{note.content}</p>
        </div>
    </div>  
}
