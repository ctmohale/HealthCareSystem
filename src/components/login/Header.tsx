import { Image, useTheme } from "@aws-amplify/ui-react";
import "./Header.css";
import { FaUserDoctor } from "react-icons/fa6";

export function Header() {
  const { tokens } = useTheme();

  return (
    <div className="text-secondary">
      <br />
      <FaUserDoctor size="80" />
      <br />
      <br />
    </div>
  );
}
