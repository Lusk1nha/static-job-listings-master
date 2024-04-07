import { useMemo } from "react";
import { JobSchema } from "../../App";
import { JobItem } from "../JobItem/JobItem";

interface IJobsRenderProps {
  jobs: JobSchema[];

  search: string;
}

function JobsRender(props: IJobsRenderProps) {
  const { search, jobs } = props;

  const jobsBySearchAndFilters = useMemo(() => {
    if (search?.length === 0) {
      return jobs;
    }

    const searchNormalized = search
      ?.toLowerCase()
      ?.normalize("NFD")
      ?.replace(/[\u0300-\u036f]/g, "");

    const jobsBySearch = jobs.filter((job) => {
      const position = searchByText(job.position, searchNormalized);
      const role = searchByText(job.role, searchNormalized);

      const languages = searchByText(
        job?.languages.join(" ***"),
        searchNormalized
      );

      return languages || position || role;
    });

    return jobsBySearch;
  }, [jobs, search]);

  function searchByText(text: string, search: string): boolean {
    const normalizedText = text
      ?.toLowerCase()
      ?.normalize("NFD")
      ?.replace(/[\u0300-\u036f]/g, "");

    return normalizedText?.includes(search);
  }
  
  return (
    <div className="w-full max-w-[1100px]">
      <ul className="flex flex-col gap-8">
        {jobsBySearchAndFilters?.map((job) => {
          return <JobItem key={job.id} job={job} />;
        })}
      </ul>
    </div>
  );
}

export { JobsRender };
