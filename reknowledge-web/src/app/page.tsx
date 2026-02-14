import { FolderComponent } from "@/entities/folder";
import { Sidebar } from "@/widgets/sidebar";

export default function Home() {
  return (
    <div>
      <Sidebar>
        <FolderComponent level={0} folder={
          {name: "folder1", id: 1, type: "folder", createdAt: new Date(), updatedAt: new Date(), parentId: null, children: [
            {name: "file1", id: 2, type: "note", createdAt: new Date(), updatedAt: new Date(), parentId: 1},
            {name: "file2", id: 3, type: "note", createdAt: new Date(), updatedAt: new Date(), parentId: 1},
          ] }
        }/>
      </Sidebar>
    </div>
  );
}
