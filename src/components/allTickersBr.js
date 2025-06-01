const tickers = [
  {
    "Ticker": "HAPV3",
    "Nome": "Hapvida",
    "Negócios": "147.970.500",
    "Última (R$)": "2,92",
    "Variação": "3,18%"
  },
  {
    "Ticker": "AZUL4",
    "Nome": "Azul",
    "Negócios": "56.221.900",
    "Última (R$)": "1,07",
    "Variação": "-1,83%"
  },
  {
    "Ticker": "BBDC4",
    "Nome": "Banco Bradesco",
    "Negócios": "51.944.300",
    "Última (R$)": "16,04",
    "Variação": "2,04%"
  },
  {
    "Ticker": "COGN3",
    "Nome": "Cogna",
    "Negócios": "34.979.300",
    "Última (R$)": "2,89",
    "Variação": "1,40%"
  },
  {
    "Ticker": "PETR4",
    "Nome": "Petrobras",
    "Negócios": "34.361.500",
    "Última (R$)": "31,53",
    "Variação": "0,73%"
  },
  {
    "Ticker": "ASAI3",
    "Nome": "Assaí",
    "Negócios": "33.651.100",
    "Última (R$)": "11,46",
    "Variação": "7,61%"
  },
  {
    "Ticker": "B3SA3",
    "Nome": "B3",
    "Negócios": "30.670.400",
    "Última (R$)": "14,38",
    "Variação": "0,35%"
  },
  {
    "Ticker": "BBAS3",
    "Nome": "Banco do Brasil",
    "Negócios": "30.416.900",
    "Última (R$)": "24,57",
    "Variação": "-0,41%"
  },
  {
    "Ticker": "MGLU3",
    "Nome": "Magazine Luiza",
    "Negócios": "29.610.200",
    "Última (R$)": "9,34",
    "Variação": "3,32%"
  },
  {
    "Ticker": "RAIL3",
    "Nome": "Rumo",
    "Negócios": "26.168.800",
    "Última (R$)": "19,1",
    "Variação": "2,91%"
  },
  {
    "Ticker": "ITSA4",
    "Nome": "Itaúsa",
    "Negócios": "25.595.100",
    "Última (R$)": "11,29",
    "Variação": "0,89%"
  },
  {
    "Ticker": "RADL3",
    "Nome": "RaiaDrogasil",
    "Negócios": "20.330.800",
    "Última (R$)": 15,
    "Variação": "3,02%"
  },
  {
    "Ticker": "BEEF3",
    "Nome": "Minerva",
    "Negócios": "20.201.100",
    "Última (R$)": "5,05",
    "Variação": "0,20%"
  },
  {
    "Ticker": "GGBR4",
    "Nome": "Gerdau",
    "Negócios": "19.895.700",
    "Última (R$)": "16,08",
    "Variação": "2,81%"
  },
  {
    "Ticker": "CMIN3",
    "Nome": "CSN Mineração",
    "Negócios": "19.783.700",
    "Última (R$)": "5,2",
    "Variação": "-5,80%"
  },
  {
    "Ticker": "ENEV3",
    "Nome": "Eneva",
    "Negócios": "19.126.100",
    "Última (R$)": "14,29",
    "Variação": "1,42%"
  },
  {
    "Ticker": "VALE3",
    "Nome": "Vale",
    "Negócios": "17.943.000",
    "Última (R$)": "53,84",
    "Variação": "-0,31%"
  },
  {
    "Ticker": "RAIZ4",
    "Nome": "Raízen",
    "Negócios": "17.869.100",
    "Última (R$)": "1,99",
    "Variação": "1,02%"
  },
  {
    "Ticker": "VAMO3",
    "Nome": "Grupo Vamos",
    "Negócios": "17.473.800",
    "Última (R$)": "4,53",
    "Variação": "9,69%"
  },
  {
    "Ticker": "USIM5",
    "Nome": "Usiminas",
    "Negócios": "17.178.500",
    "Última (R$)": "5,57",
    "Variação": "4,11%"
  },
  {
    "Ticker": "CVCB3",
    "Nome": "CVC",
    "Negócios": "17.044.400",
    "Última (R$)": "2,4",
    "Variação": "6,67%"
  },
  {
    "Ticker": "NTCO3",
    "Nome": "Natura",
    "Negócios": "16.727.000",
    "Última (R$)": "10,72",
    "Variação": "1,61%"
  },
  {
    "Ticker": "VBBR3",
    "Nome": "Vibra Energia",
    "Negócios": "16.349.700",
    "Última (R$)": "20,18",
    "Variação": "3,01%"
  },
  {
    "Ticker": "ABEV3",
    "Nome": "Ambev",
    "Negócios": "15.568.200",
    "Última (R$)": "14,2",
    "Variação": "-0,42%"
  },
  {
    "Ticker": "CSAN3",
    "Nome": "Cosan",
    "Negócios": "14.858.600",
    "Última (R$)": "8,15",
    "Variação": "1,24%"
  },
  {
    "Ticker": "SUZB3",
    "Nome": "Suzano",
    "Negócios": "14.854.900",
    "Última (R$)": "51,31",
    "Variação": "-2,75%"
  },
  {
    "Ticker": "ITUB4",
    "Nome": "Itaú Unibanco",
    "Negócios": "14.716.300",
    "Última (R$)": "38,1",
    "Variação": "0,79%"
  },
  {
    "Ticker": "MRVE3",
    "Nome": "MRV",
    "Negócios": "14.452.200",
    "Última (R$)": "5,36",
    "Variação": "4,08%"
  },
  {
    "Ticker": "RENT3",
    "Nome": "Localiza",
    "Negócios": "14.070.500",
    "Última (R$)": "42,65",
    "Variação": "4,41%"
  },
  {
    "Ticker": "CMIG4",
    "Nome": "Cemig",
    "Negócios": "13.665.200",
    "Última (R$)": "10,95",
    "Variação": "1,58%"
  },
  {
    "Ticker": "JBSS3",
    "Nome": "JBS",
    "Negócios": "12.412.700",
    "Última (R$)": "39,38",
    "Variação": "0,31%"
  },
  {
    "Ticker": "PETR3",
    "Nome": "Petrobras",
    "Negócios": "11.891.600",
    "Última (R$)": "33,81",
    "Variação": "0,96%"
  },
  {
    "Ticker": "BRAP4",
    "Nome": "Bradespar",
    "Negócios": "11.558.200",
    "Última (R$)": "15,83",
    "Variação": "-0,57%"
  },
  {
    "Ticker": "LREN3",
    "Nome": "Lojas Renner",
    "Negócios": "11.183.400",
    "Última (R$)": "17,95",
    "Variação": "1,18%"
  },
  {
    "Ticker": "GOLL4",
    "Nome": "GOL",
    "Negócios": "11.122.600",
    "Última (R$)": "1,27",
    "Variação": "4,10%"
  },
  {
    "Ticker": "SRNA3",
    "Nome": "Serena Energia",
    "Negócios": "10.791.300",
    "Última (R$)": "11,47",
    "Variação": "0,35%"
  },
  {
    "Ticker": "BPAC11",
    "Nome": "Banco BTG Pactual",
    "Negócios": "9.944.800",
    "Última (R$)": "41,05",
    "Variação": "2,75%"
  },
  {
    "Ticker": "POMO4",
    "Nome": "Marcopolo",
    "Negócios": "9.932.700",
    "Última (R$)": "7,41",
    "Variação": "5,11%"
  },
  {
    "Ticker": "BRFS3",
    "Nome": "BRF",
    "Negócios": "9.777.200",
    "Última (R$)": "20,56",
    "Variação": "-3,52%"
  },
  {
    "Ticker": "PETZ3",
    "Nome": "Petz",
    "Negócios": "9.443.400",
    "Última (R$)": "4,16",
    "Variação": "-4,15%"
  },
  {
    "Ticker": "BBDC3",
    "Nome": "Banco Bradesco",
    "Negócios": "8.935.600",
    "Última (R$)": "13,8",
    "Variação": "1,40%"
  },
  {
    "Ticker": "CPLE6",
    "Nome": "Copel",
    "Negócios": "8.845.800",
    "Última (R$)": "12,66",
    "Variação": "1,20%"
  },
  {
    "Ticker": "CSNA3",
    "Nome": "Siderúrgica Nacional",
    "Negócios": "8.557.000",
    "Última (R$)": 9,
    "Variação": "2,16%"
  },
  {
    "Ticker": "ELET3",
    "Nome": "Eletrobras",
    "Negócios": "8.260.000",
    "Última (R$)": "42,29",
    "Variação": "1,34%"
  },
  {
    "Ticker": "BRKM5",
    "Nome": "Braskem",
    "Negócios": "7.844.100",
    "Última (R$)": "11,43",
    "Variação": "-1,04%"
  },
  {
    "Ticker": "AURE3",
    "Nome": "Auren Energia",
    "Negócios": "7.743.100",
    "Última (R$)": "9,82",
    "Variação": "1,97%"
  },
  {
    "Ticker": "IFCM3",
    "Nome": "Infracommerce",
    "Negócios": "7.550.500",
    "Última (R$)": "0,08",
    "Variação": "0,00%"
  },
  {
    "Ticker": "RDOR3",
    "Nome": "Rede D'Or",
    "Negócios": "7.518.600",
    "Última (R$)": "37,25",
    "Variação": "0,49%"
  },
  {
    "Ticker": "KLBN11",
    "Nome": "Klabin",
    "Negócios": "7.267.200",
    "Última (R$)": "19,43",
    "Variação": "0,00%"
  },
  {
    "Ticker": "PCAR3",
    "Nome": "Grupo Pão de Açúcar",
    "Negócios": "7.247.200",
    "Última (R$)": "3,08",
    "Variação": "-0,32%"
  },
  {
    "Ticker": "MOVI3",
    "Nome": "Movida",
    "Negócios": "7.244.800",
    "Última (R$)": "7,27",
    "Variação": "6,44%"
  },
  {
    "Ticker": "GOAU4",
    "Nome": "Metalúrgica Gerdau",
    "Negócios": "7.175.300",
    "Última (R$)": "8,84",
    "Variação": "2,91%"
  },
  {
    "Ticker": "BRAV3",
    "Nome": "3R Petroleum",
    "Negócios": "7.149.000",
    "Última (R$)": "18,93",
    "Variação": "3,16%"
  },
  {
    "Ticker": "SIMH3",
    "Nome": "Simpar",
    "Negócios": "6.783.000",
    "Última (R$)": "5,07",
    "Variação": "8,33%"
  },
  {
    "Ticker": "CYRE3",
    "Nome": "Cyrela",
    "Negócios": "6.781.200",
    "Última (R$)": "25,72",
    "Variação": "2,27%"
  },
  {
    "Ticker": "SMFT3",
    "Nome": "Smart Fit",
    "Negócios": "6.501.400",
    "Última (R$)": "24,56",
    "Variação": "4,16%"
  },
  {
    "Ticker": "CPLE3",
    "Nome": "Copel",
    "Negócios": "6.266.700",
    "Última (R$)": "11,69",
    "Variação": "1,39%"
  },
  {
    "Ticker": "BBSE3",
    "Nome": "BB Seguridade",
    "Negócios": "6.156.600",
    "Última (R$)": "38,33",
    "Variação": "0,97%"
  },
  {
    "Ticker": "HBSA3",
    "Nome": "Hidrovias do Brasil",
    "Negócios": "6.041.200",
    "Última (R$)": "3,07",
    "Variação": "2,33%"
  },
  {
    "Ticker": "LWSA3",
    "Nome": "Locaweb",
    "Negócios": "5.855.300",
    "Última (R$)": "3,85",
    "Variação": "0,00%"
  },
  {
    "Ticker": "EQTL3",
    "Nome": "Equatorial Energia",
    "Negócios": "5.736.600",
    "Última (R$)": "37,11",
    "Variação": "1,75%"
  },
  {
    "Ticker": "WEGE3",
    "Nome": "WEG",
    "Negócios": "5.502.100",
    "Última (R$)": "44,59",
    "Variação": "1,97%"
  },
  {
    "Ticker": "ANIM3",
    "Nome": "Ânima Educação",
    "Negócios": "5.491.700",
    "Última (R$)": "4,07",
    "Variação": "4,36%"
  },
  {
    "Ticker": "TOTS3",
    "Nome": "Totvs",
    "Negócios": "5.373.600",
    "Última (R$)": "43,6",
    "Variação": "1,63%"
  },
  {
    "Ticker": "GGPS3",
    "Nome": "GPS",
    "Negócios": "5.242.700",
    "Última (R$)": "15,19",
    "Variação": "1,47%"
  },
  {
    "Ticker": "PRIO3",
    "Nome": "PetroRio",
    "Negócios": "5.143.800",
    "Última (R$)": "39,41",
    "Variação": "0,92%"
  },
  {
    "Ticker": "CBAV3",
    "Nome": "CBA",
    "Negócios": "5.069.400",
    "Última (R$)": "4,78",
    "Variação": "1,49%"
  },
  {
    "Ticker": "ECOR3",
    "Nome": "EcoRodovias",
    "Negócios": "4.782.900",
    "Última (R$)": "6,9",
    "Variação": "5,83%"
  },
  {
    "Ticker": "VIVA3",
    "Nome": "Vivara",
    "Negócios": "4.734.400",
    "Última (R$)": "26,2",
    "Variação": "2,42%"
  },
  {
    "Ticker": "GMAT3",
    "Nome": "Grupo Mateus",
    "Negócios": "4.596.200",
    "Última (R$)": "8,13",
    "Variação": "2,91%"
  },
  {
    "Ticker": "KEPL3",
    "Nome": "Kepler Weber",
    "Negócios": "4.471.900",
    "Última (R$)": "8,46",
    "Variação": "8,46%"
  },
  {
    "Ticker": "CXSE3",
    "Nome": "Caixa Seguridade",
    "Negócios": "4.393.400",
    "Última (R$)": "15,5",
    "Variação": "2,51%"
  },
  {
    "Ticker": "MULT3",
    "Nome": "Multiplan",
    "Negócios": "4.361.200",
    "Última (R$)": "26,84",
    "Variação": "2,91%"
  },
  {
    "Ticker": "JHSF3",
    "Nome": "JHSF",
    "Negócios": "4.325.700",
    "Última (R$)": "5,2",
    "Variação": "2,36%"
  },
  {
    "Ticker": "AMOB3",
    "Nome": "Automob",
    "Negócios": "4.293.300",
    "Última (R$)": "0,25",
    "Variação": "0,00%"
  },
  {
    "Ticker": "VIVT3",
    "Nome": "Vivo",
    "Negócios": "4.266.300",
    "Última (R$)": "28,07",
    "Variação": "0,57%"
  },
  {
    "Ticker": "FLRY3",
    "Nome": "Fleury",
    "Negócios": "4.240.100",
    "Última (R$)": "12,76",
    "Variação": "0,79%"
  },
  {
    "Ticker": "CASH3",
    "Nome": "Méliuz",
    "Negócios": "4.205.700",
    "Última (R$)": "7,85",
    "Variação": "1,82%"
  },
  {
    "Ticker": "ALOS3",
    "Nome": "Allos",
    "Negócios": "4.140.100",
    "Última (R$)": "22,1",
    "Variação": "1,47%"
  },
  {
    "Ticker": "STBP3",
    "Nome": "Santos Brasil",
    "Negócios": "4.044.700",
    "Última (R$)": "13,62",
    "Variação": "-0,07%"
  },
  {
    "Ticker": "UGPA3",
    "Nome": "Ultrapar",
    "Negócios": "3.964.100",
    "Última (R$)": "16,88",
    "Variação": "0,54%"
  },
  {
    "Ticker": "EMBR3",
    "Nome": "Embraer",
    "Negócios": "3.920.000",
    "Última (R$)": "68,4",
    "Variação": "2,09%"
  },
  {
    "Ticker": "MRFG3",
    "Nome": "Marfrig",
    "Negócios": "3.694.900",
    "Última (R$)": "24,69",
    "Variação": "-1,67%"
  },
  {
    "Ticker": "AZZA3",
    "Nome": "Arezzo",
    "Negócios": "3.637.700",
    "Última (R$)": 42,
    "Variação": "6,11%"
  },
  {
    "Ticker": "PDGR3",
    "Nome": "PDG Realty",
    "Negócios": "3.488.500",
    "Última (R$)": "0,47",
    "Variação": "20,51%"
  },
  {
    "Ticker": "TIMS3",
    "Nome": "TIM",
    "Negócios": "3.418.600",
    "Última (R$)": "19,55",
    "Variação": "0,41%"
  },
  {
    "Ticker": "RAPT4",
    "Nome": "Randon",
    "Negócios": "3.355.600",
    "Última (R$)": "8,59",
    "Variação": "3,25%"
  },
  {
    "Ticker": "ODPV3",
    "Nome": "Odontoprev",
    "Negócios": "3.308.000",
    "Última (R$)": 11,
    "Variação": "1,38%"
  },
  {
    "Ticker": "LJQQ3",
    "Nome": "Lojas Quero-Quero",
    "Negócios": "3.190.600",
    "Última (R$)": "3,21",
    "Variação": "4,22%"
  },
  {
    "Ticker": "SANB11",
    "Nome": "Banco Santander",
    "Negócios": "3.177.700",
    "Última (R$)": "30,24",
    "Variação": "0,13%"
  },
  {
    "Ticker": "CEAB3",
    "Nome": "C&A",
    "Negócios": "3.139.000",
    "Última (R$)": "17,59",
    "Variação": "2,21%"
  },
  {
    "Ticker": "LIGT3",
    "Nome": "Light",
    "Negócios": "3.086.300",
    "Última (R$)": "6,69",
    "Variação": "-1,62%"
  },
  {
    "Ticker": "YDUQ3",
    "Nome": "YDUQS",
    "Negócios": "2.938.600",
    "Última (R$)": "15,75",
    "Variação": "4,17%"
  },
  {
    "Ticker": "ENGI11",
    "Nome": "Energisa",
    "Negócios": "2.842.700",
    "Última (R$)": "48,9",
    "Variação": "2,88%"
  },
  {
    "Ticker": "HYPE3",
    "Nome": "Hypera",
    "Negócios": "2.768.600",
    "Última (R$)": "25,66",
    "Variação": "1,91%"
  },
  {
    "Ticker": "ZAMP3",
    "Nome": "Zamp",
    "Negócios": "2.743.600",
    "Última (R$)": "3,28",
    "Variação": "-1,80%"
  },
  {
    "Ticker": "ALPA4",
    "Nome": "Alpargatas",
    "Negócios": "2.742.700",
    "Última (R$)": "9,31",
    "Variação": "0,65%"
  },
  {
    "Ticker": "SLCE3",
    "Nome": "SLC Agrícola",
    "Negócios": "2.677.900",
    "Última (R$)": "19,16",
    "Variação": "1,54%"
  },
  {
    "Ticker": "MLAS3",
    "Nome": "Multilaser",
    "Negócios": "2.667.100",
    "Última (R$)": "1,06",
    "Variação": "0,95%"
  },
  {
    "Ticker": "AZTE3",
    "Nome": "AZT Energia",
    "Negócios": "2.605.500",
    "Última (R$)": "0,71",
    "Variação": "-1,39%"
  },
  {
    "Ticker": "INTB3",
    "Nome": "Intelbras",
    "Negócios": "2.548.300",
    "Última (R$)": "14,66",
    "Variação": "4,94%"
  },
  {
    "Ticker": "CRFB3",
    "Nome": "Carrefour Brasil",
    "Negócios": "2.426.600",
    "Última (R$)": "8,46",
    "Variação": "-0,12%"
  },
  {
    "Ticker": "BHIA3",
    "Nome": "Casas Bahia",
    "Negócios": "2.397.900",
    "Última (R$)": "4,14",
    "Variação": "-0,48%"
  },
  {
    "Ticker": "CSMG3",
    "Nome": "COPASA",
    "Negócios": "2.377.300",
    "Última (R$)": "25,21",
    "Variação": "1,20%"
  },
  {
    "Ticker": "GFSA3",
    "Nome": "Gafisa",
    "Negócios": "2.351.900",
    "Última (R$)": "1,25",
    "Variação": "-0,79%"
  },
  {
    "Ticker": "IGTI11",
    "Nome": "Jereissati Participações",
    "Negócios": "2.300.600",
    "Última (R$)": "22,23",
    "Variação": "2,58%"
  },
  {
    "Ticker": "IGTI11",
    "Nome": "Iguatemi",
    "Negócios": "2.300.600",
    "Última (R$)": "22,23",
    "Variação": "2,58%"
  },
  {
    "Ticker": "BPAN4",
    "Nome": "Banco Pan",
    "Negócios": "2.255.000",
    "Última (R$)": "8,73",
    "Variação": "2,71%"
  },
  {
    "Ticker": "TAEE11",
    "Nome": "Taesa",
    "Negócios": "2.192.600",
    "Última (R$)": "36,52",
    "Variação": "1,90%"
  },
  {
    "Ticker": "DIRR3",
    "Nome": "Direcional",
    "Negócios": "2.083.400",
    "Última (R$)": "40,44",
    "Variação": "1,56%"
  },
  {
    "Ticker": "RCSL4",
    "Nome": "Recrusul",
    "Negócios": "1.942.500",
    "Última (R$)": "1,21",
    "Variação": "-3,97%"
  },
  {
    "Ticker": "SBSP3",
    "Nome": "Sabesp",
    "Negócios": "1.908.000",
    "Última (R$)": "118,94",
    "Variação": "0,40%"
  },
  {
    "Ticker": "QUAL3",
    "Nome": "Qualicorp",
    "Negócios": "1.871.600",
    "Última (R$)": "2,25",
    "Variação": "1,81%"
  },
  {
    "Ticker": "MILS3",
    "Nome": "Mills",
    "Negócios": "1.761.500",
    "Última (R$)": "10,69",
    "Variação": "1,33%"
  },
  {
    "Ticker": "RECV3",
    "Nome": "PetroRecôncavo",
    "Negócios": "1.748.400",
    "Última (R$)": "14,4",
    "Variação": "1,55%"
  },
  {
    "Ticker": "TEND3",
    "Nome": "Construtora Tenda",
    "Negócios": "1.741.900",
    "Última (R$)": "23,19",
    "Variação": "2,61%"
  },
  {
    "Ticker": "EGIE3",
    "Nome": "Engie",
    "Negócios": "1.694.000",
    "Última (R$)": "41,83",
    "Variação": "2,37%"
  },
  {
    "Ticker": "CURY3",
    "Nome": "Cury",
    "Negócios": "1.687.600",
    "Última (R$)": "29,93",
    "Variação": "1,87%"
  },
  {
    "Ticker": "GRND3",
    "Nome": "Grendene",
    "Negócios": "1.643.600",
    "Última (R$)": "5,42",
    "Variação": "2,85%"
  },
  {
    "Ticker": "DXCO3",
    "Nome": "Dexco",
    "Negócios": "1.629.200",
    "Última (R$)": "5,66",
    "Variação": "2,72%"
  },
  {
    "Ticker": "SBFG3",
    "Nome": "Grupo SBF",
    "Negócios": "1.601.700",
    "Última (R$)": "11,58",
    "Variação": "6,34%"
  },
  {
    "Ticker": "NEOE3",
    "Nome": "Neoenergia",
    "Negócios": "1.529.600",
    "Última (R$)": "25,03",
    "Variação": "1,75%"
  },
  {
    "Ticker": "TTEN3",
    "Nome": "3tentos",
    "Negócios": "1.522.400",
    "Última (R$)": "14,52",
    "Variação": "0,00%"
  },
  {
    "Ticker": "AZEV3",
    "Nome": "Azevedo & Travassos",
    "Negócios": "1.444.500",
    "Última (R$)": "0,61",
    "Variação": "1,67%"
  },
  {
    "Ticker": "DASA3",
    "Nome": "Dasa",
    "Negócios": "1.434.500",
    "Última (R$)": "1,63",
    "Variação": "-0,61%"
  },
  {
    "Ticker": "ONCO3",
    "Nome": "Oncoclínicas",
    "Negócios": "1.336.200",
    "Última (R$)": 5,
    "Variação": "-1,57%"
  },
  {
    "Ticker": "MDNE3",
    "Nome": "Moura Dubeux",
    "Negócios": "1.273.700",
    "Última (R$)": "19,79",
    "Variação": "7,61%"
  },
  {
    "Ticker": "CAML3",
    "Nome": "Camil Alimentos",
    "Negócios": "1.243.600",
    "Última (R$)": "4,96",
    "Variação": "-0,20%"
  },
  {
    "Ticker": "ISAE4",
    "Nome": "ISA Energia",
    "Negócios": "1.189.000",
    "Última (R$)": "23,83",
    "Variação": "1,32%"
  },
  {
    "Ticker": "AZEV4",
    "Nome": "Azevedo & Travassos",
    "Negócios": "1.147.500",
    "Última (R$)": "0,76",
    "Variação": "0,00%"
  },
  {
    "Ticker": "GUAR3",
    "Nome": "Guararapes",
    "Negócios": "1.145.200",
    "Última (R$)": "8,43",
    "Variação": "6,04%"
  },
  {
    "Ticker": "OIBR3",
    "Nome": "Oi",
    "Negócios": "1.116.500",
    "Última (R$)": "0,62",
    "Variação": "0,00%"
  },
  {
    "Ticker": "AMER3",
    "Nome": "Americanas",
    "Negócios": "1.114.900",
    "Última (R$)": "5,18",
    "Variação": "-1,15%"
  },
  {
    "Ticker": "KLBN4",
    "Nome": "Klabin",
    "Negócios": "1.077.100",
    "Última (R$)": "3,85",
    "Variação": "0,26%"
  },
  {
    "Ticker": "ENJU3",
    "Nome": "Enjoei",
    "Negócios": "1.051.400",
    "Última (R$)": "1,21",
    "Variação": "0,83%"
  },
  {
    "Ticker": "SMTO3",
    "Nome": "São Martinho",
    "Negócios": "1.043.500",
    "Última (R$)": "21,1",
    "Variação": "1,05%"
  },
  {
    "Ticker": "FIQE3",
    "Nome": "Unifique",
    "Negócios": "1.042.300",
    "Última (R$)": "3,99",
    "Variação": "1,79%"
  },
  {
    "Ticker": "PGMN3",
    "Nome": "Pague Menos",
    "Negócios": "1.025.800",
    "Última (R$)": "3,47",
    "Variação": "2,66%"
  },
  {
    "Ticker": "PSSA3",
    "Nome": "Porto Seguro",
    "Negócios": "1.020.800",
    "Última (R$)": "50,07",
    "Variação": "1,03%"
  },
  {
    "Ticker": "EVEN3",
    "Nome": "Even",
    "Negócios": "1.004.700",
    "Última (R$)": "6,96",
    "Variação": "4,19%"
  },
  {
    "Ticker": "IRBR3",
    "Nome": "IRB Brasil RE",
    "Negócios": 995.6,
    "Última (R$)": "47,75",
    "Variação": "-0,46%"
  },
  {
    "Ticker": "EZTC3",
    "Nome": "EZTEC",
    "Negócios": 995.1,
    "Última (R$)": "13,48",
    "Variação": "2,59%"
  },
  {
    "Ticker": "SAPR11",
    "Nome": "Sanepar",
    "Negócios": 993.1,
    "Última (R$)": "32,89",
    "Variação": "1,95%"
  },
  {
    "Ticker": "JSLG3",
    "Nome": "JSL",
    "Negócios": 991.3,
    "Última (R$)": "6,46",
    "Variação": "2,38%"
  },
  {
    "Ticker": "ARML3",
    "Nome": "Armac",
    "Negócios": 979.1,
    "Última (R$)": "4,5",
    "Variação": "3,93%"
  },
  {
    "Ticker": "SAPR4",
    "Nome": "Sanepar",
    "Negócios": 972.8,
    "Última (R$)": "6,51",
    "Variação": "1,40%"
  },
  {
    "Ticker": "HBOR3",
    "Nome": "Helbor",
    "Negócios": 965.8,
    "Última (R$)": "2,57",
    "Variação": "6,20%"
  },
  {
    "Ticker": "MATD3",
    "Nome": "Mater Dei",
    "Negócios": 936.3,
    "Última (R$)": "4,95",
    "Variação": "2,91%"
  },
  {
    "Ticker": "POSI3",
    "Nome": "Positivo",
    "Negócios": 911.8,
    "Última (R$)": "4,94",
    "Variação": "0,41%"
  },
  {
    "Ticker": "BRST3",
    "Nome": "Brisanet",
    "Negócios": 902.7,
    "Última (R$)": "2,8",
    "Variação": "-1,75%"
  },
  {
    "Ticker": "ELET6",
    "Nome": "Eletrobras",
    "Negócios": 881.9,
    "Última (R$)": "47,18",
    "Variação": "1,11%"
  },
  {
    "Ticker": "CPFE3",
    "Nome": "CPFL Energia",
    "Negócios": 869,
    "Última (R$)": "41,23",
    "Variação": "1,23%"
  },
  {
    "Ticker": "TFCO4",
    "Nome": "Track & Field",
    "Negócios": 847.7,
    "Última (R$)": "14,39",
    "Variação": "4,43%"
  },
  {
    "Ticker": "TRIS3",
    "Nome": "Trisul",
    "Negócios": 837.2,
    "Última (R$)": "7,73",
    "Variação": "4,18%"
  },
  {
    "Ticker": "RANI3",
    "Nome": "Irani",
    "Negócios": 830.8,
    "Última (R$)": "7,73",
    "Variação": "0,65%"
  },
  {
    "Ticker": "TUPY3",
    "Nome": "Tupy",
    "Negócios": 804.3,
    "Última (R$)": "19,85",
    "Variação": "4,36%"
  },
  {
    "Ticker": "PNVL3",
    "Nome": "Dimed",
    "Negócios": 780,
    "Última (R$)": "8,78",
    "Variação": "0,92%"
  },
  {
    "Ticker": "BRSR6",
    "Nome": "Banrisul",
    "Negócios": 775.5,
    "Última (R$)": "12,21",
    "Variação": "-0,73%"
  },
  {
    "Ticker": "PLPL3",
    "Nome": "Plano&Plano",
    "Negócios": 759.2,
    "Última (R$)": "14,59",
    "Variação": "1,81%"
  },
  {
    "Ticker": "SOJA3",
    "Nome": "Boa Safra Sementes",
    "Negócios": 746.5,
    "Última (R$)": "11,82",
    "Variação": "1,63%"
  },
  {
    "Ticker": "JALL3",
    "Nome": "Jalles Machado",
    "Negócios": 715.6,
    "Última (R$)": "4,2",
    "Variação": "-2,78%"
  },
  {
    "Ticker": "VULC3",
    "Nome": "Vulcabras",
    "Negócios": 704.2,
    "Última (R$)": "20,68",
    "Variação": "2,89%"
  },
  {
    "Ticker": "WIZC3",
    "Nome": "Wiz Soluções",
    "Negócios": 687.8,
    "Última (R$)": "7,4",
    "Variação": "3,79%"
  },
  {
    "Ticker": "PTBL3",
    "Nome": "Portobello",
    "Negócios": 685.7,
    "Última (R$)": "5,33",
    "Variação": "0,76%"
  },
  {
    "Ticker": "CMIG3",
    "Nome": "Cemig",
    "Negócios": 684.4,
    "Última (R$)": "16,93",
    "Variação": "6,81%"
  },
  {
    "Ticker": "ALUP11",
    "Nome": "Alupar",
    "Negócios": 680.7,
    "Última (R$)": "31,2",
    "Variação": "2,77%"
  },
  {
    "Ticker": "ALLD3",
    "Nome": "Allied",
    "Negócios": 679.5,
    "Última (R$)": "7,5",
    "Variação": "10,78%"
  },
  {
    "Ticker": "SHUL4",
    "Nome": "Schulz",
    "Negócios": 671.2,
    "Última (R$)": "5,59",
    "Variação": "3,71%"
  },
  {
    "Ticker": "VVEO3",
    "Nome": "Viveo",
    "Negócios": 667.4,
    "Última (R$)": "1,39",
    "Variação": "0,72%"
  },
  {
    "Ticker": "SYNE3",
    "Nome": "SYN",
    "Negócios": 658.3,
    "Última (R$)": "6,35",
    "Variação": "-0,78%"
  },
  {
    "Ticker": "LAVV3",
    "Nome": "Lavvi Incorporadora",
    "Negócios": 643.1,
    "Última (R$)": "11,64",
    "Variação": "3,01%"
  },
  {
    "Ticker": "MBLY3",
    "Nome": "Mobly",
    "Negócios": 616.3,
    "Última (R$)": "0,94",
    "Variação": "0,00%"
  },
  {
    "Ticker": "MTRE3",
    "Nome": "Mitre Realty",
    "Negócios": 609.1,
    "Última (R$)": "4,15",
    "Variação": "4,01%"
  },
  {
    "Ticker": "BLAU3",
    "Nome": "Blau Farmacêutica",
    "Negócios": 597.6,
    "Última (R$)": "14,46",
    "Variação": "3,14%"
  },
  {
    "Ticker": "DESK3",
    "Nome": "Desktop",
    "Negócios": 568.2,
    "Última (R$)": "9,54",
    "Variação": "3,36%"
  },
  {
    "Ticker": "SEQL3",
    "Nome": "Sequoia Logística",
    "Negócios": 566.3,
    "Última (R$)": "1,94",
    "Variação": "-5,37%"
  },
  {
    "Ticker": "PORT3",
    "Nome": "Wilson Sons",
    "Negócios": 557.6,
    "Última (R$)": "17,37",
    "Variação": "0,12%"
  },
  {
    "Ticker": "MEAL3",
    "Nome": "IMC Alimentação",
    "Negócios": 554.4,
    "Última (R$)": "1,2",
    "Variação": "0,00%"
  },
  {
    "Ticker": "SEER3",
    "Nome": "Ser Educacional",
    "Negócios": 547.4,
    "Última (R$)": "9,92",
    "Variação": "1,33%"
  },
  {
    "Ticker": "ABCB4",
    "Nome": "Banco ABC Brasil",
    "Negócios": 522,
    "Última (R$)": "22,14",
    "Variação": "0,64%"
  },
  {
    "Ticker": "LEVE3",
    "Nome": "Mahle Metal Leve",
    "Negócios": 520.2,
    "Última (R$)": "31,95",
    "Variação": "3,67%"
  },
  {
    "Ticker": "MELK3",
    "Nome": "Melnick",
    "Negócios": 472.2,
    "Última (R$)": "3,46",
    "Variação": "-0,29%"
  },
  {
    "Ticker": "ITUB3",
    "Nome": "Itaú Unibanco",
    "Negócios": 455,
    "Última (R$)": "33,75",
    "Variação": "0,66%"
  },
  {
    "Ticker": "BMGB4",
    "Nome": "Banco BMG",
    "Negócios": 440.6,
    "Última (R$)": "3,73",
    "Variação": "0,54%"
  },
  {
    "Ticker": "FESA4",
    "Nome": "Ferbasa",
    "Negócios": 421.9,
    "Última (R$)": "7,15",
    "Variação": "2,00%"
  },
  {
    "Ticker": "LOGG3",
    "Nome": "LOG CP",
    "Negócios": 411.3,
    "Última (R$)": "21,85",
    "Variação": "3,80%"
  },
  {
    "Ticker": "SHOW3",
    "Nome": "Time For Fun",
    "Negócios": 409.7,
    "Última (R$)": "0,64",
    "Variação": "-5,88%"
  },
  {
    "Ticker": "ITSA3",
    "Nome": "Itaúsa",
    "Negócios": 408,
    "Última (R$)": "11,3",
    "Variação": "1,62%"
  },
  {
    "Ticker": "MYPK3",
    "Nome": "Iochpe-Maxion",
    "Negócios": 402.1,
    "Última (R$)": "12,23",
    "Variação": "1,66%"
  },
  {
    "Ticker": "USIM3",
    "Nome": "Usiminas",
    "Negócios": 395.4,
    "Última (R$)": "5,38",
    "Variação": "2,67%"
  },
  {
    "Ticker": "HBRE3",
    "Nome": "HBR Realty",
    "Negócios": 394,
    "Última (R$)": "3,58",
    "Variação": "3,77%"
  },
  {
    "Ticker": "FHER3",
    "Nome": "Fertilizantes Heringer",
    "Negócios": 384.6,
    "Última (R$)": "5,4",
    "Variação": "32,03%"
  },
  {
    "Ticker": "POMO3",
    "Nome": "Marcopolo",
    "Negócios": 374.6,
    "Última (R$)": "5,87",
    "Variação": "5,96%"
  },
  {
    "Ticker": "KLBN3",
    "Nome": "Klabin",
    "Negócios": 374.1,
    "Última (R$)": "4,02",
    "Variação": "0,50%"
  },
  {
    "Ticker": "MDIA3",
    "Nome": "M. Dias Branco",
    "Negócios": 371.5,
    "Última (R$)": "23,88",
    "Variação": "1,75%"
  },
  {
    "Ticker": "TAEE4",
    "Nome": "Taesa",
    "Negócios": 358.7,
    "Última (R$)": "12,15",
    "Variação": "1,93%"
  },
  {
    "Ticker": "ORVR3",
    "Nome": "Orizon",
    "Negócios": 356.8,
    "Última (R$)": "52,55",
    "Variação": "0,96%"
  },
  {
    "Ticker": "AMAR3",
    "Nome": "Lojas Marisa",
    "Negócios": 351.5,
    "Última (R$)": "1,44",
    "Variação": "-0,69%"
  },
  {
    "Ticker": "ESPA3",
    "Nome": "Espaçolaser",
    "Negócios": 334.3,
    "Última (R$)": "1,09",
    "Variação": "-1,80%"
  },
  {
    "Ticker": "PFRM3",
    "Nome": "Profarma",
    "Negócios": 315.8,
    "Última (R$)": "8,35",
    "Variação": "-1,76%"
  },
  {
    "Ticker": "SAPR3",
    "Nome": "Sanepar",
    "Negócios": 314.3,
    "Última (R$)": "6,6",
    "Variação": "2,80%"
  },
  {
    "Ticker": "TASA4",
    "Nome": "Taurus",
    "Negócios": 300.4,
    "Última (R$)": "7,83",
    "Variação": "3,03%"
  },
  {
    "Ticker": "PINE4",
    "Nome": "Banco Pine",
    "Negócios": 300.2,
    "Última (R$)": "5,28",
    "Variação": "-0,38%"
  },
  {
    "Ticker": "CSED3",
    "Nome": "Cruzeiro do Sul Educacional",
    "Negócios": 285.5,
    "Última (R$)": "5,25",
    "Variação": "0,96%"
  },
  {
    "Ticker": "AERI3",
    "Nome": "Aeris Energy",
    "Negócios": 257.8,
    "Última (R$)": "4,32",
    "Variação": "2,37%"
  },
  {
    "Ticker": "VITT3",
    "Nome": "Vittia",
    "Negócios": 246.7,
    "Última (R$)": "4,7",
    "Variação": "0,00%"
  },
  {
    "Ticker": "BRBI11",
    "Nome": "BR Partners",
    "Negócios": 243.1,
    "Última (R$)": "15,55",
    "Variação": "0,71%"
  },
  {
    "Ticker": "TGMA3",
    "Nome": "Tegma",
    "Negócios": 235.8,
    "Última (R$)": 37,
    "Variação": "3,35%"
  },
  {
    "Ticker": "FRAS3",
    "Nome": "Fras-le",
    "Negócios": 229.7,
    "Última (R$)": "26,34",
    "Variação": "1,11%"
  },
  {
    "Ticker": "RCSL3",
    "Nome": "Recrusul",
    "Negócios": 228.6,
    "Última (R$)": "2,8",
    "Variação": "-1,75%"
  },
  {
    "Ticker": "RAPT3",
    "Nome": "Randon",
    "Negócios": 223.8,
    "Última (R$)": "7,85",
    "Variação": "1,03%"
  },
  {
    "Ticker": "RNEW4",
    "Nome": "Renova Energia",
    "Negócios": 219.5,
    "Última (R$)": "0,87",
    "Variação": "-2,25%"
  },
  {
    "Ticker": "PMAM3",
    "Nome": "Paranapanema",
    "Negócios": 212,
    "Última (R$)": "2,13",
    "Variação": "-0,47%"
  },
  {
    "Ticker": "TECN3",
    "Nome": "Technos",
    "Negócios": 207.9,
    "Última (R$)": "6,35",
    "Variação": "3,76%"
  },
  {
    "Ticker": "AGRO3",
    "Nome": "BrasilAgro",
    "Negócios": 171.3,
    "Última (R$)": "21,52",
    "Variação": "0,05%"
  },
  {
    "Ticker": "VTRU3",
    "Nome": "VITRUBREPCOM",
    "Negócios": 167.6,
    "Última (R$)": "9,63",
    "Variação": "3,10%"
  },
  {
    "Ticker": "BMOB3",
    "Nome": "Bemobi",
    "Negócios": 166.8,
    "Última (R$)": "18,89",
    "Variação": "0,48%"
  },
  {
    "Ticker": "TAEE3",
    "Nome": "Taesa",
    "Negócios": 158.4,
    "Última (R$)": "12,12",
    "Variação": "2,71%"
  },
  {
    "Ticker": "PRNR3",
    "Nome": "Priner",
    "Negócios": 142.9,
    "Última (R$)": "16,65",
    "Variação": "1,77%"
  },
  {
    "Ticker": "ETER3",
    "Nome": "Eternit",
    "Negócios": 139.8,
    "Última (R$)": "4,5",
    "Variação": "3,21%"
  },
  {
    "Ticker": "VLID3",
    "Nome": "Valid",
    "Negócios": 133.8,
    "Última (R$)": "26,97",
    "Variação": "0,19%"
  },
  {
    "Ticker": "ATMP3",
    "Nome": "Atma",
    "Negócios": 131,
    "Última (R$)": "1,27",
    "Variação": "-3,05%"
  },
  {
    "Ticker": "BRAP3",
    "Nome": "Bradespar",
    "Negócios": 130.1,
    "Última (R$)": "14,94",
    "Variação": "-1,19%"
  },
  {
    "Ticker": "AMBP3",
    "Nome": "Ambipar",
    "Negócios": 122.6,
    "Última (R$)": "137,76",
    "Variação": "4,20%"
  },
  {
    "Ticker": "LPSB3",
    "Nome": "Lopes",
    "Negócios": 121.2,
    "Última (R$)": "1,76",
    "Variação": "0,57%"
  },
  {
    "Ticker": "OPCT3",
    "Nome": "OceanPact",
    "Negócios": 117.2,
    "Última (R$)": "5,94",
    "Variação": "1,19%"
  },
  {
    "Ticker": "SANB4",
    "Nome": "Banco Santander",
    "Negócios": 110.2,
    "Última (R$)": "15,65",
    "Variação": "-0,38%"
  },
  {
    "Ticker": "UNIP6",
    "Nome": "Unipar",
    "Negócios": 97.8,
    "Última (R$)": "61,12",
    "Variação": "-0,28%"
  },
  {
    "Ticker": "CSUD3",
    "Nome": "CSU Cardsystem",
    "Negócios": 89.8,
    "Última (R$)": "18,44",
    "Variação": "3,31%"
  },
  {
    "Ticker": "SNSY5",
    "Nome": "Sansuy",
    "Negócios": 86.9,
    "Última (R$)": "4,18",
    "Variação": "-8,33%"
  },
  {
    "Ticker": "CAMB3",
    "Nome": "Cambuci",
    "Negócios": 81.9,
    "Última (R$)": "10,13",
    "Variação": "4,87%"
  },
  {
    "Ticker": "SANB3",
    "Nome": "Banco Santander",
    "Negócios": 81.3,
    "Última (R$)": "14,38",
    "Variação": "-0,28%"
  },
  {
    "Ticker": "BIOM3",
    "Nome": "Biomm",
    "Negócios": 78,
    "Última (R$)": "10,4",
    "Variação": "1,46%"
  },
  {
    "Ticker": "BRKM3",
    "Nome": "Braskem",
    "Negócios": 75.4,
    "Última (R$)": "12,1",
    "Variação": "4,13%"
  },
  {
    "Ticker": "PDTC3",
    "Nome": "Padtec",
    "Negócios": 75.4,
    "Última (R$)": "1,19",
    "Variação": "-6,30%"
  },
  {
    "Ticker": "EUCA4",
    "Nome": "Eucatex",
    "Negócios": 73.7,
    "Última (R$)": "18,65",
    "Variação": "3,73%"
  },
  {
    "Ticker": "DMVF3",
    "Nome": "D1000 Varejo Farma",
    "Negócios": 72.7,
    "Última (R$)": "5,44",
    "Variação": "3,42%"
  },
  {
    "Ticker": "DEXP3",
    "Nome": "Dexxos",
    "Negócios": 66.4,
    "Última (R$)": "9,56",
    "Variação": "4,03%"
  },
  {
    "Ticker": "ALPK3",
    "Nome": "Estapar",
    "Negócios": 65.4,
    "Última (R$)": "3,42",
    "Variação": "0,59%"
  },
  {
    "Ticker": "VSTE3",
    "Nome": "LE LIS BLANC",
    "Negócios": 63,
    "Última (R$)": "6,01",
    "Variação": "0,17%"
  },
  {
    "Ticker": "GGBR3",
    "Nome": "Gerdau",
    "Negócios": 61.2,
    "Última (R$)": "15,22",
    "Variação": "1,81%"
  },
  {
    "Ticker": "ROMI3",
    "Nome": "Indústrias ROMI",
    "Negócios": 58.1,
    "Última (R$)": "9,39",
    "Variação": "1,51%"
  },
  {
    "Ticker": "COCE5",
    "Nome": "Coelce",
    "Negócios": 52.9,
    "Última (R$)": 27,
    "Variação": "4,45%"
  },
  {
    "Ticker": "TCSA3",
    "Nome": "Tecnisa",
    "Negócios": 50.8,
    "Última (R$)": "1,23",
    "Variação": "0,00%"
  },
  {
    "Ticker": "GOAU3",
    "Nome": "Metalúrgica Gerdau",
    "Negócios": 48.8,
    "Última (R$)": "8,95",
    "Variação": "2,52%"
  },
  {
    "Ticker": "RNEW3",
    "Nome": "Renova Energia",
    "Negócios": 47.5,
    "Última (R$)": "0,86",
    "Variação": "0,00%"
  },
  {
    "Ticker": "AALR3",
    "Nome": "Alliança",
    "Negócios": 45.5,
    "Última (R$)": "5,7",
    "Variação": "-1,04%"
  },
  {
    "Ticker": "AGXY3",
    "Nome": "AgroGalaxy",
    "Negócios": 45.4,
    "Última (R$)": "6,99",
    "Variação": "-4,51%"
  },
  {
    "Ticker": "IGTI3",
    "Nome": "Iguatemi",
    "Negócios": 45,
    "Última (R$)": "2,67",
    "Variação": "2,30%"
  },
  {
    "Ticker": "IGTI3",
    "Nome": "Jereissati Participações",
    "Negócios": 45,
    "Última (R$)": "2,67",
    "Variação": "2,30%"
  },
  {
    "Ticker": "VIVR3",
    "Nome": "Viver",
    "Negócios": 44.2,
    "Última (R$)": "0,92",
    "Variação": "2,22%"
  },
  {
    "Ticker": "FICT3",
    "Nome": "Fictor Alimentos",
    "Negócios": 38.6,
    "Última (R$)": "3,85",
    "Variação": "4,62%"
  },
  {
    "Ticker": "UCAS3",
    "Nome": "Unicasa",
    "Negócios": 38.4,
    "Última (R$)": "1,47",
    "Variação": "-0,68%"
  },
  {
    "Ticker": "LUPA3",
    "Nome": "Lupatech",
    "Negócios": 36.9,
    "Última (R$)": "1,23",
    "Variação": "1,65%"
  },
  {
    "Ticker": "ATED3",
    "Nome": "ATOM EDUCAÇÃO E EDITORA S.A.",
    "Negócios": 32.4,
    "Última (R$)": "1,78",
    "Variação": "-3,78%"
  },
  {
    "Ticker": "RSID3",
    "Nome": "Rossi Residencial",
    "Negócios": 31,
    "Última (R$)": "1,94",
    "Variação": "0,00%"
  },
  {
    "Ticker": "PTNT4",
    "Nome": "Pettenati",
    "Negócios": 30.3,
    "Última (R$)": "4,57",
    "Variação": "-1,08%"
  },
  {
    "Ticker": "INEP3",
    "Nome": "Inepar",
    "Negócios": 27.2,
    "Última (R$)": "2,35",
    "Variação": "0,86%"
  },
  {
    "Ticker": "BAZA3",
    "Nome": "Banco da Amazônia",
    "Negócios": 26,
    "Última (R$)": "76,9",
    "Variação": "-2,66%"
  },
  {
    "Ticker": "OIBR4",
    "Nome": "Oi",
    "Negócios": 26,
    "Última (R$)": "8,07",
    "Variação": "-0,86%"
  },
  {
    "Ticker": "TELB4",
    "Nome": "Telebras",
    "Negócios": 22.5,
    "Última (R$)": "9,19",
    "Variação": "0,00%"
  },
  {
    "Ticker": "LAND3",
    "Nome": "Terra Santa",
    "Negócios": 20.1,
    "Última (R$)": "11,69",
    "Variação": "-1,35%"
  },
  {
    "Ticker": "ALUP4",
    "Nome": "Alupar",
    "Negócios": 18.6,
    "Última (R$)": "10,14",
    "Variação": "0,60%"
  },
  {
    "Ticker": "TRAD3",
    "Nome": "Traders Club",
    "Negócios": 18.2,
    "Última (R$)": "8,03",
    "Variação": "0,63%"
  },
  {
    "Ticker": "LVTC3",
    "Nome": "WDC Networks",
    "Negócios": 17.8,
    "Última (R$)": "3,1",
    "Variação": "-1,59%"
  },
  {
    "Ticker": "DOTZ3",
    "Nome": "Dotz",
    "Negócios": 16.6,
    "Última (R$)": "6,51",
    "Variação": "1,24%"
  },
  {
    "Ticker": "TPIS3",
    "Nome": "Triunfo",
    "Negócios": 16.1,
    "Última (R$)": "4,03",
    "Variação": "-0,98%"
  },
  {
    "Ticker": "INEP4",
    "Nome": "Inepar",
    "Negócios": 15.6,
    "Última (R$)": "1,68",
    "Variação": "0,60%"
  },
  {
    "Ticker": "NGRD3",
    "Nome": "Neogrid",
    "Negócios": 15.3,
    "Última (R$)": "27,44",
    "Variação": "2,24%"
  },
  {
    "Ticker": "TASA3",
    "Nome": "Taurus",
    "Negócios": 14,
    "Última (R$)": "7,94",
    "Variação": "-0,50%"
  },
  {
    "Ticker": "RDNI3",
    "Nome": "RNI",
    "Negócios": 13.6,
    "Última (R$)": "2,65",
    "Variação": "2,32%"
  },
  {
    "Ticker": "HOOT4",
    "Nome": "Hotéis Othon",
    "Negócios": 13.5,
    "Última (R$)": "3,55",
    "Variação": "-4,05%"
  },
  {
    "Ticker": "NUTR3",
    "Nome": "Nutriplant",
    "Negócios": 12.7,
    "Última (R$)": "3,4",
    "Variação": "-5,82%"
  },
  {
    "Ticker": "BEES3",
    "Nome": "Banestes",
    "Negócios": 12.1,
    "Última (R$)": "8,66",
    "Variação": "0,00%"
  },
  {
    "Ticker": "BMEB4",
    "Nome": "Banco Mercantil do Brasil",
    "Negócios": 11.1,
    "Última (R$)": "39,98",
    "Variação": "1,16%"
  },
  {
    "Ticker": "BOBR4",
    "Nome": "Bombril",
    "Negócios": 10.6,
    "Última (R$)": "1,59",
    "Variação": "1,92%"
  },
  {
    "Ticker": "UNIP3",
    "Nome": "Unipar",
    "Negócios": 10.3,
    "Última (R$)": "55,41",
    "Variação": "0,67%"
  },
  {
    "Ticker": "LOGN3",
    "Nome": "Log-In",
    "Negócios": 9,
    "Última (R$)": "25,47",
    "Variação": "3,03%"
  },
  {
    "Ticker": "ALUP3",
    "Nome": "Alupar",
    "Negócios": 8.3,
    "Última (R$)": "10,65",
    "Variação": "1,43%"
  },
  {
    "Ticker": "ENGI4",
    "Nome": "Energisa",
    "Negócios": 7.8,
    "Última (R$)": "9,06",
    "Variação": "4,02%"
  },
  {
    "Ticker": "DOHL4",
    "Nome": "Döhler",
    "Negócios": 7.2,
    "Última (R$)": "3,9",
    "Variação": "-2,50%"
  },
  {
    "Ticker": "MGEL4",
    "Nome": "Mangels",
    "Negócios": 7.1,
    "Última (R$)": "5,27",
    "Variação": "-4,01%"
  },
  {
    "Ticker": "OSXB3",
    "Nome": "OSX Brasil",
    "Negócios": 7.1,
    "Última (R$)": "2,74",
    "Variação": "-4,20%"
  },
  {
    "Ticker": "CGRA4",
    "Nome": "Grazziotin",
    "Negócios": 7,
    "Última (R$)": "26,31",
    "Variação": "-2,56%"
  },
  {
    "Ticker": "EPAR3",
    "Nome": "Embpar Participações",
    "Negócios": 6.6,
    "Última (R$)": "4,57",
    "Variação": "1,56%"
  },
  {
    "Ticker": "CLSC4",
    "Nome": "Celesc",
    "Negócios": 6.4,
    "Última (R$)": "95,81",
    "Variação": "0,56%"
  },
  {
    "Ticker": "REAG3",
    "Nome": "REAG3",
    "Negócios": 6.4,
    "Última (R$)": 4,
    "Variação": "5,26%"
  },
  {
    "Ticker": "ENGI3",
    "Nome": "Energisa",
    "Negócios": 6.2,
    "Última (R$)": "12,83",
    "Variação": "1,58%"
  },
  {
    "Ticker": "TELB3",
    "Nome": "Telebras",
    "Negócios": 6.1,
    "Última (R$)": "13,51",
    "Variação": "6,04%"
  },
  {
    "Ticker": "HAGA4",
    "Nome": "Haga",
    "Negócios": 6,
    "Última (R$)": "1,23",
    "Variação": "0,82%"
  },
  {
    "Ticker": "BRSR3",
    "Nome": "Banrisul",
    "Negócios": 5.5,
    "Última (R$)": "12,5",
    "Variação": "-1,03%"
  },
  {
    "Ticker": "DEXP4",
    "Nome": "Dexxos",
    "Negócios": 5.4,
    "Última (R$)": "9,62",
    "Variação": "3,00%"
  },
  {
    "Ticker": "BEES4",
    "Nome": "Banestes",
    "Negócios": 5,
    "Última (R$)": "8,68",
    "Variação": "-0,91%"
  },
  {
    "Ticker": "ALPA3",
    "Nome": "Alpargatas",
    "Negócios": 4.9,
    "Última (R$)": "8,93",
    "Variação": "2,17%"
  },
  {
    "Ticker": "EQPA3",
    "Nome": "Equatorial Energia Pará",
    "Negócios": 4.9,
    "Última (R$)": "5,88",
    "Variação": "1,55%"
  },
  {
    "Ticker": "CEBR6",
    "Nome": "CEB",
    "Negócios": 4.8,
    "Última (R$)": "20,94",
    "Variação": "1,26%"
  },
  {
    "Ticker": "AMAR11",
    "Nome": "Lojas Marisa",
    "Negócios": 4.5,
    "Última (R$)": "0,28",
    "Variação": "3,70%"
  },
  {
    "Ticker": "WLMM4",
    "Nome": "WLM",
    "Negócios": 4.1,
    "Última (R$)": "29,6",
    "Variação": "-4,52%"
  },
  {
    "Ticker": "EALT4",
    "Nome": "Electro Aço Altona",
    "Negócios": 4,
    "Última (R$)": "14,71",
    "Variação": "0,68%"
  },
  {
    "Ticker": "CPLE5",
    "Nome": "Copel",
    "Negócios": 4,
    "Última (R$)": "12,36",
    "Variação": "-8,78%"
  },
  {
    "Ticker": "EMAE4",
    "Nome": "EMAE",
    "Negócios": 3.9,
    "Última (R$)": "30,56",
    "Variação": "0,46%"
  },
  {
    "Ticker": "SCAR3",
    "Nome": "São Carlos",
    "Negócios": 3.9,
    "Última (R$)": "17,36",
    "Variação": "2,00%"
  },
  {
    "Ticker": "CEBR3",
    "Nome": "CEB",
    "Negócios": 3.6,
    "Última (R$)": "18,6",
    "Variação": "-0,53%"
  },
  {
    "Ticker": "BPAC5",
    "Nome": "Banco BTG Pactual",
    "Negócios": 3.6,
    "Última (R$)": 9,
    "Variação": "2,39%"
  },
  {
    "Ticker": "RNEW11",
    "Nome": "Renova Energia",
    "Negócios": 3.4,
    "Última (R$)": "2,57",
    "Variação": "-1,15%"
  },
  {
    "Ticker": "BPAC3",
    "Nome": "Banco BTG Pactual",
    "Negócios": 3.2,
    "Última (R$)": "22,85",
    "Variação": "2,15%"
  },
  {
    "Ticker": "ELMD3",
    "Nome": "Eletromidia",
    "Negócios": 2.8,
    "Última (R$)": "31,5",
    "Variação": "1,61%"
  },
  {
    "Ticker": "BALM4",
    "Nome": "Baumer",
    "Negócios": 2.6,
    "Última (R$)": "15,25",
    "Variação": "-4,69%"
  },
  {
    "Ticker": "AZEV11",
    "Nome": "Azevedo & Travassos",
    "Negócios": 2.5,
    "Última (R$)": "0,16",
    "Variação": "-5,88%"
  },
  {
    "Ticker": "PINE3",
    "Nome": "Banco Pine",
    "Negócios": 2.1,
    "Última (R$)": "5,05",
    "Variação": "1,00%"
  },
  {
    "Ticker": "WHRL4",
    "Nome": "Whirlpool",
    "Negócios": 2,
    "Última (R$)": "4,83",
    "Variação": "-1,43%"
  },
  {
    "Ticker": "MTSA4",
    "Nome": "Metisa",
    "Negócios": 1.9,
    "Última (R$)": "43,57",
    "Variação": "2,57%"
  },
  {
    "Ticker": "MNPR3",
    "Nome": "Minupar",
    "Negócios": 1.8,
    "Última (R$)": "24,61",
    "Variação": "-3,11%"
  },
  {
    "Ticker": "RSUL4",
    "Nome": "Metalúrgica Riosulense",
    "Negócios": 1.7,
    "Última (R$)": "68,13",
    "Variação": "2,45%"
  },
  {
    "Ticker": "BSLI4",
    "Nome": "Banco de Brasília",
    "Negócios": 1.7,
    "Última (R$)": "7,99",
    "Variação": "1,78%"
  },
  {
    "Ticker": "MWET4",
    "Nome": "Wetzel",
    "Negócios": 1.6,
    "Última (R$)": 14,
    "Variação": "-8,44%"
  },
  {
    "Ticker": "CRPG5",
    "Nome": "Tronox Pigmentos",
    "Negócios": 1.5,
    "Última (R$)": "21,38",
    "Variação": "3,74%"
  },
  {
    "Ticker": "MNDL3",
    "Nome": "Mundial",
    "Negócios": 1.5,
    "Última (R$)": "18,4",
    "Variação": "-6,12%"
  },
  {
    "Ticker": "AVLL3",
    "Nome": "Alphaville",
    "Negócios": 1.4,
    "Última (R$)": "2,36",
    "Variação": "0,00%"
  },
  {
    "Ticker": "ISAE3",
    "Nome": "ISA Energia",
    "Negócios": 1.2,
    "Última (R$)": "31,9",
    "Variação": "0,25%"
  },
  {
    "Ticker": "JFEN3",
    "Nome": "João Fortes",
    "Negócios": 1.2,
    "Última (R$)": 2,
    "Variação": "0,50%"
  },
  {
    "Ticker": "MOAR3",
    "Nome": "Monteiro Aranha",
    "Negócios": 1.1,
    "Última (R$)": 179,
    "Variação": "5,89%"
  },
  {
    "Ticker": "CRPG6",
    "Nome": "Tronox Pigmentos",
    "Negócios": 1.1,
    "Última (R$)": "20,6",
    "Variação": "0,54%"
  },
  {
    "Ticker": "EUCA3",
    "Nome": "Eucatex",
    "Negócios": 1.1,
    "Última (R$)": 18,
    "Variação": "0,00%"
  },
  {
    "Ticker": "RPMG3",
    "Nome": "Refinaria de Manguinhos",
    "Negócios": 1.1,
    "Última (R$)": "2,9",
    "Variação": "-3,01%"
  },
  {
    "Ticker": "OFSA3",
    "Nome": "Ourofino Saúde Animal",
    "Negócios": 1,
    "Última (R$)": "24,45",
    "Variação": "-1,41%"
  },
  {
    "Ticker": "EQMA3B",
    "Nome": "Equatorial Maranhão",
    "Negócios": 900,
    "Última (R$)": 25,
    "Variação": "1,21%"
  },
  {
    "Ticker": "CGAS5",
    "Nome": "Comgás",
    "Negócios": 800,
    "Última (R$)": "127,01",
    "Variação": "-0,77%"
  },
  {
    "Ticker": "REDE3",
    "Nome": "Rede Energia",
    "Negócios": 800,
    "Última (R$)": "6,65",
    "Variação": "0,15%"
  },
  {
    "Ticker": "DTCY3",
    "Nome": "Dtcom",
    "Negócios": 800,
    "Última (R$)": "3,61",
    "Variação": "-3,73%"
  },
  {
    "Ticker": "CTKA4",
    "Nome": "Karsten",
    "Negócios": 700,
    "Última (R$)": "35,9",
    "Variação": "-0,14%"
  },
  {
    "Ticker": "CGRA3",
    "Nome": "Grazziotin",
    "Negócios": 700,
    "Última (R$)": "26,65",
    "Variação": "-1,22%"
  },
  {
    "Ticker": "LUXM4",
    "Nome": "Trevisa",
    "Negócios": 700,
    "Última (R$)": "6,14",
    "Variação": "9,84%"
  },
  {
    "Ticker": "CEEB3",
    "Nome": "COELBA",
    "Negócios": 600,
    "Última (R$)": "37,49",
    "Variação": "1,32%"
  },
  {
    "Ticker": "FESA3",
    "Nome": "Ferbasa",
    "Negócios": 600,
    "Última (R$)": "11,99",
    "Variação": "-4,08%"
  },
  {
    "Ticker": "BGIP4",
    "Nome": "Banese",
    "Negócios": 500,
    "Última (R$)": "30,19",
    "Variação": "-1,63%"
  },
  {
    "Ticker": "NEXP3",
    "Nome": "Brasil Brokers",
    "Negócios": 500,
    "Última (R$)": "3,85",
    "Variação": "-1,79%"
  },
  {
    "Ticker": "CTSA4",
    "Nome": "Santanense",
    "Negócios": 500,
    "Última (R$)": "2,51",
    "Variação": "-0,40%"
  },
  {
    "Ticker": "BNBR3",
    "Nome": "Banco do Nordeste",
    "Negócios": 400,
    "Última (R$)": "100,89",
    "Variação": "-5,11%"
  },
  {
    "Ticker": "EALT3",
    "Nome": "Electro Aço Altona",
    "Negócios": 400,
    "Última (R$)": "15,32",
    "Variação": "2,13%"
  },
  {
    "Ticker": "BDLL4",
    "Nome": "Bardella",
    "Negócios": 400,
    "Última (R$)": 8,
    "Variação": "0,00%"
  },
  {
    "Ticker": "AFLT3",
    "Nome": "Afluente T",
    "Negócios": 400,
    "Última (R$)": "7,75",
    "Variação": "0,00%"
  },
  {
    "Ticker": "PATI3",
    "Nome": "Panatlântica",
    "Negócios": 300,
    "Última (R$)": 33,
    "Variação": "1,54%"
  },
  {
    "Ticker": "HBTS5",
    "Nome": "Habitasul",
    "Negócios": 300,
    "Última (R$)": 30,
    "Variação": "-3,07%"
  },
  {
    "Ticker": "WHRL3",
    "Nome": "Whirlpool",
    "Negócios": 300,
    "Última (R$)": "4,5",
    "Variação": "1,35%"
  },
  {
    "Ticker": "WEST3",
    "Nome": "Westwing",
    "Negócios": 300,
    "Última (R$)": "4,42",
    "Variação": "2,08%"
  },
  {
    "Ticker": "PPLA11",
    "Nome": "PPLA",
    "Negócios": 251,
    "Última (R$)": "1,05",
    "Variação": "0,00%"
  },
  {
    "Ticker": "UNIP5",
    "Nome": "Unipar",
    "Negócios": 200,
    "Última (R$)": "58,85",
    "Variação": "1,96%"
  },
  {
    "Ticker": "GEPA4",
    "Nome": "Rio Paranapanema Energia",
    "Negócios": 200,
    "Última (R$)": "35,5",
    "Variação": "0,00%"
  },
  {
    "Ticker": "CEDO4",
    "Nome": "Cedro Têxtil",
    "Negócios": 200,
    "Última (R$)": "19,5",
    "Variação": "-0,26%"
  },
  {
    "Ticker": "BSLI3",
    "Nome": "Banco de Brasília",
    "Negócios": 200,
    "Última (R$)": "7,8",
    "Variação": "0,00%"
  },
  {
    "Ticker": "MTSA3",
    "Nome": "Metisa",
    "Negócios": 100,
    "Última (R$)": 75,
    "Variação": "-0,66%"
  },
  {
    "Ticker": "LIPR3",
    "Nome": "Eletropar",
    "Negócios": 100,
    "Última (R$)": "36,01",
    "Variação": "0,00%"
  },
  {
    "Ticker": "USIM6",
    "Nome": "Usiminas",
    "Negócios": 100,
    "Última (R$)": 8,
    "Variação": "-0,37%"
  },
  {
    "Ticker": "PINE11",
    "Nome": "Banco Pine",
    "Negócios": 100,
    "Última (R$)": "7,5",
    "Variação": "19,43%"
  },
  {
    "Ticker": "GSHP3",
    "Nome": "General Shopping & Outlets",
    "Negócios": 100,
    "Última (R$)": "5,27",
    "Variação": "1,15%"
  },
  {
    "Ticker": "RPAD3",
    "Nome": "Alfa Holdings",
    "Negócios": 100,
    "Última (R$)": "4,3",
    "Variação": "2,38%"
  },
  {
    "Ticker": "HAGA3",
    "Nome": "Haga",
    "Negócios": 100,
    "Última (R$)": "1,98",
    "Variação": "0,00%"
  },
  {
    "Ticker": "BMKS3",
    "Nome": "Monark",
    "Negócios": 4,
    "Última (R$)": 390,
    "Variação": "4,00%"
  },
  {
    "Ticker": "BIED3",
    "Nome": "BIED3",
    "Negócios": 7.6,
    "Última (R$)": "3,84",
    "Variação": "0,00%"
  },
  {
    "Ticker": "CEBR5",
    "Nome": "CEB",
    "Negócios": 3.8,
    "Última (R$)": "19,09",
    "Variação": "3,75%"
  },
  {
    "Ticker": "ENMT3",
    "Nome": "Energisa MT",
    "Negócios": 700,
    "Última (R$)": "73,49",
    "Variação": "0,00%"
  },
  {
    "Ticker": "BMEB3",
    "Nome": "Banco Mercantil do Brasil",
    "Negócios": 500,
    "Última (R$)": "32,2",
    "Variação": "0,00%"
  },
  {
    "Ticker": "FIEI3",
    "Nome": "Fica",
    "Negócios": 500,
    "Última (R$)": "10,7",
    "Variação": "0,00%"
  },
  {
    "Ticker": "BMIN4",
    "Nome": "Banco Mercantil de Investimentos",
    "Negócios": 400,
    "Última (R$)": "16,99",
    "Variação": "2,97%"
  },
  {
    "Ticker": "NORD3",
    "Nome": "Nordon",
    "Negócios": 400,
    "Última (R$)": "5,35",
    "Variação": "-1,29%"
  },
  {
    "Ticker": "TKNO4",
    "Nome": "Tekno",
    "Negócios": 300,
    "Última (R$)": "80,05",
    "Variação": "-1,17%"
  },
  {
    "Ticker": "BRKM6",
    "Nome": "Braskem",
    "Negócios": 300,
    "Última (R$)": "6,83",
    "Variação": "0,15%"
  },
  {
    "Ticker": "PLAS3",
    "Nome": "Plascar",
    "Negócios": 200,
    "Última (R$)": 6,
    "Variação": "3,45%"
  },
  {
    "Ticker": "GEPA3",
    "Nome": "Rio Paranapanema Energia",
    "Negócios": 100,
    "Última (R$)": "32,83",
    "Variação": "-6,20%"
  },
  {
    "Ticker": "WLMM3",
    "Nome": "WLM",
    "Negócios": 100,
    "Última (R$)": "27,18",
    "Variação": "0,67%"
  },
  {
    "Ticker": "GPAR3",
    "Nome": "CELGPAR",
    "Negócios": 100,
    "Última (R$)": "22,9",
    "Variação": "-8,40%"
  },
  {
    "Ticker": "BRSR5",
    "Nome": "Banrisul",
    "Negócios": 100,
    "Última (R$)": "15,31",
    "Variação": "-7,21%"
  },
  {
    "Ticker": "HETA4",
    "Nome": "Hercules",
    "Negócios": 100,
    "Última (R$)": "5,51",
    "Variação": "0,00%"
  },
  {
    "Ticker": "MAPT3",
    "Nome": "Cemepe",
    "Negócios": 100,
    "Última (R$)": "3,05",
    "Variação": "0,00%"
  },
  {
    "Ticker": "COCE3",
    "Nome": "Coelce",
    "Negócios": 200,
    "Última (R$)": "25,6",
    "Variação": "2,36%"
  },
  {
    "Ticker": "BGIP3",
    "Nome": "Banese",
    "Negócios": 100,
    "Última (R$)": 32,
    "Variação": "0,00%"
  },
  {
    "Ticker": "MAPT4",
    "Nome": "Cemepe",
    "Negócios": 100,
    "Última (R$)": 3,
    "Variação": "0,00%"
  },
  {
    "Ticker": "CLSC3",
    "Nome": "Celesc",
    "Negócios": 1.4,
    "Última (R$)": 83,
    "Variação": "1,27%"
  },
  {
    "Ticker": "SNSY3",
    "Nome": "Sansuy",
    "Negócios": 800,
    "Última (R$)": "11,75",
    "Variação": "0,86%"
  },
  {
    "Ticker": "ESTR4",
    "Nome": "Estrela",
    "Negócios": 500,
    "Última (R$)": "4,45",
    "Variação": "3,49%"
  },
  {
    "Ticker": "CGAS3",
    "Nome": "Comgás",
    "Negócios": 100,
    "Última (R$)": "120,06",
    "Variação": "0,05%"
  },
  {
    "Ticker": "CTSA3",
    "Nome": "Santanense",
    "Negócios": 100,
    "Última (R$)": "4,3",
    "Variação": "1,18%"
  },
  {
    "Ticker": "BDLL3",
    "Nome": "Bardella",
    "Negócios": 500,
    "Última (R$)": "8,6",
    "Variação": "-6,52%"
  },
  {
    "Ticker": "FRIO3",
    "Nome": "Metalfrio",
    "Negócios": 300,
    "Última (R$)": "279,98",
    "Variação": "0,00%"
  },
  {
    "Ticker": "EKTR4",
    "Nome": "Elektro",
    "Negócios": 200,
    "Última (R$)": "50,49",
    "Variação": "0,00%"
  },
  {
    "Ticker": "AHEB3",
    "Nome": "São Paulo Turismo",
    "Negócios": 100,
    "Última (R$)": 45,
    "Variação": "0,00%"
  },
  {
    "Ticker": "CBEE3",
    "Nome": "Ampla Energia",
    "Negócios": 100,
    "Última (R$)": 10,
    "Variação": "19,05%"
  },
  {
    "Ticker": "PTNT3",
    "Nome": "Pettenati",
    "Negócios": 100,
    "Última (R$)": "9,26",
    "Variação": "3,46%"
  },
  {
    "Ticker": "PATI4",
    "Nome": "Panatlântica",
    "Negócios": 100,
    "Última (R$)": 34,
    "Variação": "0,00%"
  },
  {
    "Ticker": "CEED3",
    "Nome": "CEEE D",
    "Negócios": 500,
    "Última (R$)": "8,9",
    "Variação": "-1,33%"
  },
  {
    "Ticker": "BAUH4",
    "Nome": "Excelsior",
    "Negócios": 200,
    "Última (R$)": "80,89",
    "Variação": "-1,22%"
  },
  {
    "Ticker": "PEAB3",
    "Nome": "Participações Aliança da Bahia",
    "Negócios": 200,
    "Última (R$)": 39,
    "Variação": "-2,50%"
  },
  {
    "Ticker": "MRSA3B",
    "Nome": "MRS Logística",
    "Negócios": 200,
    "Última (R$)": "28,95",
    "Variação": "0,00%"
  },
  {
    "Ticker": "AHEB6",
    "Nome": "São Paulo Turismo",
    "Negócios": 100,
    "Última (R$)": 55,
    "Variação": "0,00%"
  },
  {
    "Ticker": "RPAD5",
    "Nome": "Alfa Holdings",
    "Negócios": 400,
    "Última (R$)": "7,5",
    "Variação": "7,91%"
  },
  {
    "Ticker": "PEAB4",
    "Nome": "Participações Aliança da Bahia",
    "Negócios": 100,
    "Última (R$)": "48,02",
    "Variação": "0,00%"
  },
  {
    "Ticker": "SOND5",
    "Nome": "Sondotécnica",
    "Negócios": 100,
    "Última (R$)": "36,73",
    "Variação": "-14,58%"
  },
  {
    "Ticker": "MRSA6B",
    "Nome": "MRS Logística",
    "Negócios": 100,
    "Última (R$)": "25,95",
    "Variação": "-3,89%"
  },
  {
    "Ticker": "IGTI4",
    "Nome": "Jereissati Participações",
    "Negócios": 100,
    "Última (R$)": "9,5",
    "Variação": "0,00%"
  },
  {
    "Ticker": "IGTI4",
    "Nome": "Iguatemi",
    "Negócios": 100,
    "Última (R$)": "9,5",
    "Variação": "0,00%"
  },
  {
    "Ticker": "BMIN3",
    "Nome": "Banco Mercantil de Investimentos",
    "Negócios": 200,
    "Última (R$)": "19,5",
    "Variação": "8,33%"
  }
]

export default tickers;