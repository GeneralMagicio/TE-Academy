import { getAllUsers } from "./sample/lmsSampleData";

interface CoreTeamMember {
  username: string;
  role: string;
  linkedin: string | null;
  facebook: string | null;
  instagram: string | null;
  image: string | null;
}

export function getCoreTeamMembers(): Array<CoreTeamMember> {
  let coreTeamMembers: Array<CoreTeamMember> = [];
  getAllUsers.data.map((user) => {
    if (user.role.name === "core-team") {
      coreTeamMembers.push({
        username: user.username,
        role: user.role.name,
        linkedin: user.fields.linkedin,
        facebook: user.fields.fb,
        instagram: user.fields.instagram,
        image: user.fields.url,
      });
    }
  });
  return coreTeamMembers;
}
