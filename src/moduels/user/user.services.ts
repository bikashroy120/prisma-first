import { PrismaClient, Profile, User } from "@prisma/client";

const prisma = new PrismaClient()

const createUserServices = async (data: User): Promise<User> => {
    const result = await prisma.user.create({
        data,
    })

    return result
}


const createUpdateProfile = async (data: Profile) => {
    const exist = await prisma.profile.findUnique({
        where: {
            userId: data.userId
        }
    })


    if (exist) {
        const result = await prisma.profile.update({
            where: {
                userId: data.userId,
            },
            data: {
                bio: data.bio
            }
        })

        return result;
    }

    const result = await prisma.profile.create({
        data
    })

    return result
}

const getUser = async () => {
    const result = await prisma.user.findMany({
        select: {
            email: true
        }
    })

    return result
}



export const UserServices = {
    createUserServices,
    createUpdateProfile,
    getUser
}