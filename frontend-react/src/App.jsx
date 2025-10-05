// import { useState } from "react";
// import "./App.css";
// import {
//   Box,
//   Typography,
//   Container,
//   TextField,
//   FormControl,
//   InputLabel,
//   MenuItem,
//   Select,
//   Button,
//   CircularProgress,
// } from "@mui/material";
// import axios from "axios";
//
// function App() {
//   const [emailContent, setEmailContent] = useState("");
//   const [tone, setTone] = useState("");
//   const [generatedReply, setGeneratedReply] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");
//
//   const handleSubmit = async () => {
//     setLoading(true);
//     setError(" ");
//     try {
//       const response = await axios.post(
//         "http://localhost:8080/api/email/generate",
//         {
//           emailContent,
//           tone,
//         }
//       );
//       setGeneratedReply(
//         typeof response.data == "string"
//           ? response.data
//           : JSON.stringify(response.data)
//       );
//     } catch (error) {
//       setError("Failed to generate email reply.Please try again");
//       console.log(error);
//     } finally {
//       setLoading(false);
//     }
//   };
//
//   return (
//     <Container maxWidth="md" sx={{ py: 4 }}>
//       <Typography variant="h3" component="h1" gutterBottom>
//         Email Reply Generator
//       </Typography>
//
//       <Box sx={{ mx: 3, my: 2 }}>
//         <TextField
//           fullWidth
//           multiline
//           rows={6}
//           variant="outlined"
//           label="Original Email Content"
//           value={emailContent}
//           onChange={(e) => setEmailContent(e.target.value)}
//           sx={{ mb: 2 }}
//         />
//         <FormControl fullWidth sx={{ mb: 2 }}>
//           <InputLabel>Tone(Optional)</InputLabel>
//           <Select
//             value={tone || ""}
//             label={"Tone (Optional)"}
//             onChange={(e) => setTone(e.target.value)}
//           >
//             <MenuItem value="">None</MenuItem>
//             <MenuItem value="professional">Professional</MenuItem>
//             <MenuItem value="casual">Casual</MenuItem>
//             <MenuItem value="friendly">Friendly</MenuItem>
//           </Select>
//         </FormControl>
//
//         <Button
//           variant="contained"
//           onClick={handleSubmit}
//           disabled={!emailContent || loading}
//           fullWidth
//         >
//           {loading ? <CircularProgress size={24} /> : "Generate Reply"}
//         </Button>
//       </Box>
//
//       {error && (
//         <Typography color="error" sx={{ mb: 2 }}>
//           {error}
//         </Typography>
//       )}
//
//       {generatedReply && (
//         <Box sx={{ mt: 3 }}>
//           <Typography variant="h6" gutterBottom>
//             Generated Reply:
//           </Typography>
//           <TextField
//             fullWidth
//             multiline
//             rows={6}
//             variant="outlined"
//             value={generatedReply || " "}
//             inputProps={{ readOnly: true }}
//           />
//
//           <Button
//             variant="outlined"
//             sx={{ mt: 2 }}
//             onClick={() => navigator.clipboard.writeText(generatedReply)}
//           >
//             Copy To Clipboard
//           </Button>
//         </Box>
//       )}
//     </Container>
//   );
// }
//
// export default App;


