-- CreateEnum
CREATE TYPE "Status" AS ENUM ('REJECTED', 'PENDING', 'ACCEPTED');

-- CreateEnum
CREATE TYPE "EmpType" AS ENUM ('GENERAL', 'ADMIN', 'MANAGER');

-- CreateEnum
CREATE TYPE "Department" AS ENUM ('HR', 'IT', 'RESEARCH', 'OPEARTIONS', 'SUPPORT');

-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('MALE', 'FEMALE', 'OTHER');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "empId" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "contactNo" TEXT NOT NULL,
    "gender" "Gender" NOT NULL,
    "address" TEXT NOT NULL,
    "jobTitle" TEXT NOT NULL,
    "joiningDate" DATE NOT NULL,
    "department" "Department" NOT NULL,
    "dob" DATE NOT NULL,
    "employeType" "EmpType" NOT NULL,
    "profilePicture" TEXT,
    "salary" DOUBLE PRECISION NOT NULL,
    "bankName" TEXT NOT NULL,
    "bankNo" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Leave" (
    "id" SERIAL NOT NULL,
    "startDate" DATE NOT NULL,
    "endDate" DATE NOT NULL,
    "reason" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    "status" "Status" NOT NULL,

    CONSTRAINT "Leave_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Leave" ADD CONSTRAINT "Leave_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
