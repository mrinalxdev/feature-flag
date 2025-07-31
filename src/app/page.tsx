// /app/simulator/page.tsx

import RealisticBreadboard from "@/component/simulator/RealBreadboard";


export default function Page() {
  return (
    <main className="p-8 bg-gray-100 min-h-screen flex justify-center">
      <RealisticBreadboard width={850} height={260} />
    </main>
  );
}