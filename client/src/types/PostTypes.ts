export type PostType = {
  id?: number;
  ownerId?: number;
  stateType: number;
  city: number;
  street: string;
  email: string;
  features: string;
  price: number;
  image: File | null;
  imagePath?: string;
}
export type PostsType = PostType[];