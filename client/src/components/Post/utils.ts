export interface IPost {
    creator: string,
    creatorId?: string,
    title: string,
    tags?: string,
    message?: string,
    file?: {
        name: string,
        size: string,
        type: string,
        base64: string | ArrayBuffer | null,
    },
    likes?: [{ _id: string, name: string }],
    _id?: string,
    isHidden?: boolean,
    createdAt?: string,
}
export const mockPost = {
    creator: '',
    title: '',
    message: '',
    tags: '',
}