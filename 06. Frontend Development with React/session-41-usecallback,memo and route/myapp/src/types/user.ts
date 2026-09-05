export type User = {
    id: number;
    name: string;
    email: string;
    username:string;
    phone:string;
    website:string;
    address:Address
}

type Address = {
    street:string;
    suite:string;
    city:string;
    zipcode:number;
    geo:Geo;
}

type Geo ={
    lat:number;
    lng:number;
}
