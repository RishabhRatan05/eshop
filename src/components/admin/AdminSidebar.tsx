import {
  faSuperpowers,
  IconDefinition,
} from "@fortawesome/free-brands-svg-icons"
import {
  faBagShopping,
  faBars,
  faChartBar,
  faChartLine,
  faChartPie,
  faMoneyCheck,
  faUserGear,
  faXmark,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import { Link, Location, useLocation } from "react-router-dom"

const AdminSidebar = () => {
  const location = useLocation()
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      {/* Desktop */}
      <aside className="md:flex hidden flex-col px-2 ">
        <h1>Logo</h1>
        <Main location={location} />
        <Charts location={location} />
      </aside>

      {/* Mobile */}
      <div className="md:hidden flex">
        {isOpen ? (
          <aside className="flex flex-col px-2 items-start">
            <button onClick={() => setIsOpen(false)}>
              <FontAwesomeIcon icon={faXmark} />
            </button>
            <h1>Logo</h1>
            <Main location={location} />
            <Charts location={location} />
          </aside>
        ) : (
          <button onClick={() => setIsOpen(true)}>
            <FontAwesomeIcon icon={faBars} />
          </button>
        )}
      </div>
    </>
  )
}

const Main = ({ location }: { location: Location }) => (
  <div className="my-5">
    <h1 className="text-gray-500">DASHBOARD</h1>
    <ListItem
      name="Dashboard"
      url="/admin/dashboard"
      Icon={faSuperpowers}
      location={location}
    />
    <ListItem
      name="Product"
      url="/admin/product"
      Icon={faBagShopping}
      location={location}
    />
    <ListItem
      name="Customer"
      url="/admin/customer"
      Icon={faUserGear}
      location={location}
    />
    <ListItem
      name="Transaction"
      url="/admin/transaction"
      Icon={faMoneyCheck}
      location={location}
    />
  </div>
)

const Charts = ({ location }: { location: Location }) => (
  <>
    <h1 className="text-gray-500">CHARTS</h1>
    <ListItem
      name="Bar"
      url="/admin/chart/bar"
      Icon={faChartBar}
      location={location}
    />
    <ListItem
      name="Pie"
      url="/admin/chart/pie"
      Icon={faChartPie}
      location={location}
    />
    <ListItem
      name="Line"
      url="/admin/chart/line"
      Icon={faChartLine}
      location={location}
    />
  </>
)

const ListItem = ({
  name,
  url,
  Icon,
  location,
}: {
  name: string
  url: string
  Icon: IconDefinition
  location: Location
}) => (
  <Link
    to={url}
    className={` p-2 flex justify-start gap-2 rounded-md items-center ${
      location.pathname.includes(url) ? "bg-blue-200 text-blue-600" : ""
    }`}
  >
    <FontAwesomeIcon icon={Icon} />
    <p>{name}</p>
  </Link>
)

export default AdminSidebar
