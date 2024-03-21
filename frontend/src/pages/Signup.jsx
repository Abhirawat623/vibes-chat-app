import {GenderCheckBox}from "../components/GenderCheckBox";
export const Signup = () => {
  return (
    <div className="flex flex-col items-center justify-center ">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 ">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Sign Up <span className="text-green-500">FlauntChat</span>
        </h1>
        <form>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="Test User"
              className="w-full input input-bordered  h-10"
            />
          </div>
          <div>
            <label className="label p-2 ">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="testuser12"
              className="w-full input input-bordered h-10"
            />
          </div>
          <div>
            <label className="label">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full input input-bordered h-10"
            />
          </div>
          <div>
            <label className="label">
              <span className="text-base label-text">Confirm Password</span>
            </label>
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full input input-bordered h-10"
            />
          </div>
          <GenderCheckBox/>
          <div className="pt-4 text-sky-400 text-center">
          Already our user?
          </div>
          <div>
            <button className="btn btn-block btn-sm mt-2 border border-slate-700">
              <span className="loading loading-dots"></span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};