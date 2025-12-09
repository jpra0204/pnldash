import { addUser, getUsers } from "@/server/modules/users/user.service";
import { getDashboardStats } from "@/server/modules/stats/stats.service";

export const serverApi = {
  users: { list: getUsers, create: addUser },
  stats: { get: getDashboardStats },
};
