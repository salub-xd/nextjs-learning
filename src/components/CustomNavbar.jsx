"use client";
import UserContext from "@/context/userContext";
import { logout } from "@/services/userService";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { toast } from "react-toastify";

export default function CustomNavbar() {
  console.log("Navbar Testing");
  const router = useRouter();
  const context = useContext(UserContext);

  async function doLogout() {
    try {

      const result = await logout();
      console.log(result);
      toast.success('logged out successfully', {
        position: "top-center"
      })
      context.setUser(undefined);
      router.push('/login');
    } catch (error) {
      console.log(error);
      toast.error("logout error", {
        position: "top-center"
      })
    }
  }

  console.log(context)
  return (
    <nav className="bg-blue-600 h-16 py-2 px-36 flex justify-between items-center">
      <div className="brand">
        <h1 className="text-2xl font-semibold">
          <a href="#!">Work Manager</a>
        </h1>
      </div>
      <div>
        <ul className="flex space-x-5">
          {/* {context.user && ( */}
          <>
            <li>
              <Link href={"/"} className="hover:text-blue-200">
                Home
              </Link>
            </li>
            <li>
              <Link href="/add-task" className="hover:text-blue-200">
                Add Task
              </Link>
            </li>
            <li>
              <Link href={"/show-tasks"} className="hover:text-blue-200">
                Show Tasks
              </Link>
            </li>
          </>
          {/* )} */}
        </ul>
      </div>
      <div>
        <ul className="flex space-x-3">
          {context.user && (
            <>
              <li>
                {context.user.name}
              </li>
              <li>
                <button onClick={doLogout} >Logout</button>
              </li>
            </>
          )}

          {!context.user && (
            <>
              <li>
                <Link href="/login">Login</Link>
              </li>
              <li>
                <Link href="/signup">Signup</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  )
}
