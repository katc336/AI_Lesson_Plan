import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from "@mui/material/Typography";
import TextField from '@mui/material/TextField';
import LessonComponents from "./LessonComponent";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useMediaQuery, useTheme, ThemeProvider } from "@mui/material";
import TextFieldTheme from '../StyleThemes/TextFieldTheme';
import MobileTheme from '../StyleThemes/MobileTheme';
import { useState } from 'react';

const HomePage: React.FC = () => {
    const [promptText, setPromptText] = useState("");
    const [studentAge, setStudentAge] = useState("");
    const [isButtonClicked, setIsButtonClicked] = useState(false);
    const theme = useTheme();
    const outerTheme = useTheme();
    const { isMobile } = MobileTheme();
    const handleChange = (event: SelectChangeEvent) => {
        setStudentAge(event.target.value as string);
    };
    const handleButtonClick = () => {
        setIsButtonClicked(true);
    };

    return (
        <div>
            <Typography
                variant={isMobile ? "h6" : "h3"}
                sx={{ fontWeight: "bold", color: "#F7FFED", textAlign: "center", my: 3 }}>
                Lesson Plan Builder
            </Typography>
            <Stack spacing={3} direction={"column"}>
                <Stack direction={"row"} sx={{ justifyContent: "center" }}>
                    <ThemeProvider theme={TextFieldTheme(outerTheme)}>
                        <TextField
                            value={promptText}
                            onChange={(event) => setPromptText(event.target.value)}
                            sx={{ minWidth: "30vw", backgroundColor: "#8e9eab", borderRadius: "5px" }}
                            label="What you are teaching?"
                        />
                    </ThemeProvider>
                    <InputLabel sx={{ ml: 3, mr: 1, mt: 2, color: "white", }}>Student's Age</InputLabel>
                    <Select
                        sx={{ backgroundColor: "#8e9eab" }}
                        value={studentAge}
                        label="Student Age"
                        onChange={handleChange} >
                        <MenuItem value={"elementary aged"}>Elementary Age</MenuItem>
                        <MenuItem value={"middle school aged"}>Middle School Age</MenuItem>
                        <MenuItem value={"high school aged"}>High School Age</MenuItem>
                        <MenuItem value={"adults"}>Adult</MenuItem>
                    </Select>
                </Stack>
                <LessonComponents
                    section="learning objective"
                    search="Generate Learning Objective"
                    lessonTopic={`${promptText}`}
                    studentAge={`${studentAge}`}
                />
                <LessonComponents
                    section="warm up activity"
                    search="Generate Warm Up"
                    lessonTopic={`${promptText}`}
                    studentAge={`${studentAge}`}
                />
                <LessonComponents
                    section="teacher's presentation steps for the concept of"
                    search="Generate Presentation"
                    lessonTopic={`${promptText}`}
                    studentAge={`${studentAge}`}
                />
                <LessonComponents
                    section="practice activity for"
                    search="Generate Practice Activity"
                    lessonTopic={`${promptText}`}
                    studentAge={`${studentAge}`}
                />
                <LessonComponents
                    section="an evaluation activity to check the understanding of"
                    search="Generate Evaluation"
                    lessonTopic={`${promptText}`}
                    studentAge={`${studentAge}`}
                />
            </Stack>
        </div>
    )
}
export default HomePage;