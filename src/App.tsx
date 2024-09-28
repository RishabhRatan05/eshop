import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Suspense, lazy } from "react"
import Loader from "./pages/Loader"

//Admin pages
const Dashboard = lazy(() => import("./pages/admin/Dashboard"))
const Product = lazy(() => import("./pages/admin/Product"))
const Customer = lazy(() => import("./pages/admin/Customer"))
const Transaction = lazy(() => import("./pages/admin/Transaction"))
//charts
const BarChart = lazy(() => import("./pages/admin/charts/BarChart"))
const PieChart = lazy(() => import("./pages/admin/charts/PieChart"))
const LineChart = lazy(() => import("./pages/admin/charts/LineChart"))

//client pages
const Home = lazy(() => import("./pages/Home"))
const Search = lazy(() => import("./pages/Search"))
const Cart = lazy(() => import("./pages/Cart"))

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/product" element={<Product />} />
          <Route path="/admin/customer" element={<Customer />} />
          <Route path="/admin/transaction" element={<Transaction />} />

          {/* Charts */}
          <Route path="admin/chart/bar" element={<BarChart />} />
          <Route path="admin/chart/pie" element={<PieChart />} />
          <Route path="admin/chart/line" element={<LineChart />} />

          {/* Apps */}
        </Routes>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/search" element={<Search />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
