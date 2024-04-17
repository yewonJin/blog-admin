import { Category } from "../domain/category";

export const getCategories = async (): Promise<Category[]> => {
  const result = await (
    await fetch(`${process.env.REACT_APP_BASE_URL}/api/category`)
  ).json();

  return result;
};
