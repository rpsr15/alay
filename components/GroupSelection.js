import { Image } from "@nextui-org/react";
const GroupSelection = ({ options, onSelect, direction, value }) => {
    const spaceValue = direction === "row" ? "space-x-1" : "space-y-1";
    console.log("test", value);
    return (
      <div className={`flex flex-${direction} w-full  ${spaceValue}`}>
        {options.map((item) => {
          console.log("selected current", value);
          const selectedClass = "bg-secondary-dark text-white underline";
          return (
            <div
              className={`lg:p-[10px]  grow basis-0 text-center bg-white rounded-xl leading-10  cursor-pointer hover:underline ${
                value === item.value ? selectedClass : ""
              }`}
              onClick={() => {
                onSelect(item.value);
              }}>
              {" "}
              {item.title}{" "}
              <div>
                <Image src={item.url}/>
              </div>
            </div>
          );
        })}
      </div>
    );
  };
  GroupSelection.defaultProps = {
    direction: "row",
  };
  export default GroupSelection;