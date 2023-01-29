import { Stack, Avatar, Button } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import useStore, { StoreState } from "../store/store";
import { User } from "../typescript";

function Profile() {
  const currentUser: User = useStore((state: StoreState) => state.currentUser);

  return (
    <Stack spacing={2}>
      <Stack direction="row" spacing={2}>
        <Stack spacing={2}>
          <h3>{currentUser.name}</h3>
          <h5>{currentUser.email}</h5>
        </Stack>
        <Avatar
          alt={currentUser.name}
          src={currentUser.image}
          sx={{ width: 150, height: 150 }}
        />
      </Stack>
      <Button variant="text" startIcon={<SettingsIcon />}>
        Setings
      </Button>
      <Button variant="text" startIcon={<LogoutIcon />}>
        Logout
      </Button>
    </Stack>
  );
}

export default Profile;
