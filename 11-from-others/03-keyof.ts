type APIResponse = {
  user: {
    userId: string;
    friendList: {
      readonly count?: number;
      friends?: {
        firstName?: string;
        lastName?: string;
      }[];
    };
  };
};

type ReponseKeys = keyof APIResponse;
type UserKeys = keyof APIResponse["user"];

type FriendList = {
  [K in keyof APIResponse["user"]["friendList"]]: K;
};

const enum Direction {
  Up,
  Down,
}

Direction.Up;

export {};
