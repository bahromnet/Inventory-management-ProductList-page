export interface Role{
    permissionId?:string;
    permissionName:string;
    createdDate?:Date;
    createdBy?:string;
    modifiedDate?:Date;
    modifiedBy?:string;
}

export interface CreatePermission{
    name: string[];
}