// import { PrismaClient } from "@prisma/client/extension"
import { registerUserDto } from "../dtos/userDTO"
// import { Prisma } from "../generated/prisma/client"
// import { PrismaClient } from "../generated/prisma"
import { prisma }  from '../lib/prisma'

export const registerUser = async (data: registerUserDto) => {
    const { name, email, password, birth_date } = data
}