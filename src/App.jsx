import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout";
import BarCharts from "./pages/bar-charts";
import PieCharts from "./pages/pie-charts";
import LineCharts from "./pages/line-charts";
import SurfacePlot from "./pages/surface-charts";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<BarCharts />} />
        <Route path="/surface-charts" element={<SurfacePlot />} />
        <Route path="/pie-charts" element={<PieCharts />} />
        <Route path="/line-charts" element={<LineCharts />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
