import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { MainLayout } from "./layouts/main-layout";
import { ListItem } from "./components/ListItem";
import { TodoItem } from "./types";

function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}

function App() {
  const [items, setItems] = useState<TodoItem[]>([]);
  const [filteredItems, setFilteredItems] = useState<TodoItem[]>([]);
  const [inputValue, setInputValue] = useState<string>("");

  useEffect(() => {
    setFilteredItems(items);
  }, [items]);

  function addTodo(event: FormEvent<HTMLInputElement>): void {
    event.preventDefault();
    if (!inputValue.length) return;

    const newItem = {
      id: getRandomInt(2000),
      name: inputValue,
      completed: false,
    };
    setItems([...items, newItem]);
    setInputValue("");
  }

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setInputValue(event.target.value);
  }

  function handleToggleItemCompleted(itemId: number) {
    console.log(itemId);

    const completedItem = items.filter((item) => item.id === itemId)[0];
    setItems([...items, completedItem]);
  }

  function handleShowAll() {
    setFilteredItems(items);
  }

  function handleShowOpen() {
    const openItems = items.filter((item) => !item.completed);
    setFilteredItems(openItems);
  }

  function handleShowDone() {
    setFilteredItems(items.filter((item) => item.completed));
  }

  return (
    <>
      <MainLayout>
        <form className="mb-6">
          <fieldset className="flex flex-col">
            <label htmlFor="text" className="mb-1 font-bold">
              Neues Todo-Item
            </label>
            <div className="flex gap-2">
              <input
                onChange={handleChange}
                value={inputValue}
                type="text"
                name="text"
                id="text"
                className="p-2 flex-grow bg-slate-50 border-2 rounded-md"
              />
              <button
                type="submit"
                onClick={addTodo}
                className="p-3 bg-rose-500 text-white rounded-md"
              >
                Hinzufügen
              </button>
            </div>
          </fieldset>
        </form>
        <div className="flex gap-2 mb-4">
          <button
            onClick={handleShowAll}
            className="p-3 bg-rose-500 text-white rounded-md"
          >
            Alle
          </button>
          <button
            onClick={handleShowOpen}
            className="p-3 bg-rose-500 text-white rounded-md"
          >
            Offen
          </button>
          <button
            onClick={handleShowDone}
            className="p-3 bg-rose-500 text-white rounded-md"
          >
            Erledigt
          </button>
        </div>
        {items && (
          <ul>
            {filteredItems.map((item) => (
              <ListItem
                key={item.id}
                {...item}
                toggleItemCompleted={handleToggleItemCompleted}
              />
            ))}
          </ul>
        )}
      </MainLayout>
    </>
  );
}

export default App;
