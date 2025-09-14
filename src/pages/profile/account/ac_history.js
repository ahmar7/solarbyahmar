import { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Select,
  MenuItem,
  Avatar,
  Box,
} from "@mui/material";
import { useGetLoginHistoryQuery } from "../../../store/Reducer/users";
import { useSelector } from "react-redux";

const activityLogs = [
  {
    id: 1,
    name: "M NABEEL BHATTI",
    initials: "MNB",
    action: "signed in with SSO",
    date: "01/02/2025 22:39:21",
  },
  {
    id: 2,
    name: "M NABEEL BHATTI",
    initials: "MNB",
    action: "signed in with SSO",
    date: "01/02/2025 22:27:30",
  },
  {
    id: 3,
    name: "M NABEEL BHATTI",
    initials: "MNB",
    action: "signed in with SSO",
    date: "01/02/2025 20:38:50",
  },
  {
    id: 4,
    name: "M NABEEL BHATTI",
    initials: "MNB",
    action: "signed in with SSO",
    date: "31/01/2025 23:47:47",
  },
  {
    id: 5,
    name: "M NABEEL BHATTI",
    initials: "MNB",
    action: "signed in with SSO",
    date: "31/01/2025 23:47:46",
  },
  {
    id: 6,
    name: "M NABEEL BHATTI",
    initials: "MNB",
    action: "signed in with SSO",
    date: "31/01/2025 21:47:35",
  },
];

const AccountHistory = () => {
  const { user } = useSelector((state) => state.user);
  const { data } = useGetLoginHistoryQuery();
  // const [actionType, setActionType] = useState("Any");
  // const [performedBy, setPerformedBy] = useState("Anyone");

  return (
    <Card sx={{ maxWidth: "100%", mx: "auto", mt: 5, p: 3 }}>
      <CardContent>
        {/* <Grid container spacing={2} alignItems="center">
          <Grid item xs={6}>
            <Typography variant="body2">Action type</Typography>
            <Select
              value={actionType}
              onChange={(e) => setActionType(e.target.value)}
              fullWidth
              size="small"
            >
              <MenuItem value="Any">Any</MenuItem>
              <MenuItem value="Login">Login</MenuItem>
              <MenuItem value="Logout">Logout</MenuItem>
            </Select>
          </Grid>

          <Grid item xs={6}>
            <Typography variant="body2">Performed by</Typography>
            <Select
              value={performedBy}
              onChange={(e) => setPerformedBy(e.target.value)}
              fullWidth
              size="small"
            >
              <MenuItem value="Anyone">Anyone</MenuItem>
              <MenuItem value="M NABEEL BHATTI">M NABEEL BHATTI</MenuItem>
            </Select>
          </Grid>
        </Grid> */}

        {/* Activity List */}
        <Box mt={3}>
          {data?.map((log) => (
            <Card
              key={log.id}
              sx={{ my: 1, p: 2, display: "flex", alignItems: "center" }}
            >
              <Avatar sx={{ bgcolor: "purple", mr: 2 }}>{ }</Avatar>
              <Box flexGrow={1}>
                <Typography variant="body1">
                  <strong>{user.username}</strong> {log.action}
                </Typography>
              </Box>
              <Typography variant="body2" color="textSecondary">
                {log.timestamp}
              </Typography>
            </Card>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
};

export default AccountHistory;
