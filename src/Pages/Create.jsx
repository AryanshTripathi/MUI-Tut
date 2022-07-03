import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { KeyboardArrowRight } from "@mui/icons-material";

import { Box, Stack } from "@mui/material";
import { TextField } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

const Create = () => {
	const [title, setTitle] = useState("");
	const [details, setDetails] = useState("");
	const [titleError, setTitleError] = useState(false);
	const [detailsError, setDetailsError] = useState(false);
	const [category, setCategory] = useState("money");

	const navigate = useNavigate();

	const fieldClass = {
		my: 3,
		display: "block",
	};
	const handleSubmit = (e) => {
		e.preventDefault();

		if (title == "") {
			setTitleError(true);
		}
		if (title != "") {
			setTitleError(false);
		}

		if (details == "") {
			setDetailsError(true);
		}
		if (details != "") {
			setDetailsError(false);
		}

		if (title && details) {
			console.log(title, details, category);
			fetch("http://localhost:8000/notes", {
				method: "POST",
				headers: {
					"Content-type": "application/json",
				},
				body: JSON.stringify({ title, category, details }),
			}).then(() => navigate("/"));
		}
	};
	return (
		<Box
			sx={{
				p: 2,
			}}>
			<Typography
				sx={{
					textDecoration: "underline",
					mb: 5,
				}}
				variant="h6"
				component="h2"
				gutterBottom
				color="textPrimary"
				align="center">
				Create a New Note
			</Typography>

			<form noValidate autoComplete="off" onSubmit={handleSubmit}>
				<TextField
					sx={fieldClass}
					onChange={(e) => setTitle(e.target.value)}
					variant="outlined"
					label="Note Title"
					color="secondary"
					fullWidth
					required
					error={titleError}
				/>
				<TextField
					sx={fieldClass}
					onChange={(e) => setDetails(e.target.value)}
					variant="outlined"
					label="Details"
					color="secondary"
					multiline
					rows={4}
					fullWidth
					required
					error={detailsError}
				/>
				<FormControl sx={fieldClass}>
					<FormLabel id="demo-radio-buttons-group-label">
						Note Category
					</FormLabel>
					<RadioGroup
						aria-labelledby="demo-radio-buttons-group-label"
						value={category}
						onChange={(e) => setCategory(e.target.value)}
						name="radio-buttons-group">
						<FormControlLabel value="money" control={<Radio />} label="money" />
						<FormControlLabel value="todos" control={<Radio />} label="todos" />
						<FormControlLabel
							value="reminders"
							control={<Radio />}
							label="reminders"
						/>
						<FormControlLabel value="work" control={<Radio />} label="work" />
					</RadioGroup>
				</FormControl>
				<Stack direction="row" justifyContent="center">
					<Button
						sx={{
							mt: 3,
						}}
						type="submit"
						color="secondary"
						variant="contained"
						endIcon={<KeyboardArrowRight fontSize="large" />}
						onClick={() => {
							console.log("You clicked me");
						}}>
						Submit
					</Button>
				</Stack>
			</form>
		</Box>
	);
};

export default Create;
