import Sidebar from "@/app/components/Sidebar";
import LogoutButton from "../components/LogoutButton";

export default function Layout({ children }) {
  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-white">
        <body class="h-full">
        ```
      */}
      <Sidebar logoutButton={<LogoutButton />}>{children}</Sidebar>
    </>
  );
}
