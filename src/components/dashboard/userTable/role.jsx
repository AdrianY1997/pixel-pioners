import React from "react";

export default function Role({ role }) {
  return (
    <td className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
      <p className="mb-0 text-xs font-semibold leading-tight dark:text-white dark:opacity-80">
        {role}
      </p>
    </td>
  );
}
