export interface Item {
  id: number;
  name: string;
}

const items: Item[] = [];
let nextId = 1;

export const addItem = (name: string): Item => {
  const newItem: Item = { id: nextId++, name };
  items.push(newItem);
  return newItem;
};

export const getItemById = (id: number): Item | undefined =>
  items.find((item) => item.id === id);

export const getAllItems = (): Item[] => items;
export const updateItem = (id: number, name: string): Item | undefined => {
  const index = items.findIndex((item) => item.id === id);
  if (index !== -1) {
    items[index].name = name;
    return items[index];
  }
  return undefined;
};

export const deleteItem = (id: number): boolean => {
  const index = items.findIndex((item) => item.id === id);
  if (index !== -1) {
    items.splice(index, 1);
    return true;
  }
  return false;
};
