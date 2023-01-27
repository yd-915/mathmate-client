import { Stack, Avatar, Button } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";

function Profile() {
  return (
    <Stack spacing={2}>
      <Stack direction="row" spacing={2}>
        <Stack spacing={2}>
          <h3>Full Name</h3>
          <h5>email@gmail.com</h5>
        </Stack>
        <Avatar
          alt="Remy Sharp"
          src="https://mui.com/static/images/avatar/1.jpg"
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
