import Box from '@mui/material/Box';
import Typography from "@mui/material/Typography";
import PromptTextField from "./PromptTextfield";
import { useMediaQuery, useTheme } from "@mui/material";

const HomePage: React.FC = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    return (
        <div>
            <Typography
                variant={isMobile ? "h6" : "h4"}
                sx={{ fontWeight: "bold", color: "#F7FFED", textAlign: "center" }}>
            Lesson Plan Builder
            </Typography>
            <div style={{
                marginTop: "80vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center"
            }}>
                <PromptTextField />
            </div>
        </div>
    )
}
export default HomePage;