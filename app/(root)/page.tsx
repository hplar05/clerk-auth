import { UserButton } from "@clerk/nextjs";

const RootPage = () => {
  return (
    <div>
      <div className="p-3">
        <UserButton afterSignOutUrl="/" />
      </div>
      <div className="h-[40rem] flex justify-center items-center">
        <h1 className="text-bold text-[20px]">
          Hello to HomePage... Just Trying Clerk Auth
        </h1>
      </div>
    </div>
  );
};

export default RootPage;
