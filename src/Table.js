import React, { useEffect, useState } from "react";
import axios from "axios";
import {
    ResponsiveContainer,
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ReferenceArea
} from "recharts";
import {
    Drawer,
    AppBar,
    Toolbar,
    Typography,
    Box,
    CssBaseline,
    useTheme,
    useMediaQuery,
    IconButton,
    Menu,
    MenuItem,
    Card,
    CardContent,
    Grid,
    Paper,
    styled,
    InputAdornment,
    TextField, Button
} from "@mui/material";
import {
    Menu as MenuIcon,
    Dashboard as DashboardIcon,
    BarChart as BarChartIcon,
    Settings as SettingsIcon,
    Description as ReportsIcon,
    SolarPower as SolarIcon,
    CalendarToday,
    Refresh
} from "@mui/icons-material";
import './table.css'
import { toast } from "react-toastify";
const drawerWidth = 280;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
    ({ theme, open }) => ({
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create("margin", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: `-${drawerWidth}px`,
        ...(open && {
            transition: theme.transitions.create("margin", {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        }),
    })
);

const AppBarStyled = styled(AppBar, {
    shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
    transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(["margin", "width"], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));
const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
}));

const Dashboard = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    const [mobileOpen, setMobileOpen] = useState(false);
    const [activePage, setActivePage] = useState("dashboard");

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const menuItems = [
        { text: "Daily Stats", icon: <DashboardIcon />, page: "dashboard" },
        { text: "Monthly Stats", icon: <BarChartIcon />, page: "monthlystats" },

    ];

    return (
        <Box sx={{ display: "flex" }}>
            <CssBaseline />
            <AppBarStyled position="fixed" open={mobileOpen}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerToggle}
                        edge="start"
                        sx={{ mr: 2, ...(mobileOpen && { display: "none" }) }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
                        Solar Power Dashboard
                    </Typography>
                </Toolbar>
            </AppBarStyled>

            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    "& .MuiDrawer-paper": {
                        width: drawerWidth,
                        boxSizing: "border-box",
                        background: "linear-gradient(180deg, #2c3e50 0%, #3498db 100%)",
                        color: "white",
                    },
                }}
                variant={isMobile ? "temporary" : "persistent"}
                anchor="left"
                open={mobileOpen}
                onClose={handleDrawerToggle}
            >
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerToggle}
                    edge="start"
                >
                    <MenuIcon />
                </IconButton>
                <Box sx={{ p: 2, textAlign: "center" }}>
                    <SolarIcon sx={{ fontSize: 48, mb: 1 }} />
                    <Typography variant="h6" gutterBottom>
                        Solar Analytics
                    </Typography>
                    <Typography variant="body2" sx={{ opacity: 0.8 }}>
                        Monitor your solar power system
                    </Typography>
                </Box>

                {/* <button 
                        onClick={handleDrawerToggle}>close</button> */}
                <Box sx={{ p: 2 }}>
                    {menuItems.map((item) => (
                        <Box
                            key={item.text}
                            onClick={() => {
                                setActivePage(item.page);
                                if (isMobile) setMobileOpen(false);
                            }}
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                p: 2,
                                mb: 1,
                                borderRadius: 2,
                                cursor: "pointer",
                                transition: "all 0.3s ease",
                                backgroundColor: activePage === item.page ? "rgba(255, 255, 255, 0.2)" : "transparent",
                                "&:hover": {
                                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                                },
                            }}
                        >
                            <Box sx={{ mr: 2, opacity: 0.9 }}>{item.icon}</Box>
                            <Typography variant="body1">{item.text}</Typography>
                        </Box>
                    ))}
                </Box>
            </Drawer>

            <Main open={mobileOpen}>
                <DrawerHeader />
                <Box sx={{ p: { xs: 1, md: 3 } }}>
                    {activePage === "dashboard" && <TodayStatsChart />}
                    {activePage === "monthlystats" && <StatsPage />}

                </Box>
            </Main>
        </Box>
    );
};

