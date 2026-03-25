import { PrismaClient, DiscountType } from "../src/generated/prisma";
import bcrypt from "bcryptjs";
const prisma = new PrismaClient();

async function main() {
  // Seed Company
  const company = await prisma.company.create({
    data: {
      company_name: "Barber Bros",
      company_email: "info@barberbros.com",
      company_contact_number: "1234567890",
      company_address: "123 Main St",
      subscription_start: new Date(),
      subscription_end: new Date(
        new Date().setFullYear(new Date().getFullYear() + 1),
      ),
    },
  });

  // Seed Users (with hashed passwords)
  const user1 = await prisma.user.create({
    data: {
      full_name: "Jay Arvie Mendoza",
      username: "jampzx",
      password: await bcrypt.hash("Jampzx31", 10),
      user_type: "admin",
      status: "active",
      company_id: company.company_id,
    },
  });
  const user2 = await prisma.user.create({
    data: {
      full_name: "Jane Smith",
      username: "janesmith",
      password: await bcrypt.hash("password123", 10),
      user_type: "staff",
      status: "active",
      company_id: company.company_id,
    },
  });

  // Seed Products
  const product1 = await prisma.product.create({
    data: {
      name: "Hair Gel",
      description: "Strong hold hair gel",
      product_type: "Styling",
      price: 9.99,
      stock: 100,
      status: "active",
      company_id: company.company_id,
    },
  });
  const product2 = await prisma.product.create({
    data: {
      name: "Shampoo",
      description: "Refreshing shampoo",
      product_type: "Care",
      price: 14.99,
      stock: 50,
      status: "active",
      company_id: company.company_id,
    },
  });

  // Seed Payment Types
  const paymentType1 = await prisma.paymentType.create({
    data: {
      name: "Cash",
      description: "Cash payment",
      company_id: company.company_id,
    },
  });
  const paymentType2 = await prisma.paymentType.create({
    data: {
      name: "Card",
      description: "Credit/Debit Card",
      company_id: company.company_id,
    },
  });

  // Seed Expenses
  await prisma.expense.create({
    data: {
      description: "Electricity Bill",
      amount: 150.0,
      company_id: company.company_id,
    },
  });
  await prisma.expense.create({
    data: {
      description: "Water Bill",
      amount: 50.0,
      company_id: company.company_id,
    },
  });

  // Seed Orders
  const order1 = await prisma.order.create({
    data: {
      product_id: product1.id,
      product: product1.name,
      quantity: 20,
      order_price: 7.99,
      selling_price: 9.99,
      profit_per_unit: 2.0,
      net_profit: 40.0,
      order_date: new Date(),
      remaining_quantity: 20,
      status: "pending",
      company_id: company.company_id,
    },
  });

  // Seed Transaction
  const transaction1 = await prisma.transaction.create({
    data: {
      user_id: user1.id,
      subtotal: 19.98,
      total_paid: 20.0,
      discount_type: DiscountType.AMOUNT,
      discount_value: 0.02,
      change: 0.0,
      status: "completed",
      company_id: company.company_id,
      items: {
        create: [
          {
            product_id: product1.id,
            quantity: 2,
            price: 9.99,
            company_id: company.company_id,
          },
        ],
      },
      payments: {
        create: [
          {
            payment_method: paymentType1.name,
            amount: 20.0,
            company_id: company.company_id,
          },
        ],
      },
      details: {
        create: [
          {
            product_name: product1.name,
            quantity: 2,
            price: 9.99,
            payment_method: paymentType1.name,
            payment_amount: 20.0,
            company_id: company.company_id,
          },
        ],
      },
    },
  });

  // Seed TransactionItem (extra)
  await prisma.transactionItem.create({
    data: {
      transaction_id: transaction1.id,
      product_id: product2.id,
      quantity: 1,
      price: 14.99,
      company_id: company.company_id,
    },
  });

  // Seed TransactionPayment (extra)
  await prisma.transactionPayment.create({
    data: {
      transaction_id: transaction1.id,
      payment_method: paymentType2.name,
      amount: 14.99,
      company_id: company.company_id,
    },
  });

  // Seed TransactionDetail (extra)
  await prisma.transactionDetail.create({
    data: {
      transaction_id: transaction1.id,
      product_name: product2.name,
      quantity: 1,
      price: 14.99,
      payment_method: paymentType2.name,
      payment_amount: 14.99,
      company_id: company.company_id,
    },
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
