/*
  Warnings:

  - Added the required column `birth_date` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `user` ADD COLUMN `birth_date` DATETIME(3) NOT NULL;
