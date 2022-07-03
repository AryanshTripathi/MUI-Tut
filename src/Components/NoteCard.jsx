import { Avatar, Box, Typography } from "@mui/material";
import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import { DeleteOutlined } from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";
import { yellow, green, pink, blue } from "@mui/material/colors";

const NoteCard = ({ note, handleDelete }) => {
	const bgColorMapper = {
		work: yellow[700],
		money: green[500],
		todos: pink[500],
		reminders: blue[500],
	};
	return (
		<Box>
			<Card
				elevation={1}
				sx={{
					borderTop: `1px solid ${bgColorMapper[note.category]}`,
				}}>
				<CardHeader
					avatar={
						<Avatar
							sx={{
								backgroundColor: bgColorMapper[note.category],
							}}>
							{note.category[0].toUpperCase()}
						</Avatar>
					}
					action={
						<IconButton onClick={() => handleDelete(note.id)}>
							<DeleteOutlined />
						</IconButton>
					}
					title={note.title}
					subheader={note.category}
				/>
				<CardContent>
					<Typography variant="body2" color="text-secondary">
						{note.details}
					</Typography>
				</CardContent>
			</Card>
		</Box>
	);
};

export default NoteCard;
