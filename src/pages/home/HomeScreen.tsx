import { user } from "../../global/GlobalState";
import { useSingleAccount } from "../../hook/singleUser";
import { useRecoilValue } from "recoil";
const HomeScreen = () => {
  const value: any = useRecoilValue(user);

  const { singleUser, isLoading } = useSingleAccount(value);

  return (
    <div>
      <center className="mt-[40px]">Loading User Screen</center>

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

export default HomeScreen;
