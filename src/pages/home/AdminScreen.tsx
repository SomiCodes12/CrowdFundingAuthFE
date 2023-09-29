import { user } from "../../global/GlobalState";
import { useSingleAccount } from "../../hook/singleUser";
import { useRecoilValue } from "recoil";
const AdminScreen = () => {
  const value: any = useRecoilValue(user);

  const { singleUser, isLoading } = useSingleAccount(value);

  console.log("view", singleUser);

  return (
    <div>
      <center className="mt-[40px]">Loading Admin Screen</center>

      <br />
      <br />
      <br />
      <br />
      <center>
        <div>{singleUser?.userName}</div>
        <div>{singleUser?.role}</div>
      </center>
    </div>
  );
};

export default AdminScreen;
