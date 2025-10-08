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
//
//


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
} from "@mui/material";
import axios from "axios";

function App() {
  const [emailContent, setEmailContent] = useState("");
  const [tone, setTone] = useState("");
  const [generatedReply, setGeneratedReply] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    setLoading(true);
    setError(" ");
    try {
//       const response = await axios.post(
//         "http://localhost:8080/api/email/generate",
//         { emailContent, tone }
//       );
const response = await axios.post(
  "https://ai-email-reply-generator-cj65.onrender.com/api/email/generate",
  { emailContent, tone }
);

      setGeneratedReply(
        typeof response.data === "string"
          ? response.data
          : JSON.stringify(response.data)
      );
    } catch (error) {
      setError("Failed to generate email reply. Please try again");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="md" sx={{ py: 6, minHeight: "100vh", bgcolor: "#f5f7fa" }}>
      <Typography
        variant="h3"
        component="h1"
        gutterBottom
        sx={{
          textAlign: "center",
          fontWeight: 700,
          background: "linear-gradient(90deg, #4b6cb7 0%, #182848 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          mb: 6,
        }}
      >
        Email Reply Generator
      </Typography>

      <Paper
        elevation={6}
        sx={{
          p: 4,
          borderRadius: 3,
          bgcolor: "white",
          boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
        }}
      >
        <Box sx={{ mx: 1, my: 2 }}>
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
              "& .MuiOutlinedInput-root": { borderRadius: 2 },
            }}
          />

          <FormControl fullWidth sx={{ mb: 3 }}>
            <InputLabel>Tone (Optional)</InputLabel>
            <Select
              value={tone || ""}
              label={"Tone (Optional)"}
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
            onClick={handleSubmit}
            disabled={!emailContent || loading}
            fullWidth
            sx={{
              py: 1.5,
              fontWeight: 600,
              fontSize: "1rem",
              borderRadius: 3,
              background: "linear-gradient(90deg, #667eea 0%, #764ba2 100%)",
              "&:hover": {
                background: "linear-gradient(90deg, #5a67d8 0%, #6b46c1 100%)",
              },
            }}
          >
            {loading ? <CircularProgress size={24} color="inherit" /> : "Generate Reply"}
          </Button>

          {error && (
            <Typography color="error" sx={{ mt: 2, textAlign: "center" }}>
              {error}
            </Typography>
          )}

          {generatedReply && (
            <Box sx={{ mt: 4 }}>
              <Typography variant="h6" gutterBottom>
                Generated Reply:
              </Typography>
              <TextField
                fullWidth
                multiline
                rows={6}
                variant="outlined"
                value={generatedReply || " "}
                inputProps={{ readOnly: true }}
                sx={{ borderRadius: 2 }}
              />

              <Button
                variant="outlined"
                sx={{
                  mt: 2,
                  borderRadius: 3,
                  borderColor: "#667eea",
                  color: "#667eea",
                  "&:hover": {
                    backgroundColor: "#f0f0ff",
                    borderColor: "#5a67d8",
                  },
                }}
                onClick={() => navigator.clipboard.writeText(generatedReply)}
              >
                Copy To Clipboard
              </Button>
            </Box>
          )}
        </Box>
      </Paper>
    </Container>
  );
}

export default App;
