import { LogoutBtn } from "./LogoutBtn";
import { SearchBar } from "./SearchBar";
import { Users } from "./Users";

export const Welcome = () => {
  return (
    <div className="w-screen p-4 flex flex-col  ">
      <div className="flex items-center flex-row gap-x-2">
        <SearchBar />
        <LogoutBtn />
      </div>
      <Users />
    </div>
  );
};