const TodayStatsChart = () => {
    const [data, setData] = useState([]);
    const [total, setTotal] = useState(0);
    const [loadTotal, setLoadTotal] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [modeZones, setModeZones] = useState([]);
    const [lastUpdated, setLastUpdated] = useState(new Date());
    const [loadSheddingHours, setLoadSheddingHours] = useState(0);
    const [cutOffHours, setcutOffHours] = useState(0);

    const getTodayLocal = () => {
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, "0");
        const day = String(today.getDate()).padStart(2, "0");
        return `${year}-${month}-${day}`;
    };

    const [selectedDate, setSelectedDate] = useState(getTodayLocal());

    const getModeColor = (mode) => {
        return mode === "Line Mode"
            ? "rgba(76, 175, 80, 0.2)"
            : mode === "Battery Mode"
                ? "rgba(244, 67, 54, 0.2)"
                : mode === "Standby Mode"
                    ? "rgba(255, 152, 0, 0.2)"
                    : "rgba(158, 158, 158, 0.2)";
    };

    const processModeZones = (graphData) => {
        const zones = [];
        let currentMode = null;
        let startIndex = 0;

        graphData.forEach((point, index) => {
            if (point.mode !== currentMode) {
                if (currentMode !== null) {
                    zones.push({
                        start: startIndex,
                        end: index - 1,
                        mode: currentMode
                    });
                }
                currentMode = point.mode;
                startIndex = index;
            }
        });

        if (currentMode !== null) {
            zones.push({
                start: startIndex,
                end: graphData.length - 1,
                mode: currentMode
            });
        }

        return zones;
    };

    const fetchData = async (date) => {
        try {
            const res = await axios.get(`https://watchpower-api-main-1.onrender.com/stats?date=${date}`);
            if (res.data.success) {

                const graphData = res.data.graph;

                let pvSum = 0;
                let loadSum = 0;
                const intervalHours = 5 / 60;


                let batteryHours = 0;
                let cutOffHours = 0;


                graphData.forEach((point) => {
                    pvSum += point.pv_power * intervalHours;
                    loadSum += point.load_power * intervalHours;

                    if (point.mode === "Battery Mode") {
                        batteryHours += intervalHours;
                    }
                    if (point.mode === "Standby Mode") {
                        cutOffHours += intervalHours;
                    }
                });
                setData(graphData);
                setTotal((pvSum / 1000).toFixed(2));
                setLoadTotal((loadSum / 1000).toFixed(2));
                setModeZones(processModeZones(graphData));
                setLastUpdated(new Date());



                setLoadSheddingHours(batteryHours.toFixed(2)); // store hours
                setcutOffHours(cutOffHours.toFixed(2)); // store hours

            } else {

                toast.error("Error fetching API")
                setData([]);
                setTotal(0);
                setLoadTotal(0);
                setModeZones([]);
            }
        } catch (err) {
            toast.error("Error fetching API")
            console.error("Error fetching API:", err);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        const fetchAndSetLoading = async () => {
            setIsLoading(true);
            await fetchData(selectedDate);
        };
        fetchAndSetLoading();

        const interval = setInterval(() => {
            fetchData();
        }, 300000);

        return () => clearInterval(interval);
    }, [selectedDate]);

    const CustomTooltip = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
            const currentData = payload[0].payload;
            const modeColor = currentData.mode === "Line Mode"
                ? "#4caf50"
                : currentData.mode === "Battery Mode"
                    ? "#f44336"
                    : "#ff9800";

            return (
                <Paper elevation={8} sx={{ p: 2, backgroundColor: "background.paper" }}>
                    <Typography variant="subtitle2" gutterBottom>
                        Time: {label}
                    </Typography>
                    <Typography variant="body2" color="#82ca9d" gutterBottom>
                        PV: {currentData.pv_power} W
                    </Typography>
                    <Typography variant="body2" color="#8884d8" gutterBottom>
                        Load: {currentData.load_power} W
                    </Typography>
                    <Typography variant="body2" sx={{ color: modeColor, fontWeight: "bold" }}>
                        Electricity: {currentData.mode === "Line Mode" ? "Connected" :
                            currentData.mode === "Battery Mode" ? "Disconnected" :
                                currentData.mode === "Standby Mode" ? "System off" : "Out of range"}
                    </Typography>
                </Paper>
            );
        }
        return null;
    };

    const handleRefresh = () => {
        setIsLoading(true);
        fetchData(selectedDate);
    };
