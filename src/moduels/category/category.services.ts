import { Category, PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

const createCategoryServices = async (data: Category): Promise<Category> => {
    const result = await prisma.category.create({
        data,
    })

    return result
}

const getCategoryServices = async (): Promise<Category[]> => {
    const result = await prisma.category.findMany()

    return result
}


export const CategoryServices = {
    createCategoryServices,
    getCategoryServices
}