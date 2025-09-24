import Sidebar from "./modules/sidebar";

export default function Home() {
  return (
    <div id="background" className="flex px-64 pt-8">
      <main id="content" className="border w-full h-full">
        <Sidebar></Sidebar>
      </main>
    </div>
  );
}
