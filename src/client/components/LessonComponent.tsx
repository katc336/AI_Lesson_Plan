import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import { ThemeProvider, useTheme } from '@mui/material/styles';
import { useState } from 'react';
import TextFieldTheme from '../StyleThemes/TextFieldTheme';
import MobileTheme from '../StyleThemes/MobileTheme';
import { usePostSearchMutation } from '../../redux/langApi';

const LessonComponents: React.FC<PromptProps> = ({ section, search, lessonTopic, studentAge }) => {
    const [responseData, setResponseData] = useState<any>(null);
    const [progress, setProgress] = useState(false);
    const outerTheme = useTheme();
    const { isMobile } = MobileTheme();
    const [postSearch] = usePostSearchMutation();
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (lessonTopic === "" || lessonTopic === " ") {
            console.error("Error: The lesson topic or age of student cannot be empty");
            return;
        }
        try {
            setProgress(true);
            const response = await postSearch({
                api_key: "API_KEY",
                query: `Create a ${section} for students who are ${studentAge} to teach ${lessonTopic}`,
                search_depth: "basic",
                include_answer: true,
                include_images: false,
                include_raw_content: true,
                max_results: 5,
                include_domains: [],
                exclude_domains: []
            });
            console.log("answer:", response.data.answer);
            setProgress(false);
            setResponseData(response.data.answer);
            console.log(responseData);
        } catch (error) {
            console.error("Error while posting search:", error);
        }
    }
    return (
        <Grid container>
            <Grid item xs={isMobile ? 12 : 4}>
                <ThemeProvider theme={TextFieldTheme(outerTheme)}>
                    <form onSubmit={handleSubmit}>
                        <button className={isMobile ? "mobile-submit-button" : "submit-button"} type="submit">
                            <Typography sx={{ color: "#10131b" }}>
                                {search}
                            </Typography>
                        </button>
                    </form>
                </ThemeProvider>
            </Grid>
            <Grid item xs={isMobile ? 12 : 7}>
                {progress && <CircularProgress sx={{ my: 2, justifyContent: "center" }}/>}
                {responseData &&
                    <Card
                        sx={{ my: 3, p: 2, backgroundImage: "radial-gradient(circle, #eef2f3, #e7eef1, #e1eaef, #dce6ed, #d7e1eb, #cfdae5, #c8d2df, #c1cbd9, #b4c0cd, #a7b4c2, #9ba9b6, #8e9eab)" }}
                        elevation={10}>
                        <Typography>{responseData}</Typography>
                    </Card>
                }
            </Grid>
        </Grid>
    );
}
export default LessonComponents;
