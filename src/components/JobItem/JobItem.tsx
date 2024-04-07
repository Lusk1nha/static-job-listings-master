import { JobSchema } from "../../App";

interface IJobItemProps {
  job: JobSchema;
}

function JobItem(props: IJobItemProps) {
  const { job } = props;

  return (
    <li
      className={
        !job.featured
          ? `w-full relative bg-white h-[257px] flex gap-6 py-10 px-6 rounded shadow-lg`
          : `w-full relative bg-white h-[257px] flex gap-6 py-10 px-6 rounded shadow-lg border-l-4 border-l-filterItemColor`
      }
    >
      <div className="absolute -top-[20px]">
        <img className="w-12 h-12" src={job.logo} />
      </div>

      <section className="w-full flex flex-col h-fit border-b pb-4">
        <h6 className="text-sm text-filterItemColor font-bold">
          {job.company}
        </h6>

        <h5 className="text-filterItemButtonHover font-bold">{job.position}</h5>

        <ul className="flex gap-3">
          <li className="text-[#7C8F8F] font-medium text-base">
            {job.postedAt}
          </li>
          <li className="text-[#7C8F8F] font-medium text-base">
            {job.contract}
          </li>
          <li className="text-[#7C8F8F] font-medium text-base">
            {job.location}
          </li>
        </ul>
      </section>

      <section></section>
    </li>
  );
}

export { JobItem };
