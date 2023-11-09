import React, { useState } from "react";
import { TodoItem } from "../types";

interface Props {
  id: number;
  name: string;
  completed: boolean;
  toggleItemCompleted(itemId: number): void;
}

export const ListItem = ({
  id,
  name,
  completed,
  toggleItemCompleted,
}: Props) => {
  // const [isCompleted, setIsCompleted] = useState<boolean>(completed);

  // function toggleItemCompleted(): void {
  //   setIsCompleted(!isCompleted);
  // }

  return (
    <li
      onClick={() => {
        toggleItemCompleted(id);
      }}
      className={`flex justify-between mb-2 px-4 py-3 bg-rose-100 rounded-md ${
        completed && "bg-rose-300"
      }`}
    >
      <div className="flex items-center gap-2">
        <form className="flex items-center">
          <input
            className="w-4 h-4"
            type="checkbox"
            name="todo-checkbox"
            id="todo-checkbox"
            checked={completed}
          />
        </form>
        <span className="">{name}</span>
      </div>
    </li>
  );
};
