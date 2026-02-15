import { Breadcrumbs } from "@/entities/breadcrumbs";

export default function Home() {
  return (
    <div>
      <Breadcrumbs entity={{name: "pablo", parent: {name: "root"}}}/>
    </div>
  );
}
