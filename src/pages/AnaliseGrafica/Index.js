import React, { useState, useEffect } from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import api from "../../services/services"; // seu apiService
import { Box, Container } from "@mui/material";

const COLORS = [
  "#8884d8", // Original
  "#82ca9d", // Original
  "#ffc658", // Original
  "#ff8042", // Original
  "#0088FE", // Blue
  "#00C49F", // Teal
  "#FFBB28", // Yellow
  "#FF4444", // Red
  "#A28BD4", // Lavender
  "#4CAF50", // Green
  "#FF69B4", // Pink
  "#CDDC39", // Lime
  "#795548", // Brown
  "#607D8B", // Blue Gray
];

function DashboardPizzas() {
  const [wallets, setWallets] = useState([]);
  const [assetsByWallet, setAssetsByWallet] = useState({});
  const [selectedWalletId, setSelectedWalletId] = useState(null);

  useEffect(() => {
    // 1. busca wallets
    api.getWalletsByUser(1).then((res) => setWallets(res.data));
    // 2. pra cada wallet, busca assets
    api.getWalletsByUser(1).then((res) => {
      res.data.forEach((w) => {
        api.getAssetsByWallet(1, w.id).then((r2) => {
          // calcula totalValue se precisar
          setAssetsByWallet((prev) => ({ ...prev, [w.id]: r2.data }));
        });
      });
    });
  }, []);

  const totalAll = wallets.reduce((sum, w) => sum + w.walletValue, 0);
  const walletData = wallets.map((w) => ({
    id: w.id, // <- importante!
    name: w.name,
    value: w.walletValue,
  }));

  const assetData = selectedWalletId
    ? assetsByWallet[selectedWalletId].map((a) => ({
        name: a.ticketCode,
        value: a.totalValue,
      }))
    : [];

  const totalAsset = assetData.reduce((acc, a) => acc + a.value, 0);

  const renderCustomLegend = (props) => {
    const { payload } = props;

    return (
      <ul style={{ listStyle: "none", padding: 0, margin: "8px 0" }}>
        {payload.map((entry, index) => (
          <li
            key={`item-${index}`}
            style={{
              color: "#333",
              fontSize: "14px",
              marginBottom: "4px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <span
              style={{
                display: "inline-block",
                width: "12px",
                height: "12px",
                backgroundColor: entry.color,
                marginRight: "8px",
                borderRadius: "2px",
              }}
            />
            {`${entry.value} — ${entry.percent?.toFixed(1) || 0}%`}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <React.Fragment>
      <h1 style={{ textAlign: "center", marginBottom: "32px" }}>
        Página Análise Gráfica
      </h1>

      <Container maxWidth="lg">
        <Box
          display="flex"
          justifyContent="space-around"
          flexWrap="wrap"
          gap={4}
        >
          {/* Pizza de Wallets */}
          <Box textAlign="center">
            <h3>Carteiras</h3>

            <PieChart width={300} height={300}>
              <Pie
                data={walletData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={100}
                onClick={(entry) => {
                  setSelectedWalletId(entry.payload.id);
                }}
              >
                {walletData.map((_, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip
                formatter={(v) => `${((v / totalAll) * 100).toFixed(1)}%`}
              />
            </PieChart>

            {/* LEGENDA FORA DO GRÁFICO */}
            {renderCustomLegend({
              payload: walletData.map((w, i) => ({
                value: w.name,
                color: COLORS[i % COLORS.length],
                percent: (w.value / totalAll) * 100,
              })),
            })}
          </Box>

          {/* Pizza de Assets */}
          {selectedWalletId && (
            <Box textAlign="center">
              <h3>
                Ativos da Carteira:{" "}
                {wallets.find((w) => w.id === selectedWalletId)?.name}
              </h3>

              <PieChart width={300} height={300}>
                <Pie
                  data={assetData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                >
                  {assetData.map((_, index) => (
                    <Cell
                      key={`c-${index}`}
                      fill={COLORS[(index + 2) % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip
                  formatter={(v) =>
                    `${v.toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })}`
                  }
                />
              </PieChart>

              {/* LEGENDA FORA DO GRÁFICO */}
              {renderCustomLegend({
                payload: assetData.map((a, i) => ({
                  value: a.name,
                  color: COLORS[(i + 2) % COLORS.length],
                  percent: (a.value / totalAsset) * 100,
                })),
              })}
            </Box>
          )}
        </Box>
      </Container>
    </React.Fragment>
  );
}
export default DashboardPizzas;
