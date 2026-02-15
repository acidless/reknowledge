import { Breadcrumbs } from "@/entities/breadcrumbs";
import { EditableNote } from "@/features/editable-note";

export default function Note() {
    return <div>
        <Breadcrumbs entity={{name: "pablo", parent: {name: "root"}}}/>
        <EditableNote note={{name: "Heading", content: "dsadsadasd", createdAt: new Date(), updatedAt: new Date(), id: 1, type: "note", relations: [], parentId: null}} />
    </div>;
}