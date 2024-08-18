import { AutoMap } from "@automapper/classes";
import { ExpenseItem } from "./expense-item";

export class Expense {
  @AutoMap()
  id!: string;
  @AutoMap()
  name!: string;
  @AutoMap()
  date!: Date;
  @AutoMap()
  amount!: number;
  @AutoMap()
  goal!: number;
  @AutoMap(() => [ExpenseItem])
  items!: ExpenseItem[];
}
