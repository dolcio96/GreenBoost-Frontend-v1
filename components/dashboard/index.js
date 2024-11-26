import { Box } from "@chakra-ui/react";
import { Title } from "@mui/icons-material";
import React, { useEffect, useState } from "react";

// Componente DashboardEmbed per incorporare la dashboard Metabase
const DashboardEmbed = ({ dashboardId }) => {
  const [iframeUrl, setIframeUrl] = useState("");

  useEffect(() => {
    const fetchIframeUrl = async () => {
      const response = await fetch('/api/backend/generate-metabase-token', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ dashboardId }),
      });

      if (response.ok) {
        const data = await response.json();
        setIframeUrl(data.iframeUrl);
      } else {
        console.error("Failed to fetch Metabase iframe URL");
      }
    };

    fetchIframeUrl();
  }, [dashboardId]);

  if (!iframeUrl) return <p>Loading...</p>;

  return (
    <iframe
      src={iframeUrl}
      style={{ width: '100%', height: '100vh', border: 'none' }}
      allowTransparency="true"
    />
  );
};

const Dashboard = () => {
  const dashboardId = 3; // Inserisci l'ID della dashboard che desideri visualizzare

  return (
    <>
      <Box>
        {/* Incorporare la dashboard Metabase */}
        <Title>Dashboard</Title>
        <DashboardEmbed dashboardId={dashboardId} />
      </Box>
    </>
  );
};

export default Dashboard;