import { useState } from "react";
import "./App.css";
import {
  Box,
  Typography,
  Container,
  TextField,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Button,
  CircularProgress,
  Paper,
  useMediaQuery,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "axios";

function App() {
  const [emailContent, setEmailContent] = useState("");
  const [tone, setTone] = useState("");
  const [generatedReply, setGeneratedReply] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Detect system dark mode preference
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  // Define dynamic theme
  const theme = createTheme({
    palette: {
      mode: prefersDarkMode ? "dark" : "light",
      primary: {
        main: prefersDarkMode ? "#9f7aea" : "#667eea",
      },
      background: {
        default: prefersDarkMode ? "#1a1a2e" : "#f8f9ff",
        paper: prefersDarkMode ? "#222244" : "rgba(255,255,255,0.95)",
      },
      text: {
        primary: prefersDarkMode ? "#ffffff" : "#222",
        secondary: prefersDarkMode ? "#cbd5e1" : "#555",
      },
    },
    typography: {
      fontFamily: "'Poppins', sans-serif",
    },
  });

  const handleSubmit = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await axios.post(
        "https://ai-email-reply-generator-cj65.onrender.com/api/email/generate",
        {
          emailContent,
          tone,
        }
      );
      setGeneratedReply(
        typeof response.data === "string"
          ? response.data
          : JSON.stringify(response.data)
      );
    } catch (error) {
      setError("Failed to generate email reply. Please try again.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          minHeight: "100vh",
          background: prefersDarkMode
            ? "linear-gradient(135deg, #232526 0%, #414345 100%)"
            : "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          p: 2,
          transition: "background 0.3s ease-in-out",
        }}
      >
        <Container maxWidth="sm">
          <Paper
            elevation={8}
            sx={{
              p: 5,
              borderRadius: 4,
              backdropFilter: "blur(10px)",
              boxShadow: prefersDarkMode
                ? "0 4px 20px rgba(255,255,255,0.05)"
                : "0 4px 20px rgba(0,0,0,0.1)",
              transition: "all 0.3s ease-in-out",
            }}
          >
            <Typography
              variant="h4"
              align="center"
              gutterBottom
              sx={{
                fontWeight: "bold",
                background: prefersDarkMode
                  ? "linear-gradient(90deg, #a78bfa, #7dd3fc)"
                  : "linear-gradient(90deg, #667eea, #764ba2)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              ✉️ Email Reply Generator
            </Typography>

            <Typography
              variant="body2"
              align="center"
              sx={{ mb: 3, color: "text.secondary" }}
            >
              Generate polished replies instantly — now with dark mode ✨
            </Typography>

            <TextField
              fullWidth
              multiline
              rows={6}
              variant="outlined"
              label="Original Email Content"
              value={emailContent}
              onChange={(e) => setEmailContent(e.target.value)}
              sx={{
                mb: 3,
                "& .MuiOutlinedInput-root": {
                  borderRadius: 2,
                  backgroundColor: prefersDarkMode
                    ? "#2a2a40"
                    : "rgba(255,255,255,0.8)",
                },
              }}
            />

            <FormControl fullWidth sx={{ mb: 3 }}>
              <InputLabel>Tone (Optional)</InputLabel>
              <Select
                value={tone || ""}
                label="Tone (Optional)"
                onChange={(e) => setTone(e.target.value)}
                sx={{ borderRadius: 2 }}
              >
                <MenuItem value="">None</MenuItem>
                <MenuItem value="professional">Professional</MenuItem>
                <MenuItem value="casual">Casual</MenuItem>
                <MenuItem value="friendly">Friendly</MenuItem>
              </Select>
            </FormControl>

            <Button
              variant="contained"
              fullWidth
              disabled={!emailContent || loading}
              onClick={handleSubmit}
              sx={{
                py: 1.2,
                fontWeight: "bold",
                fontSize: "1rem",
                borderRadius: 2,
                background: prefersDarkMode
                  ? "linear-gradient(90deg, #8b5cf6, #6366f1)"
                  : "linear-gradient(90deg, #667eea, #764ba2)",
                boxShadow: "0 3px 10px rgba(0,0,0,0.2)",
                "&:hover": {
                  background: prefersDarkMode
                    ? "linear-gradient(90deg, #7c3aed, #4f46e5)"
                    : "linear-gradient(90deg, #5a67d8, #6b46c1)",
                },
              }}
            >
              {loading ? (
                <CircularProgress size={24} sx={{ color: "white" }} />
              ) : (
                "Generate Reply"
              )}
            </Button>

            {error && (
              <Typography
                color="error"
                align="center"
                sx={{ mt: 2, fontWeight: 500 }}
              >
                {error}
              </Typography>
            )}

            {generatedReply && (
              <Box
                sx={{
                  mt: 4,
                  p: 3,
                  borderRadius: 3,
                  backgroundColor: prefersDarkMode ? "#1e1e2f" : "#f4f4ff",
                  boxShadow: prefersDarkMode
                    ? "inset 0 0 10px rgba(255,255,255,0.05)"
                    : "inset 0 0 10px rgba(102,126,234,0.1)",
                }}
              >
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{
                    color: prefersDarkMode ? "#a78bfa" : "#4c51bf",
                    fontWeight: "bold",
                  }}
                >
                  Generated Reply
                </Typography>
                <TextField
                  fullWidth
                  multiline
                  rows={6}
                  variant="outlined"
                  value={generatedReply}
                  inputProps={{ readOnly: true }}
                  sx={{
                    mb: 2,
                    "& .MuiOutlinedInput-root": {
                      borderRadius: 2,
                      backgroundColor: prefersDarkMode
                        ? "#2a2a40"
                        : "white",
                    },
                  }}
                />
                <Button
                  variant="outlined"
                  onClick={() => navigator.clipboard.writeText(generatedReply)}
                  fullWidth
                  sx={{
                    borderRadius: 2,
                    color: prefersDarkMode ? "#a78bfa" : "#4c51bf",
                    borderColor: prefersDarkMode ? "#a78bfa" : "#4c51bf",
                    "&:hover": {
                      backgroundColor: prefersDarkMode
                        ? "#2d2d42"
                        : "#e2e8f0",
                    },
                  }}
                >
                  📋 Copy to Clipboard
                </Button>
              </Box>
            )}
          </Paper>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;
