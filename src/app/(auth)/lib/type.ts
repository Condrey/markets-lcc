import { Role } from "@/app/generated/prisma";

export type LuciaSession= {
    id: string;
    lastVerifiedAt: Date;
    expiresAt: Date;
    createdAt: Date;
    userId: string;
    role: Role;
}
export type  LuciaUser= {
    role: Role;
    avatarUrl?: string | null;
    email?: string | null;
    id: string;
    name?:string;
    username?: string | null;
    isVerified:boolean;
}