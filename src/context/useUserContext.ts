import { useContext } from "react";
import { UserContext } from "./UserContext";

function useUserContext() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useMovieContext must be used within a MovieProvider");
  }
  return context;
}
export default useUserContext;
