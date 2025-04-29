
import { useLocation, Link } from "react-router-dom";
import { Home, Search, Bookmark, User } from "lucide-react";
import { cn } from "@/lib/utils";

const BottomNavigation = () => {
  const location = useLocation();
  const path = location.pathname;

  return (
    <div className="max-w-[390px] w-full mx-auto fixed bottom-0 bg-white shadow-lg border-t border-gray-200 h-16 flex items-center justify-around">
      <Link 
        to="/home" 
        className={cn(
          "flex flex-col items-center text-sm",
          path === "/home" ? "text-indigo-600" : "text-gray-500"
        )}
      >
        <Home size={24} />
        <span>Home</span>
      </Link>

      <Link 
        to="/home?tab=search" 
        className={cn(
          "flex flex-col items-center text-sm",
          path === "/search" || path.includes("?tab=search") ? "text-indigo-600" : "text-gray-500"
        )}
      >
        <Search size={24} />
        <span>Search</span>
      </Link>

      <Link 
        to="/bookmark" 
        className={cn(
          "flex flex-col items-center text-sm",
          path === "/bookmark" ? "text-indigo-600" : "text-gray-500"
        )}
      >
        <Bookmark size={24} />
        <span>Bookmark</span>
      </Link>

      <Link 
        to="/profile" 
        className={cn(
          "flex flex-col items-center text-sm",
          path === "/profile" ? "text-indigo-600" : "text-gray-500"
        )}
      >
        <User size={24} />
        <span>Profile</span>
      </Link>
    </div>
  );
};

export default BottomNavigation;
