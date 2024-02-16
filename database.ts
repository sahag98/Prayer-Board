import { UserMeta } from "@/liveblocks.config";

const USER_INFO: UserMeta[] = [
  {
    id: "1",
    info: {
      name: "Anonymous",
      color: "#D583F0",
      avatar: "https://liveblocks.io/avatars/avatar-1.png",
    },
  },
  {
    id: "2",
    info: {
      name: "Anonymous",
      color: "#F08385",
      avatar: "https://liveblocks.io/avatars/avatar-2.png",
    },
  },
  {
    id: "3",
    info: {
      name: "Anonymous",
      color: "#F0D885",
      avatar: "https://liveblocks.io/avatars/avatar-3.png",
    },
  },
  {
    id: "4",
    info: {
      name: "Anonymous",
      color: "#85EED6",
      avatar: "https://liveblocks.io/avatars/avatar-4.png",
    },
  },
  {
    id: "5",
    info: {
      name: "Anonymous",
      color: "#85BBF0",
      avatar: "https://liveblocks.io/avatars/avatar-5.png",
    },
  },
  {
    id: "6",
    info: {
      name: "Anonymous",
      color: "#8594F0",
      avatar: "https://liveblocks.io/avatars/avatar-6.png",
    },
  },
  {
    id: "7",
    info: {
      name: "Anonymous",
      color: "#85DBF0",
      avatar: "https://liveblocks.io/avatars/avatar-7.png",
    },
  },
  {
    id: "8",
    info: {
      name: "Anonymous",
      color: "#87EE85",
      avatar: "https://liveblocks.io/avatars/avatar-8.png",
    },
  },
  {
    id: "9",
    info: {
      name: "Anonymous",
      color: "#212121",
      avatar: "https://liveblocks.io/avatars/avatar-9.png",
    },
  },
  {
    id: "10",
    info: {
      name: "Anonymous",
      color: "#93d8f8",
      avatar: "https://liveblocks.io/avatars/avatar-10.png",
    },
  },
  {
    id: "11",
    info: {
      name: "Anonymous",
      color: "#87EE85",
      avatar: "https://liveblocks.io/avatars/avatar-11.png",
    },
  },
  {
    id: "12",
    info: {
      name: "Anonymous",
      color: "#87EE85",
      avatar: "https://liveblocks.io/avatars/avatar-12.png",
    },
  },
  {
    id: "13",
    info: {
      name: "Anonymous",
      color: "#87EE85",
      avatar: "https://liveblocks.io/avatars/avatar-13.png",
    },
  },
  {
    id: "14",
    info: {
      name: "Anonymous",
      color: "#87EE85",
      avatar: "https://liveblocks.io/avatars/avatar-14.png",
    },
  },
  {
    id: "15",
    info: {
      name: "Anonymous",
      color: "#87EE85",
      avatar: "https://liveblocks.io/avatars/avatar-15.png",
    },
  },
  {
    id: "16",
    info: {
      name: "Anonymous",
      color: "#87EE85",
      avatar: "https://liveblocks.io/avatars/avatar-16png",
    },
  },
  {
    id: "Anon17",
    info: {
      name: "Anonymous",
      color: "#87EE85",
      avatar: "https://liveblocks.io/avatars/avatar-17.png",
    },
  },
  {
    id: "18",
    info: {
      name: "Anonymous",
      color: "#87EE85",
      avatar: "https://liveblocks.io/avatars/avatar-18.png",
    },
  },
  {
    id: "19",
    info: {
      name: "Anonymous",
      color: "#87EE85",
      avatar: "https://liveblocks.io/avatars/avatar-19.png",
    },
  },
  {
    id: "20",
    info: {
      name: "Anonymous",
      color: "#87EE85",
      avatar: "https://liveblocks.io/avatars/avatar-20.png",
    },
  },
];

export function getRandomUser() {
  console.log("getting random user");
  return USER_INFO[Math.floor(Math.random() * 10) % USER_INFO.length];
}

export function getUser(id: string) {
  console.log("getting a user");
  return USER_INFO.find((u) => u.id == id) || null;
}

export function getUsers() {
  console.log("getting all user");
  return USER_INFO;
}
