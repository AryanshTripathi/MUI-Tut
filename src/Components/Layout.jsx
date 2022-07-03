import React from "react";
import {
	Box,
	List,
	ListItem,
	ListItemText,
	ListItemIcon,
	ListItemButton,
	AppBar,
	Toolbar,
	Avatar,
} from "@mui/material";
import Drawer from "@mui/material/Drawer";
import Typography from "@mui/material/Typography";
import { AddCircleOutlined, SubjectOutlined } from "@mui/icons-material";
import { useLocation, useNavigate } from "react-router-dom";
import { format } from "date-fns";

const drawerWidth = 240;

const Layout = ({ children }) => {
	const navigate = useNavigate();
	const location = useLocation();
	const menuItems = [
		{
			text: "My Notes",
			icon: <SubjectOutlined color="secondary" />,
			path: "/",
		},
		{
			text: "Create Notes",
			icon: <AddCircleOutlined color="secondary" />,
			path: "/create",
		},
	];

	return (
		<Box
			sx={{
				display: "flex",
			}}>
			<Drawer
				sx={{
					width: drawerWidth,
					flexShrink: 0,
					"& .MuiDrawer-paper": {
						width: drawerWidth,
						boxSizing: "border-box",
					},
				}}
				variant="permanent"
				anchor="left">
				<Typography
					variant="h4"
					sx={{
						textAlign: "center",
						mt: 3,
					}}>
					Meta Notes
				</Typography>
				<List
					sx={{
						mt: 3,
					}}>
					{menuItems.map((item) => (
						<ListItem
							disablePadding
							key={item.text}
							sx={
								location.pathname == item.path
									? {
											backgroundColor: "#f2f2f2",
											my: 1,
									  }
									: {
											my: 1,
									  }
							}>
							<ListItemButton
								onClick={() => {
									navigate(item.path);
								}}>
								<ListItemIcon>{item.icon}</ListItemIcon>
								<ListItemText>{item.text}</ListItemText>
							</ListItemButton>
						</ListItem>
					))}
				</List>
			</Drawer>
			<Box
				sx={{
					flexGrow: 1,
					p: 0,
				}}>
				<AppBar position="relative">
					<Toolbar>
						<Typography
							sx={{
								flexGrow: 1,
							}}>
							Today is {format(new Date(), "do MMMM Y")}
						</Typography>
						<Typography>Mario</Typography>
						<Avatar
							src="../../data/mario-av.png"
							sx={{
								ml: 2,
							}}
						/>
					</Toolbar>
				</AppBar>
				{children}
			</Box>
		</Box>
	);
};

export default Layout;
