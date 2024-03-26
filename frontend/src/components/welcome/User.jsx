import useUser from "../../zustand/useUser";

export const User = ({ user, emoji, lastIndex }) => {
  //zustand store
  const {selectedUser,setSelectedUser}=useUser();

  const isSelected = selectedUser?._id ===user._id;

  return (
    <>
      <div className="flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer"
      onClick={()=>setSelectedUser(user)}>
        <div>
          <div className="w-12 rounded-full">
            <img src={user.profilepic} alt="user avatar" />
          </div>
        </div>

        <div className="flex flex-col flex-1">
          <div className="flex gap-3 justify-between">
            <p className="font-bold text-gray-200">{user.fullname}</p>
            <span className="text-xl">{emoji}</span>
          </div>
        </div>
      </div>
      {!lastIndex && <div className="divider my-0 py-0 h-1" />}
    </>
  );
};

