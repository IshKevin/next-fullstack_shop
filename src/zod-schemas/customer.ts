import { createInsertSchema, createSelectSchema } from "drizzle-zod"
import { customers } from "@/db/schema"

export const insertCustomerSchema = createInsertSchema(customers, {
    firstName: (schema) => schema.refine((val) => val.length > 0, { message: "First name is required" }),
    lastName: (schema) => schema.refine((val) => val.length > 0, { message: "Last name is required" }),
    address1: (schema) => schema.refine((val) => val.length > 0, { message: "Address is required" }),
    city: (schema) => schema.refine((val) => val.length > 0, { message: "City is required" }),
    state: (schema) => schema.refine((val) => val.length === 2, { message: "State must be exactly 2 characters" }),
    email: (schema) => schema.email("Invalid email address"),
    zip: (schema) => schema.regex(/^\d{5}(-\d{4})?$/, "Invalid Zip code. Use 5 digits or 5 digits followed by a hyphen and 4 digits"),
    phone: (schema) => schema.regex(/^\d{3}-\d{3}-\d{4}$/, "Invalid phone number format. Use XXX-XXX-XXXX"),
})

export const selectCustomerSchema = createSelectSchema(customers)

export type insertCustomerSchemaType = typeof insertCustomerSchema._type

export type selectCustomerSchemaType = typeof selectCustomerSchema._type 