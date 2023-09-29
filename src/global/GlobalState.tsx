import { atom, RecoilState } from "recoil";
import { recoilPersist } from "recoil-persist";
const { persistAtom } = recoilPersist();

interface iUser {}

export const userState: any = atom({
  key: "userState",
  default: "",
  effects_UNSTABLE: [persistAtom],
});

export const user: any = atom({
  key: "user",
  default: "" || null || undefined,
  effects_UNSTABLE: [persistAtom],
});

export const toggle: any = atom({
  key: "toggle",
  default: false,
  effects_UNSTABLE: [persistAtom],
});
