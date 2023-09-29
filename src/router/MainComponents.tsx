import { useRecoilValue } from "recoil";
import { user } from "../global/GlobalState";
import { useSingleAccount } from "../hook/singleUser";
import HomeScreen from "../pages/home/HomeScreen";
import AdminScreen from "../pages/home/AdminScreen";
import DispatchScreen from "../pages/home/DispatchScreen";

const MainComponents = () => {
  const value: any = useRecoilValue(user);
  const { singleUser, isLoading } = useSingleAccount(value);
  console.log("view: ", singleUser);

  return (
    <div>
      {singleUser?.role === "admin" ? (
        <AdminScreen />
      ) : singleUser?.role === "dispatcher" ? (
        <DispatchScreen />
      ) : singleUser?.role === "user" ? (
        <HomeScreen />
      ) : null}
    </div>
  );
};

export default MainComponents;

{
  /**
   * 
   * i




 */
}
