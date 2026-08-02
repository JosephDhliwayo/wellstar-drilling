import {
  pgTable,
  serial,
  text,
  integer,
  boolean,
  date,
  timestamp,
  uniqueIndex,
  index,
} from "drizzle-orm/pg-core";

export const workers = pgTable("workers", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  monthlySalaryCents: integer("monthly_salary_cents").notNull(),
  active: boolean("active").notNull().default(true),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

export const payrollPayments = pgTable(
  "payroll_payments",
  {
    id: serial("id").primaryKey(),
    workerId: integer("worker_id")
      .notNull()
      .references(() => workers.id),
    period: date("period", { mode: "string" }).notNull(),
    amountCents: integer("amount_cents").notNull(),
    isPaid: boolean("is_paid").notNull().default(false),
    paidDate: date("paid_date", { mode: "string" }),
    notes: text("notes"),
    createdAt: timestamp("created_at").notNull().defaultNow(),
    updatedAt: timestamp("updated_at").notNull().defaultNow(),
  },
  (t) => [uniqueIndex("worker_period_idx").on(t.workerId, t.period)],
);

export const expenses = pgTable(
  "expenses",
  {
    id: serial("id").primaryKey(),
    expenseDate: date("expense_date", { mode: "string" }).notNull(),
    category: text("category").notNull(),
    description: text("description").notNull(),
    amountCents: integer("amount_cents").notNull(),
    createdAt: timestamp("created_at").notNull().defaultNow(),
    updatedAt: timestamp("updated_at").notNull().defaultNow(),
  },
  (t) => [
    index("expenses_date_idx").on(t.expenseDate),
    index("expenses_category_idx").on(t.category),
  ],
);
