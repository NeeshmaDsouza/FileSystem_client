import { Cancel, Tag } from "@mui/icons-material";
import { FormControl, Stack, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useRef, useState } from "react";

const Tags = ({ data, handleDelete }) => {
  return (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        padding: "0.4rem",
        margin: "0 0.5rem 0 0",
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      <Stack direction='row' gap={1}>
        <Typography>{data}</Typography>
        <Cancel
          sx={{ cursor: "pointer" }}
          onClick={() => {
            handleDelete(data);
          }}
        />
      </Stack>
    </Box>
  );
};

export default function TagComponent() {
  const [tags, SetTags] = useState([]);
  const tagRef = useRef();

  const handleDelete = (value) => {
    const newtags = tags.filter((val) => val !== value);
    SetTags(newtags);
    if(newtags.length == 0) {
      document.getElementById("tagContainer").style.display = "none";

    }
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    SetTags([...tags, tagRef.current.value]);
    tagRef.current.value = "";
    document.getElementById("tagContainer").style.display = "block";

  };
  return (
    <Box>
      <form onSubmit={handleOnSubmit}>
        <div id= "tagContainer" className="tagContainer" hidden>     
            {
                tags.map((data, index) => {
                    return (
                        <Tags data={data} handleDelete={handleDelete} key={index} />
                    );
                })
            }
        </div>
        <TextField
          className="inputBoxStyle"
          inputRef={tagRef}
          variant='standard'
          size='small'
          sx={{ margin: "1rem 0" }}
          placeholder="Enter Skills"
        />
      </form>
    </Box>
  );
}
