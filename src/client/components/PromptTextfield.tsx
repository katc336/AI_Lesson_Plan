import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import SearchIcon from '@mui/icons-material/Search';
import { ThemeProvider, useTheme } from '@mui/material/styles';
import { useState } from 'react';
import TextFieldTheme from './TextFieldTheme';
import { usePostSearchMutation } from '../../redux/langApi';
import.meta.env.variable

const PromptTextField: React.FC = () => {
    const [promptText, setPromptText] = useState("");
    const outerTheme = useTheme();
    const [postSearch] = usePostSearchMutation();
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (promptText === "" || promptText === " " ) {
            console.error("Error: The search cannot be empty");
            return;
        }
        try {
            const response = await postSearch({
                api_key: "your tavily API key or from .env",
                query: promptText,
                search_depth: "basic",
                include_answer: false,
                include_images: true,
                include_raw_content: false,
                max_results: 5,
                include_domains: [],
                exclude_domains: []
            });
            console.log("Post search response:", response);
        } catch (error) {
            console.error("Error while posting search:", error);
        }
    }
    return (
        <ThemeProvider theme={TextFieldTheme(outerTheme)}>
            <form onSubmit={handleSubmit}>
                <Stack direction="row">
                    <TextField
                        value={promptText}
                        onChange={(event) => setPromptText(event.target.value)}
                        sx={{ minWidth: "50vw", backgroundColor: "#2D3C46" }}
                        label="Enter prompt here..."
                    />
                    <button className="submit-button" type="submit">
                        <SearchIcon />
                    </button>
                </Stack>
            </form>
        </ThemeProvider>
    );
}
export default PromptTextField