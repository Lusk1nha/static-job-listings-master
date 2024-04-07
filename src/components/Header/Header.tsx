import { JobSchema } from "../../App";
import { Filterers } from "../Filterers/Filterers";
import { SearchBar } from "../SearchBar/SearchBar";

interface IHeaderProps {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;

  activeFilters: JobSchema[];
}

function Header(props: IHeaderProps) {
  const { search, setSearch, activeFilters } = props;

  return (
    <header className="bg-headerMobile lg:bg-headerDesktop bg-cover bg-center bg-no-repeat bg-header h-[156px] flex items-end justify-center">
      <div className="bg-white max-w-[1100px] w-full flex flex-col justify-between gap-8 list-none mt-6 mx-6 p-5 translate-y-1/2 rounded shadow-lg">
        <SearchBar
          search={search}
          setSearch={setSearch}
          placeholder="Insert the job information..."
        />
        {activeFilters?.length > 0 ? <Filterers /> : null}
      </div>
    </header>
  );
}

export default Header;
