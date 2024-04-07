import RemoveIcon from "/assets/icon-remove.svg";

function Filterers() {
  return (
    <div className="w-full flex justify-between gap-8">
      <ul className="flex flex-wrap gap-4 list-none">
        <FilterItem id={"1"} text={"Frontend"} />
        <FilterItem id={"2"} text={"CSS"} />
        <FilterItem id={"3"} text={"JavaScript"} />
      </ul>

      <div className="flex justify-center items-center px-2">
        <button
          className="text-filterClearButton font-bold hover:text-filterItemButtonHover hover:underline transition"
          type="button"
        >
          Clear
        </button>
      </div>
    </div>
  );
}

interface IFilterItemProps {
  id: string;
  text: string;
}

function FilterItem(props: IFilterItemProps) {
  const { id, text } = props;

  return (
    <li
      key={id}
      title={text}
      className="bg-filterItem w-fit h-8 flex items-center overflow-hidden rounded"
    >
      <p
        aria-label={text}
        className="text-filterItemColor text-base font-bold flex items-center px-2"
      >
        {text}
      </p>

      <button
        className="bg-filterItemButton hover:bg-filterItemButtonHover transition flex items-center justify-center w-8 h-8"
        type="button"
        title={`Click here to remove filte: ${text}`}
      >
        <img src={RemoveIcon} alt="Remove button icon" />
      </button>
    </li>
  );
}

export { Filterers };
