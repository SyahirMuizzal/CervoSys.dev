import LatestUsersTable from "@/components/LatestUsersTable";

const usersPage = () => {
  return (
    <div className="flex flex-col justify-between gap-20">
      <h1 className="text-xl font-medium">Users Page</h1>
      <LatestUsersTable />
    </div>
  );
};

export default usersPage;
