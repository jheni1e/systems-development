import { registerUserDto } from "../dtos/userDTO"
import { prisma } from '../lib/prisma'

export const registerUser = async (data: registerUserDto) => {
    const { name, email, password, birth_date } = data;
    prisma.user.create({ data: { name, email, password, birth_date } });
    
}