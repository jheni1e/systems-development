import { registerUserDto, updateUserDto } from "../dtos/userDTO"
import { prisma } from "../lib/prisma";

export const registerUser = async (data: registerUserDto) => {
    const { name, email, password } = data;

    return await prisma.user.create({
        data: {
            name: name,
            email: email,
            password: password
        }
    });
}

export const showUsers = async () => {
    return await prisma.user.findMany();
}

export const updateUser = async (data: updateUserDto) => {
    const { name, email, password } = data;

    return await prisma.user.update({
        where: { email: email },
        data: { name, email, password }
    });
}

export const deleteUser = async (data: number) => {
    return await prisma.user.delete({
        where: { id: data }
    });
}