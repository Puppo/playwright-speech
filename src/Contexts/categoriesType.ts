export interface CategoriesProps {
  id: number;
  name: string;
  color: string;
}

export type CategoriesContextType = {
  categoryList: CategoriesProps[];
};
