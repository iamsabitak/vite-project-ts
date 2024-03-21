import { useContext } from "react";
import { UserContext } from "./UserContext";

function useUserContext() {
  const useUserContextGlobally = useContext(UserContext);
  return useUserContextGlobally;
}
export default useUserContext;