const formatHours = (decimalHours) => {
  const hrs = Math.floor(decimalHours);
  const mins = Math.round((decimalHours - hrs) * 60);
  return `${hrs} hr ${mins} min`;
};

    return (
        <Box>
            <Grid container spacing={3} sx={{ mb: 3 }}>
                <Grid item xs={12} md={6}>
                    <Card elevation={3}>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>
                                Solar Production
                            </Typography>
                            <Typography variant="h4" color="primary">
                                {isLoading ? "..." : `${total} kWh`}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Total PV Production
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Card elevation={3}>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>
                                Energy Usage
                            </Typography>
                            <Typography variant="h4" color="secondary">
                                {isLoading ? "..." : `${loadTotal} kWh`}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Total Load Consumption
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Card elevation={3}>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>
                                Energy Feeded to Grid
                            </Typography>
                            <Typography variant="h4" color="secondary">
                                {isLoading ? "..." : `${(total - loadTotal).toFixed(2)} kWh`}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Energy Feeded to Grid
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Card elevation={3}>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>
                                Load Shedding Duration
                            </Typography>
                            <Typography variant="h4" color="error">
                                {isLoading ? "..." : formatHours(loadSheddingHours)}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Total time system ran on Battery/Solar
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Card elevation={3}>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>
                                System off Duration
                            </Typography>
                            <Typography variant="h4" color="error">
                                {isLoading ? "..." : formatHours(cutOffHours)}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Total time system remained off
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>

            </Grid>

            <Card className="muasn" elevation={3} sx={{ mb: 3 }}>
                <CardContent className="myasn">
                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, alignItems: "center", mb: 2, }}>
                        <TextField
                            label="Select Date"
                            type="date"
                            value={selectedDate}
                            onChange={(e) => setSelectedDate(e.target.value)}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <CalendarToday />
                                    </InputAdornment>
                                ),
                            }}
                            sx={{ minWidth: 200 }}
                        />
                        <IconButton onClick={handleRefresh} disabled={isLoading}>
                            <Refresh />
                        </IconButton>
                        <Typography variant="body2" color="text.secondary" sx={{ ml: "auto" }}>
                            Last updated: {lastUpdated.toLocaleTimeString()}
                        </Typography>
                    </Box>

                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 3, mb: 2 }}>
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                            <Box
                                sx={{
                                    width: 16,
                                    height: 16,
                                    backgroundColor: "rgba(76, 175, 80, 0.2)",
                                    border: "2px solid #4caf50",
                                    borderRadius: 1,
                                    mr: 1,
                                }}
                            />
                            <Typography variant="body2">Electricity Connected</Typography>
                        </Box>
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                            <Box
                                sx={{
                                    width: 16,
                                    height: 16,
                                    backgroundColor: "rgba(244, 67, 54, 0.2)",
                                    border: "2px solid #f44336",
                                    borderRadius: 1,
                                    mr: 1,
                                }}
                            />
                            <Typography variant="body2">Electricity Disconnected</Typography>
                        </Box>
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                            <Box
                                sx={{
                                    width: 16,
                                    height: 16,
                                    backgroundColor: "rgba(255, 152, 0, 0.2)",
                                    border: "2px solid #ff9800",
                                    borderRadius: 1,
                                    mr: 1,
                                }}
                            />
                            <Typography variant="body2">System Off</Typography>
                        </Box>
                    </Box>

                    {isLoading ? (
                        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: 400 }}>
                            <Refresh sx={{ animation: "spin 1s linear infinite", fontSize: 40, color: "primary.main" }} />
                        </Box>
                    ) : (
                        <ResponsiveContainer width="100%" height={400}>
                            <AreaChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                                <defs>
                                    <linearGradient id="pvColor" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                                        <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                                    </linearGradient>
                                    <linearGradient id="loadColor" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                                        <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                                    </linearGradient>
                                </defs>

                                {modeZones.map((zone, index) => (
                                    <ReferenceArea
                                        key={index}
                                        x1={data[zone.start]?.time}
                                        x2={data[zone.end]?.time}
                                        fill={getModeColor(zone.mode)}
                                        strokeOpacity={0.3}
                                    />
                                ))}

                                <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                                <XAxis dataKey="time" />
                                <YAxis tickFormatter={(value) => `${value / 1000}k`} />
                                <Tooltip content={<CustomTooltip />} />
                                <Legend />

                                <Area
                                    type="monotone"
                                    dataKey="pv_power"
                                    stroke="#82ca9d"
                                    fillOpacity={1}
                                    fill="url(#pvColor)"
                                    name="PV Power (W)"
                                />
                                <Area
                                    type="monotone"
                                    dataKey="load_power"
                                    stroke="#8884d8"
                                    fillOpacity={1}
                                    fill="url(#loadColor)"
                                    name="Load Power (W)"
                                />
                            </AreaChart>
                        </ResponsiveContainer>
                    )}
                </CardContent>
            </Card>
        </Box >
    );
};




