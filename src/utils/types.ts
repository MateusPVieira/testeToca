export interface IProduct {
    id: string;
    name: string;
    description?: string;
    image?: string;
    price: number;
    grupoId: string;
    subgrupoId: string;
}

export interface IGrupos {
    id: string;
    name: string;
    subgrupos?: ISubgrupos[];
    complementos: IComplements[];
    categories: ICategories[];
}

export interface ISubgrupos {
    id: string;
    name: string;
}

export interface IComplements {
}

export interface ICategories {
    id: string;
    name: string;
}