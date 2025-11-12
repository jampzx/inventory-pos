import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

//run using npx tsx prisma/seed.ts

async function main() {
  const hashedPassword = await bcrypt.hash("Jampzx31", 10);

  const hairServices = await prisma.productCategory.upsert({
    where: { id: 1 },
    update: {},
    create: {
      id: 1,
      name: "Hair Services",
    },
  });

  const grooming = await prisma.productCategory.upsert({
    where: { id: 2 },
    update: {},
    create: {
      id: 2,
      name: "Grooming Products",
    },
  });

  const haircutCommission = await prisma.commissionCategory.upsert({
    where: { id: 1 },
    update: {},
    create: {
      id: 1,
      name: "Haircut Commission",
    },
  });

  const downtownBranch = await prisma.branch.upsert({
    where: { id: 1 },
    update: {},
    create: {
      id: 1,
      name: "Downtown Barbershop",
      address: "456 Main Ave",
      phone: "555-1234",
    },
  });

  const barberJohn = await prisma.user.upsert({
    where: { username: "jampzx" },
    update: {},
    create: {
      full_name: "Jampzx Admin",
      username: "jampzx",
      password: hashedPassword,
      user_type: "admin",
      status: "active",
    },
  });

  await prisma.userBranch.upsert({
    where: {
      user_id_branch_id: {
        user_id: barberJohn.id,
        branch_id: downtownBranch.id,
      },
    },
    update: {},
    create: {
      user_id: barberJohn.id,
      branch_id: downtownBranch.id,
    },
  });

  const haircut = await prisma.product.upsert({
    where: { id: 1 },
    update: {},
    create: {
      name: "Standard Haircut",
      description: "Classic men's haircut",
      category_id: hairServices.id,
      product_type: "Service",
      price: 15.0,
      commission_category_id: haircutCommission.id,
    },
  });

  await prisma.staffCommission.upsert({
    where: { id: 1 },
    update: {},
    create: {
      id: 1,
      staff_name: "John the Barber",
      branch_id: downtownBranch.id,
    },
  });

  await prisma.staffCommissionCategory.upsert({
    where: {
      staff_commission_id_commission_category_id: {
        staff_commission_id: 1,
        commission_category_id: haircutCommission.id,
      },
    },
    update: {},
    create: {
      staff_commission_id: 1,
      commission_category_id: haircutCommission.id,
      type: "PERCENT",
      value: 50.0,
    },
  });

  console.log("Barbershop seed data with hashed password created 💈🔐");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
