import useUser from "../../hooks/useUser";

type LogoutButtonProps = {
  className: string;
}

function LogoutButton({ className }: LogoutButtonProps) {
  const { logoutUser } = useUser()
  return (
    <li>
      <button onClick={() => logoutUser()} className={className}>
        Logout
      </button>
    </li>
  );
}

export default LogoutButton;
