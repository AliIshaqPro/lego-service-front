
import { useNavigate, useLocation } from "react-router-dom";

export function useRouter() {
  const navigate = useNavigate();
  const location = useLocation();
  
  return {
    pathname: location.pathname,
    query: new URLSearchParams(location.search),
    push: (path: string) => navigate(path),
    back: () => navigate(-1),
    forward: () => navigate(1),
  };
}
