import React, { useEffect, useState } from "react";
import { Box, Grid } from "@mui/material";
import NoteCard from "../Components/NoteCard";

const Notes = () => {
	const [notes, setNotes] = useState([]);

	useEffect(() => {
		fetch("http://localhost:8000/notes")
			.then((res) => res.json())
			.then((res) => {
				setNotes(res);
			});
	}, []);

	const handleDelete = async (id) => {
		await fetch("http://localhost:8000/notes/" + id, {
			method: "DELETE",
		});
		setNotes((prevNotes) => prevNotes.filter((note) => note.id != id));
	};

	return (
		<Box
			sx={{
				p: 2,
			}}>
			<Grid container spacing={3}>
				{notes.map((note) => (
					<Grid item key={note.id} xs={12} md={6} lg={3}>
						<NoteCard note={note} handleDelete={handleDelete} />
					</Grid>
				))}
			</Grid>
		</Box>
	);
};

export default Notes;
