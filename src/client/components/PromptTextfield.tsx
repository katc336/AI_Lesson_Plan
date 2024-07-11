import TextField from '@mui/material/TextField';
import { outlinedInputClasses } from '@mui/material/OutlinedInput';
import { createTheme, ThemeProvider, Theme, useTheme } from '@mui/material/styles';
import { useState } from 'react';

const customTheme = (outerTheme: Theme) =>
    createTheme({
        palette: {
            mode: outerTheme.palette.mode,
        },
        components: {
            MuiTextField: {
                styleOverrides: {
                    root: {
                        '--TextField-brandBorderColor': 'transparent',
                        '--TextField-brandBorderHoverColor': '#B2BAC2',
                        '--TextField-brandBorderFocusedColor': '#6F7E8C',
                        '& label.Mui-focused': {
                            color: 'var(--TextField-brandBorderFocusedColor)',
                        },
                        '& label': {
                            color: 'white', // Change label text color to white
                        },
                    },
                },
            },
            MuiOutlinedInput: {
                styleOverrides: {
                    notchedOutline: {
                        borderColor: 'var(--TextField-brandBorderColor)',
                    },
                    root: {
                        [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
                            borderColor: 'var(--TextField-brandBorderHoverColor)',
                        },
                        [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
                            borderColor: 'var(--TextField-brandBorderFocusedColor)',
                        },
                    },
                },
            },
        },
    });

const PromptTextField: React.FC = () => {
    const [promptText, setPromptText] = useState("");
    const outerTheme = useTheme();
    return (
        <ThemeProvider theme={customTheme(outerTheme)}>
            <TextField
                value={promptText}
                onChange={(event) => setPromptText(event.target.value)}
                sx={{ minWidth: "50vw", backgroundColor: "#2D3C46" }}
                label="Enter prompt here..."
            />
        </ThemeProvider>
    );
}
export default PromptTextField
