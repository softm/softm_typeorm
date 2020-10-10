export interface ITestReq {
    email: string;
    password: string;
}

export interface ITestRes {
    id: string;
    name: string;
    email?: string; // ? << init to undefined
    token?: string;
    list?:string[];
}

export interface ITestRes2 {
    profileId: number;
    gender: string;
    userId: number; 
}