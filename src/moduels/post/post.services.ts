import { Post, PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

const createPostServices = async (data: Post): Promise<Post> => {
    const result = await prisma.post.create({
        data,
        include: {
            author: true,
            category: true
        }
    })

    return result
}

const getPostServices = async (query: any) => {

    const { sortBy, sortOrder, searchTerm, page, limit } = query

    const skip = parseInt(limit) * parseInt(page) - parseInt(limit);
    const take = parseInt(limit)

    return await prisma.$transaction(async (tx) => {
        const result = await tx.post.findMany({
            include: {
                author: true,
                category: true
            },
            orderBy: sortBy && sortOrder ? {
                [sortBy]: sortOrder
            } : {
                createdAt: "desc"
            },
            where: {
                OR: [
                    {
                        title: {
                            contains: searchTerm,
                            mode: "insensitive"
                        }
                    },
                    {
                        author: {
                            name: {
                                contains: searchTerm,
                                mode: "insensitive"
                            }
                        }
                    }
                ]
            },
            skip,
            take,
        })

        const total = await tx.post.count()

        return {
            data: result,
            total
        }
    })
}


export const PostServices = {
    getPostServices,
    createPostServices
}