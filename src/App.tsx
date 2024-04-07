import { Suspense, useState } from "react";
import Header from "./components/Header/Header";
import { useQuery } from "@tanstack/react-query";
import { JobsRender } from "./components/JobsRender/JobsRender";

export type JobSchema = {
  id: number;
  company: string;
  logo: string;
  new: boolean;
  featured: boolean;
  position: string;
  role: string;
  level: string;
  postedAt: string;
  contract: string;
  location: string;
  languages: string[];
  tools: string[];
};

function App() {
  const [search, setSearch] = useState<string>("");
  const [activeFilters] = useState<JobSchema[]>([]);

  const { data: jobs } = useQuery({
    queryKey: ["jobs"],
    queryFn: handleGetJobs,
  });

  async function handleGetJobs(): Promise<JobSchema[]> {
    try {
      const response = await fetch("data/data.json");
      const data = await response.json();

      return data;
    } catch (error) {
      throw error;
    }
  }

  console.log({ jobs });

  return (
    <Suspense fallback="Loading...">
      <div className="bg-main w-full h-full min-h-screen flex flex-col gap-4 pb-8">
        <Header
          search={search}
          setSearch={setSearch}
          activeFilters={activeFilters}
        />

        <main className="w-full flex justify-center pt-32 px-6">
          <JobsRender search={search} jobs={jobs ?? []} />
        </main>
      </div>
    </Suspense>
  );
}

export default App;
