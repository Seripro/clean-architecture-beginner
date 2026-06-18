export type UserJson = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};

export type PostJson = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export class JsonPlaceholderDriver {
  async getUsers(): Promise<UserJson[]> {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    return res.json();
  }

  async getPosts(): Promise<PostJson[]> {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    return res.json();
  }
}
