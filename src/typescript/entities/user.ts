export interface User {
    id: string;
    createdAt: Date;
    email: string;
    name: string;
    image: string;
}

export const initialUserObject: User = {
    id: "",
    createdAt: new Date(),
    email: "",
    name: "",
    image: "",
};
