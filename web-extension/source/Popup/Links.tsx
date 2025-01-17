import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkIcon from "@mui/icons-material/Link";

function openPage(link: string) {
    window.open(link);
}

export default function IconButtons() {
  return (
    <Stack direction="row" justifyContent="flex-end" spacing={1}>
      <IconButton
        aria-label="twitter"
        onClick={() => openPage("https://discord.com/invite/UfrduBeefK")}
      >
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 71 55"
          focusable="false"
          style={{
            width: "24px",
            height: "24px",
          }}
        >
          <g transform="matrix(1,0,0,1,-1.09937e-07,-0.411745)">
            <path
              d="M60.105,4.898C55.579,2.821 50.727,1.292 45.653,0.415C45.56,0.399 45.468,0.441 45.42,0.525C44.796,1.635 44.105,3.083 43.621,4.222C38.164,3.405 32.734,3.405 27.389,4.222C26.905,3.058 26.189,1.635 25.562,0.525C25.514,0.444 25.422,0.401 25.329,0.415C20.258,1.289 15.406,2.819 10.878,4.898C10.838,4.915 10.805,4.943 10.783,4.98C1.578,18.731 -0.944,32.144 0.293,45.391C0.299,45.456 0.335,45.518 0.386,45.558C6.459,50.017 12.341,52.725 18.115,54.52C18.207,54.548 18.305,54.514 18.364,54.438C19.73,52.573 20.947,50.606 21.991,48.538C22.052,48.417 21.994,48.274 21.868,48.226C19.937,47.493 18.098,46.6 16.329,45.586C16.189,45.504 16.178,45.304 16.307,45.208C16.679,44.929 17.051,44.639 17.407,44.346C17.471,44.293 17.561,44.281 17.636,44.315C29.256,49.62 41.835,49.62 53.318,44.315C53.394,44.279 53.483,44.29 53.55,44.343C53.906,44.636 54.278,44.929 54.653,45.208C54.782,45.304 54.773,45.504 54.633,45.586C52.865,46.62 51.026,47.493 49.092,48.223C48.966,48.271 48.91,48.417 48.972,48.538C50.038,50.603 51.255,52.57 52.596,54.435C52.652,54.514 52.753,54.548 52.845,54.52C58.646,52.725 64.529,50.017 70.602,45.558C70.655,45.518 70.689,45.459 70.694,45.394C72.175,30.079 68.215,16.776 60.197,4.982C60.177,4.943 60.144,4.915 60.105,4.898ZM23.726,37.325C20.228,37.325 17.345,34.114 17.345,30.169C17.345,26.225 20.172,23.013 23.726,23.013C27.308,23.013 30.163,26.253 30.107,30.169C30.107,34.114 27.28,37.325 23.726,37.325ZM47.318,37.325C43.82,37.325 40.937,34.114 40.937,30.169C40.937,26.225 43.764,23.013 47.318,23.013C50.9,23.013 53.755,26.253 53.699,30.169C53.699,34.114 50.9,37.325 47.318,37.325Z"
              style={{
                fill: "white",
              }}
            ></path>
          </g>
        </svg>
      </IconButton>
      <IconButton
        aria-label="twitter"
        onClick={() => openPage("https://twitter.com/realScamSniffer")}
      >
        <TwitterIcon style={{ color: "white" }} />
      </IconButton>
      <IconButton
        aria-label="twitter"
        onClick={() => openPage("https://github.com/scamsniffer/scamsniffer")}
      >
        <GitHubIcon style={{ color: "white" }} />
      </IconButton>
    </Stack>
  );
}