const StatsPage = () => {
    const today = new Date().toISOString().split("T")[0];
    const firstDay = new Date();
    firstDay.setDate(1);
    const defaultFrom = firstDay.toISOString().split("T")[0];

    const [fromDate, setFromDate] = useState(defaultFrom);
    const [toDate, setToDate] = useState(today);

    const [data, setData] = useState([]);
    const [totals, setTotals] = useState({
        production: '...',
        load: '...',
        saved: '...',
        feeded: '...',
    });
    const [isLoading, setIsLoading] = useState(false);
    const [missingDates, setMissingDates] = useState([]);
    const fetchData = async () => {
        try {
            setTotals({
                production: '...',
                load: '...',
                saved: '...',
                feeded: '...',
            });
            setIsLoading(true);
            const res = await axios.get(
                `https://watchpower-api-main-1.onrender.com/stats-range?from_date=${fromDate}&to_date=${toDate}`
            );

            console.log('res.data: ', res.data);
            if (res.data.success) {
                const dailyData = res.data.daily.map((d) => {
                    const isNull = (d.production_kwh === null || d.load_kwh === null);

                    if (isNull) {
                        console.warn(`⚠️ No data for ${d.date}`);
                    }

                    return {
                        date: d.date,
                        production: isNull ? 0 : d.production_kwh,
                        load: isNull ? 0 : d.load_kwh,
                        saved: isNull ? 0 : Math.min(d.production_kwh, d.load_kwh),
                        feeded: isNull ? 0 : Math.max(0, d.production_kwh - d.load_kwh),
                        isNull
                    };
                });

                setData(dailyData);

                const totalProd = res.data.total_production_kwh;
                const totalLoad = res.data.total_load_kwh;
                const saved = Math.min(totalProd, totalLoad);
                const feeded = Math.max(0, totalProd - totalLoad);

                setTotals({
                    production: totalProd.toFixed(2),
                    load: totalLoad.toFixed(2),
                    saved: saved.toFixed(2),
                    feeded: feeded.toFixed(2),
                });

                // ✅ Show which days had null data

                const nullDays = dailyData.filter(d => d.isNull).map(d => d.date);
                setMissingDates(nullDays);

                return
            } else {

                setTotals({
                    production: 0,
                    load: 0,
                    saved: 0,
                    feeded: 0,
                });
                toast.error("Error fetching API")
            }
        } catch (err) {

            toast.error("Error fetching API")
            console.error("Error fetching API:", err);
        } finally {
            setIsLoading(false);
        }
    };


    // useEffect(() => {
    //     fetchData();
    // },[]);
   

    return (
        <Box>
            <Grid container spacing={3} sx={{ mb: 3 }}>
                <Grid item xs={12} md={3}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6">Total Production</Typography>
                            <Typography variant="h4" color="primary">
                                {totals.production} kWh
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6">Total Load</Typography>
                            <Typography variant="h4" color="secondary">
                                {totals.load} kWh
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                {/* <Grid item xs={12} md={3}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6">Saved Units</Typography>
                            <Typography variant="h4" color="success.main">
                                {totals.saved} kWh
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid> */}
                <Grid item xs={12} md={3}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6">Feeded to Grid</Typography>
                            <Typography variant="h4" color="warning.main">
                                {totals.feeded} kWh
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>

            <Card>
                <CardContent>
                    <Box sx={{ display: "flex", gap: 2, mb: 2, flexWrap: 'wrap' }}>
                        <TextField
                            label="From"
                            type="date"
                            value={fromDate}
                            onChange={(e) => setFromDate(e.target.value)}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <CalendarToday />
                                    </InputAdornment>
                                ),
                            }}
                            sx={{ minWidth: 200 }}
                        />
                        <TextField
                            label="To"
                            type="date"
                            value={toDate}
                            onChange={(e) => setToDate(e.target.value)}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <CalendarToday />
                                    </InputAdornment>
                                ),
                            }}
                            sx={{ minWidth: 200 }}
                        />
                        <IconButton onClick={fetchData} disabled={isLoading} color="primary">
                            <Refresh />
                        </IconButton>
                        <Button variant="contained" onClick={fetchData} disabled={isLoading}>
                            Confirm
                        </Button>

                        {/* ✅ Confirm button */}
                    </Box>
                    {missingDates.length > 0 && (
                        <Typography variant="body2" color="error" sx={{ mb: 2 }}>
                            ⚠️ Missing data for: {missingDates.join(", ")}
                        </Typography>
                    )}
                    {isLoading ? (
                        <Typography>Loading...</Typography>
                    ) : (
                        <ResponsiveContainer width="100%" height={400}>
                            <AreaChart data={data}
                                margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                                <defs>
                                    <linearGradient id="prodColor" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                                        <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                                    </linearGradient>
                                    <linearGradient id="loadColor" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                                        <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="date" />
                                {/* <YAxis /> */}
                                <YAxis width={40} tickFormatter={(value) => `${value}k`} />

                                <Tooltip />
                                <Legend />
                                <Area
                                    type="monotone"
                                    dataKey="production"
                                    stroke="#82ca9d"
                                    fillOpacity={1}
                                    fill="url(#prodColor)"
                                    name="Production (kWh)"
                                />
                                <Area
                                    type="monotone"
                                    dataKey="load"
                                    stroke="#8884d8"
                                    fillOpacity={1}
                                    fill="url(#loadColor)"
                                    name="Load (kWh)"
                                />
                            </AreaChart>
                        </ResponsiveContainer>
                    )}
                </CardContent>
            </Card>
        </Box>
    );
};



export default Dashboard;